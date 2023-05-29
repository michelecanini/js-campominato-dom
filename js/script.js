"use strict";

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