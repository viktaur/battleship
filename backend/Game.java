public class Game {

    // Should these two be final?
    private Player player1;
    private Player player2;

    public Game(String nameP1, String nameP2) {
        player1 = new Player(nameP1);
        player2 = new Player(nameP2);
    }
}
