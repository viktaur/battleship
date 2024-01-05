use std::os::macos::raw::stat;
use std::sync::Arc;
use axum::extract::{State, WebSocketUpgrade};
use axum::extract::ws::{Message, WebSocket};
use axum::response::IntoResponse;
use futures::{SinkExt, StreamExt};
use tracing::log::log;
use crate::AppState;
use crate::components::player::{Player, PlayerAction};
use crate::errors::ActionError;

pub async fn websocket_handler(
    ws: WebSocketUpgrade,
    State(state): State<Arc<AppState>>,
) -> impl IntoResponse {
    ws.on_upgrade(|socket| websocket(socket, state))
}

// This function deals with a single websocket connection, i.e., a single
// connected player, for which we will spawn two independent tasks (for
// receiving / sending chat messages).
async fn websocket(stream: WebSocket, state: Arc<AppState>) {
    // By splitting, we can send and receive at the same time.
    let (sender, mut receiver) = stream.split();

    // Create new player
    let player = Player::new();

    // Add player to state
    state.add_player(player);

    // TODO: solve the communication and broadcasting mess
    // // We subscribe *before* sending the "joined" message, so that we will also
    // // display it to our client.
    // let mut rx = state.tx.subscribe();
    //
    // // Spawn the first task that will receive broadcast messages and send text
    // // messages over the websocket to our client.
    // let mut send_task = tokio::spawn(async move {
    //     while let Ok(msg) = rx.recv().await {
    //         // In any websocket error, break loop.
    //         if sender.send(Message::Text(msg)).await.is_err() {
    //             break;
    //         }
    //     }
    // });

    // Loop until a text message is found.
    while let Some(Ok(message)) = receiver.next().await {
        tokio::task::spawn(async move || {
            if let Message::Text(msg) = message {
                match handle_message(msg, state, player_id).await {
                    Ok(()) => (),
                    Err(e) => log!(e)
                }
            }
        })
    }

    // Remove player from state when connection broken
    state.remove_player(player.get_id())
}

async fn handle_message(msg: String, state: Arc<AppState>, player_id: String) -> Result<(), ActionError> {
    let state = Arc::clone(&state);
    let action: PlayerAction = serde_json::from_str(&msg)?;

    match action {
        // PlayerAction::RegisterPlayer { } => register_player()
        PlayerAction::SetNickname { nickname } => {
            state.get_player(player_id).ok_or(ActionError::PlayerNotFound)?.set_nickname(nickname)
        }
        PlayerAction::StartGame { } => {
            state.get_game(player_id).ok_or(ActionError::GameNotFound)?.start()
        }
        PlayerAction::EndGame { } => {
            state.get_game(player_id).ok_or(ActionError::GameNotFound)?.end()
        }
        PlayerAction::SubmitShipArrangement { ships } => {
            state.get_player(player_id).ok_or(ActionError::PlayerNotFound)?.set_arrangement(ships)
        }
        PlayerAction::Shoot { pos } => {
            state.get_player(player_id).ok_or(ActionError::PlayerNotFound)?.add_guess(pos)
        }
    }

    Ok(())
}