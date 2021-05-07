var bg, bgImg;
var bird, birdImg;
var invisibleground;
function preload(){
  bgImg = loadImage("bg.png");
  birdImg = loadImage("bird.png");
}
function setup(){
  createCanvas(1800,900);
  bg= createSprite(900,0,1800,900);
  bg.addImage(bgImg);
  bg.scale=4;
  bg.velocityX=-4;
  bird = createSprite(700,450,10,10);
  bird.addImage(birdImg);
  invisibleground = createSprite(900,900,1800,10);
  bird.setCollider("circle",0,-11,90);
  bird.debug=true
}
function draw(){
  //background("white");
  if(bg.x<0){
    bg.x=bg.width/2
  }
  if(keyDown("space")){
    bird.velocityY=-20;
  } 
  bird.velocityY=bird.velocityY+2;
  bird.collide(invisibleground);
  drawSprites();
}