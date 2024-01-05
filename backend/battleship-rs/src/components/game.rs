use std::collections::HashMap;
use tokio::sync::broadcast;
use crate::components::board::{LocationKind, Pos};
use crate::components::player::Player;
use crate::components::ship::Ship;
use crate::errors::GameplayError;

pub struct Game {
    pub id: String,
    pub host: Player,
    pub guest: Player,
    pub status: GameStatus,
    // Channel used to send messages to both host and guest
    pub tx: broadcast::Sender<String>,
}

impl Game {
    pub fn create(id: String, host: Player, guest: Player) -> Self {
        Self {
            id,
            host,
            guest,
            status: GameStatus::Setup,
            tx: broadcast::channel(2).0,
        }
    }

    pub fn start(&mut self) -> Result<(), GameplayError> {
        if let GameStatus::Ready = self.status {
            // handle logic
            // ...

            self.status = GameStatus::InProgress;

            Ok(())
        }

        Err(GameplayError::GameNotReady)
    }

    pub fn end(&mut self) -> Result<(), GameplayError> {
        self.status = GameStatus::Interrupted;

        Ok(())
    }
}

pub enum GameStatus {
    Setup,
    Ready,
    InProgress,
    Interrupted,
    Finalised,
}

