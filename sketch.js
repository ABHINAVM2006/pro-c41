const Engine = Matter.Engine;                                                   
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var frameCountValue;
var raindrops = [];
var thunder, thunderImg;
function preload()  {
    thunderImg = loadImage('thunder.png');
}
function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    man1 = new Man(200, 330); 
   
    
    
}

function draw(){
    background(220, 220, 220);
    Engine.update(engine);

    if(frameCount % 3 === 0) {
        raindrops.push(new Drops(random(10,390),10));
      }
    
      for(var i = 0;i<raindrops.length;i++) {
        raindrops[i].display();
      }
      if(frameCount % 60 === 0)   {
        thunder = createSprite(10, 50, 50, 50);
        thunder.addImage(thunderImg);
         frameCountValue = frameCount;         
      }
      if(frameCount === frameCountValue + 10 && thunder != undefined) {
        thunder.destroy();
        
      }
      man1.display();
      drawSprites();   
}   

