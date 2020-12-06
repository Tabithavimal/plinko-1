const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var engine,world;





function setup() {
  createCanvas(450,800);
  createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;
  
ground=new ground(width/2,670,width,20)








Engine.run(engine);

}





function draw() {
  background("black");  
  drawSprites();
ground.display();


}