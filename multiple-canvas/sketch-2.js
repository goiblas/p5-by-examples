var lienzo = function(p) {
    this.ease = 0.05;
    this.x = 0;
    this.y = 0;
    this.px = 0;
    this.py = 0;

    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }
    p.draw = function() {
        p.stroke(255, 102);
        
        var targetX = p.mouseX;
        var targetY = p.mouseY;

        this.x += (targetX - this.x) * this.ease;
        this.y += (targetY - this.y) * this.ease;

        var anchura = p.dist(this.x, this.y, this.px, this.py);
        p.strokeWeight(anchura * 1.5);
        p.line(this.x, this.y, this.px, this.py);

        this.px = this.x;
        this.py = this.y;
    }
}

var sketchLienzo = new p5(lienzo, 'canvas-2');

