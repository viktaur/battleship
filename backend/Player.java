public class Player {
    // the name of the player
    private String name;
    // an array representing the positions of the boats of the player
    private int[][] positions = new int[10][10];
    // an array representing the opponent's cells that have been already discovered (i.e. where the player has launched). this prevents them from being hit again
    private int[][] launches = new int[10][10];
    // an array representing the boats (as objects) of the player
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
                launches[i][j] = 0;
            }
        }

        // create the boats for a player
        for (int id=1; id<5; id++) {
            boats[id] = new Boat(id);
        }
    }

    public int[][] getPositions() {
        return positions;
    }

    public int[][] getLaunches() {
        return launches;
    }

    public Boat[] getBoats() {
        return boats;
    }

    public void initBoatsPos() {
        for (Boat boat : boats) {

        }
    }

    public boolean moveBoatUp(Boat boat) {
        try {
            int[][] newArray;
            for (int i=; i<boat.getSize(); i++) {
                if ((positions[i][j] == boat.getId()) && (positions[i][j] == 0)) {
                    positions[i][j] = 0;
                }
            }
        } catch (ArrayIndexOutOfBoundsException e) {
            e.printStackTrace();
            return false;
        }
        return true;
    }

    public void moveBoatDown(Boat boat) {

    }

    public void moveBoatLeft(Boat boat) {

    }

    public void moveBoatRight(Boat boat) {

    }

    public void rotateBoat(Boat boat) {

    }
}
