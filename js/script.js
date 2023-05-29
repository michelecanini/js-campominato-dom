"use strict";
//PROBLEMA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// FUNZIONE PER CREARE LA SINGOLA CELLA
function createCell() {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

// RECUPERO BOTTONE PLAY CHE GENERA LA GRIGLIA QUADRATA
const btn = document.getElementById('btn');

btn.addEventListener('click', function(){

    // COSTANTE PER IL RECUPERO DEL CONTENITORE HTML
    const grid = document.getElementById('grid');

    // RESET DELLE CELLE
    grid.innerHTML = '';

    // COSTANTE DEL NUMERO MASSIMO DI CELLE
    const cellMax = 100;

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







