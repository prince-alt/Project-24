
const Engine = Matter.Engine;
const Worldc = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine1,world;
var paper1;
var ground1;
var dustbin1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine1 = Engine.create();
	world = engine1.world;

	//Create the Bodies Here.

	ground1 = new ground();
	paper1 = new paper();
	dustbin1 = new dustbin();
  
 }


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine1);

  ground1.display();
  paper1.display();
  dustbin1.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:12,y:-12});

	 }
   }
   

