
var lines = [];
var initline = 1;
function setup() {
    createCanvas(500, 500);

}

function draw() {
    background(52);


    for( var i = lines.length -1; i > 0; i--) {
        lines[i].update();
        lines[i].draw();
    }
}

function mouseRelease() {
    initline = 1;
}

function mouseDragged () {
    if ( initline < 130) initline += 3;
    lines.push(new WaveLine(mouseX, mouseY, initline));
}