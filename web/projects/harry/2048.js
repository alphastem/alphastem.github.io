size(400,400);

//TODO: 
//1. Moving
//2. Merge
//3. Sound
//4. Scene

var msg = "";
var COLORS = [
    color(238, 228, 219),
    color(238, 225, 202),
    color(242, 178, 126),
    color(244, 150, 105),
    color(245, 124, 99),
    color(244, 94, 67),
    color(236, 205, 119),
    color(236, 203, 107),
    color(234, 192, 92),
    color(235, 194, 78),
    color(235, 191, 62)
  ];

var Tile = function(value) {
    this.value = value;
};

Tile.prototype.draw = function(row,col) {
    var color = COLORS[Math.log2(this.value)-1];
    fill(color);
    rect(col*100+5, row*100+5, 90,90,10);
    fill(255, 255, 255);
    noStroke();
    textSize(60);
    textAlign(CENTER, CENTER);
    text(this.value,col*100+5,row*100-15,90,100);
};


var Grid = function() {
  this.tiles = [
        [new Tile(2),null,null,null],
        [null,null,null,null],
        [null,null,null,null],
        [null,null,null,null]
      ];
  
};

Grid.prototype.draw = function() {
    
    background(186, 172, 160);
    for (var i = 0; i<4;i++) {
        for (var j=0;j<4;j++) {
            if (this.tiles[i][j]!==null) {
                this.tiles[i][j].draw(i,j);
            }
        }
    }
};



Grid.prototype.packLeftAll = function() {
    for (var i = 0;i<4;i++) {
        this.packLeft(i);
    }
};

Grid.prototype.packRightAll = function() {
    for (var i = 0;i<4;i++) {
        this.packRight(i);
    }
};
Grid.prototype.packUpAll = function() {
    for (var i = 0;i<4;i++) {
        this.packUp(i);
    }
};

Grid.prototype.packDownAll = function() {
    for (var i = 0;i<4;i++) {
        this.packDown(i);
    }
};

Grid.prototype.packLeft = function(row) {

    for (var j = 0; j<3;j++) {
        if (this.tiles[row][j] === null) {
            //next non-nll
            var delta = 1;
            for (var k = j;k<3;k++) {
                if (this.tiles[row][k+1] === null) {
                    delta++;
                } else {
                    break;
                }
            }
            for (var k = j; k+delta<4;k++) {
                this.tiles[row][k] = this.tiles[row][k+delta]; 
                this.tiles[row][k+delta] = null;
            }
            
            
        }
    }
};

Grid.prototype.packUp = function(col) {

    for (var i = 0; i<3;i++) {
        if (this.tiles[i][col] === null) {
            //next non-nll
            var delta = 1;
            for (var k = i;k<3;k++) {
                if (this.tiles[k+1][col] === null) {
                    delta++;
                } else {
                    break;
                }
            }
            for (var k = i; k+delta<4;k++) {
                this.tiles[k][col] = this.tiles[k+delta][col]; 
                this.tiles[k+delta][col] = null;
            }
            
            
        }
    }
};

Grid.prototype.packRight = function(row) {

    for (var j = 3; j>0;j--) {
        if (this.tiles[row][j] === null) {
            //next non-nll
            var delta = 1;
            for (var k = j;k>0;k--) {
                if (this.tiles[row][k-1] === null) {
                    delta++;
                } else {
                    break;
                }
            }
            for (var k = j; k-delta>=0;k--) {
                this.tiles[row][k] = this.tiles[row][k-delta]; 
                this.tiles[row][k-delta] = null;
            }
            
            
        }
    }
};

Grid.prototype.packDown = function(col) {

    for (var i = 3; i>0;i--) {
        if (this.tiles[i][col] === null) {
            //next non-nll
            var delta = 1;
            for (var k = i;k>0;k--) {
                if (this.tiles[k-1][col] === null) {
                    delta++;
                } else {
                    break;
                }
            }
            for (var k = i; k-delta>=0;k--) {
                this.tiles[k][col] = this.tiles[k-delta][col]; 
                this.tiles[k-delta][col] = null;
            }
            
            
        }
    }
};


Grid.prototype.mergeLeft = function(row) {
    
    for (var j = 1; j<4; j++) {
        
        if (this.tiles[row][j] !== null && this.tiles[row][j-1] !== null && this.tiles[row][j-1].value === this.tiles[row][j].value) {
            this.tiles[row][j-1].value += this.tiles[row][j].value;
            this.tiles[row][j] = null;
            this.packLeft(row);
        }
    }    
};

