size(1024,768);

var y = 768;
var xpos = [ 100, 300, 600, 790];
var sizes = [random(20,100),random(20,100),random(20,100),random(20,100)];
var ypos = [random(100),random(100),random(100),random(100)];
var colors = [color(255,0,0), color(0,255,0), color(0,255,255), color(0,128,100)];
draw = function () {


	background(89, 216, 255);
	fill(89,216,255);

	for (var i = 0; i<xpos.length; i++) {
		x = xpos[i];
		fill(colors[i]);
		ellipse(x, y+ypos[i], sizes[i], sizes[i]);
	}
	

	y--;
	if (y<0) {
		y = 768;
	}

};

