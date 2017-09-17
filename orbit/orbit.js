var k = -10;

function Orbit(x, y, r, n, p) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.parent = p;
    this.speed = (radians(pow(k, n -1))) / resolution;
    this.angle = -PI/2;

    this.addChild = function() {
        var newr = this.r / 3;
        var newx = this.x + this.r + newr;
        var newy = this.y;
        this.child = new Orbit(newx, newy, newr, n+1, this);
        return this.child;
    }

    this.update = function() { 
        if(this.parent != null) {
            this.angle += this.speed;
            var rsum = this.r + this.parent.r;
            this.x = this.parent.x + rsum * cos(this.angle);
            this.y = this.parent.y + rsum * sin(this.angle);
        }
    }
    this.draw = function() {
        stroke(100);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}