var fixedRect,movingRect, rect1,rect2

var fixedRect2,movingRect2
var rect3,rect4
function setup() {
  createCanvas(800,600);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  
  movingRect=createSprite(600,200,80,50);
  movingRect.shapeColor="green"
  movingRect.debug=true;


  fixedRect2=createSprite(400, 500, 50, 50);
  fixedRect2.shapeColor="purple";
  fixedRect2.debug=true;
  
  movingRect2=createSprite(600,500,80,50);
  movingRect2.shapeColor="purple"
  movingRect2.debug=true;

  //console.log(fixedRect.width/2+movingRect.width/2)

  rect1=createSprite(200,300,50,50)
  rect1.shapeColor="blue"
  rect1.velocityX=3;
  rect1.debug=true;

  rect2=createSprite(700,300,50,50)
  rect2.shapeColor="blue";
  rect2.velocityX=-3
  rect2.debug=true;

  rect3=createSprite(200,100,50,50)
  rect3.shapeColor="pink"
  rect3.velocityX=3;
  rect3.debug=true;

  rect4=createSprite(700,100,50,50)
  rect4.shapeColor="pink";
  rect4.velocityX=-3
  rect4.debug=true;

}
function bounce(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 ){
      object1.velocityX=object1.velocityX*(-1);
      object2.velocityX=object2.velocityX*(-1);
    }
    
    if( object1.y-object2.y<object2.height/2+object1.height/2 &&
      object2.y-object1.y<object2.height/2+object1.height/2){
        object1.velocityY=object1.velocityY*(-1);
        object2.velocityY=object2.velocityY*(-1);
      }



}

function draw() {
  background("white");  
  movingRect2.x=mouseX;
  movingRect2.y=mouseY;

  
  //console.log(movingRect.x-fixedRect.x)

  bounce(rect1,rect2);
  isTouching(movingRect2,fixedRect2);
  bounce(rect3,rect4);
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x<=object2.width/2+object1.width/2 &&
    object2.x-object1.x<=object2.width/2+object1.width/2 &&
    object1.y-object2.y<=object2.height/2+object1.height/2 &&
   object2.y-object1.y<=object2.height/2+object1.height/2){
    object1.shapeColor="cyan";
    object2.shapeColor="cyan";
 }
 else{
  object1.shapeColor="green";
  object2.shapeColor="green";
 }
}
