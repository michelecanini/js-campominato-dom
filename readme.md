# JS-CAMPOMINATO-DOM

#### PROBLEMA: Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba. 

#### Sotto-problema-1: Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    1. creare un array vuoto per la generazione di 16 bombe
    2. creare una funzione per la generazione di un numero randomico
    3. aggiungere una select (bottone) per 3 diversi livelli di difficoltà al dom
    4. recupera il valore di difficoltà
    5. in base al valore della difficoltà selezionato crea una diversa griglia

#### Sotto-problema-2: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
    1. fai generare il numero casuale randomico
    2. ? SE il numero casuale non è incluso nell'array
        2.1 lo includo nell'array
    3. : ALTRIMENTI vai avanti
    4. creare un ciclo for o while
    5. inserire un controllo per escludere due numeri uguali nell'array

#### Sotto-problema-3: In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
    1. effettuare un controllo se abbiamo calpestato un esplosivo
    2. ? SE la cella cliccata è una bomba
        2.1 colorare la cella di rosso e bloccare il click alle altre celle
    3. : ALTRIMENTI prosegui con una casella azzurra

#### Sotto-problema-4: La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

#### Sotto-problema-5: Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.