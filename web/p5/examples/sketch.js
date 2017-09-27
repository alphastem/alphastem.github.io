var x = window.innerWidth/2;
var y = window.innerHeight/2;
var radius = 12;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  ellipseMode(RADIUS);
  textSize(64);
  background( 200);
}

function draw() {
  translate(mouseX, mouseY);
  scale(mouseX / 60.0);
  rect(-15, -15, 30, 30);
}

function draw6() {
  translate(mouseX, mouseY);
  rotate(mouseX / 200.0);
  rect(0, 0, 160, 20);
}

function draw5() {
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
  translate(35, 10);
  rect(0, 0, 15, 15);
}

function draw4() {
  translate(mouseX, mouseY);
  rect(0, 0, 30, 30);
}

function draw3() {
  background(204);
  stroke(255);
  line(x, y, mouseX, mouseY); // White line
  stroke(0);
  var mx = map(mouseX, 0, width, 60, 180);
  line(x, y, mx, mouseY); // Black line
}

function draw2() {
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {            // If it's the left arrow
      x-=10;
    }
    else if (keyCode == RIGHT_ARROW) {      // If it's the right arrow
      x+=10;
    }
  }

  background( 200);
  text( key, x, y);
}

function draw1() {
  background(204);
  var d = dist(mouseX, mouseY, x, y);
  if (d < radius) {
    radius++;
    fill(0);
  } else {
    fill(255);
  }
  ellipse(x, y, radius, radius);
}
