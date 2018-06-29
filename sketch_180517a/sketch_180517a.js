
var len = 64;

function setup() {
    var s = min(windowWidth, windowHeight);
    createCanvas(s, s);
}

function draw() {
    background(0);
    rectMode(CENTER);

    for (var i = 0; i * len < height; i++) {
        for (var j = 0; j * len < width; j++) {

            var r = sqrt(pow(mouseX - j*len, 2) + pow(mouseY - i*len, 2));
            r = 1.0 - min(r, 256.0) / 256.0;

            var n =  (-90 + 180 * noise(i, j, 10E-2*frameCount)) * r;
            push();
            translate(j*len + len/2.0, i*len + len/2.0);
            scale(0.85, 0.85);
            rotate(radians(n));
            myRect();
            pop();
        }
    }
}

function myRect() {
    fill(255);
    stroke(0);

    rect(0, 0, len, len);
    scale(0.9, 0.9);
    rect(0, 0, len, len);
    scale(0.9, 0.9);
    rect(0, 0, len, len);
}