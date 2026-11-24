function setup() {
 canvas=createCanvas(800, 400);
 canvas.parent("sketch-holder");
}

function draw() {
  background(0);

  // moon
  fill(205, 205, 212);
  circle(200, 150, 150);
  fill(0);
  circle(240, 150, 150);

  //stars
  fill(205, 205, 212);
  circle(700, 100, 40);
  circle(400, 300, 40);

  fill(0);
  circle(680, 120, 40);
  circle(680, 80, 40);
  circle(720, 120, 40);
  circle(720, 80, 40);

  circle(380, 320, 40);
  circle(380, 280, 40);
  circle(420, 320, 40);
  circle(420, 280, 40);
}