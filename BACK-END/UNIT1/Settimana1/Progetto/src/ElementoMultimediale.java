import Interface.Luminosità;
import Interface.Play;
import Interface.Show;
import Interface.Volume;

public abstract class ElementoMultimediale implements Luminosità, Play, Show, Volume{
    private String titolo;
    private int durata;
    private int luminosità;
    private int volume;


    public ElementoMultimediale(String titolo, int luminosità) {
        this.titolo = titolo;
        this.luminosità = luminosità;
    }

    public ElementoMultimediale( String titolo, int durata, int volume) {
        this.titolo = titolo;
        this.durata = durata;
        this.volume = volume;
    }

    public ElementoMultimediale(int luminosità, String titolo, int durata, int volume) {
        this.luminosità = luminosità;
        this.titolo = titolo;
        this.durata = durata;
        this.volume = volume;
    }

    public String setTitle(String title) {
        return this.titolo = title;
    }

    public String getTitle() {
        return this.titolo;
    }

    public int setDurata(int time) {
        return this.durata = time;
    }

    public int getDurata() {
        return this.durata;
    }

    public int setLuminosità(String l) {
       if(l == "alza") {
           return this.luminosità++;
       } else if (l == "abbassa"){
           return this.luminosità--;
       }
        return this.luminosità;
    }

    public int getLuminosità() {
        return this.luminosità;
    }

    public int setVolume(String v) {
        if(v == "alza") {
            return this.volume++;
        } else if (v == "abbassa"){
            return this.volume--;
        }
        return this.volume;
    }

    public int getVolume() {
        return this.volume;
    }

}
