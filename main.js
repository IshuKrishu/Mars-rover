canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
rover_width=100;
rover_height=90;
rover_x=10;
rover_y=10;
background_image="mars.jpg";
rover_image="rover.png";

function add(){
background_imageTag= new Image();
background_imageTag.onload= uploadBackground;
background_imageTag.src=background_image;

rover_imageTag= new Image();
rover_imageTag.onload= uploadRover;
rover_imageTag.src=rover_image;
}

function uploadBackground(){
ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);

}

function uploadRover(){
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}

function mykeyDown(e){
var keypressed=e.keyCode;
console.log(keypressed);
if(keypressed == '38'){
up();
console.log("up");

}
if(keypressed == '40'){
down();
console.log("down");
}
if(keypressed == '37'){
left();
console.log("left");
}
if(keypressed == '39'){
right();
console.log("right");
}
}
window.addEventListener("keydown",mykeyDown);
