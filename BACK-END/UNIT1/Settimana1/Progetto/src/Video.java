public class Video extends ElementoMultimediale{
    private String vol;

    public Video(int luminosità, String titolo, int durata, int volume) {
        super(luminosità, titolo, durata, volume);
    }


    public String toString() {
        return "VIDEO ->  " +
                this.getTitle() + "!".repeat(this.getVolume()) + "*".repeat(this.getLuminosità());
    }

    @Override
    public int alzaLuminosità() {
        if(this.getLuminosità() < 10){
            return this.setLuminosità("alza");
        }
        return this.getLuminosità();
    }

    @Override
    public int abbassaLuminosità() {
        if(this.getLuminosità() > 0){
            return this.setLuminosità("abbassa");
        }
        return this.getLuminosità();
    }

    @Override
    public void play() {
        for(int i = 0; i < this.getDurata(); i++){
            System.out.println(this.toString());
        };
    }

    @Override
    public void show() {

    }

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
