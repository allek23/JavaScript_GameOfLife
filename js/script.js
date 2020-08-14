//comment
let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let cellArray = [];
let newCellArray = [];
drawBoard();
initiateCells();
drawCells();
let button = document.getElementById('button');
button.addEventListener('click',nextMove,false);

function nextMove() {
    calcNewGeneration();
    drawCells();
}

function drawBoard() {
    context.strokeStyle = 'white';
    let boardHeight = 500;
    let boardWidth = 500;
    let index = 0;
    while( index < boardHeight ) {
        context.beginPath();
        context.moveTo(0,index);
        context.lineTo(boardWidth,index);
        context.stroke();
        index += 25; 
    }
    index = 0;
    while( index < boardWidth ) {
        context.beginPath();
        context.moveTo(index,0);
        context.lineTo(index, boardHeight);
        context.stroke();
        index += 25; 
    }
    
}

function initiateCells() {
    for(let i = 0;i < 20; i++ ) {
        cellArray[i] = [];
        for(let j = 0; j < 20; j++) {
            let randomNum = Math.random();
            if( randomNum > 0.7 ) {
                cellArray[i][j] = new Cell(i,j,true);
            } else {
                cellArray[i][j] = new Cell(i,j,false);
            }
        }
    }
}

function drawCells() {
    for( let i = 0;i < cellArray.length; i++ ) {
        for( let j = 0; j < cellArray.length; j++ ) {
            let cell = cellArray[i][j];
            if( cell.getIsAlive() === true ) {
                context.fillStyle = 'green';
            } else {
                context.fillStyle = 'black';
            }
            context.fillRect((1 + (i * 25)),(1 + (j * 25)),23,23);
        }
    }
}

function calcNewGeneration() {
   for(let i = 0;i < 20; i++ ) {
        newCellArray[i] = [];
        for(let j = 0; j < 20; j++) {
            let cell = cellArray[i][j];
            newCellArray[i][j] = new Cell(i,j,cell.getIsAlive());
        }
    }
    for( let i = 0; i < cellArray.length; i++ ) {
        for( let j = 0; j < cellArray.length; j++) {
            let cell = cellArray[i][j];
            let neighborsAlive = cell.getAliveNeighbors(cellArray);
            if( cell.getIsAlive() === true ) {
                if( neighborsAlive < 2 ) {
                    newCellArray[i][j].setCellDead();
                }
                if( neighborsAlive > 3 ) {
                    newCellArray[i][j].setCellDead();
                }
            }
                if( cell.getIsAlive() === false ) {
                    if( neighborsAlive === 3 ) {                     
                        newCellArray[i][j].setCellAlive();
                    }
              }
        }
    }
     for(let i = 0;i < 20; i++ ) {
         for(let j = 0; j < 20; j++) {
             cellArray[i][j] = newCellArray[i][j];
         }
     }
}







