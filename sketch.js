const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ballImage;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  ball = new Ball(400,200,50,50);
  block1 = new Blocks(200,300,40,40);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}