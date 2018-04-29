size(800,600);
var H = 60;
var W = 80;
var msg = "";
var gameover = false;

var Tile = function() {
    this.apple = false;
};


Tile.prototype.draw = function(row,col) {
    
    fill(255, 255, 255);
    noStroke();
    rect(col*10,row*10,10,10);
    
    if (this.apple) {
        fill(26, 219, 20);
        ellipse(col*10+5,row*10+5,6,6);        
    }
};


var Grid = function() {
    this.tiles = [];
    var row;
    var t;
    for (var i = 0;i<H;i++) {
        row = [];
        for (var j=0; j<W;j++) { 
            t = new Tile();
            row.push(t);
        }
        this.tiles.push(row);
    }
    
};

Grid.prototype.newApple = function() {
    var row = floor(random(0,H));
    var col = floor(random(0,W));
    this.tiles[row][col].apple =true;
};

Grid.prototype.eatApple = function(row,col) {
    // msg+="{"+row+","+col+"}";
    if (row<0||row>=H||col<0||col>=W) {
            return false;
    }

    var t = this.tiles[row][col];
    msg+="head:"+t.apple;
    if (t.apple) {
        t.apple = false;
        // msg+="Eat";
        return true;
    } else {
        return false;
    }
};

Grid.prototype.draw = function() {
    for (var i = 0;i<H;i++) {
        for (var j=0; j<W;j++) {
            this.tiles[i][j].draw(i,j);
           
        }
    }     
};
var grid = new Grid();

var Snake = function() {
    this.tiles = [[9,10],[10,10],[10,11],[10,12],[10,13],[10,14],[10,15],[10,16]];
    this.speed = 3;
    this.direction = "R";
};

Snake.prototype.move = function() {
    switch (this.direction) {
        case "R": 
            this.moveRight();
            break;
        case "L":
            this.moveLeft();
            break;
        case "U":
            this.moveUp();
            break;
        case "D":
            this.moveDown();
            break;
    }


};

Snake.prototype.isOver = function() {
    var hash = [];
    // msg = "";
    for (var i = 0 ; i<this.tiles.length;i++) {
        var t = this.tiles[i];
        if (t[0] < 0 || t[0] >= H || t[1]<0 ||t[1]>=W) {
            //msg+="gameover";
            return true;
        }
        var key = "["+t[0]+","+t[1]+"]";
        //msg += key;
        if (hash.indexOf(key) !== -1) {
            //msg+="gameover";
            return true;
        } else {
            hash.push(key);
        }
    }
    return false;
};

Snake.prototype.draw = function() {
    fill(255, 0, 0);
    for (var i = 0; i<this.tiles.length;i++) {
        var t = this.tiles[i];
        fill(255, 0, 0);
        rect(t[1]*10,t[0]*10,10,10);
    }
    
    fill(255, 255, 0);
    ellipse(this.tiles[0][1]*10+5,this.tiles[0][0]*10+5,7,7);
    
};

Snake.prototype.moveLeft = function() {
    
    if (this.tiles[0][1]-1 === this.tiles[1][1]) {
        return;
    }
    var newTiles = [];

    var row = this.tiles[0][0];
    var col = this.tiles[0][1]-1;
    newTiles.push([row,col]);
    var t;
    var i;
    for (i = 0; i<this.tiles.length-1;i++) {
        t = this.tiles[i];
        newTiles.push(t);
    }
    // msg+="<"+row+","+col+">";
    if (grid.eatApple(row,col)) {
        //eat apple, grow
        t = this.tiles[i];
        newTiles.push(t);
    }
    
    this.tiles = newTiles;
    this.direction = "L";
};

Snake.prototype.moveRight = function() {
    if (this.tiles[0][1]+1 === this.tiles[1][1]) {
        return;
    }    
    var newTiles = [];
    var head = [];
    head.push(this.tiles[0][0]);
    head.push(this.tiles[0][1]+1);
    newTiles.push(head);
    var t;
    for (var i = 0; i<this.tiles.length-1;i++) {
        t = this.tiles[i];
        newTiles.push(t);
    }
    
    if (grid.eatApple(head[0],head[1])) {
        //eat apple, grow
        t = this.tiles[this.tiles.length-1];
        newTiles.push(t);
    }
    
    this.tiles = newTiles;
    this.direction = "R";

};
Snake.prototype.moveUp = function() {
    if (this.tiles[0][0]-1 === this.tiles[1][0]) {
        return;
    }     
    var newTiles = [];
    var head = [];
    head.push(this.tiles[0][0]-1);
    head.push(this.tiles[0][1]);
    newTiles.push(head);
    var t;
    for (var i = 0; i<this.tiles.length-1;i++) {
        t = this.tiles[i];
        newTiles.push(t);
    }
    if (grid.eatApple(head[0],head[1])) {
        //eat apple, grow
        t = this.tiles[this.tiles.length-1];
        newTiles.push(t);
    }    
    this.tiles = newTiles;  
    this.direction = "U";
};
Snake.prototype.moveDown = function() {
    if (this.tiles[0][0]+1 === this.tiles[1][0]) {
        return;
    }     
    var newTiles = [];
    var head = [];
    head.push(this.tiles[0][0]+1);
    head.push(this.tiles[0][1]);
    newTiles.push(head);
    var t;
    for (var i = 0; i<this.tiles.length-1;i++) {
        t = this.tiles[i];
        newTiles.push(t);
    }
    
    if (grid.eatApple(head[0],head[1])) {
        //eat apple, grow
        t = this.tiles[this.tiles.length-1];
        newTiles.push(t);
    }      
    this.tiles = newTiles;   
    this.direction = "D";
};

var GameOverScreen =  function() {
};

GameOverScreen.prototype.draw = function() {
    fill(200, 200, 200, 100);
    rect(0,0,800,800);
    
    fill(0, 255, 0);
    textAlign(CENTER,CENTER);
    textSize(40);
    text("Game Over!", 10,10,380,330);
    fill(142,122,103,255);
    rect(100,300,200,50,10);
    fill(255, 255, 255);
    textSize(20);
    text("New Game",100,270,200,100);

};

GameOverScreen.prototype.newGame = function() {
    return mouseX > 100 && mouseX <300 && mouseY > 270 && mouseY < 370;
};



var snake = new Snake();
var gameoverScreen = new GameOverScreen();

var timer = 0;
var score = 0;
draw = function() {
    
    background(255, 255, 255);
    
    
    grid.draw();
    snake.draw();
    timer++;

    if (gameover) {
        gameoverScreen.draw();
        //msg="Game Over";
    }  else {

        if (timer === 200) {
            timer = 0;
            //msg = "";
        }
        if (timer % 200 === 0) {
            grid.newApple();
        }
    
        if (timer % 10  === 0) {
            snake.move();
            gameover = snake.isOver();
        }
    }

    textSize(20);
    fill(0, 0, 0);
    
    // text(msg,0,0,400,400);
    
};

mouseReleased = function() {
    
    if (gameover && gameoverScreen.newGame()) {
        gameover = false;
        snake = new Snake();
        return;
    }
};

keyReleased = function() {
    if (gameover) {
        return;
    }
    msg = "";
    switch (keyCode) {
        case 37: 
            snake.moveLeft();
            break;
        case 38:
            snake.moveUp();
            break;
        case 40:
            snake.moveDown();
            break;
        case 39:
            snake.moveRight();
            break;
        default:
            break;
    }
    
    gameover = snake.isOver();
    
};
