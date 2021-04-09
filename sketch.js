var block1,bliock2 ,block3 , block4;
var box ,edges ;


function setup(){
  createCanvas(800,600)

  block1=createSprite (0,580,250,30)
  block1.shapeColor="blue"

  block2=createSprite (295,580,200,30)
  block2.shapeColor=rgb(255,128,0)

  block3=createSprite (515,580,200,30)
  block3.shapeColor=rgb(153,0,76)


  block4=createSprite (740,580,200,30)
  block4.shapeColor=rgb(0,100,0)

box=createSprite(random(20,750),100,40,40)
box.shapeColor=rgb(250,0,0)
box.velocityX=5
box.velocityY=9
}

function draw(){
  background(0,0,0)
  edges=createEdgeSprites()
  box.bounceOff(edges)
  if (isTouching(box,block1) && box.bounceOff (block1)){
    box.shapeColor="blue"
  } 
  if(block2.isTouching (box)&& box.bounceOff(block2)){
    box.shapeColor=rgb(255,128,0)
  }
  if (isTouching(box,block3) && box.bounceOff (block3)){
    box.shapeColor=rgb(153,0,76)
  } 
  if (isTouching(box,block4) && box.bounceOff (block4)){
    box.shapeColor="green"
  } 
  drawSprites();
}