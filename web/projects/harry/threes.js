size(400,400);

//TODO: 
//Sound
//Scene
var goal = 48;
var goalReachDisplay = 0;
var msg = "";
var gameOver = false;
var COLORS = [
    color(107, 204, 253),
    color(253, 105, 130)
    
  ];

var Tile = function(value) {
    this.value = value;
};


Tile.prototype.draw = function(row,col) {
    var c;
    if (this.value < 3 ) {
        c = COLORS[this.value-1];
    } else {
        c = color(255, 255, 255);
    }
    
    fill(c);
    rect(col*100+5, row*100+5, 90,90,10);
    if (this.value < 3) {
        fill(255, 255, 255);
    } else {
        fill(0, 0, 0);
    }
    noStroke();
    textSize(40);
    textAlign(CENTER, CENTER);
    text(this.value,col*100+5,row*100-10,90,100);
};


var Grid = function() {
    this.tiles = [
        [null,null,null,null],
        [null,null,null,null],
        [null,null,null,null],
        [null,null,null,null]
      ];
    var row = floor(random(0,4));
    var col = floor(random(0,4));
    this.num1 = 0;
    this.num2 = 0;
    this.tiles[row][col] = this.newTile();
    
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
        var t0 = this.tiles[row][j-1];
        var t1 = this.tiles[row][j];
        if (t1 !== null && t0 !== null ) {
            if (t0.value + t1.value === 3) {
                t0.value = 3;
                this.tiles[row][j] = null;
                this.packLeft(row);
            } else if (t0.value > 2 && t1.value > 2 && t1.value === t0.value) {
                t0.value = t0.value * 2;
                if (t0.value === goal) {
                    msg = "You reached "+goal;
                    goalReachDisplay = 120;
                    goal = goal*2;
                }
                this.tiles[row][j] = null;
                this.packLeft(row);
            }

        }
    }    
};

Grid.prototype.mergeUp = function(col) {
    //msg += "^"+col;
    for (var i = 1; i<4; i++) {
        var t0 = this.tiles[i-1][col];
        var t1 = this.tiles[i][col];
        
        if (t1 !== null && t0 !== null ) {
            if (t0.value + t1.value === 3) {
                t0.value = 3;
                this.tiles[i][col] = null;
                this.packUp(col);                
            } else if (t0.value > 2 && t1.value > 2 && t1.value === t0.value) {
                t0.value = t0.value * 2;
                if (t0.value === goal) {
                    msg = "You reached "+goal;
                    goalReachDisplay = 120;
                    goal = goal*2;
                }
                this.tiles[i][col] = null;
                this.packUp(col);                   
            }         
        }
    }    
};

Grid.prototype.mergeRight = function(row) {
    
    for (var j = 3; j>0; j--) {
        var t0 = this.tiles[row][j-1];
        var t1 = this.tiles[row][j];
        
        if (t1 !== null && t0 !== null ) {
            if (t0.value + t1.value === 3) {
                t1.value = 3;
                this.tiles[row][j-1] = null;
                this.packRight(row);                
            } else if (t0.value > 2 && t1.value > 2 && t1.value === t0.value) {
                t1.value = t1.value * 2;
                if (t1.value === goal) {
                    msg = "You reached "+goal;
                    goalReachDisplay = 120;
                    goal = goal*2;
                }
                this.tiles[row][j-1] = null;
                this.packRight(row);                
            }              
        }
        
    
    }    
};

Grid.prototype.mergeDown = function(col) {
    
    //msg +=  " col: "+ col.toString();
    for (var i = 3; i>0; i--) {
        var t0 = this.tiles[i-1][col];
        var t1 = this.tiles[i][col];
        
        if (t1 !== null && t0 !== null ) {
            if (t0.value + t1.value === 3) {
                t1.value = 3;
                this.tiles[i-1][col] = null;
                this.packDown(col);
            } else if (t0.value > 2 && t1.value > 2 && t1.value === t0.value) {
                t1.value = t1.value * 2;
                if (t1.value === goal) {
                    msg = "You reached "+goal;
                    goalReachDisplay = 120;
                    goal = goal*2;
                }
                this.tiles[i-1][col] = null;
                this.packDown(col);
            } 
        }
        
    }    
};


Grid.prototype.canMergeRows = function(){
    for (var row = 0;row<4;row++) {
        for (var j = 1; j<4; j++) {
            var t0 = this.tiles[row][j-1];
            var t1 = this.tiles[row][j];
            
            if (t0 !== null && t1 !== null && (t0.value + t1.value === 3 || (t0.value + t1.value > 5 && t0.value === t1.value))) {
                return true;
            }
        }
    }
    return false;
};

