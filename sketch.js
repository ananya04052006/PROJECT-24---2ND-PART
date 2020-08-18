const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, ground;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(200, 550, 100);
	ground = new Ground(400,height,1200,20);
	//dustbin1 = New Dustbin(200, 200, 80, 20);
	//dustbin2 = New Dustbin(240, 190, 20, 80);
	//dustbin3 = New Dustbin(160, 210, 20, 80);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  paper1.display();
  //dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  
  drawSprites();
 
}

function keyPressed() {
if(keyCode === UP_ARROW) {

	Body.applyForce(paper1.body, paper1.body.position,{x:85, y:-85});
}

}