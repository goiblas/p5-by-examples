var n = 0;
var c = 4;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);
    colorMode(HSB);
    background(52);
}

function draw() {
    var angle = n * 137.5;
    var r = c * sqrt(n);
    var x = r * cos(angle) +  width / 2;
    var y = r * sin(angle) + height / 2;

    fill(n % 256, 255, 230);
    noStroke();
    ellipse(x, y, 4, 4)
    n++;
    // tornado(300, 140);
    // pieChart();
}


function pieChart() {
    var x = 230;
    var y = 100;
    var ancho = 200;

    translate(x, y)
    rotate( radians(-90));

    var ang = radians(45);
    var ang2 = ang + radians(125);

    noStroke();

    fill(200);
    arc( 0, 0, ancho, ancho, 0, ang);

    fill(120);
    arc( 0, 0, ancho, ancho, ang, ang2);
}




var radius = 0;
var radiusDestino = 50;
var opacidad = 100;

function tornado(posx, posy) {

    if( opacidad > 0) {
        translate(posx, posy);
        stroke(255, this.opacidad);
        strokeWeight(1);

        var diff = radiusDestino + 20 - radius;
        var g = diff + 30;
        rotate(frameCount / g);

        var angulo = TWO_PI / 4;
        for( var i = 0; i < TWO_PI; i += angulo){
            var x = radius * cos(i);
            var y = radius * sin(i);
            point(x, y)
        }

        radius += 0.2;

        if ( radius > radiusDestino) {
            opacidad--;
        } 
    }
}