var si, siImg;
var sus, susImg;

function preload(){
  siImg = loadAnimation("otip.png");
  susImg = loadAnimation("sis.png");
}
function setup() {
  createCanvas(800,400);
  si = createSprite(400, 200, 50, 50);
  si.addAnimation("come",siImg);
  si.scale = 0.1;
  sus = createSprite(900,370,20,20);
  sus.addAnimation("4", susImg)
  sus.scale = 0.1
}

function draw() {
  background(0);  
  drawSprites();
  if (keyDow("A")){
    si.velocityX = 5;
  }
  if (keyDown("S")){
    si.velocityX = -5;
  }
  if (sus.y > 370 && susBody.position.y > 370){
    Matter.Body.setStatic(susBody,true)
  }
}