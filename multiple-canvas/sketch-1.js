var bg = function(p) {

    this.formaX = p.windowWidth / 2;
    this.formaY = p.windowHeight / 2;
    this.size = 50;

    this.formaDestino = p.windowHeight / 2 - this.size;
    
    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }
    p.draw = function() {

        p.background(43, 171, 226);

        p.noStroke();
        p.fill(40);
        p.triangle( this.formaX, this.formaY - this.size * 2,
                    this.formaX - this.size, this.formaY - this.size * .2,
                    this.formaX, this.formaY);
        
        p.fill(60);   
        p.triangle( this.formaX, this.formaY - this.size * 2,
                    this.formaX + this.size, this.formaY  - this.size * .2,
                    this.formaX, this.formaY);

        p.fill(70);   
        p.triangle( this.formaX, this.formaY + this.size,
                    this.formaX + this.size, this.formaY  - this.size * .2,
                    this.formaX, this.formaY);
            
        p.fill(34);   
        p.triangle( this.formaX, this.formaY + this.size,
                    this.formaX - this.size, this.formaY - this.size * .2,
                    this.formaX, this.formaY);

        var diff;

        if (this.formaY > this.formaDestino) {

            diff = this.formaY - this.formaDestino;
            this.formaY -=  0.2;

            if( diff < 3) {
                this.formaDestino = p.windowHeight / 2;
            }
            
        } else {

            diff =  this.formaDestino - this.formaY;
            this.formaY +=  0.2;
            if( diff < 5 ) {
                this.formaDestino = p.windowHeight / 2 - this.size;
            }
        }
    }
}

var sketchLienzo = new p5(bg, 'canvas-1');