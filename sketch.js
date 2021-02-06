const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var starnight, joySound;
var fairy, star;

function preload(){
     starnight = loadImage("images/starnight.png");
     joySound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 600);
  
  engine = Engine.create();
   world = engine.world;
   fairy = new Fairy(100, 400);
   star = new Star(750, 500);
}


function draw() {
  background(starnight);
     Engine.update(engine);
     joySound.play();
     fairy.display();
     star.display();
     if(keyDown === RIGHT_ARROW){
          fairy.x = fairy.x+4;
      }

      if(keyDown === LEFT_ARROW){
          fairy.x = fairy.x-4;
      }

     if(keyDown === SPACE){
          Matter.Body.setStatic(this.body, true);
      }

      if(star.isTouching(fairy)){
          Matter.Body.setStatic(this.body, false);
      }
}
