/*creiamo l'array che conterrà i numeri del tombolone*/
const num = [];
/*riempiamolo*/
for (let i = 0; i < 90; i++) {
    num.push(i + 1);
};
console.log(num);

const selNum = [];

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
        cellDiv.setAttribute("id", `${i + 1}`);
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



function selectionCell(e) {
    e.preventDefault();
    randomize();
    selNum.push(num[randomn - 1]);
    console.log(selNum);
    const selCell = document.getElementById(`${randomn}`)
    const selCellCartel = document.querySelectorAll(`.i${randomn}`);
    selCell.classList.add("selected");
    selCellCartel.forEach(el =>{el.classList.add("selected")});
}

const buttonAddCartel = document.getElementById("addcartel");
buttonAddCartel.addEventListener("click", addCartell);

function addCartell(e){
    e.preventDefault();
    const cartelDiv = document.getElementById("cartel");
    for(let i = 0; i < 15; i++){
        let randomn = Math.floor(Math.random() * 90);
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cellCartel");
        cellDiv.classList.add( `i${randomn + 1}`);
        const cellCartelValue = document.createElement("h3");
        let cellCartel = `${num[randomn]}`;
        cellCartelValue.innerText = `${cellCartel}`;
        cellDiv.appendChild(cellCartelValue);
        cartelDiv.appendChild(cellDiv);
    };
    const br = document.createElement("br")
    cartelDiv.appendChild(br);
}

const randomize = function(){
    randomn = Math.floor(Math.random() * 90)+ 1;
    for(let i = 0; i < selNum.length + 1; i++){
        console.log(randomn);
        console.log(selNum[i]);
        if(randomn === selNum[i]){
           return randomize();
        }
    }
}

