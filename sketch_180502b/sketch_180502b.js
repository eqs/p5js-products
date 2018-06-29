
var lineList = [];
var colorList = [];

function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    
    colorList = [color('#03d2ab20'),
                 color('#444bfa20'), 
                 color('#f8125920'),
                 color('#f8ba6820')]
                 
    for (var k = 0; k < 10; k++) {
        lineList.push(new Line());
    }

    background(255);
}

function draw() {
    for (var k = 0; k < lineList.length; k++) {
        lineList[k].draw();
    }
}

class Line {

    constructor() {
        this.position = createVector(random(0.0, width), 0.0);
        this.pposition = this.position.copy();
        this.velocity = createVector(random(-2.0, 2.0), random(4.0, 6.0));
        this.pen = colorList[int(random(colorList.length))];
    }

    draw() {
        this.pposition = this.position.copy();
        this.position.add(this.velocity);

        if (this.position.x < 0) {
            this.position.x += width;
            this.pposition = this.position;
        } else if (width < this.position.x) {
            this.position.x -= width;
            this.pposition = this.position;
        }
        
        if (height < this.position.y) {
            this.position.y -= height;
            this.pposition = this.position;
            this.velocity = createVector(random(-2.0, 2.0), random(2.0, 5.0));
        }
        
        stroke(this.pen);
        strokeWeight(20.0);
        line(this.pposition.x, this.pposition.y, this.position.x, this.position.y);
    }
}