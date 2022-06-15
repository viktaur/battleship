public class Boat {
    private Player player;

    private int hello;
    private int size;
    private int partsLeft;

    public Boat(Player player, int id) {

        this.player = player;

        switch (id) {
            case 1 -> size = 2;
            case 2, 3 -> size = 3;
            case 4 -> size = 4;
            case 5 -> size = 5;
        }
        partsLeft = size; //We initialise partsLeft to the size of the boat
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
}
