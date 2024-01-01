use crate::Player;

pub struct GameId(String);

impl GameId {
    pub fn new() -> Self {
        GameId(
            [0..3].map(|_| eff_wordlist::large::random_word()).join("-")
        )
    }
}

pub struct Game {
    id: GameId,
    host: Player,
    guest: Player,
    status: GameStatus
}

pub enum GameStatus {
    Waiting,
    Ready,
    InProgress,
    Interrupted,
    Finalised,
}

