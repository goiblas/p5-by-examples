var yoff = 0.01;
var creandoForma = false;
var clickInicial;
var shapes = [];
var colors = ['#005BC5', '#17F9FF', '#EB7B59', '#E5DDCB', '#A7C5BD', '#CF4647'];

function setup() {
    createCanvas(600, 500);
}

function draw () {
    background(52)
    generarSuelo();
    dibujarInteractiones();

    for(var i = 0; i < shapes.length; i++){
        shapes[i].update();
        shapes[i].draw();
    }
}

function dibujarInteractiones() {
    if(creandoForma) {
        stroke(255);
        strokeWeight(2);
        ellipse(clickInicial.x,  clickInicial.y, 2);
        ellipse(mouseX,  mouseY, 2);
        strokeWeight(1);
        var w = mouseX - clickInicial.x;
        var h = mouseY - clickInicial.y;
        fill(255, 10);
        stroke(255, 40);
        rect(clickInicial.x, clickInicial.y, w, h);
    }
}

function mousePressed() {

    var sobreCirculos = false;
    if(!creandoForma){
        for(var i = 0; i < shapes.length; i++) {
            for( var c = 0; c < shapes[i].circles.length; c++){
                var cir = shapes[i].circles[c];
                var d = dist(mouseX, mouseY, cir.x, cir.y);
                if (d < cir.r + 20) {
                    cir.exploted = true;
                    sobreCirculos = true;
                }
            }
        }
    }

    if(!sobreCirculos ){
        if(!creandoForma) {
            clickInicial = createVector(mouseX, mouseY);
        } else {
            var w = mouseX - clickInicial.x;
            var h = mouseY - clickInicial.y;
            var col = random(colors);
            var shape = new RectShapes(clickInicial, w, h, col);
            shapes.push(shape);
        }
    
        creandoForma =! creandoForma;
    }

}




function generarSuelo() {
    noStroke();
    for( var b = height; b > 0; b-= 100) {

        fill(255 - b / 10);
        beginShape();
        vertex(0, height);
        
        var xoff = 0.005;
    
        for( var i = 0; i <= width; i++) {
            vertex(i, height - b * noise(xoff, yoff) / 3);
            xoff += 0.005;
        }
        
        vertex(width, height);
        endShape();

    }
    yoff += 0.003;
}