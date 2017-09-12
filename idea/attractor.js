var Attractor = function (pos, col) {
    this.position = pos;
    this.mass = 8;
    this.G = 1;
    this.col = col;

    this.calculateAttraction = function (vehicles) {
        var force = p5.Vector.sub(this.position, vehicles.position);
        var distance = force.mag();
        distance = constrain(distance, 20, 30);
        force.normalize();
        var strength = (this.G * this.mass * vehicles.r) / (distance * distance);
        force.mult(strength);
        return force;
    };

    this.update = function(){
        
        //this.position.x += random(-5, 5);
        //this.position.y += random(-5, 5);
    }

    this.draw = function(){
        noStroke();
        fill(100);
        ellipse(this.position.x, this.position.y, 15, 15);
    }
};