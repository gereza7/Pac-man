const level1 = mapsPacMan[0].map;

/****   DefiniciÃ³n de los fantasmas *****/
const ghosts = {
    redGhost :    { dir: 1, x: 9, y: 7, color:"red"}, // right
    pinkGhost :   { dir: 3, x: 9, y: 7, color:"pink"},
    purpleGhost : { dir: 3, x: 9, y: 7, color:"purple"},
    orangeGhost : { dir: 3, x: 9, y: 7, color:"orange"},
    }

/** FunciÃ³n que determina hacia que direcciÃ³n puede coger el fantasma */

/**
 * Funciones que determinan si el fantasma puede ir hacia arriba, derecha, abajo o izquierda
 *  devuelve valor boolean
 */

/* Cuando el fantasma se mueve hacia */
/* ARRIBA Averiguar si hay un camino en el Mapa puede ser 3 o 2,
          y si no ha llegado al limite (0) */
/* ABAJO  Averiguar si hay un camino en el Mapa puede ser 3 o 2
          y si no ha llegado al limite (SizeX) */
/* DERECHA  Averiguar si hay un camino en el Mapa puede ser 3 o 2
          y si no ha llegado al limite (SizeY )*/
/* IZQUIERDA  Averiguar si hay un camino en el Mapa puede ser 3 o 2
          y si no ha llegado al limite (0)*/

const g=ghosts.redGhost; 
function gCanUp() {
    return level1[g.x-1][g.y] === 3 || level1[g.x-1][g.y] === 2 || g.x !== 0;
}

function gCanRight() {
    return level1[g.x][g.y+1] === 3 || level1[g.x][g.y+1] === 2 || g.y+1 !== sizeY;
}

function gCanDown() {
    return level1[g.x+1][g.y] === 3 || level1[g.x+1][g.y] === 2 || g.x+1 !== sizeX;
}

function gCanLeft() {
    return level1[g.x][g.y-1] === 3 || level1[g.x][g.y-1] === 2 || g.y-1 !== 0;
}

/* FunciÃ³n que da las posibles direcciones que puede tomar los fantasmas */
// 0=up, 1=right, 2=down, 3=left

function NewDirection(){
    /* posibles movimiento */
    const position = [
        g.dir !== 2 && gCanUp(g) ? 1 : 0,    // Si no va para abajo y puede ir hacia arriba
        g.dir !== 3 && gCanRight(g) ? 1 : 0, // Si no va para la izq y puede ir hacia la derecha
        g.dir !== 0 && gCanDown(g) ? 1 : 0,  // Si no va para arriba y puede ir hacia abajo
        g.dir !== 1 && gCanLeft(g) ? 1 : 0   // Si no  va para la der y puede ir hacia la izq
    ];

    const sum=position.reduce((a,b) => a+b);

    // Obtenemos un numero aleatorio entre los posibles movimientos
    const random=Math.floor(Math.random() * sum);

     // Devolvemos el siguiente movimiento del fantasma [0-up|1-right|2-down|3-left]
     for (let i=0, pos=-1; i<position.length; i++) {
        pos = position[i] === 1 ? pos+1 : pos;
        if (pos === random) {
            return i     
        }  
    }

}


// Si la posicion del fantasma es la misma que la de pacman

function checkCollision(){
    if (g.y === pacman.pos.y && g.x === pacman.pos.x) {
        checkGame();
    }
}

function gameOver(){
    //alert("You Loose!!!!");
    ///clearTimeOut(idTimeOut);
}

function checkGame() {
    var lengtSBall=document.querySelectorAll(".smallBall").length;
    var lengtBBall=document.querySelectorAll(".bigBall").length;

    if( lengtSBall === 0 && lengtBBall === 0 )  {
        alert("You WIN!!!!");
        clearTimeOut(idTimeOut);
    } else {
        // Pierder una vida 
        // Verificar que todavia me quedan vidas en caso contrario 
        // Game Over
        //Detener movimiento de los fantasmas
        life -= 1; // restar una vida
        if(life <= 0)  { 
            gameOver();
        } else {
            //Reiniciar el juego con una vida menos
             
        }
    }
}
