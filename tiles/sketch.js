
var tiles = [];
var inc = 50;
var tamano = 64;
var ratio = 1.78125;
var offset = tamano * ratio;

function setup() {
	createCanvas(windowWidth, windowHeight);    

	for (var x = 0; x <= width + tamano; x += tamano * 2) {
		for (var y = 0; y <= height + offset; y += offset) {
            var x0 = 0;
            
			if (y % (offset * 2) == 0) x0 = tamano;

			tiles.push( new Tile(x + x0, y, tamano));
        }
    }
}

function draw() {
    background(52);

    for( var i = tiles.length -1; i > 0; i--) {
        tiles[i].update();
        tiles[i].draw();
    }
}
