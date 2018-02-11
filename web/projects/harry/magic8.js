size(400,400);

fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(255, 255, 255);
var answer = floor(random(0, 8));
if (answer === 0) {
    fill(0, 255, 0);
    text("YES", 186, 229); 
}else if (answer===1) {
    fill(0, 255, 0);
    text("CERTAINLY", 164, 229);

}else if (answer === 2) {
    fill(255, 0, 0);
    text("NO", 188, 229);
}else if (answer === 3) {
    fill(255, 255, 0);
    text("Very doubtful", 159, 229);
}else if (answer === 4) {
    fill(255, 255, 0);    
    text("I'LL TELL", 176, 200);
    text("YOU LATER", 168, 229);
}else if (answer === 5) {
    fill(0, 255, 0);
    text("MOST LIKELY", 159, 229);
}else if (answer ===6) {
    fill(255, 255, 0);       
    text("ASK", 188, 200);
    text("AGAIN LATER!", 159, 229);
}else {
    fill(255, 255, 0);   
    text("DON'T KNOW", 159, 229);   
}