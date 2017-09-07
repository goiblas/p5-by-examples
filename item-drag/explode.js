function Disc(x, y) {
    this.pos = createVector(x, y);
    this.col = 100;
    this.size = 20;

    this.applyForce = function(force) {
 
    }

    this.isDead = function() {
        if ( this.size > 100)  return true;
        return false;
    }

    this.update = function () {
        this.size *= 1.1;
    }

    this.draw = function () {
        strokeWeight(2)
        stroke(this.col);
        noFill();
        ellipse(this.pos.x, this.pos.y, this.size, this.size / 1.35);
    }
}


function Particle (x, y) {
    this.pos = createVector(x, y);
    this.acc = createVector(0,0);
    this.size = random(3, 9);
    this.col = random(120, 255);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(1.2, 4));

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.isDead = function() {

        if ( this.pos.x < 0 ||
             this.pos.x > width || 
             this.pos.y > height ||
             this.pos.y < 0 )  {
                 return true;
             }

        return false;
    }

    this.update = function () {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }

    this.draw = function () {
        strokeWeight(this.size)
        stroke(this.col);
        point(this.pos.x, this.pos.y);
    }
}