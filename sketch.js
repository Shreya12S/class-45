var bg,bgImg;
var shooter,shooterImg
var shootingImg;
function preload(){
  bgImg= loadImage("assets/bg.jpeg")
  shooterImg= loadImage("assets/shooter_2.png")
  shootingImg= loadImage("assets/shooter_3.png")
}
function setup(){
  createCanvas(windowWidth,windowHeight)
  //adding the background and its image
  bg=createSprite(displayWidth/2,displayHeight/2)
  bg.addImage(bgImg)
  shooter=createSprite(70,470,50,50)
  shooter.scale=0.3
  shooter.addImage(shooterImg)
}
function draw(){
  background("black")
  if(keyWentDown("space")){
    shooter.addImage(shootingImg)
  }
  if(keyWentUp("space")){
    shooter.addImage(shooterImg)
  }
  if(keyDown("left")&& shooter.x>25){
    shooter.x -= 5

  }
  if(keyDown("right")){
    shooter.x += 5
  }
  if(keyDown("up")&& shooter.y>70){
    shooter.y -= 5
  }
  if(keyDown("down")&& shooter.y<500){
    shooter.y += 5
  }

  
  drawSprites()
}