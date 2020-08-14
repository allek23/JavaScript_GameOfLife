class Cell {
    
    static cellSize = 25;

    constructor(x,y,alive) {
        this.x = x;
        this.y = y;
        this.alive = alive;
    }

    printData() {
        console.log('x:' + this.x + ',y;' + this.y + ',alive:' + this.alive);
    }

    getCellSize() {
        return Cell.cellSize;
    }
    
    getIsAlive() {
        return this.alive;
    }
    
    setCellAlive() {
        this.alive = true;
    }
    
    setCellDead() {
        this.alive = false;
    }
    
    getAliveNeighbors(cellArray) {
        let aliveNeighbors = 0;
        for( let i = this.x - 1; i <= this.x +1 ;i++ ) {
            for( let j = this.y - 1; j <= this.y + 1; j++) {
                let xi = i;
                let yj = j;
                if( i < 0 ) {
                    xi = i + 20;
                }
                if( i > 19 ) {
                    xi = i - 20;
                }
                if( j < 0 ) {
                    yj = j + 20;
                }
                if( j > 19 ) {
                    yj = j - 20;
                }
                 if( xi == this.x && yj == this.y ) {
                     continue;
                 }
                let cell = cellArray[xi][yj];
                if( cell.getIsAlive() ) {
                    aliveNeighbors++;
                 }
            }
        }
        return aliveNeighbors;
    }
    
    
}

