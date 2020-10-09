var square;
function setup() {
  createCanvas(800,400);
 square= createSprite(400, 200, 100, 100);
 square.shapeColor="yellow"

}

function draw() {
  background(50,100,150);

  drawSprites();
  fill(0,100,250);
  rectMode(CENTER);
  rect(400,200,50,50);
  
}