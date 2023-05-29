"use strict";

// FUNZIONE PER CREARE LA SINGOLA CELLA
function createCell() {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

// FUNZIONE PER LA CREAZIONE DEL NUMERO CASUALE
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// RECUPERO BOTTONE PLAY CHE GENERA LA GRIGLIA QUADRATA
const btn = document.getElementById('btn');

// FUNZIONE DEL BOTTONE PLAY DI AVVIO DEL GIOCO
btn.addEventListener('click', function(){

    // COSTANTE PER IL RECUPERO DEL CONTENITORE HTML
    const grid = document.getElementById('grid');

    // RESET DELLE CELLE
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