package enzocesarano.entities;

import java.time.LocalDate;

public class GiochiDaTavolo extends CollectionGames {
    private int numeroDiGiocatori;
    private int durataMedia;

    public GiochiDaTavolo(int idGame, String title, LocalDate yearPublication, int price, int numeroDiGiocatori, int durataMedia) {
        super(idGame, title, yearPublication, price);
        this.numeroDiGiocatori = numeroDiGiocatori;
        this.durataMedia = durataMedia;
    }

    public int getNumeroDiGiocatori() {
        return numeroDiGiocatori;
    }

    public void setNumeroDiGiocatori(int numeroDiGiocatori) {
        this.numeroDiGiocatori = numeroDiGiocatori;
    }

    public int getDurataMedia() {
        return durataMedia;
    }

    public void setDurataMedia(int durataMedia) {
        this.durataMedia = durataMedia;
    }

    public String toString() {
        return "ID: " + this.getIdGame() + ", Titolo: " + this.getTitle() + ", Anno di plubblicazione: " + this.getYearPublication() + ", Prezzo: " + this.getPrice() +
                "€, Giocatori: " + numeroDiGiocatori + ", Durata media: " + durataMedia + " minuti";
    }
}