Grid.prototype.canMergeCols = function(){
    for (var col = 0;col<4;col++) {
        for (var i = 1; i<4; i++) {
            var t0 = this.tiles[i-1][col];
            var t1 = this.tiles[i][col];            
           if (t0 !== null && t1 !== null && (t0.value + t1.value === 3 || (t0.value + t1.value > 5 && t0.value === t1.value))) {
                return true;
            }
        }
    }
    return false;
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

Grid.prototype.mergeLeftAll = function() {
    for (var row = 0;row<4;row++) {
        this.mergeLeft(row);
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

// Get a new tile
Grid.prototype.newTile = function() {
    // 50% 2, 50% 1
    var value;
    // Keep the ballence 
    if (this.num2 - this.num1 > 1) {
        value = 1;
        this.num1++;
    } else if (this.num1 - this.num2 > 1) {
        value = 2;
        this.num2++;
    } else {
        var ram = random(0,10);
        if (ram >= 5) {
            value = 2;
            this.num2++;
        }  else {
            value = 1;
            this.num1++;
        }
    }
    return new Tile(value);
};


Grid.prototype.fillRight = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[i][3] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0 && !this.canMergeCols()) {
        gameOver = true;
    } else {
        var row = opens[floor(random(0,opens.length))];
        this.tiles[row][3] = this.newTile();
    }
    
};



Grid.prototype.fillLeft = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[i][0] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0 && !this.canMergeCols()) {
        gameOver = true;
    } else {
        var row = opens[floor(random(0,opens.length))];
        
        this.tiles[row][0] = this.newTile();
    }
};

Grid.prototype.fillBottom = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[3][i] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0 && !this.canMergeRows()) {
        gameOver = true;
    } else {   
        var col = opens[floor(random(0,opens.length))];
        this.tiles[3][col] = this.newTile();
    }
};

Grid.prototype.fillTop = function() {
    var opens = [];
    for (var i = 0; i<4;i++) {
        if (this.tiles[0][i] === null) {
            opens.push(i);
        }
    }
    if (opens.length === 0 && !this.canMergeRows()) {
        gameOver = true;
    } else {
        var col = opens[floor(random(0,opens.length))];
        
        
        this.tiles[0][col] = this.newTile();
    }
    
};

var GameOverScreen =  function() {
};

GameOverScreen.prototype.draw = function() {
    fill(200, 200, 200, 100);
    rect(0,0,400,400);
    
    fill(0, 255, 0);
    textSize(40);
    text("Game Over!", 10,10,380,330);
    fill(142,122,103,255);
    rect(100,300,200,50,10);
    fill(255, 255, 255);
    textSize(30);
    text("New Game",100,270,200,100);

};

GameOverScreen.prototype.newGame = function() {
    return mouseX > 100 && mouseX <300 && mouseY > 270 && mouseY < 370;
};

var grid = new Grid();
var gameoverScreen = new GameOverScreen();

draw = function() {

    background(255, 255, 255);
    // grid.mergeDownAll();
    grid.draw();
    
    if (gameOver) {
        gameoverScreen.draw();
    } 
    if (goalReachDisplay>0) {
        //playSound(getSound("retro/whistle1"));
        fill(255, 0, 0);
        textSize(20);
        text(msg, 10,200,380, 200);
        goalReachDisplay--;
    }
    
};

keyReleased = function() {
    msg = "";
    switch (keyCode) {
        case 37: 
            grid.moveLeft();
            grid.fillRight();
            break;
        case 38:
            grid.moveUp();
            grid.fillBottom();
            break;
        case 40:
            grid.moveDown();
            grid.fillTop();
            break;
        case 39:
            grid.moveRight();
            grid.fillLeft();
            
            break;
        default:
            return;
    }
};

mouseReleased = function() {
    
    if (gameOver && gameoverScreen.newGame()) {
        gameOver = false;
        grid = new Grid();
        goal = 48;
        return;
    }

//     if (mouseY < 400 - mouseX  && mouseY < mouseX && mouseY < 150) {
//         //up
//         grid.moveUp();
//         grid.fillBottom();
//     } else if (mouseY > 400 - mouseX  && mouseY < mouseX && mouseX > 250) {
//         //right
//         grid.moveRight();
//         grid.fillLeft();
//     } else if (mouseY > 400 - mouseX  && mouseY > mouseX && mouseY > 250) {
//         //down
//         grid.moveDown();
//         grid.fillTop();
//     } else if (mouseY < 400 - mouseX  && mouseY > mouseX && mouseX < 150) {
//         //left
//         grid.moveLeft();
//         grid.fillRight();
//     }  
    
};


  


  



  

