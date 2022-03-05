var roadImg, road;
var player,playerImg
var gameState = "play"
var obstacle, obstaclesGroup,obstacleImg


function preload(){
  roadImg = loadImage("road.jpg");
  obstacleImg=loadImage("Barrier.png")
  playerImg = loadImage("car.png");
}


function setup(){
  createCanvas(600,600);
  road = createSprite(300,300);
  road.addImage("road",roadImg);
  road.velocityY = 2;
  
  obstaclesGroup = new Group();
 

 
  player = createSprite(200,200,50,50);
  player.scale = 0.25;
  player.addImage(playerImg);
}



function draw(){
  background(0);
  if (gameState === "play") {
    if(keyDown("left_arrow")|| (keyDown("A"))){
      player.x = player.x - 3;
    }
    
    if(keyDown("right_arrow")||(keyDown("D"))){
      player.x = player.x + 3;
    }
    
    if(keyDown("space")|| keyDown("W")){
      player.velocityY = -5;
    }

    if(keyDown("down_arrow")||(keyDown("S"))){
      player.velocityY = 5;
    }
    if(keyDown("space"||(keyDown("shift")))){
      player.velocityY=0
      player.velocityX=0
    }
      
    
    if(road.y > 400){
      road.y = 300
    }
    spawnObstacles();

    if(obstaclesGroup.isTouching(player)){
      player.velocityY = 0;
      player.destroy();
      gameState = "end"
    }
    if (gameState === "end"){
      road.velocityY=6
      fill("yellow");
      stroke("yellow");
      textSize(30);
      text("Game Over", 230,250)
    }

  }

    drawSprites();
  }
  
  



function spawnObstacles() {
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(200, -50);

    obstacle.x = Math.round(random(120,400));

    obstacle.addImage(obstacleImg);
    obstacle.scale=0.5
    obstacle.velocityY = 6;
      
    player.depth = obstacle.depth;
    player.depth +=1;
   
    obstacle.lifetime = 800;
  
    obstaclesGroup.add(obstacle);
  }
}

