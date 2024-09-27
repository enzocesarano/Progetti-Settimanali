import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        int luminosità;
        int volume;
        int durata;
        int scelta;
        String title;

        Scanner sc = new Scanner(System.in);

         /*CREAZIONE IMMAGINE */

        System.out.println("Inserisci il Titolo: ");
        title = sc.next();

        do {
            System.out.println("Luminosita (0-10): ");
            luminosità = Integer.parseInt(sc.next());
        } while (!(luminosità >= 0 && luminosità <= 10));

        Immagine image = new Immagine(title, luminosità);

        System.out.println("Inserisci il Titolo: ");
        title = sc.next();

        do {
            System.out.println("Luminosita (0-10): ");
            luminosità = Integer.parseInt(sc.next());
        } while (!(luminosità >= 0 && luminosità <= 10));

        Immagine image2 = new Immagine(title, luminosità);

        /*CREAZIONE AUDIO*/

        System.out.println("Inserisci il Titolo della canzone: ");
        title = sc.next();
        sc.nextLine();
        System.out.println("Durata: ");
        durata = Integer.parseInt(sc.next());
        sc.nextLine();
        do {
            System.out.println("Volume (0-10): ");
            volume = Integer.parseInt(sc.next());
            sc.nextLine();
        } while (!(volume >= 0 && volume <= 10));

        Audio audio = new Audio(title, durata, volume);

         /*CREAZIONE VIDEO*/

        System.out.println("Inserisci il Titolo del video: ");
        title = sc.next();
        sc.nextLine();
        System.out.println("Durata: ");
        durata = Integer.parseInt(sc.next());
        sc.nextLine();
        do {
            System.out.println("Volume (0-10): ");
            volume = Integer.parseInt(sc.next());
            sc.nextLine();
        } while (!(volume >= 0 && volume <= 10));

        do {
            System.out.println("Luminosità (0-10): ");
            luminosità = Integer.parseInt(sc.next());
            sc.nextLine();
        } while (!(luminosità >= 0 && luminosità <= 10));

        Video video = new Video(luminosità, title, durata, volume);

        System.out.println("Inserisci il Titolo del video: ");
        title = sc.next();
        sc.nextLine();
        System.out.println("Durata: ");
        durata = Integer.parseInt(sc.next());
        sc.nextLine();
        do {
            System.out.println("Volume (0-10): ");
            volume = Integer.parseInt(sc.nextLine());
        } while (!(volume >= 0 && volume <= 10));

        do {
            System.out.println("Luminosità (0-10): ");
            luminosità = Integer.parseInt(sc.nextLine());
        } while (!(luminosità >= 0 && luminosità <= 10));

        Video video2 = new Video(luminosità, title, durata, volume);

        ElementoMultimediale[] element = {image, image2, audio, video, video2};

        do {
            System.out.println("\nQuale oggetto vuoi eseguire? (1-5, 0 per terminare)");
            scelta = sc.nextInt();
            sc.nextLine();
            if (scelta > 0 && scelta <= 5) {
                element[scelta - 1].show();
                element[scelta - 1].play();
            }
        } while (scelta != 0);

        System.out.println("Lettore multimediale terminato.");
    }
}