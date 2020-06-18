var form;
var user;
var database;
var userCount = 0;

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 20);
  database = firebase.database();

  form = new Form()
  user = new User();
  form.display();
}

function draw() {
  background(255,255,255);  
  drawSprites();
}