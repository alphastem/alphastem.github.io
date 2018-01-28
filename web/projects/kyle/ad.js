size(400,400);


var xPos = 200;

noStroke();
fill(255, 0, 0);
background(0, 26, 255);


// head
ellipse(xPos, xPos, 60, 60);
fill(255, 0, 0);
// bodyz
ellipse(xPos, 250, 90, 90);
fill(0, 0, 0);
// eyes
ellipse(210, 192, 10, 10);
ellipse(190, 192, 10, 10);
fill(255, 247, 0);
// mouth
ellipse(xPos, 214, 20, 20);
fill(255, 0, 0);

// ears
ellipse(221, 174, 30, 30);
ellipse(181, 174, 30, 30);
textSize(30);
// ground
fill(0, 255, 13);
rect(1, 303, 400, 100);

// sun
fill(255, 238, 0);
ellipse(200, 28, 75, 75);

// text
fill(255, 0, 0);
text("TUFFED INSTON!", 10, 30);
textSize(15);
text("SO SOFT! DON'T GO TO SLEEP WITHOUT ONE!", 10, 87);
text("COMES IN DIFFERENT COLORS!!!!!!", 10, 100);
text("DOES NOT HAVE TO BE CALLED INSTON OR WINSTON", 10, 113);