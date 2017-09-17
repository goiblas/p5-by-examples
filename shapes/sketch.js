var _x = 100;
var _y = 100;
var _w = 400;
var _h = 260;

circles = [];

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(52);

    var circleForDraw = 6;
    var counter = 0;
    var max = 600;

    while(counter < circleForDraw && circles.length < max){
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
    var x = random(_x, _x + _w);
    var y = random(_y, _y + _h);

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
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}
