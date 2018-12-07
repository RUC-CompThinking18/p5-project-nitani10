function setup() { // put setup code here
createCanvas(640, 480);
y = 50 // initial y-coordinate for ellispe
x = random(50,590) // randomly generate x coodinate for ellipse from 50 to 590
dimensions = random(30,60) //randomly generates height and width of ellipse
}
function draw() { // put drawing code here
clear(); //clears any ellipse drawn before. Important as this code would otherwise leave the previous ellipse in the drawing when looping.
ellipse(x, y, dimensions, dimensions);
y = y + 1 //makes ellipse travel down the canvas at a consistent rate. //NOTE: this will later be changed so that it goes at a quicker rate everytime a mouse is clicked.
if (y === 480){//If ellipse reaches the bottom of the canvas, the code ends
  clear();
  textSize(32)
  text('The game is over', 40, 50)
  noloop();
}
}
