var bullet,wall;

var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,10,10);
  bullet.velocityX = speed;
  wall = createSprite(1200,200,60,height/2);
  wall.shapeColor = (80,80,80);

  bullet.depth = wall.depth + 1;

  


}

function draw() {
  background(255,255,255);  
  
  if(wall.x - bullet.x < (bullet.width+wall.width)/2){
    var deformation = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    
    if(deformation > 10){
      wall.shapeColor = "red";
    }

    if(deformation <= 10){
      wall.shapeColor = "green";
    }

  }
  drawSprites();
}