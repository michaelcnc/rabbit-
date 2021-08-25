var garden, rabbit;
var gardenImg, rabbitImg;
var applesGroup, appleImage;
var leavesGroup, leafImage;
var score
function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  greenleafImage = loadImage("greenLeaf.png");
  redleafImage = loadImage("redLeaf.png");
  orangeleafImage = loadImage("orangeLeaf.png");
}

function setup() {

  createCanvas(400, 400);

  rabbit = createSprite(50, 180, 20, 50);
  rabbit.addImage("rabbit.png", rabbitImg);

  garden = createSprite(400, 400);
  garden.addImage("garden", gardenImg);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 340, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);

  //create apple and leaf Groups
  applesGroup = createGroup();
  leavesGroup = createGroup();

}


function draw() {
  background(0);

  edges = createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x = mouseX;

  var select_sprites = Math.round(random(1, 2));
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else {
      createLeaves();
    }
  }

  drawSprites();
}

function createApples() {
  apple = createSprite(random(50, 350), 40, 10, 10);
  apple.y = Math.round(random(35, 45));
  apple.addImage(appleImage);
  apple.scale = 0.1;
  apple.velocityY = 3;

  //assign lifetime to the variable
  apple.lifetime = 134;

  //adjust the depth
  apple.depth = garden.depth + 1;

  //adding apple to the group
  applesGroup.add(apple);
}

function createLeaves() {
  leaf = createSprite(random(50, 350), 40, 10, 10);
  leaf.y = Math.round(random(35, 45));

  //generate random obstacles
  var rand = Math.round(random(1, 3));
  switch (rand) {
    case 1: leaf.addImage(greenleafImage);
      break;
    case 2: leaf.addImage(redleafImage);
      break;
    case 3: leaf.addImage(orangeleafImage);
      break;
    default: break;
  }
  leaf.scale = 0.1;
  leaf.velocityY = 3;
  //assign lifetime to the variable
  leaf.lifetime = 134;

  //adjust the depth
  leaf.depth = garden.depth + 1;

  //adding apple to the group
  leavesGroup.add(leaf);

  text("Score: "+ score, 500,50);

}