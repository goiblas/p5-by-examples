var path = [];

var angle = 0;
var resolution = 90;

var sun;
var end;

function setup() {
    createCanvas(500, 500);
    sun = new Orbit(width/2, height/2, width/4, 0);
    var next = sun;
    for (var i = 0; i < 3; i++) {
      next = next.addChild();
    }
    end = next;
}

function draw() {
    background(52);

  for (var i = 0; i < resolution; i++) {
    var next = sun;
    while (next != null) {
      next.update();
      next = next.child;
    }
    path.push(createVector(end.x, end.y));
  }

  var next = sun;
  while (next != null) {
    next.draw();
    next = next.child;
  }

  beginShape();
  stroke(155, 0, 255);
  strokeWeight(5);
  noFill();
  for (var pos of path) {
    vertex(pos.x, pos.y);
  }
  endShape();
}