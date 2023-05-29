"use strict";
//PROBLEMA: L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// FUNZIONE PER CREARE LA SINGOLA CELLA
function create_cell() {
    let cell = document.createElement('div');
    cell.classList.add('cell');
    return cell;
}

// COSTANTE PER IL RECUPERO DEL CONTENITORE HTML
const grid = document.getElementById('grid');

// CICLO FOR PER CICLARE LE 100 CELLE
for (let i = 0; i < 100; i++) {
    let cell = create_cell();
    cell.innerHTML = i + 1;

    cell.addEventListener('click', function(){
        console.log(this);
            
        });

        grid.append(cell);
        console.log(i);
}
