/*
	Game Project Part 2 - Game Character
*/

var gameChar_x = 0;
var gameChar_y = 0;

function setup()
{
	createCanvas(400, 600);
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
    //feet 
    stroke(0);
    fill(214,85,99);
    ellipse(gameChar_x-10, gameChar_y-2.5,10,5);
    ellipse(gameChar_x+10, gameChar_y-2.5,10,5);
    noStroke();
    //wings
    stroke(0);
    fill(255);
    
    var wingPosX = gameChar_x-20;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX-7.5, wingPosY-7.5); //red
//    curveVertex(wingPosX, wingPosY-1);
    vertex(wingPosX+7.5,wingPosY) //green
    curveVertex(wingPosX-2.5,wingPosY+5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);

    var wingPosX = gameChar_x+20;
    var wingPosY = gameChar_y - 30;
    beginShape();
    vertex(wingPosX+7.5, wingPosY-7.5); //red
//    curveVertex(wingPosX, wingPosY-1);
    vertex(wingPosX-7.5,wingPosY) //green
    curveVertex(wingPosX+2.5,wingPosY+5);
    endShape(CLOSE);
    line(wingPosX, wingPosY-1,wingPosX+2,wingPosY+2);
    
    
    noStroke();
    //main body
    stroke(0);
    fill(99,155,255);
    ellipse(gameChar_x, gameChar_y-20,40,40);
    noStroke();
    //mouth
    fill(0);
    ellipse(gameChar_x, gameChar_y-26.5,20,20);
    fill(99,155,255);
    rect(gameChar_x-10, gameChar_y-36.7,20,11.5);
    
    //eyes
    fill(0);
    ellipse(gameChar_x-10, gameChar_y-30,3,3);
    ellipse(gameChar_x+10, gameChar_y-30,3,3);
    //eye hilights
    fill(255);
    ellipse(gameChar_x-10.5, gameChar_y-30.5,1.5,1.5);
    ellipse(gameChar_x+10.5, gameChar_y-30.5,1.5,1.5);
    
//    stroke(0);
//    wingPosX = 100;
//    wingPosY = 100;
//    rect(wingPosX-12.5,wingPosY-12.5,25,25);
//    
//    fill(255,0,0);
//    ellipse(wingPosX-7.5,wingPosY-7.5,5,5);
//    fill(0,255,0);
//    ellipse(wingPosX+7.5,wingPosY,5,5);
//    fill(0,0,255);
//    ellipse(wingPosX,wingPosY+5,5,5);
//    fill(255);
//    beginShape();
//    vertex(wingPosX-7.5, wingPosY-7.5); //red
//    curveVertex(wingPosX, wingPosY-1);
//    vertex(wingPosX+7.5,wingPosY) //green
//    curveVertex(wingPosX-2.5,wingPosY+5);
//    
//    endShape(CLOSE);

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
    
    
    
    // a helpful mouse coordinate pointer
    fill(0);
    stroke(255);
    text(`${mouseX},${mouseY}`,mouseX, mouseY);

}
