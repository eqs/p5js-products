
var circleList = [];
var colorList = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    colorList = [color('#F301EE'),
                 color('#FFC484'),
                 color('#01F6DD')]
    
    for (var k = 0; k < 512; k++) {
        circleList.push(new Circle());
    }
            
    for (var k = 0; k < circleList.length; k++) {
        var p = createVector(random(width), random(height));
        var r = random(16, 128);
        var idx = int(random(colorList.length));
        var c = colorList[idx];
        circleList[k].init(p, r, c);
    }

}

function draw() {
   background(0);

    for (var k = 0; k < circleList.length; k++) {
        circleList[k].draw();
    }
    
    for (var i = 0; i < circleList.length; i++) {
        for (var j = 0; j < circleList.length; j++) {
            if(i != j && circleList[i].intersect(circleList[j])) {
                circleList[i].move(circleList[j]);
            }
        }
    }
}

class Circle {
    constructor() {
        this.position = createVector(0, 0);
        this.radius = 0;
        this.color = color('#000000')
    }

    init(p, r, c) {
        this.position = p;
        this.radius = r;
        this.color = c;
    }

    intersect(circle) {
        var p = this.position.copy();
        p.sub(circle.position);
        return p.mag() < this.radius + circle.radius;
    }

    move(circle) {
        var p = this.position.copy();
        var v = p.sub(circle.position);
        v.normalize();
        v.mult(4);
        this.position.add(v);
        v.mult(-1);
        circle.position.add(v);
    }

    draw() {
        stroke(0);
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
    }
}