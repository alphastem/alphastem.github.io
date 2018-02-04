size(400,400);

background(89, 216, 255);


var bodyLength = 118;
var bodyHeight = 74;
var bodyColor = color(162, 0, 255);

noStroke();
var drawFish = function(centerX,centerY,bodyLength,bodyHeight){
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
    ellipse(centerX+bodyLength/4, centerY, bodyHeight/5,         bodyHeight/5);
};

drawFish(100,50,100,100);
drawFish(300,250,50,50);
drawFish(150,350,150,150);
         