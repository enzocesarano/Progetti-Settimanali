import Interface.Play;

public class Audio extends ElementoMultimediale implements Play {

    public Audio(String titolo, int durata, int volume) {
        super(titolo, durata, volume);
    }

    public String toString() {
        return "AUDIO ->  " +
                this.getTitle() + "!".repeat(this.getVolume());
    }


    @Override
    public void play() {
        for(int i = 0; i < this.getDurata(); i++){
            System.out.println(this.toString());
        };
    }

    @Override
    public int alzaLuminosità() {
        return 0;
    }

    @Override
    public int abbassaLuminosità() {
        return 0;
    }

    @Override
    public void show() {}

    @Override
    public int alzaVolume() {
        if(this.getVolume() < 10){
            return this.setVolume("alza");
        }
        return this.getVolume();
    }

    @Override
    public int abbassaVolume() {
        if(this.getVolume() > 0){
            return this.setVolume("abbassa");
        }
        return this.getVolume();
    }
}
