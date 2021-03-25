const size = 10;
var points = 0;
var idTimeOut;

const pointSmallBall = 10;
const drawSmallBall = `<svg height="10" width="10"><circle cx=3 cy=3 r="3" fill="white"/></svg>`

const pointBigBall = 100;
const drawBigBall = `<svg height="10" width="10"><circle cx=5 cy=5 r="6" fill="green"/></svg>`;

const bigBallPosition = {
    //x: Math.floor(Math.random() * 9),
    //y: Math.floor(Math.random() * 9)
    x: 1,
    y: 1
};

const pacman = {
    pos: { x: 4, y: 4 },
    dir: 3, // 0=up, 1=right, 2=down, 3=left
    length: 1, // number of blocks
};

const level = {
    level1: [
        { x: 3, y: 4 },
        { x: 4, y: 4 },
        { x: 5, y: 4 },
        { x: 5, y: 5 },
        { x: 5, y: 6 },
        { x: 5, y: 7 }
    ]
}

//Conectar HTML con JS
var board = new Array(size).fill(null).map((e) => new Array(size).fill(null));

function printBoard() {
    board.forEach((row, r) => {
        row.forEach((col, c) => {
            const elem = document.querySelector(`.row${r + 1}>.col${c + 1}`);
            elem.classList.remove("pacman");
            elem.classList.remove("bigBall");
            elem.classList.remove("smallBall");
            elem.innerHTML = ''

            if (board[r][c] === 0 && pacman.pos.x === r && pacman.pos.y === c) {
                elem.classList.add("pacman");
            }
            if (board[r][c] === 1) {
                elem.classList.add("pacman");
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
        if (!(pacman.pos.y === size - 1) && !(board[pacman.pos.x][pacman.pos.y + 1] === 4)) {
            newPacman.y = pacman.pos.y + 1
        }

    }
    if (pacman.dir === 2) {
        if (!(pacman.pos.x === size - 1) && !(board[pacman.pos.x + 1][pacman.pos.y] === 4)) {
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
        increasePoints();

    }
    /*
    if( board[pacman.pos.x][pacman.pos.y] === 2 ) {
      board[pacman.pos.x][pacman.pos.y]=0;
      increasePointsBig();
      
    }  */
    /*if (pacman.pos.x === bigBallPosition.x && pacman.pos.y === bigBallPosition.y) {
        increasePointsBig();
        bigBallPosition.x = Math.floor(Math.random() * 9)
        bigBallPosition.y = Math.floor(Math.random() * 9)
      }*/
}

function cleanBoard() {
    // Limpiar el board
    board = new Array(size).fill(null).map((e) => new Array(size).fill(null));
}


function pushSmallBall() {
    board.forEach((row, r) => {
        row.forEach((col, c) => {
            /*
          if((r === size-1 && c === size-1 ) ||
             (r === size-1 && c === 0) ||
             (r === 0 && c === size-1) ||
             (r === 0 && c === 0)
            ) {
            board[r][c]=2;
          }*/
            if (board[r][c] === null)
                board[r][c] = 3;
        }
        )
    })
}
function pushWall() {
    //console.log(level.level1[0].x)
    for (const nivel in level) {
        //console.log(level[nivel])
        var myArray = level[nivel]
        for (var i = 0; i < myArray.length; i++) {
            board[myArray[i].x][myArray[i].y] = 4;
        }

    }

}

function newPosition() {
    movePacman();
    checkEat(); // cambio el estado de Board

    //board[bigBallPosition.y][bigBallPosition.x] = 2; //Bola grande 

}

function increasePoints() {
    points += pointSmallBall;
    document.getElementById("points").innerText = points;
}

function increasePointsBig() {
    points += pointBigBall;
    document.getElementById("points").innerText = points;
}

function gameOver() {
    alert("You WIN!!!!");
    clearTimeOut(idTimeOut);
}

function animate() {
    pushWall();
    idTimeOut = setTimeout(function () { //Velocidad de movimiento del PAC-MAN
        //cleanBoard();
        pushSmallBall();// llenar el tablero
        newPosition();
        printBoard();
        //Averiguar si no hay mas bolas blancas
        //Puede ser buscando en el Board o Por la puntuación
        if (points === 1000) { gameOver() }
        /*if(!board.includes(3)) {
          gameOver();
        }*/
        requestAnimationFrame(animate);
    }, 300)
}

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