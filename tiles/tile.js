function Tile(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size  * 2;

    this.col = 255;

    this.update = function() {

    }

    this.draw = function() {

        fill(this.col);
        noStroke();

        beginShape();
        for (var i = 0; i < 6; i++) {
            var angle = PI * i / 3;
            vertex(
                this.x + sin(angle) * (this.size / ratio),
                this.y + cos(angle) * (this.size / ratio)
            );
        }
        endShape(CLOSE);
    }
}