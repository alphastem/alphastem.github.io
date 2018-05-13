size(400,400);

var timer = 0;
var gameover = false;
var GameOverScreen =  function() {
};
GameOverScreen.prototype.draw = function() {
    fill(200, 200, 200, 5);
    rect(0,0,400,400);
    noStroke();
    fill(0, 255, 0);
    textSize(40);
    textAlign(CENTER,CENTER);
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

var Cell = function() {
    this.x = 200;
    this.y = 200;
    this.size = 20;
    
};
Cell.prototype.draw = function() {
    fill(255, 0, 0);
    stroke(230, 223, 7);
    strokeWeight(3);
    ellipse(200,200,this.size,this.size);
    fill(255);
    textAlign(CENTER,CENTER);
    textSize(this.size/2);
    text(this.size,200-this.size,200-this.size,2*this.size,2*this.size);
};

var OtherPlayer = function(x,y) {
    this.timer = floor(random(200,600));
    this.counter = 0;
    this.directionX = floor(random(-3,4));
    this.directionY = floor(random(-3,4));
    this.x = x;
    this.y = y;
    if (floor(random(0,10)) < 8) {
        this.size = 10;
    } else {
        this.size = floor(random(10,40));
    }
    this.color = color(floor(random(0,256)),floor(random(0,256)),floor(random(0,256)));
};
OtherPlayer.prototype.draw = function() {
    
    fill(this.color);
    noStroke();
    if (this.x -this.size < 400 && this.x +this.size >0 && this.y -this.size < 400 && this.y +this.size > 0) {
        ellipse(this.x,this.y,this.size,this.size);
    }
    this.counter++;
    
    //Move
    if (this.counter % 5 === 0 && this.size > 20) {
        this.x += this.directionX;
        this.y += this.directionY;
    }
    //
    if (this.counter === this.timer) {
        
        this.timer = floor(random(200,600));
        this.counter = 0;
        this.directionX = floor(random(-3,4));
        this.directionY = floor(random(-3,4));
    }
    
    
    
};

var Playground = function() {
    this.cell = new Cell();
    this.players = [];
    for (var i = 0;i< 300; i++) {
        var player = new OtherPlayer(floor(random(-400,800)),floor(random(-400,800)));
        if (player.x<0 || player.x>400 || player.y<0 || player.y>400) { 
            this.players.push(player);
        }
    }    
    this.centerX = 600;
    this.centerY = 600;
};
Playground.prototype.draw = function() {

    background(255);
    stroke(0, 0, 0);
    strokeWeight(1);
    
    var speedX = (mouseX -200) / 50;
    var speedY = (mouseY -200) / 50;
    this.centerX -= speedX;
    this.centerY -= speedY;
    var deltaX = this.centerX % 40;
    var deltaY = this.centerY % 40;
    for (var i = 0;i<10;i++) {
        line(deltaX-40, 40*i-speedY+deltaY,400+deltaX,40*i-speedY+deltaY);
        line(deltaX+40*i-speedX,deltaY-40,40*i-speedX+deltaX,400+deltaY);
    }
    

    for (var i = 0;i< this.players.length; i++) {
        this.players[i].x -= speedX;
        this.players[i].y -= speedY;
        this.players[i].draw();
    }
    this.cell.draw();

};
Playground.prototype.fight = function() {
    
    //fight with me.
    for (var i = 0;i< this.players.length; i++) {
        var p = this.players[i];
        var dist = sqrt(pow(p.x-200,2)+pow(p.y-200,2));
        if (dist < this.cell.size || dist < p.size) {
            if (p.size > this.cell.size) {
                gameover = true;
            } else {
                this.players.splice(i,1);
                i--;
                this.cell.size+=floor(p.size/10);
            }
        }
    }
    
    //fight with each other
    for (var i = 0; i< this.players.length; i++) {
        var p1 = this.players[i];
        for (var j = i+1;j<this.players.length;j++) {
            var p2 = this.players[j];
            var dist = sqrt(pow(p1.x-p2.x,2)+pow(p1.y-p2.y,2));
            if (dist < p1.size || dist < p2.size ) {
                //meet
                if (p1.size < p2.size) {
                    p2.size+=floor(p1.size/10);
                    this.players.splice(i,1);
                    i--;
                    break;
                } else {
                    this.players.splice(j,1);
                    p1.size+=floor(p2.size/10);
                    j--;
                }
            }
        }
    }

};
Playground.prototype.addNewPlayer = function() {
    var x = floor(random(-400,800));
    var y = floor(random(-400,800));
    
    if ((x < this.centerX-200 || x > this.centerX+200) && (y < this.centerY-200 || y > this.centerY+200)) {
        
        var player = new OtherPlayer(floor(random(-400,800)),floor(random(-400,800)));
        this.players.push(player);
    }

};

var gameoverScreen = new GameOverScreen();
var playground = new Playground();

draw = function() {
    
    if (gameover) {
        gameoverScreen.draw();
        return;
    }
    playground.draw();
    playground.fight();

    timer ++;
    if (timer === 60) {
        playground.addNewPlayer();
        timer = 0;
    }
};
mouseReleased = function() {
    if (gameover && gameoverScreen.newGame()) {
        gameover = false;
        playground = new Playground();
        return;
    }
};

