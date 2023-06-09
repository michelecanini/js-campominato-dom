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
        
        if (!array_explosive_tnt.includes(random)) {
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
        

        if(!array_explosive_tnt.includes(number)){
            array_explosive_tnt.push(number)
        }
    }
    
    console.log(array_explosive_tnt)

    grid.innerHTML = ''; // reset delle celle

    createCell(cellNumber, array_explosive_tnt); // fuzione che crea le celle del gioco
}

// FUNZIONE 3 - creazione della singola cella
function createCell(cellx, array_explosive_tnt) { 

    // variabile fine del gioco
    let gameTheEnd = false;

    // variabile del punteggio ottenuto
    let score = 0;
    // arrai delle celle cliccate
    let clicked_cell = []

    // ciclo for per ciclare le 100 celle
    for (let i = 0; i < cellx; i++) {

        const cell = document.createElement('div');
        let cellForRow = Math.sqrt(cellx);

        cell.classList.add('cell');
        cell.style.width =`calc(100% / ${cellForRow})`;
        cell.style.height = cell.style.width;
        cell.innerHTML = i + 1;

        cell.addEventListener('click', function(){

            if (gameTheEnd === false) {

                if(!array_explosive_tnt.includes(parseInt(this.innerText))){

                    this.classList.add('clicked_cell');

                    if (!clicked_cell.includes(this.innerText)){
                     clicked_cell.push(this.innerText)
                    score++;
                    }
                    
                }
                else{
                    this.classList.add('tnt_exploded');
                    gameTheEnd = true;

                    // visualizzare tutte le bombe a fine gioco
                    let cell_all = document.querySelectorAll('.cell')
                    for (let i = 0; i < cell_all.length; i++){
                        if (array_explosive_tnt.includes(i+1)){
                            cell_all[i].classList.add('tnt_exploded'); 
                        }
                    }

                    alert(`Il tuo Score: ${score} punti! Clicca su Play, prova ancora.`);
                    //console.log(tnt_exploded)

                }
            }
        })
        grid.append(cell);
    }
}

// FUNZIONE 4 - bottone play di avvio del gioco
btn.addEventListener('click', function(){
    const btn = document.getElementById('btn'); // recupero bottone play che genera la griglia
    alert("Ciao Giocatore Benvenuto! Puoi scegliere la difficoltà che preferisci tra easy, normal e hard. Vediamo su quante caselle riuscirai a passare... ma fai ATTENZIONE troverai sul tuo cammino 16 esplosivi TNT cerca di evitarli! Ricorda che puoi cliccare su Play per riavviare la partita")
    newGame();
})