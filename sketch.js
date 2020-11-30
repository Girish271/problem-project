
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground;
var dustbin;


function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;

	ball= new Ball(200,650,20);
	dustbin=new Dustbin(600,500,100,20)
	ground = new Ground(400,670,1500,10);
	dustbin2=new Dustbin(400,400,500,100)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground.display();
  ball.display();
  dustbin.display();
  dustbin.display();
  
  drawSprites();
 
}
function keyPressed(){
 if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
 }
}



