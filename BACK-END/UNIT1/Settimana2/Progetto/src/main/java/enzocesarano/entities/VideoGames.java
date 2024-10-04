package enzocesarano.entities;

import java.time.LocalDate;

public class VideoGames extends CollectionGames {
    private String piattaforma;
    private int durataGioco;
    private String genere;

    public VideoGames(int idGame, String title, LocalDate yearPublication, int price, String piattaforma, int durataGioco, String genere) {
        super(idGame, title, yearPublication, price);
        this.piattaforma = piattaforma;
        this.durataGioco = durataGioco;
        this.genere = genere;
    }

    public String getPiattaforma() {
        return piattaforma;
    }

    public void setPiattaforma(String piattaforma) {
        this.piattaforma = piattaforma;
    }

    public int getDurataGioco() {
        return durataGioco;
    }

    public void setDurataGioco(int durataGioco) {
        this.durataGioco = durataGioco;
    }

    public String getGenere() {
        return genere;
    }

    public void setGenere(String genere) {
        this.genere = genere;
    }

    public String toString() {
        return "ID: " + this.getIdGame() + ", Titolo: " + this.getTitle() + ", Anno di plubblicazione: " + this.getYearPublication() + ", Prezzo: " + this.getPrice() +
                "€, Piattaforma: " + piattaforma + ", Durata: " + durataGioco + " ore, Genere: " + genere;
    }
}
