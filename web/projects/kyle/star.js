size(400,400);

var xPos = 200;
var yPos = 400;
var starSize = 10;
draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, starSize, starSize);
    yPos = yPos + -5;
    starSize = starSize + 1;
    
};







