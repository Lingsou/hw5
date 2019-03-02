function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 5; i <= 400; i = i + 5) {
    var startX = i;
    var startY = 0;
    var endX = i;
    var endY = i;
    line(startX, startY, endX, endY);
  }
}
