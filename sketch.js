var fixedRect, movingRect;
var gameObj1, gameObj2, gameObj3;

function setup() {
  createCanvas(1200,800);
  
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1 = createSprite(310, 250, 50, 50);
  gameObj1.shapeColor = "green";

  gameObj2 = createSprite(670, 580, 50, 50);
  gameObj2.shapeColor = "green";

  gameObj3 = createSprite(440, 270, 50, 50);
  gameObj3.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect, gameObj3)){
    movingRect.shapeColor = "red";
   gameObj3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
   gameObj3.shapeColor = "green";
  }

  
  drawSprites();
}