Grid.prototype.mergeUp = function(col) {
    //msg += "^"+col;
    for (var i = 1; i<4; i++) {
        
        if (this.tiles[i][col] !== null && this.tiles[i-1][col] !== null && this.tiles[i-1][col].value === this.tiles[i][col].value) {
            this.tiles[i-1][col].value += this.tiles[i][col].value;
            this.tiles[i][col] = null;
            this.packUp(col);
        }
    }    
};

Grid.prototype.mergeRight = function(row) {
    
    for (var j = 3; j>0; j--) {
        
        if (this.tiles[row][j-1] !== null && this.tiles[row][j] !== null && this.tiles[row][j].value === this.tiles[row][j-1].value) {
            this.tiles[row][j].value = 2 * this.tiles[row][j-1].value;
            this.tiles[row][j-1] = null;
            this.packRight(row);
        }
        
    
    }    
};

Grid.prototype.mergeDown = function(col) {
    
    //msg +=  " col: "+ col.toString();
    for (var i = 3; i>0; i--) {
        
        if (this.tiles[i][col] !== null && this.tiles[i-1][col] !== null && this.tiles[i-1][col].value === this.tiles[i][col].value) {
            this.tiles[i][col].value += this.tiles[i-1][col].value;
            this.tiles[i-1][col] = null;
            this.packDown(col);
        }
        
    }    
};


Grid.prototype.mergeLeftAll = function(){
    for (var row = 0;row<4;row++) {
        //msg += "<-- "+row;
        this.mergeLeft(row);
    }
};

Grid.prototype.mergeRightAll = function(){
    for (var row = 0;row<4;row++) {
        this.mergeRight(row);
    }
};

Grid.prototype.mergeUpAll = function(){
    //msg+="mergeUpAll";
    for (var col = 0;col<4;col++) {
        this.mergeUp(col);
    }
};

Grid.prototype.mergeDownAll = function(){

    for (var col = 0;col<4;col++) {
        this.mergeDown(col);
    }
};

Grid.prototype.moveLeft = function() {
    //1. Remove spaces
    this.packLeftAll();
    this.mergeLeftAll();
    
};

Grid.prototype.moveRight = function() {
   this.packRightAll();
   this.mergeRightAll();
};

Grid.prototype.moveUp = function() {
    this.packUpAll();    
    this.mergeUpAll();
};

Grid.prototype.moveDown = function() {
    this.packDownAll();
    this.mergeDownAll();
};

Grid.prototype.fillRight = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[i][3] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0) {
        return false;
    } else {
        var row = opens[floor(random(0,opens.length))];
        var value = Math.pow(2,floor(random(0,2))+1);
        
        this.tiles[row][3] = new Tile(value);
        return true;
    }
    
};

Grid.prototype.fillLeft = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[i][0] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0) {
        return false;
    } else {
        var row = opens[floor(random(0,opens.length))];
        var value = Math.pow(2,floor(random(0,2))+1);
        
        this.tiles[row][0] = new Tile(value);
        return true;
    }
};

Grid.prototype.fillBottom = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[3][i] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0) {
        return false;
    } else {   
        var col = opens[floor(random(0,opens.length))];
        var value = Math.pow(2,floor(random(0,2))+1);
        
        this.tiles[3][col] = new Tile(value);
        return true;
    }
};

Grid.prototype.fillTop = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[0][i] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0) {
        return false;
    } else {
        var col = opens[floor(random(0,opens.length))];
        var value = Math.pow(2,floor(random(0,2))+1);
        
        this.tiles[0][col] = new Tile(value);
        return true;
    }
    
};

// var tiles = [new Tile(2,0,1), new Tile(4,1,1)];
var grid = new Grid();

draw = function() {

    background(255, 255, 255);
    // grid.mergeDownAll();
    grid.draw();
    
    fill(0, 255, 0);
    textSize(20);
    text(msg, 10,10,300,300);

};

keyReleased = function() {
    msg = "";
    switch (keyCode) {
        case 37: 
            grid.moveLeft();
            if (!grid.fillRight()) {
                msg = "Game Over!";
            }
            break;
        case 38:
            grid.moveUp();
            if (!grid.fillBottom()) {
                msg = "Game Over!";
            }
            break;
        case 40:
            grid.moveDown();
            if (!grid.fillTop()) {
                msg = "Game Over!";
            }            
            break;
        case 39:
            grid.moveRight();
            if (!grid.fillLeft()) {
                msg = "Game Over!";
            }
            
            break;
        default:
            return;
    }
};



  

