package enzocesarano.utils;

import enzocesarano.entities.CollectionGames;
import enzocesarano.entities.GiochiDaTavolo;

import java.util.ArrayList;
import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;

public class Ricerca {
    public static void ricercaPerPrezzo(Scanner scanner, ArrayList<CollectionGames> list) {
        try {
            System.out.println("Inserisci il prezzo massimo:");
            double prezzo = scanner.nextDouble();
            scanner.nextLine();
            list.stream().filter(gioco -> gioco.getPrice() <= prezzo).forEach(System.out::println);
        } catch (Exception e) {
            System.out.println("Si è verificato un errore durante la ricerca dei giochi. Riprova.");
            scanner.nextLine();
        }
    }

    public static void ricercaPerId(Scanner scanner, ArrayList<CollectionGames> list) {
        try {
            System.out.println("Inserisci ID del gioco da cercare:");
            int id = scanner.nextInt();

            list.stream().filter(gioco -> gioco.getIdGame() == id).findFirst().ifPresentOrElse(System.out::println, () -> System.out.println("Nessun gioco trovato con questo ID."));

        } catch (Exception e) {
            System.out.println("Si è verificato un errore durante la ricerca del gioco. Riprova.");
        }
    }

    public static void ricercaPerNumeroGiocatori(Scanner scanner, ArrayList<GiochiDaTavolo> list) {
        while (true) {
            try {
                System.out.println("Inserisci il numero di giocatori:");
                int numeroGiocatori = scanner.nextInt();
                scanner.nextLine();

                List<GiochiDaTavolo> giochiTrovati = list.stream().filter(gioco -> gioco.getNumeroDiGiocatori() == numeroGiocatori).toList();

                if (!giochiTrovati.isEmpty()) {
                    giochiTrovati.forEach(System.out::println);
                    break;
                } else {
                    System.out.println("Nessun gioco trovato con questo numero di giocatori. Riprova.");
                }

            } catch (InputMismatchException e) {
                System.out.println("Input non valido. Assicurati di inserire un numero intero.");
                scanner.nextLine();
            }
        }
    }


}
