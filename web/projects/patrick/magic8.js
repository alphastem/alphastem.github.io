size(400,400);

var x = 200;
fill(0, 0, 0);
ellipse(x, x, x + 175, x + 175);
fill(60, 0, 255);
triangle(x, x - 96, x + 80, x + 80, x - 80, x + 80);
fill(255, 255, 255);
var answer = floor(random(1, 20));
if (answer < 2) {
    text("IT IS ", 186, 200);
    text("CERTAIN", 174, 229); 
}
 else if (answer < 3) {
    text("TRY", 186, 200);
    text("AGAIN", 179, 229);
}   
else if (answer < 4) {
    text("DON'T", 176, 200);
    text("RELY ON IT", 159, 229);
}
else if (answer < 5) {
    text("IT IS", 186, 200);
    text("DECIDED: YES", 159, 229);
}
 else if (answer < 6) {
    text("NO", 191, 200);
    text("DOUBT", 179, 229);
}
 else if (answer < 7) {
    text("ASK", 191, 200);
    text("AGAIN LATER", 159, 229);
}
 else if (answer < 8) {
    text("I", 196, 200);
    text("REPLY NO", 169, 229);
}
else if (answer < 9) {
    text("DEFINITELY", 164, 229);
    text("YES",186,200);
}
 else if (answer < 10) {
    text("RELY", 186, 200);
    text("ON IT", 184, 229);
}
else if (answer < 11) {
    text("TELL YOU NOW", 154, 229);
    text("I WON'T", 176,200);
}
else if (answer < 12) {
    text("MY", 191, 200);
    text("BRAIN SAYS NO", 154, 229);
}
else if (answer < 13) {
    text("AS I ", 186, 200);
    text("SEE IT, YES", 164, 229);
}
else if (answer < 14) {
    text("IT IS", 186, 200);
    text("LIKELY", 179, 229);
}
else if (answer < 15) {
    text("I", 196, 200);
    text("DON'T KNOW", 159, 229);
}
else if (answer < 16) {
    text("I SAY:", 181, 200);
    text("NOT YES", 169, 229);
}
else if (answer < 17) {
    text("SEEMS", 176, 200);
    text("LIKE YES", 169, 229);
}
else if (answer < 18) {
    text("!!!!!!", 184, 229);
    text("YES!!!", 176,200);
}
else if (answer < 19) {
    text("I CAN'T", 181, 200);
    text("HEAR YOU", 169, 229);
}
else if (answer < 20) {
    text("SAY YES", 169, 229);
    text("SIGNS",176,200);
}
else {
    text("VERY", 176, 200); 
    text("DOUBTFUL", 159, 229);
}
