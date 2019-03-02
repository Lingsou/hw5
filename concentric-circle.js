function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
	
	for (var i = 10; i <= 400; i = i + 10) {
    var startX = 200;
    var startY = 200;
    var D = i;
    
		ellipseMode(CENTER);
		noFill()
		ellipse(startX, startY, D)
  }
}
