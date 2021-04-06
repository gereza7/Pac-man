function startMusic(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './Sounds/musica.wav');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.volume = 0.06;
    audioElement.play();
};

function stopMusic(){
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './Sounds/musica.wav');
    audioElement.setAttribute('autoplay', 'autoplay');
    audioElement.volume = 0.06;
    audioElement.pause();
};