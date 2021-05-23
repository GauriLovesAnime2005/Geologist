const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, stone;
var sand1 ,sand2,sand3,sand4;
var rubber;
var hammer;
var iron;

function setup() {
  createCanvas(1200,600);

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(width/2, height-10, width, 20);
  
  stone = new Stone(800,320,100,100);
  rubber = new Rubber(1000, 350,);

  sand1 = new Sand(700,260, 10, 10);
  sand2 = new Sand(650,180, 10, 10);
  sand3 = new Sand(600,120, 10, 10);
  sand4 = new Sand(550,120, 10, 10);

  iron = new Iron(200,120,100,100)

  hammer=new Hammer(200,100);
}

function draw() {
  background("lightblue");

  Engine.update(engine);

  stone.display();
  rubber.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  hammer.display();
  ground.display(); 
  iron.display(); 
}