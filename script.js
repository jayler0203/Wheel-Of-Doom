const input = document.getElementById("inputName");
const lista = document.getElementById("listNames");
const agregar = document.getElementById("add");
let listaDeNombres = [];
console.log(localStorage.getItem("nombres"));
cargarLista();
agregar.addEventListener("click", agregarNuevoNombre);
//
function agregarNuevoNombre() {
  let texto = input.value;
  let idName = crypto.randomUUID();
  listaDeNombres.push({ name: texto, idName: idName });
  agregarNombreLista(texto, idName);
  guardarLista();
  limpiarInput();
}
function agregarNombreLista(texto, idName) {
  const nombre = `<li>${texto}</li> <span class="material-symbols-outlined trash" id="${idName}">delete</span>`;
  const container = document.createElement("div");
  container.innerHTML = nombre;
  lista.appendChild(container);
  const deleteButton = document.getElementById(idName);
  deleteButton.addEventListener("click", () => eliminarNombreDOM(idName));
}
function cargarLista() {
  if (localStorage.getItem("nombres")) {
    listaDeNombres = JSON.parse(localStorage.getItem("nombres"));
    // Llenar la lista con los nombres guardados.
    listaDeNombres.forEach((nombreObj) => {
      const { name, idName } = nombreObj;
      agregarNombreLista(name, idName);
    });
  }
}
function guardarLista() {
  // Guardar la lista de nombres en el localStorage.
  localStorage.setItem("nombres", JSON.stringify(listaDeNombres));
}

function eliminarNombreLista(idName) {
  listaDeNombres = listaDeNombres.filter(
    (nombreObj) => nombreObj.idName !== idName
  );
}
function eliminarNombreDOM(idName) {
  const elementToRemove = document.getElementById(idName);
  elementToRemove.parentNode.remove(elementToRemove);
  eliminarNombreLista(idName);
  guardarLista();
  console.log(listaDeNombres);
}
function limpiarInput() {
  input.value = "";
}


// //Canvas
// var canvas;
// var ctx;
// var FPS = 20;
// var anchoF = 40;
// var altoF = 40;
// var spriteAncho= 50
// var spriteAlto = 50

// var gameFrames = 0
// const stagerFrames = 10

// var muro = '#044f14';
// var puerta = '#3a1700';
// var tierra = '#c6892f';
// var llave = '#c6bc00';

// var protagonista;
// let fantasma1;

// var escenario = [
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
//   [0,2,2,0,0,0,2,2,2,2,0,0,2,2,0],
//   [0,0,2,2,2,2,2,0,0,2,0,0,2,0,0],
//   [0,0,2,0,0,0,2,2,0,2,2,2,2,0,0],
//   [0,0,2,2,2,0,0,2,0,0,0,2,0,0,0],
//   [0,2,2,0,0,0,0,2,0,0,0,2,0,0,0],
//   [0,0,2,0,0,0,2,2,2,0,0,2,2,2,0],
//   [0,2,2,2,0,0,2,0,0,0,2,0,0,2,0],
//   [0,2,2,2,0,0,2,0,0,2,2,2,2,2,0],
//   [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
// ]

// function dibujaEscenario(){
//   var color;

//   for(y=0;y<10;y++){
//     for(x=0;x<15;x++){

//       if(escenario[y][x]==0)
//         color = muro;

//       if(escenario[y][x]==1)
//         color = puerta;

//       if(escenario[y][x]==2)
//         color = tierra;

//       if(escenario[y][x]==3)
//         color = llave;

//       ctx.fillStyle = color;
//       ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);
//     }
//   }


// }





// //OBJETO JUGADOR
// spriteAnimations = []
// animationStates = [
//   {
//     name: "derecha",
//     framex: 17,
//     frameini : 0,
//     framefinal: 2,
//   },
//   {
//     name: "abajo",
//     framex: 17,
//     frameini : 3,
//     framefinal: 5
//   },
//   {
//     name: "izquierda",
//     framex: 17,
//     frameini : 6,
//     framefinal: 8
//   },
//   {
//     name: "arriba",
//     framex: 17,
//     frameini : 9,
//     framefinal: 11
//   },
//   {
//     name: "fantasma",
//     framex: 1,
//     frameini : 0,
//     framefinal: 2
//   }
  

// ]
// animationStates.forEach(state => {

//   let frames = {
//     loc :[],
//   }
//   for (let i = state.frameini; i < state.framefinal; i++) {
//     let positionY= i * spriteAlto
//     let positionX = state.framex *spriteAncho
//     frames.loc.push({x:positionX,y:positionY})
//   }
//   spriteAnimations[state.name]= frames
  

  
// });
// console.log(spriteAnimations);
// var jugador = function(){
//   this.x = 1;
//   this.y = 1;
//   this.direccion = "derecha";
//   this.color = '#820c01';
//   this.animar = function(direccion, indice){
//     let position = Math.floor(gameFrames/stagerFrames)%spriteAnimations[direccion].loc.length 
//     let framex = spriteAnimations[direccion].loc[0].x;
//     let framey = spriteAlto*(position +animationStates[indice].frameini);
//     ctx.drawImage(playerImage,framex,framey,anchoF,altoF,this.x*anchoF,this.y*altoF,anchoF,altoF)
//     gameFrames ++


