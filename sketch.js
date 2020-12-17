var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box,box1,box2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	
	box=createSprite(300, 620, 10,80);
	box.shapeColor=color("red")
	World.add(world, box);

	box1=createSprite(450, 620, 10,80);
	box1.shapeColor=color("red")
	World.add(world, box1);

	box2=createSprite(375, 655, 160,10);
	box2.shapeColor=color("red")
	World.add(world, box2);


	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();

  
   keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	packageSprite.velocityY=2;
	Matter.Body.setStatic(packageBody,false);
   
   

	} 


  }




