size(400,400);

var bodyX = 200;
var bodyY = 220;
var bodyW = 118;
var bodyH = bodyW/2;

draw = function() {
    bodyX+=1;
    background(207, 254, 255);
    fill(240, 209, 36);
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    rect(bodyX,bodyY,bodyW,bodyH);
    line(bodyX,bodyY,bodyX+50,bodyY+50);
    point(bodyX,bodyY);
    point(bodyX+100,bodyY+100);
};
