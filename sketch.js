var runner,runner_animation;
var bg1;

function preload(){
  runner_animation = loadAnimation("Runner1.png","Runner2.png","Runner3.png","Runner4.png","Runner5.png")
 bg1 = loadImage("background.gif")
}
function setup() 
{
  createCanvas(windowWidth , windowHeight);
  runner = createSprite(windowWidth - 1400 , windowHeight - 250 , 50 , 50)
  runner.addAnimation("running" , runner_animation)
  runner.scale = 0.8

  ground = createSprite(windowWidth -800, windowHeight-20 , windowWidth , 10)
}

function draw() 
{
background(bg1);

if(keyDown("UP_ARROW")){
  runner.velocityY = -8
}
runner.velocityY = runner.velocityY+0.7;
runner.collide(ground)
  drawSprites()

}

