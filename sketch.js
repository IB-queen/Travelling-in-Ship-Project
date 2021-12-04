var sea , seaImage
var ship, shipImage

function preload(){
  seaImage = loadImage("sea.png");
  shipImage =loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")

}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200,200,200) 
  sea.addImage(seaImage)
  
  ship = createSprite(200,200,100,100)
  ship = addAnimation(shipImage)

}

function draw() {
  background("blue");
  
  drawSprites ()
}