var form

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 20);
  form = new Form()
  form.display();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}