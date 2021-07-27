var bg,form,system,code,security;
var treasure;
var score=0;
var database;
var q1="how many steps in hogwarts"
var q2="what is hogwarts?"
var q=[q1,q2];
function preload() {
 
  
  bg= loadImage("Images/Image 6.jpg")
 
  
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  security = new Security();
  system = new System();
  code = new Code();
  security.display();
  
  
}

function draw() {
  background(bg);
  
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);
// add code for changing the background to the treasure background

  if(score === 3) {
    clear()
    background(treasure)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
  }

}