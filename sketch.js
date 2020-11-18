var car, wall;

var speed, weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400, 1500);

  car = createSprite(50, 200, 50, 50);

  car.velocityX = speed;

  car.shapeColor=color(255);


  wall=createSprite(1200, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);

  deformation = 0.5 * weight * speed * speed;
  
}

function draw() {
  background(0); 
  

  if(car.x -wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2
    && deformation > 180){ 
    car.shapeColor= "red";
    car.velocityX = 0;

  }else if(car.x -wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2
    && car.y - wall.y < wall.height/2 + car.height/2
    && wall.y - car.y < wall.height/2 + car.height/2
    && deformation < 180 && deformation > 100){
    car.shapeColor="yellow";
    car.velocityX = 0;


    }else if(car.x -wall.x < wall.width/2 + car.width/2
      && wall.x - car.x < wall.width/2 + car.width/2
      && car.y - wall.y < wall.height/2 + car.height/2
      && wall.y - car.y < wall.height/2 + car.height/2
      && deformation < 100){
        car.shapeColor="green";
        car.velocityX = 0;
      }



  drawSprites();
}