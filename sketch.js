
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var box1, box2, box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	paper = new Paper(20,750,20,PI/2);
	box1 = createSprite(width/2,670,90,20);
	box1.shapeColor = "red";

	box2 = createSprite(450,615,20,100);
	box2.shapeColor = "red";

	box3 = createSprite(350,615,20,100);
	box3.shapeColor = "red";
	//Create the Bodies Here.


	Engine.run(engine);

	keyPressed();
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  
  drawSprites();
 
}
function keyPressed(){

if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body, paperObject.body.position ,{x : 85, y : -85})
}

}


