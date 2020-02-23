var movingrect,fixedrect;


function setup() {
  createCanvas(800,800);
  fixedrect=createSprite(400, 200, 50, 50);
    fixedrect.shapeColor="blue";
  movingrect=createSprite(500, 200, 50, 50);
    movingrect.shapeColor="green";

    movingrect.velocityX =-5;
    movingrect.velocityY=5;
    fixedrect.velocityX=2;
    fixedrect.velocityY=4;


}

function draw() {
  background(255,255,255);  



  //movingrect.x=World.mouseX;
 // movingrect.y=World.mouseY;


   if( isTouching(fixedrect,movingrect)){

      fixedrect.shapeColor="red";
      movingrect.shapeColor="red";

    }else{

      fixedrect.shapeColor="blue";
      movingrect.shapeColor="green";
    
    }
    bounceOff(fixedrect,movingrect);
   


  drawSprites();
}