var points = [];

function setup() {
    createCanvas(800, 800, P2D);
    colorMode(HSB, 180, 255, 255);
}

function draw() {
    background(0);

    noFill();
    stroke(int(frameCount * 0.5) % 180, 255, 255);
    strokeWeight(0.8);

    beginShape();
    for (var k = 0; k < points.length; k++) {
        vertex(points[k].x, points[k].y);
    }
    endShape();
    
    for (var k = 0; k < points.length; k++) {
        var rx = 7.0 * (noise(points[k].x, k, frameCount) - 0.5);
        var ry = 7.0 * (noise(points[k].y, k, frameCount) - 0.5);
        var rv = createVector(rx, ry);
        points[k] = p5.Vector.add(points[k], rv);
    }
}

function mousePressed() {
    points = [];
}

function mouseDragged() {
    var n = points.length;

    if (n > 0) {
        var cx = (mouseX + points[n-1].x) / 2.0;
        var cy = (mouseY + points[n-1].y) / 2.0;
        var cv = createVector(cx, cy);
        points.push(cv);
    }

    var mv = createVector(mouseX, mouseY);
    points.push(mv);
}
