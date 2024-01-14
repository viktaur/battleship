use crate::ws::Player;

// TODO is this necessary?
pub struct Room {
    id: String,
    host: Player,
    guest: Option<Player>,
    status: RoomStatus
}

impl Room {
    fn new(host: Player) -> Self {
        Self {
            id: Self::generate_id(),
            host,
            guest: None,
            status: RoomStatus::WaitingForGuest,
        }
    }

    fn with_guest(mut self, guest: Player) -> Self {
        self.guest = Some(guest);
        self.status = RoomStatus::ReadyToPlay;
        self
    }

    fn generate_id() -> String {
        [0..3].map(|_| eff_wordlist::large::random_word()).join("-")
    }
}

pub enum RoomStatus {
    WaitingForGuest,
    ReadyToPlay
}