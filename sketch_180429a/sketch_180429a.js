
var step = 32;
var vib_scale = 0.0;
var color_list = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    color_list = [color('#66a841'), color('#a0cf31'), color('#ffe822')];
}

function draw() {
    background(0);

    noStroke();

    for (var i = 0; i <= width; i += step) {
        for (var j = 0; j <= height; j += step) {
            fill(color_list[(i + j + int(frameCount * 0.1)) % color_list.length]);
            ellipse(i+random(-vib_scale, vib_scale), 
                    j+random(-vib_scale, vib_scale), 16, 16);
        }
    }

    vib_scale = max(0.0, vib_scale - 0.25);
}

function mousePressed() {
    vib_scale = 12.0;
}