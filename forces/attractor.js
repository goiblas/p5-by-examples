function Attractor() {
    this.pos = createVector(width / 2, height / 2);
    this.mass = 20;

    this.draw = function() {
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke(0);
        fill(150);

        ellipse( this.pos.x, this.pos.y, this.mass * 2, this.mass * 2);
    }
}