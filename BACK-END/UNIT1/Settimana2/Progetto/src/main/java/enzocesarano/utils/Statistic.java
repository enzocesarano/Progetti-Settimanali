package enzocesarano.utils;

import enzocesarano.entities.CollectionGames;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.IntSummaryStatistics;

public class Statistic {
    public static void mostraStatistiche(ArrayList<CollectionGames> list) {
        try {
            int totaleGiochi = list.size();
            if (totaleGiochi == 0) {
                System.out.println("La collezione è vuota.");
                return;
            }

            IntSummaryStatistics statistics = list.stream().mapToInt(CollectionGames::getPrice).summaryStatistics();

            CollectionGames giocoPiuCaro = list.stream().max(Comparator.comparingDouble(CollectionGames::getPrice)).orElse(null);

            System.out.println("Numero totale di giochi: " + totaleGiochi);
            System.out.println("Gioco con il prezzo più alto: " + (giocoPiuCaro != null ? giocoPiuCaro : "N/A"));
            System.out.println("Prezzo totale dei giochi: " + statistics.getSum() + "€");
            System.out.println("Prezzo medio dei giochi: " + statistics.getAverage() + "€");
            System.out.println("Prezzo minimo dei giochi: " + statistics.getMin() + "€");
            System.out.println("Prezzo massimo dei giochi: " + statistics.getMax() + "€");
        } catch (Exception e) {
            System.out.println("Si è verificato un errore durante il calcolo delle statistiche. Riprova.");
        }
    }

}
