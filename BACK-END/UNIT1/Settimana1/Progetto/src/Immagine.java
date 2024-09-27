import Interface.Show;

public class Immagine extends ElementoMultimediale implements Show {

    public Immagine(String titolo, int luminosità) {
        super(titolo, luminosità);
    }

    public String toString() {
        return "IMMAGINE ->  " +
                this.getTitle() + "*".repeat(this.getLuminosità());
    }


    @Override
    public void show() {
            System.out.println(this.toString());
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

    }

    @Override
    public int alzaVolume() {
        return 0;
    }

    @Override
    public int abbassaVolume() {
        return 0;
    }
}
