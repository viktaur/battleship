export class Boat {

    id: number;
    size: number;
    partsLeft: number;

    constructor(id: number) {
        this.id = id;

        switch(id) {
            case 1:
                this.size = 2;
            case 2:
                this.size = 3;
            case 3:
                this.size = 3;
            case 4:
                this.size = 4;
            case 5:
                this.size = 5;
        }

        this.partsLeft = this.size;
    }

    removePart() {
        this.partsLeft--;
    }
}

