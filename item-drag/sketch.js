var cu;
var particles = [];
var gravity;
function setup() {
    createCanvas(500, 500);
    cu = new Cuadrado(random(width), random(height));
    gravity = createVector(0, 0.2);
}

function draw() {
    background(50);
    cu.update();
    cu.draw();

    for( var i = particles.length - 1; i > 0; i--) {
        particles[i].applyForce(gravity);
        particles[i].update();
        particles[i].draw();

        if( particles[i].isDead()) {
            particles.splice(i, 1);
        } 
    }
}


function Cuadrado(x, y) {
    this.pos = createVector(x, y);
    this.size = 30;
    this.freeze = false;


    this.update = function() {
        
        if(!this.freeze){
            var step = p5.Vector.random2D();
            step.mult(0.5);
            this.pos.add(step);

        } else {
            this.pos.x = mouseX;
            this.pos.y = mouseY;
        }
        
        if (this.pos.x < 0)  this.pos.x = 0;
        if (this.pos.x > width)  this.pos.x = width;
        if (this.pos.y > height)  this.pos.y = height;
        if (this.pos.y < 0)  this.pos.y = 0;
    }

    this.draw = function (){
        fill(255);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
}

function mouseReleased() {
    cu.freeze = false;
}

function mousePressed() {
    var v = createVector(mouseX, mouseY);
    var d = v.dist(cu.pos);
    if(d < cu.size) {
        cu.freeze = true;
    } else {
        
        for(var i = 0; i < 7; i++){
            particles.push(new Particle(mouseX, mouseY));
        }
        particles.push(new Disc(mouseX, mouseY));
    }
}