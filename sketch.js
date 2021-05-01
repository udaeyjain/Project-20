var car,wall;
var speed;
var weight;

function setup() {
  createCanvas(1600,400);
  speed=random(5,80);
  weight=random(400,1500);

 car=createSprite(50,200, 50, 50);
car.velocityX=speed;
car.shapeColor=color(52, 174, 235);

wall=createSprite(1500,200, 60, height/2);
wall.shapeColor=color(52, 223, 235);


}

function draw() {
  background(0);
  
  if(wall.x-car.x<car.width/2+wall.width/2){
car.velocityX=0;
var deformation=(0.5*weight*speed*speed)/22500;
if(deformation>180){
car.shapeColor=color(148, 0, 0);
}

if(deformation<180 && deformation>100){
car.shapeColor=color(31, 230, 0);
}

if(deformation<100){
car.shapeColor=color(31, 230, 0);
}

  }


  drawSprites();
}