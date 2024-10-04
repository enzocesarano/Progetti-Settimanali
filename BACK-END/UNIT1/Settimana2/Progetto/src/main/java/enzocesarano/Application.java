package enzocesarano;

import enzocesarano.entities.CollectionGames;
import enzocesarano.entities.GiochiDaTavolo;
import enzocesarano.entities.VideoGames;
import enzocesarano.utils.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Application {

    public static void main(String[] args) {

        List<VideoGames> videoGamesList = new ArrayList<>();
        videoGamesList.add(new VideoGames(1, "The Legend of Zelda: Breath of the Wild", LocalDate.of(2017, 3, 3), 60, "Nintendo Switch", 100, "Action-Adventure"));
        videoGamesList.add(new VideoGames(2, "The Witcher 3: Wild Hunt", LocalDate.of(2015, 5, 19), 40, "PC", 150, "RPG"));
        videoGamesList.add(new VideoGames(3, "Red Dead Redemption 2", LocalDate.of(2018, 10, 26), 50, "PlayStation 4", 120, "Action-Adventure"));
        videoGamesList.add(new VideoGames(4, "Super Mario Odyssey", LocalDate.of(2017, 10, 27), 55, "Nintendo Switch", 50, "Action-Adventure"));
        videoGamesList.add(new VideoGames(5, "Cyberpunk 2077", LocalDate.of(2020, 12, 10), 60, "PC", 70, "Action-RPG"));

        List<GiochiDaTavolo> giochiDaTavoloList = new ArrayList<>();
        giochiDaTavoloList.add(new GiochiDaTavolo(6, "Monopoly", LocalDate.of(1935, 11, 5), 20, 6, 180));
        giochiDaTavoloList.add(new GiochiDaTavolo(7, "Risk", LocalDate.of(1959, 8, 1), 35, 6, 120));
        giochiDaTavoloList.add(new GiochiDaTavolo(8, "Catan", LocalDate.of(1995, 4, 1), 45, 4, 90));
        giochiDaTavoloList.add(new GiochiDaTavolo(9, "Carcassonne", LocalDate.of(2000, 7, 3), 30, 5, 45));
        giochiDaTavoloList.add(new GiochiDaTavolo(10, "Cluedo", LocalDate.of(1949, 1, 1), 25, 6, 60));
        giochiDaTavoloList.add(new GiochiDaTavolo(11, "Pandemic", LocalDate.of(2008, 12, 5), 40, 4, 75));
        giochiDaTavoloList.add(new GiochiDaTavolo(12, "Ticket to Ride", LocalDate.of(2004, 9, 1), 50, 5, 60));
        giochiDaTavoloList.add(new GiochiDaTavolo(13, "7 Wonders", LocalDate.of(2010, 11, 26), 35, 7, 45));
        giochiDaTavoloList.add(new GiochiDaTavolo(14, "Dixit", LocalDate.of(2008, 3, 20), 30, 6, 30));
        giochiDaTavoloList.add(new GiochiDaTavolo(15, "Splendor", LocalDate.of(2014, 5, 9), 35, 4, 30));

        List<CollectionGames> listaDeiGiochi = new ArrayList<>();
        listaDeiGiochi.addAll(videoGamesList);
        listaDeiGiochi.addAll(giochiDaTavoloList);


        Scanner scanner = new Scanner(System.in);
        boolean exit = false;

        while (!exit) {
            System.out.println("\nSeleziona un'opzione:");
            System.out.println("1. Aggiunta di un elemento");
            System.out.println("2. Ricerca per ID");
            System.out.println("3. Ricerca per prezzo");
            System.out.println("4. Ricerca per numero di giocatori");
            System.out.println("5. Rimozione di un elemento dato un codice ID");
            System.out.println("6. Aggiornamento di un elemento esistente dato l'ID");
            System.out.println("7. Statistiche della collezione");
            System.out.println("8. Mostra la lista dei giochi presenti");
            System.out.println("0. Esci");

            int scelta = scanner.nextInt();
            scanner.nextLine();

            switch (scelta) {
                case 1:
                    System.out.println("Seleziona il tipo di gioco da aggiungere:");
                    System.out.println("1. VideoGame");
                    System.out.println("2. Gioco Da Tavola");
                    System.out.println("0. Annulla");

                    int tipoGioco = scanner.nextInt();
                    scanner.nextLine();

                    switch (tipoGioco) {
                        case 1:
                            AggiungiGames.VideoGame(scanner, (ArrayList<VideoGames>) videoGamesList);
                            break;
                        case 2:
                            AggiungiGames.GiocoDaTavola(scanner, (ArrayList<GiochiDaTavolo>) giochiDaTavoloList);
                            break;
                        case 0:
                            System.out.println("Operazione annullata.");
                            break;
                        default:
                            System.out.println("Opzione non valida.");
                            break;
                    }
                    break;
                case 2:
                    Ricerca.ricercaPerId(scanner, (ArrayList<CollectionGames>) listaDeiGiochi);
                    break;
                case 3:
                    Ricerca.ricercaPerPrezzo(scanner, (ArrayList<CollectionGames>) listaDeiGiochi);
                    break;
                case 4:
                    Ricerca.ricercaPerNumeroGiocatori(scanner, (ArrayList<GiochiDaTavolo>) giochiDaTavoloList);
                    break;
                case 5:
                    setGames.rimuoviGioco(scanner, (ArrayList<CollectionGames>) listaDeiGiochi);
                    break;
                case 6:
                    System.out.println("Seleziona il tipo di gioco da aggiornare:");
                    System.out.println("1. VideoGame");
                    System.out.println("2. Gioco Da Tavola");
                    System.out.println("0. Annulla");

                    tipoGioco = scanner.nextInt();
                    scanner.nextLine();

                    switch (tipoGioco) {
                        case 1:
                            setGames.aggiornaVideoGame(scanner, (ArrayList<VideoGames>) videoGamesList);
                            break;
                        case 2:
                            setGames.aggiornaGiocoDaTavolo(scanner, (ArrayList<GiochiDaTavolo>) giochiDaTavoloList);
                            break;
                        case 0:
                            System.out.println("Operazione annullata.");
                            break;
                        default:
                            System.out.println("Opzione non valida.");
                            break;
                    }
                    break;
                case 7:
                    Statistic.mostraStatistiche((ArrayList<CollectionGames>) listaDeiGiochi);
                    break;
                case 8:
                    ListaAllGames.listaDeiGiochi((ArrayList<CollectionGames>) listaDeiGiochi);
                    System.out.println("Digita qualsiasi lettera per tornare al menù principale");
                    scanner.next();
                    break;
                case 0:
                    exit = true;
                    System.out.println("Uscita dalle opzioni.");
                    break;
                default:
                    System.out.println("Opzione non valida.");
                    break;
            }

        }

    }
}
