function setup() {
  createCanvas(1024, 768);

}

function draw() {
  if (mouseIsPressed) {
    fill(255,0,0);
  } else {
    fill(255);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
