package enzocesarano.utils;

import enzocesarano.entities.CollectionGames;
import enzocesarano.entities.GiochiDaTavolo;
import enzocesarano.entities.VideoGames;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Scanner;

public class setGames {
    public static void rimuoviGioco(Scanner scanner, ArrayList<CollectionGames> list) {
        boolean eliminato = false;
        while (!eliminato) {
            try {
                System.out.println("Inserisci l'ID del gioco da rimuovere:");
                int id = Integer.parseInt(scanner.nextLine());
                boolean giocoTrovato = list.removeIf(game -> game.getIdGame() == id);

                if (giocoTrovato) {
                    System.out.println("Gioco rimosso con successo.");
                    eliminato = true;
                } else {
                    System.out.println("Nessun gioco trovato con questo ID. Riprova.");
                }
            } catch (NumberFormatException e) {
                System.out.println("ID non valido. Assicurati di inserire un numero. Riprova.");
            }
        }
    }

    public static void aggiornaVideoGame(Scanner scanner, ArrayList<VideoGames> listaVideogiochi) {
        while (true) {
            try {
                System.out.println("Inserisci l'ID del videogioco da aggiornare:");
                int id = Integer.parseInt(scanner.nextLine());

                VideoGames videogioco = listaVideogiochi.stream().filter(game -> game.getIdGame() == id).findFirst().orElse(null);

                if (videogioco == null) {
                    System.out.println("Nessun videogioco trovato con questo ID. Riprova.");
                    continue;
                }

                System.out.println("Inserisci il nuovo titolo (lascia vuoto per non modificarlo):");
                String newTitle = scanner.nextLine();
                if (!newTitle.isEmpty()) {
                    videogioco.setTitle(newTitle);
                }

                System.out.println("Inserisci il nuovo anno di pubblicazione (formato YYYY-MM-DD, lascia vuoto per non modificarlo):");
                String newYear = scanner.nextLine();
                if (!newYear.isEmpty()) {
                    try {
                        LocalDate newPublicationDate = LocalDate.parse(newYear);
                        videogioco.setYearPublication(newPublicationDate);
                    } catch (Exception e) {
                        System.out.println("Data non valida. Riprova.");
                        continue;
                    }
                }

                System.out.println("Inserisci il nuovo prezzo:");
                int nuovoPrezzo = Integer.parseInt(scanner.nextLine());
                videogioco.setPrice(nuovoPrezzo);

                System.out.println("Inserisci la nuova piattaforma (lascia vuoto per non modificarlo):");
                String newPiattaforma = scanner.nextLine();
                if (!newPiattaforma.isEmpty()) {
                    videogioco.setPiattaforma(newPiattaforma);
                }

                System.out.println("Inserisci la nuova durata di gioco (lascia vuoto per non modificarlo):");
                String newDurata = scanner.nextLine();
                if (!newDurata.isEmpty()) {
                    try {
                        int nuovaDurataGioco = Integer.parseInt(newDurata);
                        videogioco.setDurataGioco(nuovaDurataGioco);
                    } catch (NumberFormatException e) {
                        System.out.println("Durata non valida. Riprova.");
                        continue;
                    }
                }

                System.out.println("Inserisci il nuovo genere (lascia vuoto per non modificarlo):");
                String newGenere = scanner.nextLine();
                if (!newGenere.isEmpty()) {
                    videogioco.setGenere(newGenere);
                }

                System.out.println("Gioco aggiornato con successo: " + videogioco);
                break;

            } catch (NumberFormatException e) {
                System.out.println("Input non valido. Assicurati di inserire un numero.");
            } catch (Exception e) {
                System.out.println("Si è verificato un errore durante l'aggiornamento del videogioco. Riprova.");
            }
        }
    }

    public static void aggiornaGiocoDaTavolo(Scanner scanner, ArrayList<GiochiDaTavolo> list) {
        while (true) {
            try {
                System.out.println("Inserisci l'ID del gioco da tavolo da aggiornare:");
                int id = Integer.parseInt(scanner.nextLine());

                GiochiDaTavolo giocoDaTavolo = list.stream().filter(game -> game.getIdGame() == id).findFirst().orElse(null);

                if (giocoDaTavolo == null) {
                    System.out.println("Nessun gioco da tavolo trovato con questo ID. Riprova.");
                    continue;
                }

                System.out.println("Inserisci il nuovo titolo (lascia vuoto per non modificarlo):");
                String newTitle = scanner.nextLine();
                if (!newTitle.isEmpty()) {
                    giocoDaTavolo.setTitle(newTitle);
                }

                System.out.println("Inserisci il nuovo anno di pubblicazione (formato YYYY-MM-DD, lascia vuoto per non modificarlo):");
                String newYear = scanner.nextLine();
                if (!newYear.isEmpty()) {
                    try {
                        LocalDate newPublicationDate = LocalDate.parse(newYear);
                        giocoDaTavolo.setYearPublication(newPublicationDate);
                    } catch (Exception e) {
                        System.out.println("Data non valida. Riprova.");
                        continue;
                    }
                }

                System.out.println("Inserisci il nuovo prezzo:");
                int nuovoPrezzo = Integer.parseInt(scanner.nextLine());
                giocoDaTavolo.setPrice(nuovoPrezzo);

                System.out.println("Inserisci il nuovo numero di giocatori:");
                String newNumeroGiocatori = scanner.nextLine();
                if (!newNumeroGiocatori.isEmpty()) {
                    try {
                        int numeroGiocatori = Integer.parseInt(newNumeroGiocatori);
                        giocoDaTavolo.setNumeroDiGiocatori(numeroGiocatori);
                    } catch (NumberFormatException e) {
                        System.out.println("Numero di giocatori non valido. Riprova.");
                        continue;
                    }
                }

                System.out.println("Inserisci la nuova durata media (in minuti):");
                String newDurataMedia = scanner.nextLine();
                if (!newDurataMedia.isEmpty()) {
                    try {
                        int durataMedia = Integer.parseInt(newDurataMedia);
                        giocoDaTavolo.setDurataMedia(durataMedia);
                    } catch (NumberFormatException e) {
                        System.out.println("Durata media non valida. Riprova.");
                        continue;
                    }
                }

                System.out.println("Gioco da tavolo aggiornato con successo: " + giocoDaTavolo);
                break;

            } catch (NumberFormatException e) {
                System.out.println("Input non valido. Assicurati di inserire un numero.");
            } catch (Exception e) {
                System.out.println("Si è verificato un errore durante l'aggiornamento del gioco da tavolo. Riprova.");
            }
        }
    }

}
