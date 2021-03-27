console.log("hola")
const screenDraw=[
    [2,0,0,0,0,0,0,0,0,2],
    [0,3,3,3,3,3,3,3,3,0],
    [0,3,3,3,3,3,3,3,3,0],
    [0,3,3,3,4,3,3,3,3,0],
    [0,3,3,3,4,3,3,3,3,0],
    [0,3,3,3,4,4,4,3,3,0],
    [0,3,3,3,3,3,3,3,3,0],
    [0,3,3,3,3,3,3,3,3,0],
    [0,3,3,3,3,3,3,3,3,0],
    [2,0,0,0,0,0,0,0,0,2]    
];

function createBoard() { //Dibujar tablero
   const board = document.getElementById("board");
console.log(board)
    screenDraw.forEach((line, idx) => {
        var row = document.createElement("div");
        row.classList.add("newLine");
        row.classList.add(`row${idx + 1}`);
        console.log("--", row)
        line.forEach((el, i) => {
            let square = document.createElement("div");
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
            row.appendChild(square);
        });
        //board.appendChild(row);
    });
}
createBoard();