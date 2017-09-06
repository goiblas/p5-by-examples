function Ball() {
    this.pos = createVector(width /2, 20);
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.update = function() {
        this.pos.add(this.vel);
        this.vel.add(this.acc)

        this.acc.mult(0);
    }

    this.attract = function(target) {
        var force = p5.Vector.sub(target, this.pos);
        var dsquared = force.magSq();

        var G = 1000;
        var fuerza = G / dsquared;

        force.setMag(fuerza);

        this.acc = force;

    }



    this.draw = function() {
        stroke(255);
        strokeWeight(4);
        point(this.pos.x, this.pos.y);
    }





    this.edges = function() {
        if (this.pos.x > width) {
            this.pos.x = width;
            this.vel.x -= -1;
        } else if ( this.pos.x < 0) {
            this.pos.x = 0;
            this.vel.x -= 1;
        }

        if ( this.pos.y > height) {
            this.vel.y *= -1;
            this.pos.y = height;
        }
    }
}