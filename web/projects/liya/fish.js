size(400,400);


//click the restart button

background(89, 216, 255);

var centerX = 200;
var centerY = 100;
var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);
var PearlHeight = 30;
var PearlPositionX = 200;

noStroke();
fill(bodyColor);
// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
// tail
var tailWidth = bodyLength/4;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
// eye
fill(33, 33, 33);
ellipse(centerX+bodyLength/4, centerY, bodyHeight/5, bodyHeight/5);

var Pearl = function(xPos, yPos) {
    fill (194, 180, 192);
    ellipse (xPos, yPos, random(70), random (50));
};

draw = function() {
Pearl(100, 300);
Pearl(200, 300);
Pearl (300, 300);
};
//....................................................................
// REQUIREMENTS

//Contains a function that can draw a fish or some other object.
//Must pass in at least two arguments to that function to control position or size.
//Must call that function at least three times to draw multiple objects around the canvas, or must call it in response to user interaction.
//Doesn't have any syntax errors or program logic errors.

