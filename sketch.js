
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var particles=[];
var plinkos= [];
var divisions=[];

var engine,world;
var ground;
var divisionHeight=300;

function setup() {
  createCanvas(480,800);

 engine=Engine.create();
world=engine.world;

  ground= new Ground(490,795,5000,10);

  for(var j=20;j<=width;j=j+30){
    plinkos.push(new Plinko(j,75,10))
}
for(var j=15;j<=width-10;j=j+30){
  plinkos.push(new Plinko(j,175,10))
}

  for(var k=0; k<=width; k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))

    }

    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-10, width/2+10, 10,10)))
      
      }
    

}

function draw() {
  background(0);  

ground.display();

for(j=0; j<plinkos.length;j++){
  plinkos[j].display();
  
  }
  

for(k=0;k<divisions.length;k++){

divisions[k].display();

}

for(var t=0; t<particles.length;j++){

  particles[t].display();
}




  drawSprites();
}