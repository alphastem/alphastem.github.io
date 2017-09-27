var img;

function preload() {
  img = loadImage('bee.png');
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  //background(255, 0, 200);
  frameRate(5);

}
var pre_x = 100;
var pre_y = 100;
function draw() {
  clear();
//   wait(1000);
  pre_x = pre_x + random(-5, 20);
  pre_y = pre_y + random(-10,10);
  image(img,pre_x, pre_y);

}

function draw2() {
  if (mouseIsPressed) {
    fill(255,0,0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
