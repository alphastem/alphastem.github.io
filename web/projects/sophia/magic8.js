size(400,400);

fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(129, 255, 87);
var answer = floor(random(1, 7));
if (answer === 1) {
    text("NOT YET", 176, 200);
    text("IMPLEMENTED", 159, 229); 
}
else if (answer === 2) {
    text("Ask again later",160,230);
    }
else if (answer === 3) {
    text("NO",190,230);
}
else if (answer === 4) {
    text("Yes",185,225);
}
else if (answer === 5) {
    text("Better not tell you",155,230);
}
else if (answer === 6) {
    text("Do not count on it",155,230);
}
