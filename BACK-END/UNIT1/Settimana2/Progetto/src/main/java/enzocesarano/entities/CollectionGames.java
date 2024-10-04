package enzocesarano.entities;

import java.time.LocalDate;

public class CollectionGames {
    private int idGame;
    private String title;
    private LocalDate yearPublication;
    private int price;

    public CollectionGames(int idGame, String title, LocalDate yearPublication, int price) {
        this.idGame = idGame;
        this.title = title;
        this.yearPublication = yearPublication;
        this.price = price;
    }

    public int getIdGame() {
        return idGame;
    }

    public int setIdGame(int idGame) {
        return this.idGame = idGame;
    }

    public String getTitle() {
        return title;
    }

    public String setTitle(String title) {
        return this.title = title;
    }

    public LocalDate getYearPublication() {
        return yearPublication;
    }

    public LocalDate setYearPublication(LocalDate yearPublication) {
        return this.yearPublication = yearPublication;
    }

    public int getPrice() {
        return price;
    }

    public Integer setPrice(int price) {
        return this.price = price;
    }

}
