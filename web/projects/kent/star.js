size(400,400);

var xPos = 200;
var yPos = 200;


draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos,yPos, yPos);
    
    yPos += -2;
    
    if(yPos < 0) {
        yPos =250;
        xPos =350;
    }
    
    
    
   

};

fill(255, 0, 0);
ellipse(200, 200, 200 ,200);






