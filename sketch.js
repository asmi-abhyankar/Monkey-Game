var monkey , monkey_running
var banana ,bananaImage, rock, rockImage
var FoodGroup, rockGroup
var score

function preload(){
  
  
  monkey_running =         loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  rockImage = loadImage("obstacle.png");
 
}



function setup() {

  //creating monkey
  monkey=createSprite(80,315,40,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,7);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 
  rockGroup = createGroup();
  bananaGroup = createGroup();
  
  score=0;
}


function draw() {
  
  background("rgb(188, 246, 236)");
  
  spawnRock();
  spawnBanana();
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space")&& monkey.y >= 250){
    monkey.velocityY=-17;
  }
  
  monkey.velocityY=monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  stroke("black");
  textSize(20);
  fill("black");
  score=Math.ceil(frameCount/frameRate());
  text ("Survival Time :"+ score,200,50);
   
  drawSprites();
}
function spawnRock() {
  //write code here to spawn the rocks
  if (frameCount % 100 === 0) {
    var rock = createSprite(600,310,40,10);
    rock.addImage("ROCK",rockImage);
    rock.scale = 0.2;
    rock.velocityX = -4;
    
     //assign lifetime to the variable
    rock.lifetime = 200;
    
    rockGroup.add(rock);
  }
}

function spawnBanana() {
  //write code here to spawn the clouds
  if (frameCount % 140 === 0) {
    var banana = createSprite(600,220,40,10);
    banana.addImage("BANANA",bananaImage);
    banana.scale = 0.09;
    banana.velocityX = -4;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    bananaGroup.add(banana);
  }
}






