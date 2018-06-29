
var N = 5;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
}

function draw() {
    translate(width / 2.0, height / 2.0);
    rotate(radians(frameCount * 2.0));
    var r = 100 + 10 * sin(radians(frameCount * 8.0)) + frameCount * 0.25;

    noFill();
    stroke(255, 4);
    strokeWeight(5.0);
    drawShape(N, r);
}

function drawShape(n, r) {
    beginShape();
    for (var k = 0; k < n; k++) {
        var t = k * TWO_PI / N;
        var x = r * cos(t);
        var y = r * sin(t);
        vertex(x, y);
    }
    endShape(CLOSE);
}
