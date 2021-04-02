var options={
	inStatic:false,
	restitution:0,
	friction:1,
	destiny:1.2
}
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var treeOB,stoneOB,groundOB,launcherOB,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;
var launchingForce=100;

function preload()
{
boy=loadImage("boy.png")
}
function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
    stoneOB = new stone(235,420,30);
	mango1 = new mango(1100,100,30)
	mango2 = new mango(1170,130,30)
	mango3 = new mango(1010,140,30)
	mango4 = new mango(1000,70,30)
	mango5 = new mango(1100,70,30)
	mango6 = new mango(1000,230,30)
	mango7 = new mango(900,230,25)
	mango8 = new mango(1140,150,25)
	mango9 = new mango(1100,230,25)
	mango10 = new mango(1200,200,25)
	mango11 = new mango(1120,50,25)
	mango12 = new mango(900,160,25)

    treeOB = new tree(1050,580)
	groundOB = new ground(width/2,600,width,20) 
	launcherOB = new launcher(stoneOB,body,{x:235,y:420})

	//Create the Bodies Here.

	Engine.run(engine); 
}
function draw() {
  background(230);
  image(boy,200,340,200,300)
  treeOB.display();
  stoneOB.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  groundOB.display();
  launcherOB.display();
  detectCollision(stoneOB,mango1)
  detectCollision(stoneOB,mango2)
  detectCollision(stoneOB,mango3)
  detectCollision(stoneOB,mango4)
  detectCollision(stoneOB,mango5)
  detectCollision(stoneOB,mango6)
  detectCollision(stoneOB,mango7)
  detectCollision(stoneOB,mango8)
  detectCollision(stoneOB,mango9)
  detectCollision(stoneOB,mango10)
  detectCollision(stoneOB,mango11)
  detectCollision(stoneOB,mango12)
  
  drawSprites();
  
}

function mouseDragged(){
Matter.Body.setPosition(stoneOB.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
launcherOB.fly();
}
function keyPressed(){
if(keyCode===32){
Matter.Body.setPosition(stoneOB.body,{x:235,y:420})
launcherOB.attach(stoneOB.body)
}
}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position;
stoneBodyPosition=lstone.body.position;
var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r){
Matter.Body.setStatic(lmango.body,false)
}
}


