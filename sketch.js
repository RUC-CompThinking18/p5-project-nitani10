var distance = 1
function setup() { // put setup code here
createCanvas(640, 480);
y = 50
x = random(50,590)
dimensions = random(30,60)
}
function draw() { // put drawing code here
  if (mouseIsPressed()){
    distance = distance + 1
  }
clear();
ellipse(x, y, dimensions, dimensions);
y = y + distance;
if (y === 480){
  clear();
  textSize(32)
  text('The game is over', 40, 50)
  noloop();
}
}
