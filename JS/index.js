mapsPacMan = [
    { 
        map :[
              [4,4,4,4,4,4,4,4,4,4],
              [4,2,3,3,3,3,3,3,3,4],
              [4,3,3,3,3,3,3,3,3,4],
              [4,3,3,3,4,3,3,3,3,4],
              [4,3,3,3,4,3,3,3,3,4],
              [3,3,3,3,4,4,4,3,3,3],
              [4,3,3,3,3,3,3,5,3,4],
              [4,3,2,3,4,4,4,3,3,4],
              [4,2,3,3,3,3,3,3,2,4],
              [4,4,4,4,4,4,4,4,4,4]     
            ],
        sizeX: 10,
        sizeY: 10
    },
    { 
        map :[
              [2,3,3,3,3,3,3,3,3,2],
              [3,3,3,3,3,3,3,3,3,3],
              [3,3,3,3,3,3,3,3,3,3],
              [3,3,3,3,4,3,3,3,3,3],
              [3,3,3,3,4,3,3,3,3,3],
              [3,3,3,3,3,3,3,3,3,3],
              [3,3,3,3,3,3,3,5,3,3],
              [3,3,2,3,4,4,4,3,3,3],
              [3,3,3,3,3,3,3,3,3,3],
              [2,3,3,3,3,3,3,3,3,2],
              [3,3,3,3,4,3,3,3,3,3],
              [3,3,3,3,4,3,3,3,3,3],
              [3,3,3,3,4,4,4,3,3,3],
              [3,3,3,3,3,3,3,5,3,3],
              [3,3,2,3,3,3,3,3,3,3],    
            ],
        sizeX: 15,
        sizeY: 10
    },
    { 
        map :[
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
            [4,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,4],
            [4,2,4,4,3,4,4,4,3,4,3,4,4,4,3,4,4,2,4],
            [4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],
            [4,3,4,4,3,4,3,4,4,4,4,4,3,4,3,4,4,3,4],
            [4,3,3,3,3,4,3,3,3,4,3,3,3,4,3,3,3,3,4],
            [4,4,4,4,3,4,4,4,3,4,3,4,4,4,3,4,4,4,4],
            [4,4,4,4,3,4,3,3,3,3,3,3,3,4,3,4,4,4,4],
            [4,4,4,4,3,4,3,4,4,4,4,4,3,4,3,4,4,4,4],
            [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
            [4,4,4,4,3,4,3,4,4,4,4,4,3,4,3,4,4,4,4],
            [4,4,4,4,3,4,3,3,3,3,3,3,3,4,3,4,4,4,4],
            [4,4,4,4,3,4,3,4,4,4,4,4,3,4,3,4,4,4,4],
            [4,3,3,3,3,3,3,3,3,4,3,3,3,3,3,3,3,3,4],
            [4,2,4,4,3,4,4,4,3,4,3,4,4,4,3,4,4,2,4],
            [4,3,3,4,3,3,3,3,3,3,3,3,3,3,3,4,3,3,4],
            [4,4,3,4,3,4,3,4,4,4,4,4,3,4,3,4,3,4,4],
            [4,3,3,3,3,4,3,3,3,4,3,3,3,4,3,3,3,3,4],
            [4,3,4,4,4,4,4,4,3,4,3,4,4,4,4,4,4,3,4],
            [4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4],
            [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],    
            ],
        sizeX: 21,
        sizeY: 19
    },
   
];

const idx=2;
const level1 = mapsPacMan[idx].map;

const sizeX = mapsPacMan[idx].sizeX;
const sizeY = mapsPacMan[idx].sizeY;

const wakawaka = {
    soundWaka: new Audio("./Sounds/wakawaka.mp3")
  };

const BigBallSound = {
    sound: new Audio("./Sounds/BigPointSound.mp3")
  };

var points = 0;
var idTimeOut;
var lifes = 3;

var pause = false;

const life = document.querySelector("vida")
const drawLife = `<img class="imgVida" src="../images/vida.png"/>`;

const pointSmallBall = 10;
const drawSmallBall = `<svg height="10" width="10"><circle cx=3 cy=3 r="3" fill="white"/></svg>`

const pointBigBall = 100;
const drawBigBall = `<svg height="10" width="10"><circle cx=5 cy=5 r="6" fill="green"/></svg>`;

const pointGhost=150;
const drawRedGhost = `<svg height="10" width="10"><circle cx=5 cy=5 r="6" fill="red"/></svg>`;
const drawPinkGhost = `<svg height="10" width="10"><circle cx=5 cy=5 r="6" fill="pink"/></svg>`;
const drawOrangeGhost = `<svg height="10" width="10"><circle cx=5 cy=5 r="6" fill="orange"/></svg>`;
const drawPurpleGhost = `<svg height="10" width="10"><circle cx=5 cy=5 r="6" fill="purple"/></svg>`;
const pacman = {
    pos: { x: 3, y: 3 },
    posInit: { x: 3, y: 3 },
    dir: 3, // 0=up, 1=right, 2=down, 3=left
    invencible: false,
}


const ghosts = [
    { 
        dir: 1, 
        pos:{ x: 13, y: 1 },
        posInit:{x: 13, y: 1},
        color: "red",
        dead: false,
    },
    { 
        dir: 0, 
        pos:{x: 9, y: 15},
        posInit:{x: 9, y: 15},
        color: "orange",
        dead: false,
    },
    { 
        dir: 3, 
        pos:{x: 5, y: 4},
        posInit:{x: 5, y: 4},
        color: "pink",
        dead: false,
    },
    { 
        dir: 3, 
        pos:{x: 9, y: 10},
        posInit:{x: 9, y: 10},
        color: "purple",
        dead: false,
    }
]

// const ghost = {
//     pos: { x: 11, y: 7 },
//     dir: 0, // 0=up, 1=right, 2=down, 3=left
// };

function createBoard() { //Dibujar tablero
   const board = document.getElementById("board");
   level1.forEach((line, idx) => {
        var row = document.createElement("tr");
        row.classList.add(`row${idx + 1}`);

        line.forEach((el, i) => {
            let square = document.createElement("td");
            square.classList.add(`col${i + 1}`);
            if (el === 2) {
                square.classList.add("bigBall");
            } 
            if (el === 3) {
                square.classList.add("smallBall");
            }
            if (el === 4) {
                square.classList.add("wall");
            }
            // if (el === 5) {
            //     square.classList.add("redGhostRight");
            // }
            // if (el === 6) {
            //     square.classList.add("pinkGhostRight");
            // }
            row.appendChild(square);
        });
        board.appendChild(row);
    });
}



//Conectar HTML con JS
var board = new Array(sizeX).fill(null).map((e) => new Array(sizeY).fill(null));

function clearStyles(elem){
    elem.classList.remove("pacman");
    elem.classList.remove("bigBall");
    elem.classList.remove("smallBall");
    elem.classList.remove("pup");
    elem.classList.remove("pright");
    elem.classList.remove("pdown");
    elem.classList.remove("pleft");
    elem.classList.remove("pupBlue");
    elem.classList.remove("prightBlue");
    elem.classList.remove("pdownBlue");
    elem.classList.remove("pleftBlue");
    elem.classList.remove("redGhost");
    elem.classList.remove("redGhostRight");
    elem.classList.remove("redGhostUp");
    elem.classList.remove("redGhostDown");
    elem.classList.remove("redGhostLeft");
    elem.classList.remove("orangeGhost");
    elem.classList.remove("orangeGhostRight");
    elem.classList.remove("orangeGhostUp");
    elem.classList.remove("orangeGhostDown");
    elem.classList.remove("orangeGhostLeft");
    elem.classList.remove("pinkGhost");
    elem.classList.remove("pinkGhostRight");
    elem.classList.remove("pinkGhostUp");
    elem.classList.remove("pinkGhostDown");
    elem.classList.remove("pinkGhostLeft");
    elem.classList.remove("purpleGhost");
    elem.classList.remove("purpleGhostRight");
    elem.classList.remove("purpleGhostUp");
    elem.classList.remove("purpleGhostDown");
    elem.classList.remove("purpleGhostLeft");
    elem.innerHTML = ''
}
function printBoard() {
    board.forEach((row, r) => {
        row.forEach((col, c) => {
            const elem = document.querySelector(`.row${r + 1}>.col${c + 1}`);
            function facePacman (){
                switch(pacman.dir){
                    case 0: if(pacman.invencible){
                        elem.classList.add("pupBlue");
                    }else {
                        elem.classList.add("pup");
                    } break; 
                    case 1:if(pacman.invencible){
                        elem.classList.add("prightBlue");
                    }else {
                        elem.classList.add("pright");
                    } break;
                    case 2: if(pacman.invencible){
                        elem.classList.add("pdownBlue");
                    }else {
                        elem.classList.add("pdown");
                    } break;
                    case 3:if(pacman.invencible){
                        elem.classList.add("pleftBlue");
                    }else {
                        elem.classList.add("pleft");
                    } break;
                }
            }

            function ghostFace(ghostElement, color){
                switch(ghostElement){
                    case 0: elem.classList.add(color + "GhostUp"); break;
                    case 1: elem.classList.add(color + "GhostRight"); break;
                    case 2: elem.classList.add(color + "GhostDown"); break;
                    case 3: elem.classList.add(color + "GhostLeft"); break;
                }
            }
            
            clearStyles(elem);

            if (board[r][c] === 0 && pacman.pos.x === r && pacman.pos.y === c) {
                elem.classList.add("pacman");
                facePacman();
            }
            // if (board[r][c] === 1) {
            //     elem.classList.add("pacman");
            //     facePacman();
            // }
            if (board[r][c] === 2) {
                elem.classList.add("bigBall");
                elem.innerHTML = drawBigBall;

            }
            if (board[r][c] === 3) {
                elem.classList.add("smallBall");
                elem.innerHTML = drawSmallBall;
            }
            if (board[r][c] === 4) {
                elem.classList.add("wall");
            }
            // if(board[r][c] === 5) { // ghost RED
            //     elem.classList.add("redGhost");
            //     ghostFace(ghost.dir, "red");
            // }
            
            if (ghosts[0].pos.x === r && ghosts[0].pos.y === c && !ghosts[0].dead) {
                elem.classList.add("redGhost");
                ghostFace(ghosts[0].dir, "red");
            }
            if (ghosts[1].pos.x === r && ghosts[1].pos.y === c && !ghosts[1].dead) {
                elem.classList.add("orangeGhost");
                ghostFace(ghosts[1].dir, "orange");
            }
            if (ghosts[2].pos.x === r && ghosts[2].pos.y === c && !ghosts[2].dead) {
                elem.classList.add("pinkGhost");
                ghostFace(ghosts[2].dir, "pink");
            }
            if (ghosts[3].pos.x === r && ghosts[3].pos.y === c && !ghosts[3].dead) {
                elem.classList.add("purpleGhost");
                ghostFace(ghosts[3].dir, "purple");
            }

        });
    });
}


function movePacman() {
    // pacman.dir ==> 0=up, 1=right, 2=down, 3=left
    const newPacman = { x: pacman.pos.x, y: pacman.pos.y };

    if (pacman.dir === 0) {
        if(!(board[pacman.pos.x - 1][pacman.pos.y] === 4)) {
            if (!(pacman.pos.x === 0) ) {
                newPacman.x = pacman.pos.x - 1;
            } else {
                newPacman.x = sizeX - 1;
            }
        }
 
    }
    if (pacman.dir === 1) {
        if(!(board[pacman.pos.x][pacman.pos.y + 1] === 4)){
          if(!(pacman.pos.y === sizeY - 1)) {
            newPacman.y = pacman.pos.y + 1
          } else {
            newPacman.y = 0;
          }
        }
    }

    if (pacman.dir === 2) {
        if(!(board[pacman.pos.x + 1][pacman.pos.y] === 4)){
            if (!(pacman.pos.x === sizeX - 1)) {
                newPacman.x = pacman.pos.x + 1
            } else {
                newPacman.x = 0;
            }
        }
        

    }
    if (pacman.dir === 3) {
        if(!(board[pacman.pos.x][pacman.pos.y - 1] === 4)) {
            if (!(pacman.pos.y === 0)) {
                newPacman.y = pacman.pos.y - 1;
            } else {
                newPacman.y = sizeY - 1;
            }
        }
    }

    pacman.pos = newPacman
}

// function gCanUp(g){
//     if(!(g.pos.x === 0) && !(board[g.pos.x - 1][g.pos.y] === 4)) {
//         return true;
//     } else  return false;
// }



function moveGhost(ghost) {
    // ghost.dir ==> 0=up, 1=right, 2=down, 3=left

    const newGhost = { x: ghost.pos.x, y: ghost.pos.y };

    if (ghost.dir === 0) {
        // if(!(board[ghost.pos.x - 1][ghost.pos.y] === 4)){
            if (!(ghost.pos.x === 0)) {
                newGhost.x = ghost.pos.x - 1
            } else {
                newGhost.x = sizeX - 1;
            }
        // }
    }

    if (ghost.dir === 1) {
        // if(!(board[ghost.pos.x][ghost.pos.y + 1] === 4)){
            if (!(ghost.pos.y === sizeY - 1)) {
                newGhost.y = ghost.pos.y + 1
            } else {
                newGhost.y = 0;
            }
        // }
    }

    if (ghost.dir === 2) {
        // if(!(board[ghost.pos.x + 1][ghost.pos.y] === 4)){
            if (!(ghost.pos.x === sizeX - 1)) {
                newGhost.x = ghost.pos.x + 1
            } else {
                newGhost.x = 0;
            }
        // }
    }

    if (ghost.dir === 3) {
        // if(!(board[ghost.pos.x][ghost.pos.y - 1] === 4)) {
            if (!(ghost.pos.y === 0)) {
                newGhost.y = ghost.pos.y - 1
            } else {
                newGhost.y = sizeY - 1;
            }
        // }
       
    }
    ghost.pos = newGhost
}

function moveAllGhosts(){
    for (var i = 0; i < ghosts.length; i++){
        moveGhost(ghosts[i])
    }
}

const gCanUp = g => (!(g.pos.x === 0) && !(board[g.pos.x - 1][g.pos.y] === 4));
const gCanRight = g => (!(g.pos.y === sizeY - 1) && !(board[g.pos.x][g.pos.y + 1] === 4));
const gCanDown = g => (!(g.pos.x === sizeX - 1) && !(board[g.pos.x + 1][g.pos.y] === 4));
const gCanLeft = g =>(!(g.pos.y === 0) && !(board[g.pos.x][g.pos.y - 1] === 4));

function newDirectionGhost(){
    ghosts.forEach(function(g){
        const position = [
            g.dir !== 2 && gCanUp(g) ? 1 : 0,    // sino va para abajo pero puede ir arriba
            g.dir !== 3 && gCanRight(g) ? 1 : 0, // sino va a la izq pero puede ir a la der
            g.dir !== 0 && gCanDown(g) ? 1 : 0,  // sino va para arriba pero puede ir abajo
            g.dir !== 1 && gCanLeft(g) ? 1 : 0   // sino va a la der pero puede ir a la izq
        ];
    
        const sum=position.reduce((a,b) => a+b);  
        // Obtenemos un numero aleatorio entre los posibles movimientos
        const random=Math.floor(Math.random() * sum);

        // Devolvemos el siguiente movimiento del fantasma [0-up|1-right|2-down|3-left]
        for (let i=0, pos=-1; i<position.length; i++) {
            pos = position[i] ===1 ? pos+1 : pos;
            if (pos === random) {
                g.dir = i;
                break;     
            }  
        }
    });
    // for(var i = 0; i < ghosts.length; i++){
    //     ghosts[i].dir = Math.floor(Math.random() * 4);
    // }
} 

function invenciblePacman(){
    pacman.invencible = true
    setTimeout(function(){
        pacman.invencible = false
    }, 30000)
}

function checkEat() {
    if (board[pacman.pos.x][pacman.pos.y] === 3) {
        board[pacman.pos.x][pacman.pos.y] = 0;
        increasePoints(pointSmallBall);
        wakawaka.soundWaka.play();

    }
    if (board[pacman.pos.x][pacman.pos.y] === 2) {
        board[pacman.pos.x][pacman.pos.y] = 0;
        increasePoints(pointBigBall);
        BigBallSound.sound.play();
        invenciblePacman();
    }
}

function eatGhost(){
    for(var i = 0; i < ghosts.length; i++){
        isPacmanDead(ghosts[i])
    }
}

// AUDIO
var x = document.getElementById("audioPrincipal");
function pauseAudio(){
    x.pause();
}

const gameOverSound = {
    Inicio: new Audio("./Sounds/gameOver.mp3")
  };

  var aud = document.getElementById("audioPrincipal");
  

  function enableMute() { 
    aud.muted = true;
  } 
  
  function disableMute() { 
    aud.muted = false;
  } 

  var imagenVolumen = "On";

//   function volume(){
//       var imagen = document.getElementById("foto1");
//       if(imagenVolumen == "On"){
//           imagen.src = "./images/Play.png";
//           imagenVolumen = "Pause";
//       }
//       else {
//           imagen.src = "./images/Pause.png";
//           imagenVolumen = "On"
//       }
//   }
  //
  
function isPacmanDead(ghost){
    if (ghost.pos.x === pacman.pos.x && ghost.pos.y === pacman.pos.y && !pacman.invencible && !ghost.dead) {
        lifes--
        removeLifes()
        cancelAnimationFrame(timerId);
        pause = true;
        pacman.pos.x = pacman.posInit.x
        pacman.pos.y = pacman.posInit.y
        setTimeout(function(){
            pause = false
            timerId = requestAnimationFrame(animate)
        }, 1000)
        if(lifes === 0) {
            cancelAnimationFrame(timerId);
            swal("GAME OVER", "DO YOU WANT TO PLAY AGAIN?", "error").then(function() {
                window.location = "index.html";
            });
            pauseAudio();
            gameOverSound.Inicio.play();
            
            // se acabo el juego
        } else {
            // esperar unos segundos y reiniciar el juego con una vida menos
            //setTimeout(startLevel(), 1000);
        }
    } else if (ghost.pos.x === pacman.pos.x && ghost.pos.y === pacman.pos.y && pacman.invencible && !ghost.dead) {
        ghost.dead = true
        const elem = document.querySelector(`.row${ghost.pos.x + 1}>.col${ghost.pos.y + 1}`);
            elem.classList.remove(ghost.color + "Ghost");
            elem.classList.remove(ghost.color + "GhostRight");
            elem.classList.remove(ghost.color + "GhostUp");
            elem.classList.remove(ghost.color + "GhostDown");
            elem.classList.remove(ghost.color + "GhostLeft");
        points += 500;
        setTimeout(function(){
            ghost.pos.x = ghost.posInit.x
            ghost.pos.y = ghost.posInit.y
            ghost.dead = false
        }, 5000)
    }
}

function cleanBoard() {
    // Limpiar el board
    board = new Array(sizeX).fill(null).map((e) => new Array(sizeY).fill(null));
}

function checkLifes(){
    //lifes-- ;
    document.getElementById("life").innerText = lifes;
}

function printLifes(){
    for(var i = 0; i < lifes; i++){
        document.getElementById("life").appendChild(document.createElement("div")).innerHTML= drawLife;
    }
}

function removeLifes(){
    document.getElementById("life").lastChild.remove() //lastChild(document.createElement("life")).= drawLife;
}

function pushSmallBall() {
    for(var i=0; i < sizeX; i++ ) {
        for(var j=0; j < sizeY; j++) {
      
          if(level1[i][j] === 3) {
            board[i][j]  = 3; 
      }
        }
      }
}

function pushBigBall() {
    for(var i=0; i < sizeX; i++ ) {
        for(var j=0; j < sizeY; j++) {
      
          if(level1[i][j] === 2) {
            board[i][j]  = 2; 
      }
        }
      }
}

function pushWall() {
    for(var i=0; i < sizeX; i++ ) {
        for(var j=0; j < sizeY; j++) {
      
          if(level1[i][j] === 4) {
            board[i][j] = 4; 
      }
        }
      }
}



function newPosition() {
    movePacman();
    newDirectionGhost();
    moveAllGhosts()
    eatGhost();
    checkEat(); // cambio el estado de Board

}

function increasePoints(increaseBall) {
    points += increaseBall;
    document.getElementById("points").innerText = points;
}

function gameOver() {
    var lengtSBall=document.querySelectorAll(".smallBall").length;
    var lengtBBall=document.querySelectorAll(".bigBall").length;

    if( lengtSBall === 0 && lengtBBall === 0 )  {
        alert("You WIN!!!!");
        clearTimeOut(idTimeOut);
        wakawaka.soundWaka.pause();
    }
  
}

function animate() {
    idTimeOut = setTimeout(function () { //Velocidad de movimiento del PAC-MAN
        //cleanBoard();
        newPosition();
        printBoard();
        //pushGhost(); //Fantasma
        //Averiguar si no hay mas bolas blancas
        //Puede ser buscando en el Board o Por la puntuación
        gameOver();
        if (lifes > 0 && !pause){
            timerId = requestAnimationFrame(animate);
        }
    }, 300)
}

function startLevel() {
    printLifes();
    createBoard();
    pushWall(); // Muro
    pushSmallBall();// Bola pequeña
    pushBigBall(); //Bola grande
}

var timerId

document.addEventListener("keydown", function (event) {
    if (event.code === "ArrowUp") {
        pacman.dir = 0;
    }
    if (event.code === "ArrowRight") {
        pacman.dir = 1;
    }
    if (event.code === "ArrowDown") {
        pacman.dir = 2;
    }
    if (event.code === "ArrowLeft") {
        pacman.dir = 3;
    }
});