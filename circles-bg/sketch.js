var circles = [];

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(51);

    var circleForDraw = 10;
    var counter = 0;
    while(counter < circleForDraw){
        var newC = addNewCircle();
        if( newC) {
            circles.push(newC);
            counter++;
        }
    }

    for(var i = 0; i< circles.length; i++) {
        var c = circles[i];
        if ( c.edges()) {
            c.growing = false;
        } else {
            for(var a = 0; a< circles.length; a++) {
                var other = circles[a];
                if( other != c) {
                    var d = dist(c.x, c.y, other.x, other.y);
                    if (d < c.r + other.r + 2) {
                        c.growing = false;
                        break;
                    } 
                }
            }
        }
        
        c.update();
        c.draw();
    }
}

function addNewCircle() {
    var x = random(width);
    var y = random(height);

    var isValid = true;
    for(var i = 0; i< circles.length; i++) {
        var c = circles[i];
        var d = dist(x, y, c.x, c.y );
        if (d < c.r) {
            isValid = false;
            break;
        }
    }

    if(isValid ) {
        return new Circle(x, y);
    }

    return null;
}

function Circle(x, y) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;

    this.update = function() {
        if ( this.growing )  this.r += 0.4;
    }

    this.edges = function(){
        return ( this.x + this.r > width ||  this.x - this.r < 0 || 
                 this.y + this.r > height || this.y - this.r < 0);
    }
    this.draw = function() {
        stroke(255);
        noFill();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}
