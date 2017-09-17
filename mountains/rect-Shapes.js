function RectShapes(pos, w, h, col){
    this.pos = pos;
    this.w = w;
    this.h = h;
    this.col = col;
    this.circles = [];

    this.update = function() {

        var counter = 0;
        var max = Math.abs(this.w) * Math.abs(this.h) / 150;
        var circleForDraw = Math.min(max / 30, 1);

        while(counter < circleForDraw && this.circles.length < max){
            var newC = addNewCircle(this.pos, this.w, this.h, this.circles, this.col);
            if( newC ) {
                this.circles.push(newC);
                counter++;
            }
        }
    
        for(var i = 0; i< this.circles.length; i++) {
            var c = this.circles[i];
            if ( c.edges()) {
                c.growing = false;
            } else {
                for(var a = 0; a < this.circles.length; a++) {
                    var other = this.circles[a];
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
        }
    }

    this.draw = function() {
        for(var i = 0; i< this.circles.length; i++) {
            this.circles[i].draw();
        }
    }
}

function addNewCircle(posicionInicial, anchura, altura, circles, col) {
    var x = random(posicionInicial.x, posicionInicial.x + anchura);
    var y = random(posicionInicial.y, posicionInicial.y + altura);

    var isValid = true;
    for(var i = 0; i< circles.length; i++) {
        var c = circles[i];
        var d = dist(x, y, c.x, c.y );
        if (d < c.r + 2) {
            isValid = false;
            break;
        }
    }

    if(isValid ) {
        return new Circle(x, y, col);
    }

    return null;
}



function Circle(x, y, col) {
    this.x = x;
    this.y = y;
    this.r = 1;
    this.growing = true;
    this.exploted = false;

    var from = color(col);
    var to = color(55);
    colorMode(RGB);
    var per = random(1);
    this.col = lerpColor(from, to, per  )

    this.update = function() {
        if ( this.growing )  this.r += 0.4;
    }

    this.edges = function(){
        return ( this.x + this.r > width ||  this.x - this.r < 0 || 
                 this.y + this.r > height || this.y - this.r < 0);
    }

    this.draw = function() {
        if(!this.exploted ){
            noStroke();
            fill(this.col);
            ellipse(this.x, this.y, this.r * 2, this.r * 2);
        }
    }
}
