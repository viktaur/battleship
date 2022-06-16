public class Game {

    private boolean isGameOn;

    // Player1 should be the one who creates the game
    private final Player player1;

    // Player should be the one who joins the game
    private final Player player2;

    // The player whose turn is theirs
    private Player currentPlayer;

    // The player waiting for the other player to play
    private Player restingPlayer;

    private int round;

    public Game(String nameP1, String nameP2) {
        player1 = new Player(nameP1);
        player2 = new Player(nameP2);
        isGameOn = true;
        round = 0;
    }

    public void switchTurn() {
        if (currentPlayer == player1) {
            currentPlayer = player2;
        } else {
            currentPlayer = player1;
        }
    }

    public boolean launch(Player self, Player opponent, int row, int col) {
        if ((self == currentPlayer) && (opponent == restingPlayer)) {
            if (self.getLaunches()[row][col] == 0) {
                int cellId = self.getPositions()[row][col];
                if (cellId == 0) {
                    System.out.println("MISS");
                    self.getLaunches()[row][col] = 1;
                } else {
                    System.out.println("HIT");
                    // tell the boat that has been hit
                    opponent.getBoats()[cellId].hit();
                    // update the hits array to say that the cell row,col has already been hit
                    self.getLaunches()[row][col] = 1;
                }
            }
        }
        return false;
    }

    public void newTurn() {
        round++;
    }

}
