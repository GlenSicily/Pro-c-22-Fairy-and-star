//defining variables
var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//loading images
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 600);
	
//fairy sound
	fairyVoice.play();

// giving objects their images
	fairy = createSprite(300, 490);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.2;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

//creating and adding objects in world
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {

	Engine.update(engine)

  background(bgImg);

  //giving fairy velocity
  fairy.velocityX=0
  fairy.velocityY=0
 
  //giving fairy movement
  if(keyDown(RIGHT_ARROW)){
	fairy.velocityX=6
}else if (keyDown(LEFT_ARROW)){
	fairy.velocityX=-6
}else if (keyDown(DOWN_ARROW)){
	star.velocityY=3
}
//command for star to stop when its near fairy's hand
if(star.y>470){
	star.velocityY=0
}

  drawSprites();

}



