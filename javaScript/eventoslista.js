import { agregarNuevoNombre, cargarLista,guardarLista } from "./script.js";
const agregar = document.getElementById("add")
guardarLista
cargarLista();
agregar.addEventListener("click", agregarNuevoNombre);