public class Boat {
    private final int id;
    private int size;
    private int partsLeft;
    private int row;
    private int col;

    public Boat(int id) {
        this.id = id;

        switch (id) {
            case 1 -> size = 2;
            case 2, 3 -> size = 3;
            case 4 -> size = 4;
            case 5 -> size = 5;
        }

        partsLeft = size;
    }

    public int getSize() {
        return size;
    }

    public int getPartsLeft() {
        return partsLeft;
    }

    public boolean hit() {
        if (partsLeft > 0) {
            partsLeft--;
            return true;
        }
        return false;
    }

    public int getRow() {
        return row;
    }

    public int getCol() {
        return col;
    }

    public void setRow(int row) {
        this.row = row;
    }

    public void setCol(int col) {
        this.col = col;
    }

    public int getId() {
        return id;
    }
}
