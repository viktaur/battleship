"use strict";
exports.__esModule = true;
exports.Game = exports.Player = void 0;
var Boat = /** @class */ (function () {
    function Boat(id) {
        this.id = id;
        switch (id) {
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
    Boat.prototype.removePart = function () {
        if (this.partsLeft >= 0) {
            this.partsLeft--;
        }
    };
    return Boat;
}());
var Player = /** @class */ (function () {
    function Player(name, clientId) {
        this.name = name;
        this.clientId = clientId;
        // initialise positions and targets
        for (var row = 0; row < 10; row++) {
            for (var col = 0; col < 10; col++) {
                this.positions[row][col] = 0;
                this.targets[row][col] = 0;
            }
        }
        // create and assign the boats
        for (var i = 1; i <= 5; i++) {
            this.boats[i] = new Boat(i);
        }
    }
    return Player;
}());
exports.Player = Player;
var Game = /** @class */ (function () {
    function Game(id, host, guest) {
        this.id = id;
        this.host = host;
        this.guest = guest;
    }
    Game.prototype.start = function () {
        this.activePlayer = this.host;
        this.passivePlayer = this.guest;
    };
    Game.prototype.switchPlayers = function () {
        if (this.activePlayer == this.host) {
            this.passivePlayer = this.host;
            this.activePlayer = this.guest;
        }
        else {
            this.activePlayer = this.host;
            this.passivePlayer = this.guest;
        }
    };
    Game.prototype.launch = function (aim) {
        this.activePlayer.targets[this.currentAim.row][this.currentAim.col] = 1;
        if (this.passivePlayer.positions[this.currentAim.row][this.currentAim.col] == 0) {
            this.switchPlayers();
            return "miss";
        }
        else {
            var val = this.passivePlayer.positions[this.currentAim.row][this.currentAim.col];
            this.passivePlayer.boats[val].removePart();
            this.switchPlayers();
            return "hit";
        }
    };
    return Game;
}());
exports.Game = Game;
var lettersToId = { A: 0, B: 1, C: 2, D: 3, E: 4, F: 5, G: 6, H: 7, I: 8, J: 9 };
