size(400,400);

var Tile = function(value) {
    this.value = value;
};

Tile.prototype.draw = function(row,col) {
    
   
    fill(255, 0, 0);
    rect(col*90+25, row*90+45, 80,80,10);
    
    fill(255, 255, 255);
    noStroke(); 
    textSize(40);
    textAlign(CENTER, CENTER);
    text(this.value,col*90+20,row*90+30,90,90);
};



var Grid = function() {
    
    this.tiles = [
        [null,null,null,null],
        [null,null,null,null],
        [null,null,null,null],
        [null,null,null,null]
      ];
    
    for (var n = 1; n < 16; n++) {
        var row = 3; 
        var col = 3;
        while ((row === 3 && col === 3) || this.tiles[row][col] !== null) {
            row = floor(random(0,4));
            col = floor(random(0,4));   
        }
        this.tiles[row][col] = new Tile(n);
    }
    this.cRow = 3;
    this.cCol = 3;
    this.moves = 0;


};

Grid.prototype.draw = function() {
    
    background(186, 172, 160);
    var solved = true;
    for (var i = 0; i<4;i++) {
        for (var j=0;j<4;j++) {
            if (this.tiles[i][j]!==null) {
                this.tiles[i][j].draw(i,j);
                solved = solved && this.tiles[i][j].value === i*4+j+1;
            }
        }
    }
    
    if (solved) {
        fill(255, 255, 255);
        textSize(40);
        text("You Rock!", 10,10,380,330);
    }
};

Grid.prototype.moveLeft = function() {
    if (this.cCol !== 0) {
        var t = this.tiles[this.cRow][this.cCol-1];
        this.tiles[this.cRow][this.cCol-1] = this.tiles[this.cRow][this.cCol];
        this.tiles[this.cRow][this.cCol] = t;
        this.cCol = this.cCol -1;
        this.moves ++;
    }
    
};

Grid.prototype.moveRight = function() {
    if (this.cCol !== 3) {
        var t = this.tiles[this.cRow][this.cCol+1];
        this.tiles[this.cRow][this.cCol+1] = this.tiles[this.cRow][this.cCol];
        this.tiles[this.cRow][this.cCol] = t;
        this.cCol = this.cCol + 1;
        this.moves ++;
    }
   
};

Grid.prototype.moveUp = function() {
    if (this.cRow !== 0) {
        var t = this.tiles[this.cRow-1][this.cCol];
        this.tiles[this.cRow-1][this.cCol] = this.tiles[this.cRow][this.cCol];
        this.tiles[this.cRow][this.cCol] = t;
        this.cRow = this.cRow -1;
        this.moves ++;
    }
    
};

Grid.prototype.moveDown = function() {
    if (this.cRow !== 3) {
        var t = this.tiles[this.cRow+1][this.cCol];
        this.tiles[this.cRow+1][this.cCol] = this.tiles[this.cRow][this.cCol];
        this.tiles[this.cRow][this.cCol] = t;
        this.cRow = this.cRow+1;
        this.moves ++;
    }
    
};
Grid.prototype.touch = function() {
    if (mouseY < 40 || mouseX < 20 || mouseX > 380) {
        return;
    }
    var row = floor((mouseY - 40 ) / 90);
    var col = floor((mouseX -20) / 90);
    if (row === this.cRow) {
        if (col - this.cCol === 1 || col - this.cCol === -1) {
            var t = this.tiles[row][col];
            this.tiles[row][col] = this.tiles[row][this.cCol];
            this.tiles[row][this.cCol] = t;
            this.cCol = col;
            this.moves ++;
        }
    } else if (col === this.cCol) {
        if (row - this.cRow === 1 || row - this.cRow === -1) {
            var t = this.tiles[row][col];
            this.tiles[row][col] = this.tiles[this.cRow][col];
            this.tiles[this.cRow][col] = t;
            this.cRow = row;
            this.moves ++;
        }
        
    }
};

var grid = new Grid();


var msg = "";

draw = function() {
     grid.draw();
     fill(255, 255, 255);
     textSize(20);
     text("# moves: "+grid.moves,0,5,380,40);
};

mousePressed = function() {
    grid.touch();
};

keyReleased = function() {
    msg = "";
    switch (keyCode) {
        case 32: //space
           // grid.mode = 1 - grid.mode;
            break;
        case 37: 
            grid.moveLeft();
            break;
        case 38:
            grid.moveUp();
            break;
        case 40:
            grid.moveDown();
            break;
        case 39:
            grid.moveRight();
            break;
        default:
            break;
    }
    
};
