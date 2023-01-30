function preload(){
}

function setup(){
    canvas = createCanvas(1000,1000);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video,200,100,640,480);

    fill(255,0,0)
    circle(100,50,100,);
    
    fill(50,205,50)
    rect(150, 30, 700 ,35, 35);
    
    fill(255,0,0)
    circle(900,50,100);

    fill(255,0,0)
    circle(100,650,100);

    fill(50,205,50)
    rect(150, 641, 700 ,35, 35);

    fill(255,0,0)
    circle(900,650,100);
}

function take_snapshot(){
    save ("aniket_img.png");
}