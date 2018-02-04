size(400,400);

background(89, 216, 255);

var bodyColor = color(162, 0, 255);

var drawFish = function(centerX, centerY, bodyLength, bodyHeight,bodyColor) {
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
};
    
    
    

drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(255, 0, 0)); 
drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(0, 256, 0));  
drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(0, 0, 255));  
drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(255, 153, 0));
drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(255, 255, 0)); 
drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(132, 0, 255)); 
drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(255, 0, 247)); 
drawFish(random(0,400),random(0,400),random(10,90),random(10,75), color(246, 250, 245)); 


    
    
         