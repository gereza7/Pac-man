var btnOpenPopUp = document.getElementById('btn-open-poup');
var overlay = document.getElementById('overlay');
var popup = document.getElementById('popup');
var btnGame = document.getElementById('btn-submit');

document.addEventListener("DOMContentLoaded", function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnGame.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
    
});