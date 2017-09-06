function MyBlob(posinicio, posfinal) {
    this.pos = posinicio;
    this.size = dist(posinicio.x, posinicio.y, posfinal.x, posfinal.y);
    this.altura = this.size / 5;

    var yoff = 0;
    this.update = function () {
        fill(255);
        noStroke();
        push();
        translate(this.pos.x, this.pos.y);
        beginShape();
        var xoff = 0;

        var maxOffset = 20;

        for (var i = 0; i < this.size; i++) {
            var offset = map(noise(xoff, yoff), 0, 1, -maxOffset, maxOffset);

            var y;
            if( i < this.size / 2) {
                y = map(i, 0, this.size, 0, this.altura);
            } else {
                y = map(i, 0, this.size, this.altura, 0);
            }

            y += offset;
            vertex(i, -Math.max(y, 0));
            xoff += 0.01;
        }

        for (var i = this.size; i > 0; i--) {

            var offset = map(noise(xoff, yoff), 0, 1, -maxOffset, maxOffset);
            var y;
            if( i < this.size / 2) {
                y = map(i, 0, this.size, 0, this.altura);
            } else {
                y = map(i, 0, this.size, this.altura, 0);
            }

            y += offset;
            vertex(i, Math.max(y, 0));
            xoff += 0.01;
        }
        
        yoff += 0.01;

        endShape();
        pop();
    }
}
