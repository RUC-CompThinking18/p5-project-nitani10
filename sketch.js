/*In this code, the user will need to keep the ellipse from hitting the ground.
If the ellipse does touch the ground, the game is over.
Otherwise, the user continues to
*/
var level = 0; //Initializes level variable that is used when the ellipse descends. Initial value is set at 1 but will be increased via code in mousePressed function.
var color;
function setup(level) { // put setup code here
createCanvas(640, 480);
color = [random(255), random(255), random(255)];
y = 50 // initial y-coordinate for ellispe
x = random(250,600) // randomly generate x coodinate for ellipse from 250 to 600
dimensions = random(30,60) //randomly generates height and width of ellipse
noStroke(); //Ensures that no ellipse created has a stroke (otherwise each ellipse would have a black stroke)
}

function draw() { // put drawing code here
  if (level == 0){ // At the start - before an ellipse is clicked, the following lines of code within the if statement will be executed
      clear();
      fill(127)
      textSize(40)
      text('Click the ellipse to begin', 160, 150)
      textSize(20)
      text('Make sure that the ellipse does not \ntouch the bottom of this canvas!', 160, 350)
    } else {
      clear();
    }
// clear(); //clears any ellipse drawn before. Important as this code would otherwise leave the previous ellipse in the drawing when looping.
fill(color) //Makes color flicker because it continues to loop through randomly generated colors every time a new ellipse is created (which is done really quickly)
ellipse(x, y, dimensions, dimensions);
fill(0)
textSize(15)
text('Number of \nellipses destroyed: ' + String(level), 40, 50)
y = y + level; //makes ellipse travel down the canvas at a consistent rate.
  if (y > 500){//If ellipse reaches the bottom of the canvas, the code ends
  clear();
  textSize(32)
  fill(178, 34, 34) // Collors the text below in a brick red rgb sequence
  text('The game is over' + "\nYour total score is: " + String(level), 40, 50)
  if (level < 5){
    text("I won't lie - \nThat is not a good score!", 40, 130)
  } else if (level > 5 && level < 10) {
    text("That is not a bad score", 40, 130)
  } else if (level > 10 && level < 15) {
    text("You're beginning to look like an expert", 40, 130)
  } else {
    text("Wow! That is an amazing score!", 40, 130)
  }
  noloop(); //The setup and draw functions no longer run (no new ellipses are created)
}
}
function mousePressed(){ //Function that runs only when mouse is pressed
  var d = dist(mouseX, mouseY, x, y) //finds the distance between the mouse pressed coordinates and the coordinates of the ellipse at the time that the mouse is pressed.
  if (d < 100){ //If the distance (as described above) is miniscule the code below will run
    level = level + 1 //the level in which the ellipse will descend continously increases
    setup(level); //restarts function if the ellipse is pressed via the mouse and increases the level in which the ellipse will now descend

  }
  }
