function WaveLine(x, y, max) {
    this.x = x;
    this.y = y;


    this.update = function() {

    }

    this.draw = function() {
        noFill();
        stroke(255);
        strokeWeight(1);
        
        point(this.x, this.y)
        
        
        stroke(255, 40);
        line(this.x, this.y, width / 2, height);

    }
}
