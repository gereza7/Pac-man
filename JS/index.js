mapsPacMan = [
    { 
        map :[
              [2,3,3,3,3,3,3,3,3,2],
              [3,3,3,3,3,3,3,3,3,3],
              [3,3,3,3,3,3,3,3,3,3],
              [3,3,3,3,4,3,3,3,3,3],
              [3,3,3,3,4,3,3,3,3,3],
              [3,3,3,3,4,4,4,3,3,3],
              [3,3,3,3,3,3,3,5,3,3],
              [3,3,2,3,4,4,4,3,3,3],
              [3,3,3,3,3,3,3,3,3,3],
              [2,3,3,3,3,3,3,3,3,2]     
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
            [3,3,3,3,3,3,3,4,5,6,7,4,3,3,3,3,3,3,3],
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


var myMusic;
var points = 0;
var idTimeOut;
var lifes = 3;

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

const pacman = {
    pos: { x: 3, y: 3 },
    dir: 3, // 0=up, 1=right, 2=down, 3=left
};

const ghosts = {
    redGhost :    { dir: 1, x: 9, y: 7, color:"red"},
    pinkGhost :   { dir: 3, x: 9, y: 7, color:"pink"},
    purpleGhost : { dir: 3, x: 9, y: 7, color:"purple"},
    orangeGhost : { dir: 3, x: 9, y: 7, color:"orange"},
    }


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
            if (el === 5) {
                square.classList.add("redGhostRight");
            }
            if (el === 6) {
                square.classList.add("pinkGhostRight");
            }
            row.appendChild(square);
        });
        board.appendChild(row);
    });
}



//Conectar HTML con JS
var board = new Array(sizeX).fill(null).map((e) => new Array(sizeY).fill(null));

function printBoard() {
    board.forEach((row, r) => {
        row.forEach((col, c) => {
            const elem = document.querySelector(`.row${r + 1}>.col${c + 1}`);
            function facePacman (){
                switch(pacman.dir){
                    case 0: elem.classList.add("pup"); break;
                    case 1: elem.classList.add("pright"); break;
                    case 2: elem.classList.add("pdown"); break;
                    case 3: elem.classList.add("pleft"); break;
                }
            }

            function ghostFaceRed(){
                switch(ghosts.redGhost.dir){
                    case 0: elem.classList.add("redGhostUp"); break;
                    case 1: elem.classList.add("redGhostRight"); break;
                    case 2: elem.classList.add("redGhostDown"); break;
                    case 3: elem.classList.add("redGhostLeft"); break;
                }
            }

            function ghostFacePink(){
                switch(ghosts.pinkGhost.dir){
                    case 0: elem.classList.add("pinkGhostUp"); break;
                    case 1: elem.classList.add("pinkGhostRight"); break;
                    case 2: elem.classList.add("pinkGhostDown"); break;
                    case 3: elem.classList.add("pinkGhostLeft"); break;
                }
            }
            function ghostFaceOrange(){
                switch(ghosts.orangeGhost.dir){
                    case 0: elem.classList.add("orangeGhostUp"); break;
                    case 1: elem.classList.add("orangeGhostRight"); break;
                    case 2: elem.classList.add("orangeGhostDown"); break;
                    case 3: elem.classList.add("orangeGhostLeft"); break;
                }
            }
            elem.classList.remove("pacman");
            elem.classList.remove("bigBall");
            elem.classList.remove("smallBall");
            elem.classList.remove("pup");
            elem.classList.remove("pright");
            elem.classList.remove("pdown");
            elem.classList.remove("pleft");
            elem.classList.remove("redGhost");
            elem.classList.remove("orangeGhost");
            elem.classList.remove("pinkGhost");
            elem.classList.remove("redGhostRight");
            elem.classList.remove("pinkGhostRight");
            elem.classList.remove("orangeGhostRight");
            elem.innerHTML = ''

            if (board[r][c] === 0 && pacman.pos.x === r && pacman.pos.y === c) {
                elem.classList.add("pacman");
                facePacman();
            }
            if (board[r][c] === 1) {
                elem.classList.add("pacman");
                facePacman();
            }
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
            if(board[r][c] === 5) { // ghost RED
                elem.classList.add("redGhost");
                ghostFaceRed();
            }
            if(board[r][c] === 6) { // ghost PINK
                elem.classList.add("pinkGhost");
                ghostFacePink();
            }
            if(board[r][c] === 7) { // ghost ORANGE
                elem.classList.add("orangeGhost");
                ghostFaceOrange();
            }

        });
    });
}


function movePacman() {
    // pacman.dir ==> 0=up, 1=right, 2=down, 3=left
    const newPacman = { x: pacman.pos.x, y: pacman.pos.y };

    if (pacman.dir === 0) {
        if (!(pacman.pos.x === 0) && !(board[pacman.pos.x - 1][pacman.pos.y] === 4)) {
            newPacman.x = pacman.pos.x - 1
        }

    }
    if (pacman.dir === 1) {
        if (!(pacman.pos.y === sizeY - 1) && !(board[pacman.pos.x][pacman.pos.y + 1] === 4)) {
            newPacman.y = pacman.pos.y + 1
        }

    }
    if (pacman.dir === 2) {
        if (!(pacman.pos.x === sizeX - 1) && !(board[pacman.pos.x + 1][pacman.pos.y] === 4)) {
            newPacman.x = pacman.pos.x + 1
        }

    }
    if (pacman.dir === 3) {
        if (!(pacman.pos.y === 0) && !(board[pacman.pos.x][pacman.pos.y - 1] === 4)) {

            newPacman.y = pacman.pos.y - 1
        }

    }
    pacman.pos = newPacman
}

function checkEat() {
    if (board[pacman.pos.x][pacman.pos.y] === 3) {
        board[pacman.pos.x][pacman.pos.y] = 0;
        increasePoints(pointSmallBall);

    }
    if (board[pacman.pos.x][pacman.pos.y] === 2) {
        board[pacman.pos.x][pacman.pos.y] = 0;
        increasePoints(pointBigBall);
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
    for(var i = 0; i < 3; i++){
        document.getElementById("life").appendChild(document.createElement("div")).innerHTML= drawLife;
    }
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

function pushGhost() {
    for(var i=0; i < sizeX; i++ ) {
        for(var j=0; j < sizeY; j++) {
      
          if(level1[i][j] === 5) {
            board[i][j] = 5; 
      }
      if(level1[i][j] === 6) {
        board[i][j] = 6; 
      }
        if(level1[i][j] === 7) {
            board[i][j] = 7; 
        }
        }
      }
}

function newPosition() {
    movePacman();
    checkEat(); // cambio el estado de Board

    //board[bigBallPosition.y][bigBallPosition.x] = 2; //Bola grande 

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
    }
  
}

function animate() {
    idTimeOut = setTimeout(function () { //Velocidad de movimiento del PAC-MAN
        //cleanBoard();
        newPosition();
        printBoard();
        //Averiguar si no hay mas bolas blancas
        //Puede ser buscando en el Board o Por la puntuación
        gameOver();
        requestAnimationFrame(animate);
    }, 300)
}

function startLevel() {
    printLifes();
    createBoard();
    pushWall(); // Muro
    pushSmallBall();// Bola pequeña
    pushBigBall(); //Bola grande
    pushGhost(); //Fantasma
}
startLevel();
var timerId = requestAnimationFrame(animate);

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
