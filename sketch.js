var form;
var user;
var allUsers
var database;
var userCount = 0;

function setup() {
  createCanvas(displayWidth - 20,displayHeight - 20);
  database = firebase.database();

  form = new Form()
  user = new User();
  user.getUserCount();
  form.display();
}

function draw(){
  
}