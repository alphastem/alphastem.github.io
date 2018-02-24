size(400,400);

function getImage(name) {
	PImage img = loadImage("https://www.kasandbox.org/third_party/javascript-khansrc/live-editor/build/images/"+name+".png");
	return img;
};


background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(120, 80, 19);
rect(130, 20, 25, 80);
var x = 100;

noStroke();

var x = 60;

while (x<340) {
    var y = 150;
    while (y <357){
        fill(x, y, 102);
        rect(x,y,10,10);
        y+=10;
    }
    x+=10;
}
stroke(0, 0, 0);
fill(255, 255, 255);
var x = 100;
while (x < 300) {
    rect(x, 160, 40, 70);
    x += 80;
} 
fill(0, 0, 0);
rect(160,260,70,100,1);
fill(0, 255, 213);
ellipse(180,310,20,20);
var grass = getImage("cute/GrassBlock");
var x = 0;
while (x < 400) {
image(grass, x, 310);
x += 100;
}
var tree = getImage("cute/TreeShort");
var x = 0;
while (x < 400) {
image(tree, x, 240);
x += 300;
}
var leaf1 = getImage("avatars/leaf-green");
var x = 0;
while (x < 400) {
image(leaf1, x, 20,30,30);
x += 100;
}
var leaf1 = getImage("avatars/leaf-orange");
var x = 30;
while (x < 400) {
image(leaf1, x, 50,30,30);
x += 100;
}
var leaf1 = getImage("avatars/leaf-red");
var x = 10;
while (x < 400) {
image(leaf1, x, 90,20,20);
x += 100;
}
var leaf1 = getImage("avatars/leaf-yellow");
var x = 0;
while (x < 400) {
image(leaf1, x, 140,30,30);
x += 100;
}
var leaf1 = getImage("avatars/leaf-orange");
var x = 0;
while (x < 400) {
image(leaf1, x, 200,50,50);
x += 100;
}
var leaf1 = getImage("avatars/leaf-green");
var x = 0;
while (x < 400) {
image(leaf1, x, 270,10,10);
x += 100;
}

