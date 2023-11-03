/* cordenadas de movimientos segun posicion de cada fantasma */
import { obtenerLista, eliminarNombreLista, guardarLista } from "./script.js";
const boton = document.getElementById("matar");
boton.addEventListener("click", moverElementoSecuencia);
let listaDeNombres = obtenerLista();
let nombre = ""
console.log(listaDeNombres);

const movimientos1 = [
  { columna: 2, fila: 1 },
  { columna: 2, fila: 3 },
  { columna: 3, fila: 3 },
];
const movimientos2 = [
  { columna: 2, fila: 3 },
  { columna: 2, fila: 2 },
  { columna: 4, fila: 2 },
  { columna: 4, fila: 1 },
  { columna: 5, fila: 1 },
];
const movimientos3 = [
  { columna: 4, fila: 1 },
  { columna: 4, fila: 2 },
  { columna: 5, fila: 2 },
  { columna: 5, fila: 5 },
];
const movimientos4 = [
  { columna: 5, fila: 4 },
  { columna: 4, fila: 4 },
  { columna: 4, fila: 3 },
  { columna: 3, fila: 3 },
  { columna: 3, fila: 5 },
  { columna: 2, fila: 5 },
];
const listas = [movimientos1, movimientos2, movimientos3, movimientos4];
let posicionInicial = 0;
let numeroFantasma = 0;

/* funcion que define la posicion a la que debe desplazarse el comecocos */
function moverElemento(columna, fila) {
  const comecocos = document.getElementById("comecocos");
  comecocos.style.transform = `translate(${(columna - 1) * 54}px, ${
    (fila - 1) * 54
  }px)`;
}

/* funcion que elimina fantasma cuando el comecocos llega a la poscion en la que esta */
function ocultarFantasma(movimientos, numeroFantasma) {
  const comecocos = document.getElementById("comecocos");
  const ultimaPosicion = movimientos[movimientos.length - 1];

  if (
    comecocos.style.transform ===
    `translate(${(ultimaPosicion.columna - 1) * 54}px, ${
      (ultimaPosicion.fila - 1) * 54
    }px)`
  ) {
    const fantasma = document.getElementById(`fantasma${numeroFantasma}`);
    console.log("prueba");
    fantasma.style.display = "none";
    mostrarMensaje(nombre.name);
  }
}

/* funcion que elige un participante aleatorio de la lista creada por el usuario */
function nombreAleatorio(listaDeNombres) {
  let indice = Math.floor(Math.random() * listaDeNombres.length);
  let jugadorElimindo = listaDeNombres[indice];
  return jugadorElimindo;
}

/* Funcion que muestra mensaje cada vez que muere un fantasma */
function mostrarMensaje(numeroFantasma) {
  const mensaje = document.createElement("div");
  mensaje.innerHTML = `Has matado al fantasma ${numeroFantasma}`;
  mensaje.style.position = "absolute";
  mensaje.style.color = "white";
  mensaje.style.top = "10px";
  mensaje.style.left = "10px";
  mensaje.style.backgroundColor = "#1F35FF";
  mensaje.style.borderRadius = "16px";
  mensaje.style.padding = "10px";
  document.body.appendChild(mensaje);
  setTimeout(() => {
    mensaje.style.display = "none";
  }, 2000);
  numeroFantasma++;
}

/* Funcion que muestra mensaje de juego terminado */
function JuegoTerminado() {
  const pantalla = document.createElement("div");
  pantalla.innerHTML = "Has matado a todos los fantasmas";
  pantalla.style.position = "absolute";
  pantalla.style.top = "50%";
  pantalla.style.left = "50%";
  pantalla.style.textAlign = "center";
  pantalla.style.transform = "translate(-50%, -50%)";
  pantalla.style.backgroundColor = "#000C7A";
  pantalla.style.color = "white";
  pantalla.style.borderRadius = "8px";
  pantalla.style.padding = "20px";
  pantalla.style.border = "13px solid #1F35FF";
  document.body.appendChild(pantalla);

  setTimeout(() => {
    pantalla.style.display = "none";
  }, 10000);
}

/* funcion que mueve el comecocos a las coordenadas en la lista */
function mover(go) {
  let tiempo = 0;
  go.forEach((x, posicionInicial) => {
    setTimeout(() => {
      moverElemento(x.columna, x.fila);
      posicionInicial++;
      if (posicionInicial === go.length) {
        setTimeout(() => {
          ocultarFantasma(movimientos1, 1);
          ocultarFantasma(movimientos2, 2);
          ocultarFantasma(movimientos3, 3);
          ocultarFantasma(movimientos4, 0);
        }, 500);
        if (posicionInicial === movimientos4.length) {
          setTimeout(() => {
            JuegoTerminado();
          }, 3000);
        }
      }
    }, tiempo);
    tiempo += 1000;
  });
}
function eliminarfantasma() {
  nombre = nombreAleatorio(listaDeNombres);
  listaDeNombres = eliminarNombreLista(listaDeNombres, nombre.idName);
  console.log(listaDeNombres);
  guardarLista(listaDeNombres);
}
/* Funcion que recorre la lista de las coordenadas y ejecuta la funcion mover para que recorra una despues de otra */
let contador = 0;
export function moverElementoSecuencia() {
  let y = listas[contador];
  for (let x of y) {
    mover(y);
  }
  contador++;
  eliminarfantasma();
}
