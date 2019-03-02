function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  for (var i = 15; i <= width; i = i + 15) {
		for ( var y = 15; y <= height; y = y + 15)
   
    ellipse(i, y, 13);
		fill(255)
  }
}
