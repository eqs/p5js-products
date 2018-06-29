
const classifier = ml5.imageClassifier('MobileNet');

let img;

var s = "nil";

function setup() {
    img = createImg('images/bird.jpg');
    img.size(400, 400);
    imageReady();
}

function draw() {
    // put drawing code here
    text(s, 10, 10);
}

function imageReady() {
    classifier.predict(img, 10, gotResult);
}

function gotResult() {
    select('#result').html(results[0].className);
    s = results[0].className;
    select('#probability').html(nf(results[0].probability, 0, 2));
}