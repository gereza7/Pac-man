const soundStarts = {
    pacmanBegin: new Audio("./Sounds/inicio.wav")
  };
var btnOpenPopUp = document.getElementById('btn-open-poup');
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');
var btnGame = document.getElementById('btn-submit');

document.addEventListener("DOMContentLoaded", function(){
    overlay.classList.add('active');
    popup.classList.add('active');
    soundStarts.pacmanBegin.play();
});

btnGame.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');  
    soundStarts.pacmanBegin.pause();
});

