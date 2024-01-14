use crate::components::board::Pos;

pub struct Ship {
    class: ShipClass,
    orientation: ShipOrientation,
    pos: Pos // top/left-most part of the ship used as reference
}

pub enum ShipClass {
    Carrier = 5,
    Battleship = 4,
    Submarine = 3,
    Destroyer = 2
}

pub enum ShipOrientation {
    Horizontal,
    Vertical
}
