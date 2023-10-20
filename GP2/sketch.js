/*
	Game Project Part 2 - Game Character
*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
}

function drawStandingFrontFacing() {
//feet 
    stroke(0);
    fill(214,85,99);
    ellipse(gameChar_x-10, gameChar_y-2.5,10,5);
    ellipse(gameChar_x+10, gameChar_y-2.5,10,5);
    
//wings
    stroke(0);
    fill(255);
    
//left wing
    var wingPosX = gameChar_x-20;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX-7.5, wingPosY-7.5); 
    vertex(wingPosX+7.5,wingPosY) 
    curveVertex(wingPosX-2.5,wingPosY+5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);
//right wing
    var wingPosX = gameChar_x+20;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX+7.5, wingPosY-7.5); 
    vertex(wingPosX-7.5,wingPosY) 
    curveVertex(wingPosX+2.5,wingPosY+5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX+2,wingPosY+2);
    
//main body
    stroke(0);
    fill(99,155,255);
    ellipse(gameChar_x, gameChar_y-20,40,40);
    
//mouth
    noStroke();
    fill(0);
    arc(gameChar_x, gameChar_y-26.5, 20, 20, 0, PI );
    
//eyes
    noStroke();
    fill(0);
    ellipse(gameChar_x-10, gameChar_y-30,3,3);
    ellipse(gameChar_x+10, gameChar_y-30,3,3);
    
//eye hilights
    noStroke();
    fill(255);
    ellipse(gameChar_x-10.5, gameChar_y-30.5,1.5,1.5);
    ellipse(gameChar_x+10.5, gameChar_y-30.5,1.5,1.5);
}
function drawJumpingFrontFacing() {
//feet 
    stroke(0);
    fill(214,85,99);
    ellipse(gameChar_x-10, gameChar_y-2.5,5,10);
    ellipse(gameChar_x+10, gameChar_y-2.5,5,10);
    
//wings
    stroke(0);
    fill(255);
//left wing
    var wingPosX = gameChar_x-20;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX-7.5, wingPosY+7.5); 
    vertex(wingPosX+7.5,wingPosY) 
    curveVertex(wingPosX-2.5,wingPosY-5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);
//right wing
    var wingPosX = gameChar_x+20;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX+7.5, wingPosY+7.5); 
    vertex(wingPosX-7.5,wingPosY) 
    curveVertex(wingPosX+2.5,wingPosY-5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX+2,wingPosY+2);

//main body
    stroke(0);
    fill(99,155,255);
    ellipse(gameChar_x, gameChar_y-20,40,40);
    
//mouth
    noStroke();
    fill(0);
    arc(gameChar_x, gameChar_y-26.5, 20, 20, 0, PI );

//eyes
    noStroke();
    fill(0);
    ellipse(gameChar_x-10, gameChar_y-30,3,3);
    ellipse(gameChar_x+10, gameChar_y-30,3,3);
    
//eye hilights
    noStroke();
    fill(255);
    ellipse(gameChar_x-10.5, gameChar_y-30.5,1.5,1.5);
    ellipse(gameChar_x+10.5, gameChar_y-30.5,1.5,1.5);
}
function drawWalkingLeft() {
//back foot 
    stroke(0);
    fill(214,85,99); 
    ellipse(gameChar_x-10, gameChar_y-2.5,10,5);

//main body
    stroke(0);
    fill(99,155,255);
    ellipse(gameChar_x, gameChar_y-20,40,40);
    
//front foot
    fill(214,85,99);
    ellipse(gameChar_x-1, gameChar_y-3.5,10,5);
    
//wings
    stroke(0);
    fill(255);
//left wing
    var wingPosX = gameChar_x+5;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX+7.5, wingPosY-7.5); 
    vertex(wingPosX-7.5,wingPosY) 
    curveVertex(wingPosX+2.5,wingPosY+5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX+2,wingPosY+2);
    
//mouth
    noStroke();
    fill(0);
    beginShape()
    vertex(gameChar_x-5, gameChar_y-27)
    vertex(gameChar_x-5, gameChar_y-25)
    vertex(gameChar_x-6, gameChar_y-22)
    vertex(gameChar_x-8, gameChar_y-20)
    vertex(gameChar_x-11, gameChar_y-18)
    vertex(gameChar_x-15, gameChar_y-17)
    vertex(gameChar_x-18, gameChar_y-17)
    vertex(gameChar_x-20, gameChar_y-18)
    vertex(gameChar_x-20, gameChar_y-21)
    vertex(gameChar_x-19, gameChar_y-24)
    vertex(gameChar_x-19, gameChar_y-27)
    vertex(gameChar_x-17, gameChar_y-27)
    endShape(CLOSE);
    
//eye
    noStroke();
    fill(0);
    ellipse(gameChar_x-10, gameChar_y-30,3,3);

//eye hilight
    noStroke();
    fill(255);
    ellipse(gameChar_x-9.75, gameChar_y-30.5,1.5,1.5);
}
function drawWalkingRight() {
//back foot 
    stroke(0);
    fill(214,85,99);
    ellipse(gameChar_x+10, gameChar_y-2.5,10,5);
    
//main body
    stroke(0);
    fill(99,155,255);
    ellipse(gameChar_x, gameChar_y-20,40,40);
    
//front foot
    fill(214,85,99);
    ellipse(gameChar_x+1, gameChar_y-3.5,10,5);
    
//wings
    stroke(0);
    fill(255);
//right wing
    var wingPosX = gameChar_x-5;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX-7.5, wingPosY-7.5); 
    vertex(wingPosX+7.5,wingPosY) 
    curveVertex(wingPosX-2.5,wingPosY+5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);
    
//mouth
    noStroke();
    fill(0);
    beginShape()
    vertex(gameChar_x+5, gameChar_y-27)
    vertex(gameChar_x+5, gameChar_y-25)
    vertex(gameChar_x+6, gameChar_y-22)
    vertex(gameChar_x+8, gameChar_y-20)
    vertex(gameChar_x+11, gameChar_y-18)
    vertex(gameChar_x+15, gameChar_y-17)
    vertex(gameChar_x+18, gameChar_y-17)
    vertex(gameChar_x+20, gameChar_y-18)
    vertex(gameChar_x+20, gameChar_y-21)
    vertex(gameChar_x+19, gameChar_y-24)
    vertex(gameChar_x+19, gameChar_y-27)
    vertex(gameChar_x+17, gameChar_y-27)
    endShape(CLOSE);
    
//eye
    noStroke();
    fill(0);
    ellipse(gameChar_x+10, gameChar_y-30,3,3);
    
//eye hilight
    noStroke();
    fill(255);
    ellipse(gameChar_x+9.75, gameChar_y-30.5,1.5,1.5);
}
function drawJumpingLeft() {
    //back foot 
    stroke(0);
    fill(214,85,99);
    
    ellipse(gameChar_x-10, gameChar_y-2.5,5,10);
    
    //main body
    stroke(0);
    fill(99,155,255);
    
    ellipse(gameChar_x, gameChar_y-20,40,40);
    
    //front foot
    fill(214,85,99);
    ellipse(gameChar_x-1, gameChar_y-3.5,5,10);
    
    //wings
    stroke(0);
    fill(255);
    
   //left wing
    var wingPosX = gameChar_x+5;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX-7.5, wingPosY+7.5); 
    vertex(wingPosX+7.5,wingPosY) 
    curveVertex(wingPosX-2.5,wingPosY-5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);
    
    //mouth
    noStroke();
    fill(0);
    
    //arc(gameChar_x+15, gameChar_y-26.5, 20, 20, 0, PI );
    beginShape()
    vertex(gameChar_x-5, gameChar_y-27)
    vertex(gameChar_x-5, gameChar_y-25)
    vertex(gameChar_x-6, gameChar_y-22)
    vertex(gameChar_x-8, gameChar_y-20)
    vertex(gameChar_x-11, gameChar_y-18)
    vertex(gameChar_x-15, gameChar_y-17)
    vertex(gameChar_x-18, gameChar_y-17)
    vertex(gameChar_x-20, gameChar_y-18)
    vertex(gameChar_x-20, gameChar_y-21)
    vertex(gameChar_x-19, gameChar_y-24)
    vertex(gameChar_x-19, gameChar_y-27)
    vertex(gameChar_x-17, gameChar_y-27)
    endShape(CLOSE);
    //eye
    noStroke();
    fill(0);
    
    ellipse(gameChar_x-10, gameChar_y-30,3,3);
    
    //eye hilight
    noStroke();
    fill(255);
    
    ellipse(gameChar_x-9.75, gameChar_y-30.5,1.5,1.5);
}
function drawJumpingRight() {
//back foot 
    stroke(0);
    fill(214,85,99);
    ellipse(gameChar_x+10, gameChar_y-2.5,5,10);
    
//main body
    stroke(0);
    fill(99,155,255);
    ellipse(gameChar_x, gameChar_y-20,40,40);
    
//front foot
    fill(214,85,99);
    ellipse(gameChar_x+1, gameChar_y-3.5,5,10);
    
//wings
    stroke(0);
    fill(255);
//right wing
    var wingPosX = gameChar_x-5;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX+7.5, wingPosY+7.5); 
    vertex(wingPosX-7.5,wingPosY) 
    curveVertex(wingPosX+2.5,wingPosY-5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX+2,wingPosY+2);
    
//mouth
    noStroke();
    fill(0);
    beginShape()
    vertex(gameChar_x+5, gameChar_y-27)
    vertex(gameChar_x+5, gameChar_y-25)
    vertex(gameChar_x+6, gameChar_y-22)
    vertex(gameChar_x+8, gameChar_y-20)
    vertex(gameChar_x+11, gameChar_y-18)
    vertex(gameChar_x+15, gameChar_y-17)
    vertex(gameChar_x+18, gameChar_y-17)
    vertex(gameChar_x+20, gameChar_y-18)
    vertex(gameChar_x+20, gameChar_y-21)
    vertex(gameChar_x+19, gameChar_y-24)
    vertex(gameChar_x+19, gameChar_y-27)
    vertex(gameChar_x+17, gameChar_y-27)
    endShape(CLOSE);
    
//eye
    noStroke();
    fill(0);
    ellipse(gameChar_x+10, gameChar_y-30,3,3);
    
//eye hilight
    noStroke();
    fill(255);
    ellipse(gameChar_x+9.75, gameChar_y-30.5,1.5,1.5);
}

function draw()
{
	background(255);

	//Standing, facing frontwards

	stroke(100);
	noFill();
	rect(20, 60, 50, 80);
	noStroke();
	fill(0);
	text("1. standing front facing", 20, 160);

	gameChar_x = 45;
	gameChar_y = 137;
	//Add your code here ...
    drawStandingFrontFacing();

	//Jumping facing forwards
	stroke(100);
	noFill();
	rect(220, 60, 50, 80);
	noStroke();
	fill(0);
	text("2. jumping facing forwards", 220, 160);
	gameChar_x = 245;
	gameChar_y = 137;
	//Add your code here ...
    drawJumpingFrontFacing();

	//Walking, turned left
	stroke(100);
	noFill();
	rect(20, 260, 50, 80);
	noStroke();
	fill(0);
	text("3. Walking left", 20, 360);

	gameChar_x = 45;
	gameChar_y = 337;
	//Add your code here ...
    drawWalkingLeft();

	//Walking, turned right
	stroke(100);
	noFill();
	rect(220, 260, 50, 80);
	noStroke();
	fill(0);
	text("4. Walking right", 220, 360);

	gameChar_x = 245;
	gameChar_y = 337;
	//Add your code here ...
drawWalkingRight();

	//Jumping right
	stroke(100);
	noFill();
	rect(20, 460, 50, 80);
	noStroke();
	fill(0);
	text("5. Jumping to the right", 20, 560);

	gameChar_x = 45;
	gameChar_y = 537;
	//Add your code here ...
    drawJumpingRight();

	//Jumping to the left
	stroke(100);
	noFill();
	rect(220, 460, 50, 80);
	noStroke();
	fill(0);
	text("6. Jumping to the left", 220, 560);

	gameChar_x = 245;
	gameChar_y = 537;
	//Add your code here ...
    drawJumpingLeft();
    
    
    // a helpful mouse coordinate pointer
    fill(0);
    stroke(255);
    text(`${mouseX},${mouseY}`,mouseX, mouseY);

}
function mousePressed()
{
    console.log("vertex(" + mouseX + ", " + mouseY +")");
}
