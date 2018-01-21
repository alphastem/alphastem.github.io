size(400,400);


var xPos = 150;
var yPos = 150;
var xNeg = 200;

draw = function() {
    xPos = xPos+=1;
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    xNeg = xNeg-=2;
    ellipse(xPos+50, yPos+50, 20, 20);
};

//Starts the star/shape from a different position than 200,200.
//Animates the star/shape in some direction across the canvas.
//Animates a second star/shape in a different direction.
//There should be at least one variable that controls the animation.
//Doesn't have any syntax errors or program logic errors.



