public class Player {
    private String name;
    private int[][] positions = new int[10][10];
    private int[][] hits = new int[10][10];
    private Boat[] boats = new Boat[5];

    public Player(String name) {

        this.name = name;

        // initialise positions array
        for (int i=0; i<10; i++) {
            for (int j=0; j<10; j++) {
                positions[i][j] = 0;
            }
        }

        // initialise hits array
        for (int i=0; i<10; i++) {
            for (int j=0; j<10; j++) {
                hits[i][j] = 0;
            }
        }

        // create the boats for a player
        for (int id=0; id<5; id++) {
            boats[id] = new Boat(this, id);
        }
    }

    public int[][] getPositions() {
        return positions;
    }

    public int[][] getHits() {
        return hits;
    }

    public Boat[] getBoats() {
        return boats;
    }
}
