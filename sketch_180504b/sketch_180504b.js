
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw(){

    orbitControl();

    background(200);

    var N = 16;
    var size = 80;

    for (var k = 0; k < N; k++) {
        var t = k * TWO_PI / N + radians(frameCount * 0.8);
        var x = 300 * cos(t);
        var y = 300 * sin(t);

        push();
        translate(x, y);
        rotate(t);
        box(size, size, size);
        pop();
    }
}
