var balls = [];
let ballsCount = 500;
let baseEllipseHeight = 5;
let baseEliipiseWidth = 10;
let frameAngle = 0;
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.position(0, 0);
  for (let i = 0; i < ballsCount; i++) {
    balls[i] = new Ball();
    // balls[i].a = random(-width / 2 + 100, width / 2 + 100);
    // balls[i].b = random(-height / 2 + 100, height / 2 + 100);
    balls[i].a = baseEliipiseWidth + random(0, 1);
    balls[i].b = baseEllipseHeight + random(0, 1);
    baseEliipiseWidth = baseEliipiseWidth + 2;
    baseEllipseHeight = baseEllipseHeight + 1;
    balls[i].angle = random(0, 365) + random(0, 5);
    // console.log(i);
  }
}

function draw() {
  //   syllable_2_3 = background(
  //     105 * abs(cos(frameCount / 50)),
  //     165 * abs(cos(frameCount / 50)),
  //     195 * abs(cos(frameCount / 50)),
  //     50
  //   );
  background(0, 0, 0, 50);
  frameRate(60);

  //   background(0, 0, 0, 50);
  translate(width / 2, height / 2);
  //   translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rotate(frameAngle);
  frameAngle = frameAngle + 0.001;
  for (let i = 0; i < ballsCount; i++) {
    balls[i].show();
    balls[i].move();
  }
}

function Ball() {
  this.ballDiameter = 10;
  this.x = 0;
  this.y = 0;
  this.a;
  this.b;
  this.angle = 0;
  this.angleSpeed = random(0, 0.01);
  this.ballRadius = random(0.5, 3);
  this.r = random(1, 255);
  this.g = random(1, 255);
  this.b = random(1, 255);
  this.ballDiameter = 10;
  this.show = function () {
    stroke(this.r, this.g, this.b);
    strokeWeight(1);
    // console.log(this.x, this.y);
    ellipse(this.x, this.y, this.ballRadius);
  };

  this.move = function () {
    this.x = this.a * cos(this.angle);
    this.y = this.b * sin(this.angle);
    this.angle = this.angle + this.angleSpeed;
  };

  this.increaseBallDiameter = function () {
    this.ballDiameter++;
  };
}
