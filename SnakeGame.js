//let bg; //background
let s; //snake
let scl = 20; //scale of the objects - snake and food
let food; //food for the snake

function setup() {
  //bg = loadImage('Background.png'); //load the background
  createCanvas(1350,600); //create canvas according to the browser window size
  s = new Snake();  //initialize the snake object
  frameRate(7); //rate for the snake animation
  pickLocation(); //location of the food in each frame
}

function pickLocation() {
  let cols = floor(width / scl); 
  let rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows))); //location for the food
  food.mult(scl); //multiplying each element of the vector by the scale.
} 


function draw() {
  background(189,183,107); //add the background
  if (s.eat(food))//if snake eats the food, food needs to relocate
  { 
    pickLocation(); //call the pickLocation function to relocate the food
  }
  s.death(); //call death function to see if the death condition matches
  s.update(); //update the length of the snake if food is eaten
  s.show(); //show the snake
  stroke(0,0,0); //add border
  strokeWeight(1); //weight of border
  fill(255, 0, 100); //red color for food
  ellipseMode(CORNER); 
  ellipse(food.x, food.y, scl, scl);  //shape of food
  
}
//Movement of the snake according to the key pressed
function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}
