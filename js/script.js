"use strict";

// DICHIARAZIONE DELLE VARIABILI

const array_explosive_tnt = []; // costante dell'array esplosivi tnt vuoto
const grid = document.getElementById('grid'); // costante per il recupero del contenitore html
const btn = document.getElementById('btn'); // recupero bottone play che genera la griglia


// LOGICA DEL PROGRAMMA - CREAZIONE DELLE FUNZIONI

// funzione 1 - creazione della singola cella
function createCell() {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

// funzione 2 - riempimento dell'arrey con esplosivo tnt
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

// funzione 3 - generazione del numero casuale
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 // CHIAMATA DELLA FUNZIONE PER RIEMPIRE L'ARRAY DEGLI ESPLOSIVI TNT
 for (let i=0; i<16; i++) {
    let number = fillExplosiveTnt(array_explosive_tnt);
array_explosive_tnt.push(number);

console.log(array_explosive_tnt);
}



// FUNZIONE DEL BOTTONE PLAY DI AVVIO DEL GIOCO
btn.addEventListener('click', function(){

    // reset delle celle
    grid.innerHTML = '';
    
    // COSTANTE DEL NUMERO MASSIMO DI CELLE
    const cellMax = 100;
    console.log(generateRandomNumber(1, cellMax));

    // CICLO FOR PER CICLARE LE 100 CELLE
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  