use crate::Client;
use crate::errors::GameplayError;

type Player = Client;

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
    guest: Option<Player>,
    status: GameStatus
}

impl Game {
    pub fn create(host: Player) -> Self {
        Self {
            id: GameId::new(),
            host,
            guest: None,
            status: GameStatus::Waiting
        }
    }

    pub fn start(&mut self) -> Result<(), GameplayError> {
        if let GameStatus::Ready = self.status {
            // handle logic
            // ...

            self.status = GameStatus::InProgress;
        }

        Err(GameplayError::GameNotReady)
    }
}

pub enum GameStatus {
    Waiting,
    Ready,
    InProgress,
    Interrupted,
    Finalised,
}

