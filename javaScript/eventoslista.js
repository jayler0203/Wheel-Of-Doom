import { agregarNuevoNombre, cargarLista, } from "./script.js";
const agregar = document.getElementById("add");
cargarLista();
agregar.addEventListener("click", agregarNuevoNombre);