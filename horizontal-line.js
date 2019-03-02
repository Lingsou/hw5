function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 400; i = i + 10) {
    var startX = 0;
    var startY = i;
    var endX = 400;
    var endY = i;
    line(startX, startY, endX, endY);
  }
}
