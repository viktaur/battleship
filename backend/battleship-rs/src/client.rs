use std::sync::Arc;
use axum::extract::{State, WebSocketUpgrade};
use axum::extract::ws::{Message, WebSocket};
use axum::response::IntoResponse;
use futures::StreamExt;
use uuid::Uuid;
use crate::AppState;

#[derive(Hash, PartialEq, Eq)]
pub struct Client {
    id: Uuid,
    // stream: WebSocket
}

impl Client {
    fn new(id: Uuid) -> Self {
        Self {
            id,
            // stream
        }
    }
}

pub async fn websocket_handler(
    ws: WebSocketUpgrade,
    State(state): State<Arc<AppState>>,
) -> impl IntoResponse {
    ws.on_upgrade(|socket| websocket(socket, state))
}

// This function deals with a single websocket connection, i.e., a single
// connected client / player, for which we will spawn two independent tasks (for
// receiving / sending chat messages).
async fn websocket(stream: WebSocket, state: Arc<AppState>) {
    // By splitting, we can send and receive at the same time.
    let (mut sender, mut receiver) = stream.split();

    // Create new client
    let client_id = Uuid::new_v4();
    let client = Client::new(client_id);

    // Add client to state
    state.clients.lock().unwrap().insert(client_id, client);

    // Loop until a text message is found.
    while let Some(Ok(message)) = receiver.next().await {
        handle_message(message).await;
    }

    // Remove client from state when connection broken
    state.clients.lock().unwrap().remove(&client_id);
}

async fn handle_message(message: Message) {
    match message {
        _ => ()
    }
}