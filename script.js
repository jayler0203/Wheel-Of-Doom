
const movimientos1 = [
    { columna: 2, fila: 1 },
    { columna: 2, fila: 3 },
    { columna: 3, fila: 3 }
];
const movimientos2 = [
    { columna: 7, fila: 6 },
    { columna: 5, fila: 4},
    { columna: 8, fila: 9 }
];
const listas= [movimientos1, movimientos2];
let currentIndex = 0;

function moverElemento(columna, fila) {
    const comecocos = document.getElementById("comecocos");
    comecocos.style.transform = `translate(${(columna - 1) * 55}px, ${(fila - 1) * 55}px)`;}
    

function mover(go) {
    let tiempo = 0;
    go.forEach((x, currentIndex) => {
        setTimeout(() => {
            moverElemento(x.columna, x.fila);
            currentIndex++;
        }, tiempo);
        tiempo += 1000; 
    });
}

function ocultarFantasma(numeroFantasma) {

    const fantasma3 = document.getElementById(`fantasma${numeroFantasma}`);
    console.log(`fantasma${numeroFantasma}`)
    fantasma3.style.display = "none";

}

let contador = 0
function moverElementoSecuencia() {

    let y = listas[contador]
    for  (x of y) {
        mover(y);
        
    }
    setTimeout(ocultarFantasma(contador), 33000)
    contador++;

    
}
