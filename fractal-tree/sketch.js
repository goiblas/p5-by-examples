var angle = 0;
var slider;

function branch (lon) {
    line(0, 0, 0, -lon);
    translate(0, -lon);

    if( lon > 6) {
        var newLon = lon * .75;
        push();
        rotate(angle);
        branch(newLon);
        pop();

        push();
        rotate(-angle);
        branch(newLon);
        pop();
    }
    
}

function setup() {
    createCanvas(500, 500);
    slider = createSlider(0, TWO_PI, PI / 4, 0.01);
}

function draw() {
    background(30, 80);
    angle = slider.value();

    stroke(200);
    translate( width / 2,  height);
    branch(80);
}

