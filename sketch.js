

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var ball1;
var rope1;

function preload(){

}


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof= new Roof(350,100,300,30);
	World.add(world,roof);



	ball1=new Ball(200,105,65);
	ball2=new Ball(210,105,65);
	ball3=new Ball(220,105,65);
	ball4=new Ball(230,105,65);
	ball5=new Ball(240,105,65);


	rope1=new Rope(ball1.body,roof.body);
	World.add(world,rope1);

	rope2=new Rope(ball2.body,roof.body);
	World.add(world,rope2);
	
	rope3=new Rope(ball3.body,roof.body);
	World.add(world,rope3);

    rope4=new Rope(ball4.body,roof.body);
	World.add(world,rope4);

	rope5=new Rope(ball5.body,roof.body);
	World.add(world,rope5);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  Engine.update(engine);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  drawSprites();
 
}
