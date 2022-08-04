function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(650, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', getPoses);
}

function draw() {
    background(7, 247, 235);
}

function modelLoaded() {
    console.log('poseNet is initialized');
}

function getPoses(results) {
    if(results.length > 0) {
        console.log(results);
    }
}