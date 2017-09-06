function bubbles() {
    var from = color(218, 165, 32);
    var to = color(72, 61, 139);
    var canvasPoint = map(mouseX, 0, width, 0, 100);
    var col = lerpColor(from, to, canvasPoint / 100);

    noStroke();
    fill(col);
    ellipse(mouseX, mouseY, random(10, 20));
}