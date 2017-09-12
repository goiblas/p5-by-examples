var vehicles = [];
var attractors = [];
var sizeNav = 200;

var bubble;
var iman;
var btnDetener;

function setup() {
    bubble = document.getElementById('bubble');
    iman = document.getElementById('iman');
    btnDetener = document.getElementById('detener');
    btnDetener.addEventListener('click', detenerDraw);
    var canvas = createCanvas(windowWidth - sizeNav, windowHeight);
    canvas.parent('sketch');
    
    var pos = createVector(random(width - 40) + 20, random(height - 40) + 20);
    attractors.push( new Attractor(pos, 10));
}

function draw() {
    background(255, 1);

    noSmooth();
    for (var i = 0; i < vehicles.length; i++) {
        for( var a = 0; a < attractors.length; a++) {
            var force = attractors[a].calculateAttraction(vehicles[i]);
            vehicles[i].applyForce(force);
        }
        vehicles[i].separate(vehicles);
        vehicles[i].connect(vehicles);
        vehicles[i].update();
        vehicles[i].display();
        
        if (vehicles[i].isDead()) {
            this.vehicles.splice(i, 1);
        }
    }
    
    for( var i = 0; i < attractors.length; i++) {
        attractors[i].update();
        attractors[i].draw();
    }


}


function mouseClicked() {

if(mouseX < width - sizeNav) {

    if(iman.checked) {
        var pos = createVector(mouseX, mouseY);
        attractors.push( new Attractor(pos, 10));
    }

    if( bubble.checked == true) {
        for (var i = 0; i < 3; i++) {
            vehicles.push(new Vehicle(mouseX + random(-20, 20), mouseY + random(-20, 20), random(3, 8)));
        }
    }
    }
}


function detenerDraw() {
     vehicles = [];
     attractors = [];
}