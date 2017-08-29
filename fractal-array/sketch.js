var tree = [];
var leaves = [];

function setup() {
    createCanvas(500, 500);
    var v1 = createVector( width / 2, height);
    var v2 = createVector( width / 2, height - 100);
    tree[0]= new Brach(v1, v2);
}

function mousePressed() {

    for( var i = tree.length -1; i >= 0 && i < 2100; i--) {
        if(!tree[i].completed) {
            tree.push(tree[i].brachLeft());
            tree.push(tree[i].brachRight());
            tree[i].completed = true;
        }
    }

    if( tree.length > 4000) {
        for( var i = 0; i < tree.length; i++) {
            if(!tree[i].completed) {
                var leaf = tree[i].finish.copy();
                leaves.push(leaf);
            }
        }
    } 
}

function draw() {
    background(80);

    for( var i = 0; i < tree.length; i++) {
        tree[i].show();
    }

    for( var i = 0; i < leaves.length; i++) {
        fill(145, 232, 80, 60);
        noStroke();
        ellipse(leaves[i].x, leaves[i].y, 4, 8);     
    }
}

