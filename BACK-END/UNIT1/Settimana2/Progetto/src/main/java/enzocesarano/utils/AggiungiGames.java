package enzocesarano.utils;

import enzocesarano.entities.CollectionGames;
import enzocesarano.entities.GiochiDaTavolo;
import enzocesarano.entities.VideoGames;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Scanner;

public class AggiungiGames {

    public static void VideoGame(Scanner scanner, ArrayList<CollectionGames> list) {
        int idGame = 0;
        boolean idValido = false;

        while (!idValido) {
            System.out.println("Inserisci ID:");
            try {
                idGame = scanner.nextInt();
                scanner.nextLine();

                int finalIdGame = idGame;
                if (list.stream().anyMatch(game -> game.getIdGame() == finalIdGame)) {
                    System.out.println("Esiste già un gioco con questo ID. Riprova.");
                } else {
                    idValido = true;
                }
            } catch (Exception e) {
                System.out.println("Input non valido. Assicurati di inserire un numero intero per l'ID.");
                scanner.nextLine();
            }
        }

        System.out.println("Inserisci nome: ");
        String title = scanner.nextLine();

        LocalDate yearPublication = null;
        boolean dataValida = false;
        while (!dataValida) {
            System.out.println("Inserisci data di pubblicazione (YYYY-MM-DD): ");
            try {
                yearPublication = LocalDate.parse(scanner.nextLine());
                dataValida = true; // Data è valida
            } catch (Exception e) {
                System.out.println("Data non valida. Assicurati di utilizzare il formato YYYY-MM-DD.");
            }
        }

        int price = 0;
        boolean prezzoValido = false;
        while (!prezzoValido) {
            System.out.println("Inserisci prezzo: ");
            try {
                price = scanner.nextInt();
                scanner.nextLine();
                prezzoValido = true;
            } catch (Exception e) {
                System.out.println("Input non valido. Assicurati di inserire un numero intero per il prezzo.");
                scanner.nextLine();
            }
        }

        System.out.println("Inserisci la piattaforma di gioco: ");
        String piattaforma = scanner.nextLine();

        int durataGioco = 0;
        boolean durataValida = false;
        while (!durataValida) {
            System.out.println("Inserisci la durata di gioco in ore: ");
            try {
                durataGioco = scanner.nextInt();
                scanner.nextLine();
                durataValida = true;
            } catch (Exception e) {
                System.out.println("Input non valido. Assicurati di inserire un numero intero per la durata.");
                scanner.nextLine();
            }
        }

        System.out.println("Inserisci il genere: ");
        String genere = scanner.nextLine();

        list.add(new VideoGames(idGame, title, yearPublication, price, piattaforma, durataGioco, genere));
        System.out.println("Gioco aggiunto con successo!");
        System.out.println("Lista aggiornata: " + list);
    }

    public static void GiocoDaTavola(Scanner scanner, ArrayList<CollectionGames> list) {
        int idGame = 0;
        boolean idValido = false;

        while (!idValido) {
            System.out.println("Inserisci ID:");
            try {
                idGame = scanner.nextInt();
                scanner.nextLine();

                int finalIdGame = idGame;
                if (list.stream().anyMatch(game -> game.getIdGame() == finalIdGame)) {
                    System.out.println("Esiste già un gioco con questo ID. Riprova.");
                } else {
                    idValido = true;
                }
            } catch (Exception e) {
                System.out.println("Input non valido. Inserisci un numero intero per l'ID.");
                scanner.nextLine();
            }
        }

        System.out.println("Inserisci nome: ");
        String title = scanner.nextLine();

        LocalDate yearPublication = null;
        boolean dataValida = false;
        while (!dataValida) {
            System.out.println("Inserisci data di pubblicazione (formato YYYY-MM-DD): ");
            try {
                yearPublication = LocalDate.parse(scanner.nextLine());
                dataValida = true;
            } catch (Exception e) {
                System.out.println("Formato non valido. Riprova.");
            }
        }

        int price = 0;
        boolean prezzoValido = false;
        while (!prezzoValido) {
            System.out.println("Inserisci prezzo: ");
            try {
                price = scanner.nextInt();
                prezzoValido = true;
            } catch (Exception e) {
                System.out.println("Input non valido. Inserisci un numero intero per il prezzo.");
                scanner.nextLine();
            }
        }

        int numeroDiGiocatori = 0;
        boolean giocatoriValido = false;
        while (!giocatoriValido) {
            System.out.println("Inserisci il numero di giocatori: ");
            try {
                numeroDiGiocatori = scanner.nextInt();
                giocatoriValido = true;
            } catch (Exception e) {
                System.out.println("Input non valido. Inserisci un numero intero per il numero di giocatori.");
                scanner.nextLine();
            }
        }


        int durataMedia = 0;
        boolean durataValida = false;
        while (!durataValida) {
            System.out.println("Inserisci la durata media di gioco: ");
            try {
                durataMedia = scanner.nextInt();
                durataValida = true;
            } catch (Exception e) {
                System.out.println("Input non valido. Inserisci un numero intero per la durata.");
                scanner.nextLine();
            }
        }

        list.add(new GiochiDaTavolo(idGame, title, yearPublication, price, numeroDiGiocatori, durataMedia));
        System.out.println("Gioco aggiunto con successo!");
    }
}