/*
	The Game Project Part 4 - Character Interaction
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var canyon;

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

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    isLeft = false;
    isRight = false;
    isFalling = false;
    
    speed = 4;
    gravityScale = 5;
    

	canyon = {x_pos: 200, width: 150};
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
	noStroke();
	fill(92, 40, 0);
	rect(canyon.x_pos, floorPos_y, canyon.width, height -floorPos_y);

	//the game character
	if(isLeft && isFalling)
	{
		drawJumpingLeft();
	}
	else if(isRight && isFalling)
	{
		drawJumpingRight();
	}
	else if(isLeft)
	{
		drawWalkingLeft();
	}
	else if(isRight)
	{
		drawWalkingRight();
	}
	else if(isFalling)
	{
		drawJumpingFrontFacing();
	}
	else
	{
		drawStandingFrontFacing();
	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    //horizontal movement
    if(isLeft)
    {
        gameChar_x -= speed;
    }
    if(isRight)
    {
        gameChar_x += speed;
    }
    
    //jump
    if(gameChar_y < floorPos_y)
    {
        isFalling = true;
        gameChar_y += gravityScale;
    }
    else
    {
        isFalling = false;
    }

}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    switch(key)
    {
        case "a":
            isLeft = true;
            break;
        case "d":
            isRight = true;
            break;
        case "w":
            if(!isFalling)
            {
                gameChar_y -= 100
            }
    }

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.
    switch(key)
    {
      case "a":
        isLeft = false;
        break;
      case "d":
        isRight = false;
        break;
    }
	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
}
