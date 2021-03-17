const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var imgSides;
var imgMiddle;
var sideL;
var sidesR;
var middle;

var kiss;
var kissAnimation;
var frame;
var frameImg;

var basket1 = [];
var basket2 = [];
var basket3 = [];
var basket4 = [];
var basket5 = [];

var f1,f2,f3,f4,f5;


var ground;

var Dday;
var DdayImage;

var backgroundImage;


function preload(){

   
    imgMiddle = loadImage("pics/3.jpg");

    kissAnimation =loadAnimation("pics/kiss/1f.png","pics/kiss/2f.png","pics/kiss/3f.png",
    "pics/kiss/4f.png","pics/kiss/5f.png"
   );

    frameImg = loadImage("pics/kiss/b1.png");

    backgroundImage = loadImage("pics/3.jpg")

    


}
function setup(){
    createCanvas(windowWidth, windowHeight*0.83);

    engine = Engine.create();
    world = engine.world;
   
    



    kiss= createSprite(windowWidth*0.5,windowHeight * 0.65,100,100);
    kiss.addAnimation("chauu",kissAnimation)
    kiss.scale= 0.5

    frame = createSprite(windowWidth*0.5,windowHeight * 0.65,100,100);
    frame.addImage(frameImg)
    frame.scale = 1.1;

    if(frameCount % 200 ===0){
        for(var i=0; i<50; i++){
            basket1.push(new Flowers1(random(0,windowWidth), random(0,windowHeight)));
        }
    }

    if(frameCount % 300 ===0){
        for(var i=0; i<50; i++){
            basket2.push(new Flowers2(random(0,windowWidth), random(0,windowHeight)));
        }
    }

    if(frameCount % 500 ===0){
        for(var i=0; i<50; i++){
            basket3.push(new Flowers3(random(0,windowWidth), random(0,windowHeight)));
        }
    }


    if(frameCount % 700 ===0){
        for(var i=0; i<50; i++){
            basket4.push(new Flowers4(random(0,windowWidth), random(0,windowHeight)));
        }
    }


    if(frameCount % 1100 ===0){
        for(var i=0; i<25; i++){
            basket5.push(new Flowers5(random(0,windowWidth), random(0,windowHeight)));
        }
    }


   

ground  = Bodies.rectangle(windowWidth/2,windowHeight*0.90,windowWidth,15,{isStatic:true})
World.add(world,ground)

f1 = new Sangeet(windowWidth * 0.5,windowHeight * 0.40)
f2 = new Haldi(windowWidth * 0.5,windowHeight * 0.40)
f3 = new Mehendi(windowWidth * 0.5,windowHeight * 0.40)
f4 = new Wedding(windowWidth * 0.5,windowHeight * 0.40)
f5 = new Reception(windowWidth * 0.5,windowHeight * 0.40)
}
function draw(){

background(backgroundImage)
    drawSprites();
    stroke("yellow");
    strokeWeight(2)
    fill("red")
    textFont('papyrus')
    textSize(40)
    text("#RahulKiKamna",windowWidth * 0.40,windowHeight * 0.28)
    fill("cyan")
    textFont('papyrus')
    textSize(40)
    
    text("Save  the  date",windowWidth * 0.42,windowHeight * 0.37)

    fill("red")
    textFont('papyrus')
    textSize(50)
    stroke("yellow");
    strokeWeight(2)
    text("24.04.2021",windowWidth * 0.42,windowHeight * 0.46)





    Engine.update(engine);


  

    rectMode(CENTER);

  // rect(ground.position.x,ground.position.y,1530,5) 







for(var i = 0; i<50; i++){
    basket1[i].display();
    
    
}


for(var i = 0; i<50; i++){
    basket2[i].display();
    
    
}

for(var i = 0; i<50; i++){
    basket3[i].display();
    
    
}

for(var i = 0; i<50; i++){
    basket4[i].display();
    
    
}

for(var i = 0; i<25; i++){
    basket5[i].display();
    
    
}

f1.display();
f2.display();
f3.display();
f4.display();
f5.display();
 
}