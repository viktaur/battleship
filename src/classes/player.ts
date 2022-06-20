import { Boat } from "./boat";

export class Player {

    name: string;
    positions: number[][];
    targets: number[][];
    boats: {
        1: Boat,
        2: Boat,
        3: Boat,
        4: Boat,
        5: Boat
    }

    constructor(name: string) {
        this.name = name;

        for (var row=0; row<10; row++) {
            for (var col=0; col<10; col++) {
                this.positions[row][col] = 0;
                this.targets[row][col] = 0;
            }
        }

        for (var i=0; i<=5; i++) {
            this.boats[i] = new Boat(i);
        }

    }
}