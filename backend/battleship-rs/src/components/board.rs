
pub struct Pos(usize, usize);
// pub struct Board(Vec<Vec<Location>>);
//
// pub struct Location {
//     x: usize,
//     y: usize,
//     hit: bool,
//     kind: LocationKind
// }
//
pub enum LocationKind {
    Water,
    Ship
}

