function Particle(x , y, size) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D();
    this.size = size;
    this.finished = false;

    this.update = function() {
        this.size -= 0.4;
        this.pos.add(this.vel);

        if( this.pos.x > width) this.pos.x = 0;
        if( this.pos.x < 0) this.pos.x = width;
        if( this.pos.y > height) this.pos.y = 0;
        if( this.pos.y < 0) this.pos.y = height;
        if( this.size <= 0) this.finished = true;
    }
    

    this.show = function() {
        noStroke();
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.size);
    }


}