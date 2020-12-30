var windowW, windowH;

var x;
var y;
var targetX;
var targetY;

var knife;

var fruitGroup;
var powerUpGroup;
var knifeGroup;

var bg;
var inMotion = false;

function preload(){
  bg = loadImage("background.jpg");
}

function setup(){
  windowW = windowWidth - 15
  windowH = windowHeight - 21

  createCanvas(windowW, windowH);

  x = windowW / 2;
  y = windowH / 2;
  targetX = windowW / 2;
  targetY = windowH / 2;

  knife = createSprite(x, y, 10, 10);
  knife.draw = function(){
    ellipse(0,0,30,30) 
  }

  fruitGroup = new Group();
  
  powerUpGroup = new Group();

  knifeGroup = new Group();
  knifeGroup.add(knife);
} 

function draw(){
  
  x = lerp(x, targetX, 0.15);
  y = lerp(y, targetY, 0.15);

  background(bg);

  knife.position.x = x;
  knife.position.y = y;

  if(mouseIsPressed){
    targetX = mouseX;
   targetY = mouseY;
  }

  //console.log(knife.previousPosition);
  spawnFruits();
  spawnPowerUp();

  drawSprites();
}

//   function mousePressed(){
//    targetX = mouseX;
//    targetY = mouseY;
// }

function spawnFruits(){
  if(frameCount % 60 === 0){
    var randX = random(0, windowW);
    var randY = random(-200, 0);
    var speed = 3;
    var fruit = createSprite(randX, randY, 10, 10);
    fruit.draw = function(){
      ellipse(0,0,10,10) 
    }
    fruit.setSpeed(speed, 90);
    fruit.life = (Math.round((windowH + (abs(fruit.previousPosition.y))) / speed));
    var rand = random(1, 5);
    switch(rand){
      case 1:
        break;
      case 2: 
        break;
      case 3:
        break;  
      case 4:
        break;
      case 5:
        break
    }
    fruitGroup.add(fruit);
  }
}

function spawnPowerUp(){
  if(frameCount % 500 === 0){
    var randX = random(15, windowW - 15);
    var randY = random(15, windowH - 15);
    var powerUp = createSprite(randX, randY, 50, 50);
    powerUp.draw = function(){
      ellipse(0,0,50,50) 
    }
    powerUp.life = 120;
    var rand = random(1, 5);
    switch(rand){
      case 1:
        break;  
      case 2: 
        break;
      case 3:
        break;  
    }
    powerUpGroup.add(powerUp);
  }
}