//   }
//   this.dibuja = function(){
//     ctx.fillStyle = this.color;
//     ctx.fillRect(this.x*anchoF,this.y*altoF,anchoF,altoF);
//   }


//   this.margenes = function(x,y){
//     var colision = false;

//     if(escenario[y][x]==0){
//       colision = true;
//     }

//     return(colision);
//   }



//   this.arriba = function(){
//     if(this.margenes(this.x, this.y-1)==false)
//       this.y--;
//   }


//   this.abajo = function(){
//     if(this.margenes(this.x, this.y+1)==false)
//       this.y++;
//   }

//   this.izquierda = function(){
//     if(this.margenes(this.x-1, this.y)==false)
//       this.x--;
//   }

//   this.derecha = function(){
//     if(this.margenes(this.x+1, this.y)==false)
//       this.x++;
//   }

// }
// class fantasma{
//   constructor(){
//     this.x = 6;
//     this.y = 2;
//     this.animar = this.animar.bind(this);
//   }
//   animar(direccion, indice) {
//     let position = Math.floor(gameFrames / stagerFrames) % spriteAnimations[direccion].loc.length;
//     let framex = spriteAnimations[direccion].loc[0].x;
//     let framey = spriteAlto * (position + animationStates[indice].frameini);
//     ctx.drawImage(
//       playerImage,
//       framex,
//       framey,
//       anchoF,
//       altoF,
//       this.x * anchoF,
//       this.y * altoF,
//       anchoF,
//       altoF
//     );
//     gameFrames++;
//   }
// }

  








// function inicializa(){
//   canvas = document.getElementById('canvas');
//   ctx = canvas.getContext('2d');
  

//   //CREAMOS AL JUGADOR
//   protagonista = new jugador();

//   fantasma1 = new fantasma();

//   //LECTURA DEL TECLADO
//   document.addEventListener('keydown',function(tecla){

//     if(tecla.keyCode == 38){
//       protagonista.direccion="arriba"
//       protagonista.arriba();
      
//     }

//     if(tecla.keyCode == 40){
//       protagonista.direccion="abajo"
//       protagonista.abajo();
//     }

//     if(tecla.keyCode == 37){
//       protagonista.direccion="izquierda"
//       protagonista.izquierda();
//     }

//     if(tecla.keyCode == 39){
//       protagonista.direccion="derecha"
//       protagonista.derecha();
//     }

//   });

//   setInterval(function(){
//     principal();
//   },1000/FPS);
// }


// function borraCanvas(){
//   canvas.width=750;
//   canvas.height=500;
// }
// function dibujarProtaginista() {
//   if (protagonista.direccion ==="abajo") {
//     protagonista.animar(protagonista.direccion, 1)
    
//   }else if(protagonista.direccion ==="izquierda"){
//     protagonista.animar(protagonista.direccion, 2)
//   }
//   else if(protagonista.direccion ==="derecha"){
//     protagonista.animar(protagonista.direccion, 0)
//   }
//   else if(protagonista.direccion ==="arriba"){
//     protagonista.animar(protagonista.direccion, 3)
//   }
  
// }


// function principal(){
//   borraCanvas();
//   dibujaEscenario();
//   fantasma1.animar("fantasma",4)

//   dibujarProtaginista();
// }
// const playerImage = new Image
// playerImage.src = "imagenes/Sprites.png"

// function moverPacmanHaciaFantasma( fantasma) {
//   const pacX = protagonista.x;
//   const pacY = protagonista.y;
//   const fantasmaX = fantasma1.x;
//   const fantasmaY = fantasma1.y;

//   if (pacX === fantasmaX && pacY === fantasmaY) {
//     // El Pacman ya está en la misma casilla que el Fantasma, no se mueve.
//     return;
//   }

//   // Calcula la dirección hacia el Fantasma
//   const diffX = fantasmaX - pacX;
//   const diffY = fantasmaY - pacY;

//   // Validar colisiones antes de mover
//   if (diffX > 0 && !protagonista.margenes(pacX + 1, pacY)) {
//     // Mueve el Pacman hacia la derecha
//     protagonista.direccion = "derecha";
//     protagonista.derecha();
//   } else if (diffX < 0 && !protagonista.margenes(pacX - 1, pacY)) {
//     // Mueve el Pacman hacia la izquierda
//     protagonista.direccion = "izquierda";
//     protagonista.izquierda();
//   } else if (diffY > 0 && !protagonista.margenes(pacX, pacY + 1)) {
//     // Mueve el Pacman hacia abajo
//     protagonista.direccion = "abajo";
//     protagonista.abajo();
//   } else if (diffY < 0 && !protagonista.margenes(pacX, pacY - 1)) {
//     // Mueve el Pacman hacia arriba
//     protagonista.direccion = "arriba";
//     protagonista.arriba();
//   }
// }




// document.getElementById('moverPacman').addEventListener('click', function() {
//   moverPacmanHaciaFantasma();
// });


// inicializa()