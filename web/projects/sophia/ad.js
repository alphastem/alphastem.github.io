fill(24, 176, 222);
var x = 10;
var d = 1;

draw = function() {
    
    background(0, 7, 148);
    textSize(30);
    fill(255, 255, 255);
    text("Disney World!", 10, 30);
    textSize(17);
    fill(0, 255, 68);
    text("Orlando,Florida, the fun begins here!!",10,50);
    fill(255, 0, 0);
    text("Want a great vacation?? Well you found the \n right place!",10,100);
    text("Resort is very close to the actual place so \nwhy not admire the archetecture, the peace and exitement in the air.",10,140);
    fill(225, 255, 0);
    ellipse(200,209,90,90);
    fill(0, 0, 0);
    ellipse(180,195,15,15);
    ellipse(225,195,15,15);
    fill(255, 0, 0);
    arc(200, 215, 40, 40, 1, 180);
    fill(0, 255, 221);
    text("At Disney World, their are alot of activities everyone can enjoy!! ", 10,250,200,200);
    fill(205, 255, 3);
    text("       Disney provides:",220,265);
    text("       Waterslides",220,285);
    text("       Fireworks",220,305);
    text("       Glowing Castles",220,325);
    text("       Pictures with your \n       favorite characters",220,343);
    text("       Eating Places",220,385);
    textSize(15);
    text("Magic comes from here !! \n Come here now at \nhttps://disneyworld.disney.go.com",10,330);
    fill(255, 153, 0);
 text("Water Parks,Springs \nand stores all active,\n Join us!" , 10,180);
 textSize(40);
 fill(255, 255, 255);
 text("LETS \nGO!!",250,200);
    
    image(getImage("cute/Star"), x, 10, 40, 80);  
    
    if (x === 360) {
        d = -1;
    } 
    if (x === 0) {
        d = 1;
    }
    
    x = x + 10*d;
    
};
   



