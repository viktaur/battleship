import { Player } from "./classes/player";

var player1: Player;
var player2: Player;

var playerExecutor: Player;
var playerResting: Player;

// player1 = new Player("Tom");
// player2 = new Player("Jerry");

// playerExecutor = player1;
// playerResting = player2;

// there should be an input box where the player will introduce their name
var player1Name: string;
var player2Name: string;

var currentAim: {
    row: number,
    col: number,
}

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
    // player1 = new Player(player1Name);
    // player2 = new Player(player2Name);
    player1 = new Player("Tom");
    player2 = new Player("Jerry");

    playerExecutor = player1;
    playerResting = player2;
}

export function execute(command: string): string {
    var args: string[] = command.toUpperCase().split(" ");

    if (command.toUpperCase().startsWith("P1NAME")) {
        player1Name = args[1];
    } else if (command.toUpperCase().startsWith("P2NAME")) {
        player2Name = args[1];
    } else if (command.toUpperCase().startsWith("AIM")) {
        var target: string = args[1];

        var i: number;
        var j: number;

        // we enable two systems (LETTER,NUMBER) and (ROW,COL)
        // e.g. F7 and 56 would be both valid and refer to the same coordinate
        if (parseInt(target).toString() != "NaN") {
            i = parseInt(target.split("")[0]);
            j = parseInt(target.split("")[1]);
        } else {
            var coordinates = target.split("");

            var letter: string = coordinates[0];
            var number: string = coordinates.length == 2 ? coordinates[1] : coordinates[1] + coordinates[2]; // this condition is for "..10"

            i = lettersToId[letter];
            j = parseInt(number) - 1;
        }
        return i.toString() + j.toString();
    } else if (command.toUpperCase().trim() === ("LAUNCH")) {
        if ((currentAim != null) && (playerExecutor.targets[currentAim.row][currentAim.col] == 0)) {
            launch(currentAim);
        } else {
            return "Please choose an aim first";
        }
    } else {
        return `Command not found: ${command.toUpperCase()}`;
    }
}

function switchPlayers() {
    if (playerExecutor == player1) {
        playerResting = player1;
        playerExecutor = player2;
    } else {
        playerResting = player2;
        playerExecutor = player1;
    }
}

function launch(aim: {row: number, col: number}): string {
    playerExecutor.targets[currentAim.row][currentAim.col] = 1;
    if (playerResting.positions[currentAim.row][currentAim.col] == 0) {
        switchPlayers();
        return "miss";
    } else {
        var val: number = playerResting.positions[currentAim.row][currentAim.col];
        playerResting.boats[val].removePart();
        switchPlayers();
        return "hit";
    }
}

export { player1, player2 };