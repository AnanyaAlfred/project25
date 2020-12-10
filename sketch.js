
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1=new Ground(400,670,800,20);
	paper1 = new Paper(200,450);
	block1 = new Dustbin(600,650);
	Engine.run(engine);	
  
}


function draw() {
  
  background(220);
  Engine.update(engine);
  ground1.display();
  paper1.display();
  block1.display();
  
  
}

function keyPressed(){
   if(keyCode===UP_ARROW){
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:210,y:-200});
   }
}


