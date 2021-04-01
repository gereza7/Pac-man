const sonido = {
    Inicio: new Audio("./Sounds/inicio.wav")
  };

var btnOpenPopUp = document.getElementById('btn-open-poup');
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');
var btnGame = document.getElementById('btn-submit');

document.addEventListener("DOMContentLoaded", function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    sonido.Inicio.play();
});

btnGame.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    sonido.Inicio.pause();
    //startMusic();
});

function startMusic(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './Sounds/musica.wav');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.volume = 0.06;
    audioElement.play();
};
