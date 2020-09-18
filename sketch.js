var hr, mn, sc;
var scAngle;

function setup() {
  createCanvas(400,400);
  
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
}

function draw() {
  background("skyblue");

  stroke("Blue");
  strokeWeight(7);
  fill("skyblue");
  arc(200, 200, 300, 300, PI, TWO_PI*50);

  push();
  angleMode(DEGREES);
  rotate(scAngle);
  translate(0,0);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  drawSprites();
}