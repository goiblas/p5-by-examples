var yoff= 0;
function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(52);
    // addShape(100);
    translate(width / 2, height /2);
    noStroke();
    for(var i = 10; i > 0; i--) {
        addShape(i * 12 + 10);
    }
    fill(90);
    ellipse(0, 0, 230);
    yoff += 0.01;
}

function addShape(r) {
    
        var size = r / 5;
        //rotate(PI / 3);
        fill(255 -  size);
        translate(size / 4, 0)
        beginShape();
        var xoff= 0;
        for (var i = 0; i < TWO_PI; i += 0.1){
            var offset = map(noise(xoff, yoff), 0, 1, -size, size);
            var ra = r + offset;
            var x = ra * cos(i);
            var y = ra * sin(i);
            vertex(x, y);
            xoff += 0.1;
        }
        endShape();
}