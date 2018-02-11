size(400,400);


fill(0, 0, 0);
ellipse(200, 200, 375, 375);
fill(60, 0, 255);
triangle(200, 104, 280, 280, 120, 280);
fill(3, 242, 234);
var answer = floor(random(1, 6));
if (answer === 1) {
    text("Yes", 190, 200);
   
}
    else if (answer === 2) {
     text("No", 190, 200);   
    }
    if (answer === 3) {
     text("Maybe", 180, 200); 
    }

    else if (answer === 4) {
     text("Probably", 175, 200);   
    }
    
    if (answer === 5) {
     text("Most likely not", 160, 200);    
    }
