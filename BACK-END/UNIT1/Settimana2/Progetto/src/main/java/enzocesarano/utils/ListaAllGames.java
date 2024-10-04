package enzocesarano.utils;

import enzocesarano.entities.CollectionGames;

import java.util.ArrayList;

public class ListaAllGames {
    public static void listaDeiGiochi(ArrayList<CollectionGames> list) {
        for (CollectionGames gioco : list) {
            System.out.println(gioco);
        }
    }
}
