var radioTools,
    land,
    myBlob,
    inicio,
    final,
    particles = [];

function setup() {
    createCanvas(500, 500);
    radioTools = createRadio();
    radioTools.option('Burbujas', "burbajas");
    radioTools.option('Tijera', "tijera");
    radioTools.option('particula', "particle");


}

function draw() {
    background(52);
    if( myBlob) {
        myBlob.update();
    }

    for( var i = particles.length - 1; i > 0; i--) {
        if ( particles[i].finished ) {
            particles.splice(i, 1);

        } else {
            particles[i].update();
            particles[i].show();
        }
    }
}

function mouseDragged() {

    final = createVector(mouseX, mouseY);
    myBlob = new MyBlob(inicio, final);
    
    switch (radioTools.value()) {
        case "burbajas":
            bubbles();
            break;
            
        case "tijera":
            tijera();
            break;
    }
     return false;

}

function mousePressed() {

    inicio = createVector(mouseX, mouseY);
    if( radioTools.value() === 'particle') {

        for(var i = 0; i < 3; i++) {
            var myParticle = new Particle( mouseX, mouseY, random(10, 20));
            particles.push( myParticle);
        }
    }
}

function mouseReleased() {
    final = createVector(mouseX, mouseY);
    myBlob = new MyBlob(inicio, final);
}