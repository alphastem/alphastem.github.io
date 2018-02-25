size(400,400);


background(219, 255, 255);
fill(184, 27, 27);
rect(73, 19, 58, 130);//chimeny
fill(174, 180, 214);
var Sw = 30;
var Sh = 20;
var offsetX = 350;
var offsetY = 150; 
triangle(200, 28, offsetX, offsetY, 50, 150);//roof
 var shing = 10;
for (var row = 0; row < 8; row++) {
    
    for (var i = 0; i < shing; i++) {
     ellipse(offsetX - i * Sw*0.8, offsetY - row * Sh*0.8, Sw, Sh); offsetX -= 3;
    }
shing -= 1;    
}
fill(255, 255, 255);
rect(60, 150, 280, 207);//house
noStroke();
fill(166, 5, 5);
var BW = 25;
var BH = 10;
//start bricks 
for (var k = 150; k < 400; k += BH*2 + 6) {
    
    for (var b = 60; b < 340; b += BW + 3) {
 rect (b, k, BW, BH);
 } 

}

for (var k = 150 + BH + 3; k < 400; k += BH*2 + 6) {
    
    for (var b = 65; b < 340; b += BW + 3) {
 rect (b, k, BW, BH);
 } 

}
//end bricks
fill(120, 80, 19);
rect(180, 263, 40, 99);//door
fill(255, 255, 255);
stroke(0, 0, 0);
strokeWeight(3);
rect(100, 222, 50, 50);//left window
rect(251, 222, 50, 50);//right window
fill(38, 255, 0);//grass
noStroke();//grass
rect(0, 355, 408, 57);//grass
stroke(255, 255, 255);//fence
strokeWeight(5);//fence

for (var i = 5; i < 400; i+= 10) {
line(i, 372, i, 316);
}
line(0, 345, 400, 345);//fence
line(0, 320, 400, 320);//fence
