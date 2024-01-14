use std::collections::HashMap;
use serde::{Deserialize, Serialize};
use uuid::Uuid;
use crate::components::board::{LocationKind, Pos};
use crate::components::ship::Ship;

pub enum PlayerType {
    Host,
    Guest
}

// TODO separate Client and Player.
// Player should come from Game and hold guesses and arrangements.
// Player should be destroyed once game is finalised
#[derive(Hash, PartialEq, Eq)]
pub struct Player {
    id: String,
    nickname: Option<String>,
    typ: PlayerType
}

impl Player {
    pub fn new() -> Self {
        Self {
            id: Uuid::new_v4().to_string(),
            nickname: None,
            typ: PlayerType::Host,
        }
    }

    pub fn set_nickname(mut self, nickname: String) {
        self.nickname = Some(nickname);
    }

    pub fn set_arrangement(mut self, arrangement: Vec<Ship>) {
        self.arrangement = arrangement;
    }

    pub fn get_id(&self) -> String {
        self.id.clone()
    }

    pub fn add_guess(&mut self, pos: Pos) {
        let location_kind = match
        self.guesses = self.guesses.insert(pos, )
    }

}

#[derive(Serialize, Deserialize)]
#[serde(tag = "type")]
pub enum PlayerAction {
    // RegisterPlayer { },
    SetNickname { nickname: String },
    StartGame { },
    EndGame { },
    SubmitShipArrangement { ships: Vec<Ship> },
    Shoot { pos: Pos },
}
