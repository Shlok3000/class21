var fixedRect, movingRect;
var gameobject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityX = -2;

  gameobject1 = createSprite(200,300,60,60);
  gameobject1.shapeColor = "pink";
  gameobject1.velocityX = 2;

  //gameobject2 = createSprite(270,300,60,60);
  //gameobject2.shapeColor = "pink";

  gameobject3 = createSprite(200,370,60,60);
  gameobject3.shapeColor = "pink";

  gameobject4 = createSprite(270,370,60,60);
  gameobject4.shapeColor = "pink";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;


  if(istouching(gameobject1, movingRect)){
    movingRect.shapeColor = "blue";
    gameobject1.shapeColor = "blue";
  }

  else{
    movingRect.shapeColor = "green";
    gameobject1.shapeColor = "green";
  }

  bonceoff(gameobject1, movingRect);

  drawSprites();
}

