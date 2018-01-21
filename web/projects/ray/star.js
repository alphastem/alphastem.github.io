size(400,400);

var xPos = 405;
var yPos = 0;
var xpos = 395;
var ypos = 392;
var S = 10;
var W = 10;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, S, W);
    xPos += 5;
    yPos -= 5;
    if (yPos < 0) {
        yPos = 405;
        xPos = 0;
        S += 10;
        W += 10;
        if (S > 200) {
            S = 10; 
            W = 10;
        }
        
    }
    xpos -= 10;
    ypos += 10;
    ellipse(xpos, ypos, 10, 10);
  
        
};





