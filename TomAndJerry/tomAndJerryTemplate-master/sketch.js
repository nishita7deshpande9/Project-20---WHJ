var tomWalking, tomSitting1, tomSitting2, tomImg4, tom
var jerryDancing, jerryImg3, jerryCheese, jerry
var bg, canvas

function preload() {
    bg = loadImage ("images/garden.png");
    
    tomWalking = loadAnimation ("images/cat2.png", "images/cat3.png");
    tomSitting1 = loadImage ("images/cat1.png");
    tomSitting2 = loadImage ("images/cat4.png");

    jerryCheese = loadImage ("images/mouse1.png");
    jerryDancing = loadAnimation ("images/mouse2.png", "images/mouse3.png");
    jerryImg3 = loadImage ("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    tom = createSprite (850,600);
    tom.addImage (tomSitting1);
    tom.scale = 0.2;
    
    jerry = createSprite (200, 600);
    jerry.addImage (jerryCheese);
    jerry.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide

    text(mouseX +","+mouseY,mouseX,mouseY);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2) {
        tom.velocityX = 0;
        tom.addAnimation ("tomSitting2", tomSitting2);
        tom.x = 300;
        tom.changeAnimation ("tomSitting2");
        tom.scale = 0.2

        jerry.addAnimation ("jerryLast", jerryImg3);
        jerry.changeAnimation ("jerryLast");
        jerry.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

    if (keyCode === LEFT_ARROW) {
        tom.velocityX = -5;
        tom.addAnimation ("tomWalking", tomWalking);
        tom.changeAnimation ("tomWalking");

        jerry.addAnimation ("jerryDancing", jerryDancing);
        jerry.changeAnimation ("jerryDancing");
    }

    
}