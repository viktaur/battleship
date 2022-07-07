import { handleReceive } from './server'

class Boat {
    id: number;
    size: number;
    partsLeft: number;

    constructor(id: number) {
        this.id = id;

        switch(id) {
            case 1:
                this.size = 2;
                break;
            case 2:
                this.size = 3;
                break;
            case 3:
                this.size = 3;
                break;
            case 4:
                this.size = 4;
                break;
            case 5:
                this.size = 5;
                break;
        }

        this.partsLeft = this.size;
    }

    removePart() {
        if (this.partsLeft >= 0) {
            this.partsLeft--;
        }
    }
}

export class Player {
    name: string;
    clientId: number;
    positions: number[][];
    targets: number[][];
    boats: { 1: Boat, 2: Boat, 3: Boat, 4: Boat, 5: Boat }

    constructor(name: string, clientId: number) {
        this.name = name;
        this.clientId = clientId;

        // initialise positions and targets
        for (var row=0; row<10; row++) {
            for (var col=0; col<10; col++) {
                this.positions[row][col] = 0;
                this.targets[row][col] = 0;
            }
        }

        // create and assign the boats
        for (var i=1; i<=5; i++) {
            this.boats[i] = new Boat(i);
        }
    }
}

export class Game {

    id: number;
    host: Player;
    guest: Player;

    activePlayer: Player;
    passivePlayer: Player;

    currentAim: { row: number, col: number };

    constructor(id: number, host: Player, guest: Player) {
        this.id = id;
        this.host = host;
        this.guest = guest;
    }

    start() {
        this.activePlayer = this.host;
        this.passivePlayer = this.guest;

        
    }

    switchPlayers() {
        if (this.activePlayer == this.host) {
            this.passivePlayer = this.host;
            this.activePlayer = this.guest;
        } else {
            this.activePlayer = this.host;
            this.passivePlayer = this.guest;
        }
    }

    launch(aim: {row: number, col: number}): string {
        this.activePlayer.targets[this.currentAim.row][this.currentAim.col] = 1;
        if (this.passivePlayer.positions[this.currentAim.row][this.currentAim.col] == 0) {
            this.switchPlayers();
            return "miss";
        } else {
            const val: number = this.passivePlayer.positions[this.currentAim.row][this.currentAim.col];
            this.passivePlayer.boats[val].removePart();
            this.switchPlayers();
            return "hit";
        }
    }
}

const lettersToId = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9 }

