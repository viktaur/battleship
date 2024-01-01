use std::collections::{HashMap, HashSet};
use std::sync::{Arc, Mutex};
use uuid::Uuid;
use crate::components::game::Game;

mod components;

type Players = Arc<Mutex<HashMap<String, Player>>>;
type Games = Arc<Mutex<HashSet<Game>>>;

pub struct Player {
    id: Uuid,
}

#[tokio::main]
async fn main() {
    let players: Players = Arc::new(Mutex::new(HashMap::new()));

    
}

