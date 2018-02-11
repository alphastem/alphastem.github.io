size(400,400);

fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);

var answer = floor(random(1, 5)); //chooses the number

if (answer === 1) {
    text("Yeah sure", 175, 215);
}

if (answer === 2) {
    text ("Most likely", 175, 215);
}

if (answer === 3) {
    text ("Ask later", 178, 215);
}

if (answer === 4) {
    text ("Nahhhh nope", 167, 215);

}