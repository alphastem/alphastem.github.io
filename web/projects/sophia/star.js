size(400,400);

var xPos = 201;
var yPos = 201;
var Stuff = 100;
var Hi = 100;
draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    xPos = xPos + 1;
    yPos = yPos + -1; 
    ellipse(Hi, Stuff, 20, 20);
    Hi = Hi + 1;
    Stuff = Stuff + 2;
};








