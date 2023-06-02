"use strict";

//PROBLEMA: Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// DICHIARAZIONE DELLE VARIABILI

const array_explosive_tnt = []; // costante dell'array esplosivi tnt vuoto
const btn = document.getElementById('btn'); // recupero bottone play che genera la griglia



// LOGICA DEL PROGRAMMA - CREAZIONE DELLE FUNZIONI

// FUNZIONE 0 - creazione di una nuava partita
function newGame() {
    const grid = document.getElementById('grid'); // costante per il recupero del contenitore html

    // livello di difficoltà  
    const difficulty_level = document.getElementById('difficulty_level').value; 
    console.log(difficulty_level)

    grid.innerHTML = ''; // reset delle celle

    createCell(); // fuzione che crea le celle del gioco
}

// FUNZIONE 1 - creazione della singola cella
function createCell() {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

// FUNZIONE 2 - riempimento dell'arrey con esplosivo tnt
function fillExplosiveTnt(array_explosive_tnt, max) {
    
    let control = false;
    let random_number;

    while (control === false) {

        // creazione del numero random
        random_number = generateRandomNumber(1, max);
        
        if (!array_explosive_tnt.includes(random_number)) {
            control = true;
        }
}
    return random_number;
}

// FUNZIONE 3 - generazione del numero casuale
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ciclo for di chiamata della funzione per riempire l'array degli esplosivi tnt
//for (let i=0; i<16; i++) {
//    let number = fillExplosiveTnt(array_explosive_tnt);
//array_explosive_tnt.push(number);

//console.log(array_explosive_tnt);
//}


    

// FUNZIONE 4 - bottone play di avvio del gioco
btn.addEventListener('click', function(){

    newGame();

    // constante del numero massimo di celle
    const cellMax = 100;

    // ciclo for per ciclare le 100 celle
    for (let i = 1; i <= cellMax; i++) {
    let cell = createCell();
    cell.innerHTML = i;

    cell.addEventListener('click', function(){
        
        this.classList.add('clicked_cell');
            console.log(this.innerHTML);
        });

        grid.append(cell);
    }
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           