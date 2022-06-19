export class Player {

    name: string;
    positions: number[][];
    targets: number[][];

    constructor(name: string) {
        this.name = name;

        for (var row=0; row<10; row++) {
            for (var col=0; col<10; col++) {
                this.positions[row][col] = 0;
                this.targets[row][col] = 0;
            }
        }
    }
}