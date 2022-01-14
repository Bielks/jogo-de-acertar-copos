const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  //de baixo
  bloco1 = new Block(640, 160, 30, 40);
  bloco2 = new Block(670, 160, 30, 40);
  bloco3 = new Block(700, 160, 30, 40);
  bloco4 = new Block(730, 160, 30, 40);
  bloco5 = new Block(760, 160, 30, 40);
  //do meio
  bloco6 = new Block(670, 120, 30, 40);
  bloco7 = new Block(700, 120, 30, 40);
  bloco8 = new Block(730, 120, 30, 40);
  //de cima
  bloco9 = new Block(700, 80, 30, 40);

  //polígono
  poligono = new Polygon(150, 195, 40, 40);

  //estillingue
  estilingue = new Slingshot(poligono.body, {x: 150, y: 195});

  

}
function draw() {
  background(56,44,44);

 //chão e estantes
  textSize(20);
  fill("lightyellow");
  ground.display();
  stand1.display();
  stand2.display();

  //blocos
  strokeWeight(2);
  stroke(15);

  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  bloco1.display();
  bloco2.display();
  bloco3.display();
  bloco4.display();
  bloco5.display();

  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  bloco6.display();
  bloco7.display();
  bloco8.display();

  fill("grey");
  block16.display();

  bloco9.display();

  //polígono
  poligono.display();

  //estilingue
  estilingue.display();
}
function mouseDragged() {
  Matter.Body.setPosition(poligono.body, {x: mouseX, y: mouseY});
}
function mouseReleased(){
  estilingue.fly();
}
