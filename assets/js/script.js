/*creiamo l'array che conterrà i numeri del tombolone*/
const num = [];
/*riempiamolo*/
for (let i = 0; i < 90; i++) {
    num.push(i + 1);
};
console.log(num);

/*Crea tabellone
seleziona dove metterla (HTML)
In un ciclo 
creare un div (HTML) con classe Cella tabellone
scrivo il valore x dell'array in una variabile
che appendo al div
aggiungo a ogni div un id con il numero dell' array cui appartiene*/

function printTable() {
    const tabelloneDiv = document.getElementById("tombola");
    for (let i = 0; i < num.length; i++) {
        const cellDiv = document.createElement("div");
        cellDiv.setAttribute("id", `${i}`);
        cellDiv.classList.add("tombCell");
        const cellValue = document.createElement("h3");
        let cell = num[i];
        cellValue.innerText = `${cell}`;
        cellDiv.appendChild(cellValue);
        tabelloneDiv.appendChild(cellDiv);
    }
}


/*Funzione che al caricamento della pagina stampa il tabellone*/
window.addEventListener("load", init());

function init() {
    printTable();
}

/*Funzione per il submit*/
const Button = document.getElementById("extractnum");
Button.addEventListener('click', selectionCell);



function selectionCell() {
    let randomn = Math.floor(Math.random() * 91);
    const selCell = getElementById(`${randomn}`)
    selCell.classList.add("selected");
}

