var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var left,right,bottom;

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
	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);

	 left = Bodies.rectangle(width/2-110 , 610 , 20 , 100,{isStatic : true});
	 World.add(world, left);

	 right = Bodies.rectangle(width/2+110 , 610 , 20 , 100,{isStatic : true});
	 World.add(world, right);

	 bottom = Bodies.rectangle(width/2 , 650 , 100 , 20,{isStatic : true});
	 World.add(world, bottom);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y ;
  
  drawSprites();
  fill("red");
  rectMode(CENTER);
  rect(left.position.x, left.position.y, 20, 100);

  fill("red");
  rectMode(CENTER);
  rect(right.position.x, right.position.y, 20, 100);

  fill("red");
  rectMode(CENTER);
  rect(bottom.position.x, bottom.position.y,200, 20);

 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody, false);
    
  }
}



