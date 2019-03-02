function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 200; i = i + 10) {
    
		var startX = 200;
    var startY = i;
    var endX = 200;
    var endY = i;
		
		

	line(startX-i, startY, endX+i, endY);
  

	line (0+i, 200+i, 400-i,200+i)
}
}
