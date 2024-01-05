use std::collections::HashMap;
use std::sync::Mutex;
use tokio::sync::broadcast;
use crate::components::game::Game;
use crate::components::player::Player;

type PlayerId = String;

// Shared app state
pub struct AppState {
    players: Mutex<HashMap<PlayerId, Player>>,
    games: Mutex<HashMap<PlayerId, Game>>,
}

impl AppState {
    pub fn init() -> Self {
        Self {
            players: Mutex::new(HashMap::new()),
            games: Mutex::new(HashMap::new()),
        }
    }

    pub fn add_player(&self, player: Player) {
        self.players.lock().unwrap().insert(player.get_id(), player);
    }

    pub fn remove_player(&self, player_id: String) {
        self.players.lock().unwrap().remove(&player_id);
    }

    pub fn get_player(&self, player_id: PlayerId) -> Option<&Player> {
        self.players.lock().unwrap().get(&player_id)
    }

    pub fn add_game(&self, host_id: PlayerId, game: Game) {
        self.games.lock().unwrap().insert(host_id, game);
    }

    pub fn remove_game(&self, host_id: PlayerId) {
        self.games.lock().unwrap().remove(&host_id);
    }

    pub fn get_game(&self, host_id: PlayerId) -> Option<&Game> {
        self.games.lock().unwrap().get(&host_id)
    }
}
