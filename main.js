function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
   
    poseNet.on('pose',gotPoses);
    
    
}    