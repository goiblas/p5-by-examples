function Brach( begin, finish) {
    this.begin = begin;
    this.finish = finish;
    this.completed = false;

    this.show = function() {
        stroke(255);
        line(this.begin.x, this.begin.y, this.finish.x, this.finish.y);
    }

    this.brachLeft = function () {
        var num = random(7);
        var newFinish = p5.Vector.sub(this.finish, this.begin);
        newFinish.rotate(-PI / num);
        newFinish.mult(0.7);

        var newPoint = p5.Vector.add(this.finish, newFinish);
        return new Brach(this.finish, newPoint);
    }

    this.brachRight= function () {
        var num = random(7);        
        var newFinish = p5.Vector.sub(this.finish, this.begin);
        newFinish.rotate( PI / num);
        newFinish.mult(0.7);

        var newPoint = p5.Vector.add(this.finish, newFinish);
        return new Brach(this.finish, newPoint);
    }
}