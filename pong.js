// Scores
var leftScore = 0;
var rightScore = 0;

// The ball, or puck
var puck = {
	x: 300,
	y: 200,
	vx: 1,
	vy: -2,
	size: 10,
}

// Players
var leftY = 200;
var rightY = 200;
var playerWidth = 10;
var playerHeight = 40;
var playerSpeed = 10;
var score=0

function setup() {
	createCanvas(600, 400);
}

function draw() {



	background(220);


	
	
	if (puck.x > width) {
		textSize(80)
		text("1", 125, 100);
		noLoop();
	}
	
	if (puck.x > width) {
		textSize(80)
		text("0", 425, 100);
		noLoop();
	}
	



	// Draw the board
	line(width / 2, 0, width / 2, height);

	// Draw the puck
	rectMode(CENTER);
	rect(puck.x, puck.y, puck.size, puck.size);

	// Draw the players
	rectMode(CORNER);
	rect(0, leftY, playerWidth, playerHeight);
	rect(width - playerWidth - 1, rightY, playerWidth, playerHeight);

	// Get user input

	function keyPressed() {
		if (keyCode === UP_ARROW) {
			rightY -= playerSpeed;

		}
	}
	if (keyIsDown(DOWN_ARROW)) {
		rightY += playerSpeed;
	}
	if (keyIsDown(65)) { // 65 is "A"
		leftY -= playerSpeed;
	}
	if (keyIsDown(90)) { // 90 is "Z"
		leftY += playerSpeed;
	}

	// Ensure the paddle doesn't leave the screen
	if (leftY < 0) {
		leftY = 0;
	}
	if (leftY > height - playerHeight) {
		leftY = height - playerHeight;
	}
	if (rightY < 0) {
		rightY = 0;
	}
	if (rightY > height - playerHeight) {
		rightY = height - playerHeight;
	}

	// Update the puck position
	puck.x += puck.vx;
	puck.y += puck.vy;

	// Check if puck is off the top or bottom screen
	if (puck.y < 0 || puck.y > height) {
		puck.vy *= -1;
	}

	// Check if puck is hitting a paddle
	if (puck.x < playerWidth && puck.y > leftY && puck.y < leftY + playerHeight) {
		puck.vx *= -1;
	}
	if (puck.x > width - playerWidth && puck.y > rightY && puck.y < rightY + playerHeight) {
		puck.vx *= -1;
	}

	// Check if a player scored
	
	if (puck.x < 0) {
		text("1", 325, 100);
		noLoop();
	}
}
