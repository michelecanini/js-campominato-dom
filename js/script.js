"use strict";

//PROBLEMA: Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe). Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// LOGICA DEL PROGRAMMA - CREAZIONE DELLE FUNZIONI

// FUNZIONE 0 - generazione del numero casuale
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// FUNZIONE 1 - riempimento dell'arrey con esplosivo tnt
function fillExplosiveTnt(array_explosive_tnt, max) {

    // variabile di controllo
    let control = false;
    let random;

    while (control === false) {
        random = generateRandomNumber(1, max);
        
        if (!array_explosive_tnt.includes[random]) {
            control = true;
        }
    }
    return random;
}

// FUNZIONE 2 - creazione di una nuava partita
function newGame() {
    const grid = document.getElementById('grid'); // costante per il recupero del contenitore html
    const array_explosive_tnt = []; // costante dell'array esplosivi tnt vuoto

    // costante di recupero dei valori del livello di difficoltà  
    const difficulty_level = parseInt(document.getElementById('difficulty_level').value); 

    // livelli di difficoltà
    let cellNumber;
    switch (difficulty_level) {
        case 0:
        cellNumber = 100;
        break;
        case 1:
        cellNumber = 81;
        break;
        case 2:
        cellNumber = 49;
        break;
    }

    for (let i = 0; i < 16; i++) {
        let number = fillExplosiveTnt(array_explosive_tnt, cellNumber); // fuzione che riepie l'array con l'esplosivo tnt
        array_explosive_tnt.push(number);
    }
    console.log(array_explosive_tnt)

    grid.innerHTML = ''; // reset delle celle

    createCell(cellNumber); // fuzione che crea le celle del gioco
}

// FUNZIONE 3 - creazione della singola cella
function createCell(cellx) {

    
    // ciclo for per ciclare le 100 celle
    for (let i = 0; i < cellx; i++) {
        const cell = document.createElement('div');

        let cellForRow = Math.sqrt(cellx);

        cell.classList.add('cell');
        cell.style.width =`calc(100% / ${cellForRow})`;
        cell.style.height = cell.style.width;

        cell.innerHTML = i + 1;

        cell.addEventListener('click', function(){
            this.classList.add('clicked_cell');
            console.log(this.innerHTML);
        })

        grid.append(cell);
    }
}

//    let control = false;
//    let random_number;

//    while (control === false) {

        // creazione del numero random
//        random_number = generateRandomNumber(1, max);
        
//        if (!array_explosive_tnt.includes(random_number)) {
//            control = true;
//        }
//}
//    return random_number;
//}


// ciclo for di chiamata della funzione per riempire l'array degli esplosivi tnt
//for (let i=0; i<16; i++) {
//    let number = fillExplosiveTnt(array_explosive_tnt);
//array_explosive_tnt.push(number);

//console.log(array_explosive_tnt);
//}

// FUNZIONE 4 - bottone play di avvio del gioco
btn.addEventListener('click', function(){

    const btn = document.getElementById('btn'); // recupero bottone play che genera la griglia

    newGame();
})