function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {

    var s = 16.0;
    var nx = random(-s, s);
    var ny = random(-s, s);

    translate(mouseX + nx, mouseY + ny);
    rotate(radians(frameCount * 0.4));

    noFill();
    stroke(255, 8);
    strokeWeight(2.0);
    line(-width, -height, width, height)
}