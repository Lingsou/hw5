function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  for (var i = 10; i <= 400; i = i + 10) {
    var startX = i;
    var startY = i;
    var endX = 0;
    var endY = 400;
    line(startX, endX, startY, endY);
  }
}
