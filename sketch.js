var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImag;
var orangeleaf, orangeleafImag;

function preload(){
  gardenImg = loadImage("garden.png");

  rabbitImg = loadImage("rabbit.png");

  appleImag = loadImage("apple.png");

  orangeleafImag = loadImage("orangeleaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

//generate random numbers
var rand = Math.round(random(10,40));
console.log(rand);

}

function draw() {
  background(400);
  
  console.log(frameCount);

  rabbit.x = World.mouseX;

  edges= createEdgeSprites();
  rabbit.collide(edges);

  //spwan apples
  spawnApples()

  //spwan leaves
  spawnLeaves()

  drawSprites();
}


function spawnApples()
{
  // write your code here 
 
 if (frameCount%80 === 0) {
  apple = createSprite(random(50, 350),40, 10, 10);
  apple.addImage(appleImag);
  
  apple.scale = 0.05;
   
  apple.velocityY = 3;

   apple.lifetime = 200;

  
  }
}

function spawnLeaves()
{
  // write your code here 
 
 if (frameCount%80 === 0) {
  orangeleaf = createSprite(random(45, 300),40, 10, 10);
  orangeleaf.addImage(orangeleafImag);
  
  orangeleaf.scale = 0.05;
   
  orangeleaf.velocityY = 2.5;

  orangeleaf.lifetime = 200;

  
  }
}

