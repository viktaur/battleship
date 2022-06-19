import { Player } from "./classes/player";

var player1: Player;
var player2: Player;

// there should be an input box where the player will introduce their name
var player1Name: string;
var player2Name: string;

const lettersToId = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9
}

// TODO work on sessions
export function startGame(gameId: number) {
    player1 = new Player(player1Name);
    player2 = new Player(player2Name);
}

export function execute(command: string): string {
    var args: string[] = command.toUpperCase().split(" ");

    if (command.toUpperCase().startsWith("P1NAME")) {
        player1Name = args[1];
    } else if (command.toUpperCase().startsWith("P2NAME")) {
        player2Name = args[1];
    } else if (command.toUpperCase().startsWith("LAUNCH -T")) {
        var target: string = args[2];

        var row: number;
        var col: number;

        // we enable two systems (LETTER,NUMBER) and (ROW,COL)
        // e.g. F7 and 56 would be both valid and refer to the same coordinate
        if (parseInt(target).toString() != "NaN") {
            row = parseInt(target.split("")[0]);
            col = parseInt(target.split("")[1]);
        } else {
            var coordinates = target.split("");

            var letter: string = coordinates[0];
            var number: string = coordinates.length == 2 ? coordinates[1] : coordinates[1] + coordinates[2]; // this condition is for "..10"

            row = lettersToId[letter];
            col = parseInt(number) - 1;
        }
        return row.toString() + col.toString();
    } else {
        return `Command not found: ${command.toUpperCase()}`;
    }
}