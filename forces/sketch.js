
var ball;
var attractor;
function setup() {
    createCanvas(500, 500);
    ball = new Ball();
    attractor = new Attractor();
}

function draw() {
    background(52);

    var gravity = createVector(0, 0.3);
    ball.applyForce(gravity);

    ball.attract(attractor.pos)
    ball.update();
    ball.edges();
    ball.draw();

    attractor.draw();

}

function mousePressed () {

    var resultado = attractor.attract(ball);
    console.log( resultado);
}