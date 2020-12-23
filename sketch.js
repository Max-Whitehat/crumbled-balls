
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	dustbin1 = new Dustbin(550,580,20,145)
	dustbin2 = new Dustbin(620,660,160,20)
	dustbin3 = new Dustbin(690,580,20,145)
	ground1 = new Ground(400,680,2000,20)
	paperObject = new Paper(100,650,50)
	dustbindisplay = new Dustbindisplay(620,590,160,160)
}



  

function draw() {
  rectMode(CENTER);
  background("white");
  


  drawSprites();

	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
	ground1.display();
	paperObject.display();
	dustbindisplay.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:105,y:-105})
	}
}



