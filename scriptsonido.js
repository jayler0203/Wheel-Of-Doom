let boton = document.getElementById("play");
let sonido = new Audio ("./sonidos/donkey-kong-coin.mp3")
console.log (sonido, boton)

boton.addEventListener("click", function(){sonido.play()})
sonido.addEventListener("ended", function(){window.location.href="indexpantalla.html"})


/*
'<audio src="sonidos/pacman-2.mp3" autoplay></audio>'
"<audio src=sonidos/pacman-dies.mp3></audio>"
"<audio src=sonidos/pacman-eating-cherry.mp3></audio>"
"<audio src=sonidos/pacman-eating-ghost.mp3></audio>"
"<audio src=sonidos/pacman-song.mp3></audio>"
*/


/*
let soundEnabled = true;

function toggleSound() {
    soundEnabled = !soundEnabled;
    const soundButton = document.getElementById("sound-button");
    if (soundEnabled) {
        soundButton.textContent = "🔊 Sound";
       
    } else {
        soundButton.textContent = "🔇 Mute";
       
    }
}

const soundButton = document.getElementById("sound-button");
const gameSound = document.getElementById("game-sound");

function toggleSound() {
    if (gameSound.paused) {
        gameSound.play();
        soundButton.textContent = "🔊 Sound";
    } else {
        gameSound.pause();
        soundButton.textContent = "🔇 Mute";
    }
}
*/