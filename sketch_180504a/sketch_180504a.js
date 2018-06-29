
var tau = 0.0;
var size = 400;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
    var s = min(windowWidth, windowHeight);
    size = s / 50.0;
}

function draw() {
    background(0);

    // Compute Scale of Heart
    var sx = 1.0 + (1.0 / 4.0) * exp(-tau * 0.5) * cos(tau * 8.0);
    var sy = 1.0 + (1.0 / 4.0) * exp(-tau * 0.5) * sin(tau * 8.0);

    // Draw Heart
    translate(width / 2.0, height / 2.0);
    noStroke();
    fill('#FF512620');

    for (var k = 0; k < 10; k++) {
        push();
        scale(0.9 + 0.010 * k, 0.9 + 0.010 * k);
        scale(size * sx, size * sy);
        drawHeart();
        pop();
    }

    // Draw Text
    push();
    translate(0, -height / 2.5);
    scale(4.0, 4.0);
    rotate(radians(3.0 * sin(radians(frameCount * 2.0))));

    textAlign(CENTER, CENTER);

    fill(255);
    noStroke();
    text('Touch me!', 0, 0);
    pop();

    tau = tau + 0.1;
}

function drawHeart() {
    var N = 100;
    beginShape();
    for (var k = 0; k < N; k++) {
        var t = k * TWO_PI / N;
        var x = 16 * pow(sin(t), 3);
        var y = -(13 * cos(t) - 5*cos(2*t) - 2*cos(3*t) - cos(4*t));
        vertex(x, y);
    }
    endShape();
}

function mousePressed() {
    tau = 0.0;
}