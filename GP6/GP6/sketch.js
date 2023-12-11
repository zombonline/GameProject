/*
	The Game Project Part 5 - Interactive Elements
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var canyon;
var collectable;
var cameraPosX;

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
function drawCollectable(posX, posY, size) {
    fill(218,165,32);
    ellipse(posX,posY,size);
    fill(255,215,0);
    ellipse(posX,posY,size*.8);
    fill(218,165,32);
    rect(posX-((size*.2)/2),posY-((size*.5)/2), size*.2,size*.5);
}
function drawFlagpole(baseX, baseY, isReached) {
    //flag
    fill(0,0,128);
    if(isReached){ triangle(baseX,baseY - 200,baseX, baseY-170,baseX+30, baseY - 185); }
    else{ triangle(baseX,baseY - 30,baseX, baseY,baseX+30, baseY - 15); }
    
    //pole
    fill(112,128,144);
    rect(baseX -2.5, baseY - 200, 5, 200);
    
    //base
    fill(160,82,45);
    rect(baseX - 30, baseY - 10, 60, 20);
    rect(baseX - 30, baseY - 15, 10, 5);
    rect(baseX + 20, baseY - 15, 10, 5);
    rect(baseX-5, baseY - 15,10, 5);
    ellipse(baseX, baseY+10,60,10);
    
    //top circle
    fill(218,165,32);
    ellipse(baseX, baseY - 200, 10, 10);
}
function drawTree(baseX, baseY, width, height, birdhole) {
    //Trunk
    fill(139,69,19);
    rect(baseX - (width/2),baseY-height,width,height);
    ellipse(baseX, baseY,width,10);
    
    //leaves
    fill(34,139,34);
    var widthIncrementCounter = 0;
    for(var i = baseY-height; i < baseY-20; i +=30)
    {
        widthIncrementCounter+= 0.5;
        triangle(baseX+(width*2)*widthIncrementCounter,i,baseX-(width*2)*widthIncrementCounter,i, baseX, i-60);
    }
    
    //birdhole
    if(birdhole)
    {
        fill(60,20,40);
        ellipse(baseX, baseY - (height*.15), width*.75 ,(width*.75)*1.5);
    }
}
function drawCloud(posX,posY, sizeX,sizeY) {
    fill(255);
    ellipse(posX,posY,sizeX,sizeY); // main ellipse
    ellipse(posX + (sizeX/2),posY + (sizeY/5),(sizeX/4) * 3,(sizeY/4) * 3); //right ellipse
    ellipse(posX - (sizeX/2),posY + (sizeY/5),(sizeX/4) * 2,(sizeY/4) * 2); //left ellipse
}
function drawMountain(baseX, baseY, width, height) {
    //initial triangle shape
    fill(45,94,65);
    triangle(baseX-(width/2),baseY,baseX, baseY-height, baseX+(width/2),baseY); 
    //rounding off base of mountain
    ellipse(baseX, baseY,width,50);
    
    
    //peak triangle shape
    fill(252,253,254);
    peak1X = baseX-(width/2) + ((width-(width/2))*.65);
    peak2X = baseX+(width/2) - ((width-(width/2))*.65);
    peakY = baseY - (height*.65);
    triangle(peak1X,peakY,baseX,baseY-height,peak2X,peakY);
    //rounding off bottom of peak triangle shape
    ellipse(baseX, baseY-(height*.65),width-(width*.65),20);
}

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = -80;
	gameChar_y = floorPos_y;
    isLeft = false;
    isRight = false;
    isFalling = false;
    isPlummeting = false;
    
    speed = 4;
    gravityScale = 4;
    
    cameraPosX = 0;
    
    canyons = [
        {x_pos: 200, width: 150},
        {x_pos: 500, width: 100},
        {x_pos: 800, width: 150},
        {x_pos: 1100, width: 120},
        {x_pos: 1400, width: 150}
    ];

    collectable ={
        x_pos: 780, 
        y_pos: 415,
        size: 25,
        isFound: false
    }
    flagpole = {
        x_pos:2200,
        isReached: false
    }
    
    trees_x = [30,150,1070,1000,1200,900];
    clouds = [
        {posX:50,posY:75,sizeX:100,sizeY:100},{posX:220,posY:100,sizeX:80,sizeY:80},{posX:350,posY:50,sizeX:110,sizeY:90},{posX:600,posY:30,sizeX:50,sizeY:40},{posX:900,posY:150,sizeX:65,sizeY:49},{posX:500,posY:200,sizeX:10,sizeY:10},{posX:400,posY:170,sizeX:60,sizeY:50},{posX:750,posY:100,sizeX:80,sizeY:90},{posX:1000,posY:110,sizeX:80,sizeY:90},{posX:1200,posY:60,sizeX:90,sizeY:90},{posX:1800,posY:100,sizeX:80,sizeY:90},{posX:1950,posY:110,sizeX:100,sizeY:90},{posX:2400,posY:75,sizeX:100,sizeY:90},{posX:1950,posY:110,sizeX:100,sizeY:90}]
    mountains = [
        {posX:620,posY:floorPos_y,sizeX:300,sizeY:400},{posX:1600,posY:floorPos_y,sizeX:500,sizeY:700},{posX:500,posY:floorPos_y,sizeX:250,sizeY:320}]
}

function draw()
{

    cameraPosX = gameChar_x-width/2;
    cameraPosX = constrain(cameraPosX, -200, 1700);
    

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    //scrolling elements start
    push();
    translate(-cameraPosX,0);
    
    ///////BACKGROUND ELEMENTS///////
    for(i =0; i < mountains.length; i++)
    {
        m = mountains[i];
        drawMountain(m.posX,m.posY,m.sizeX,m.sizeY);
    }
    for(i = 0; i < trees_x.length; i++)
    {
        drawTree(trees_x[i],floorPos_y, 20,120,i%2);
    }
    for (i = 0; i < clouds.length; i++)
    {
        c = clouds[i];
        drawCloud(c.posX,c.posY,c.sizeX,c.sizeY);
    }
    ///////GAME ELEMENTS//////////
    //draw canyon
	noStroke();
	fill(92, 40, 0);
    
    for(i = 0; i < canyons.length; i++)
    {
        canyon = canyons[i];
        rect(canyon.x_pos, floorPos_y, canyon.width, height -floorPos_y);
    }
    
    //draw collectable
    //check if player is within range of collectable, if so stop drawing collectable as player has collected it.
    if(!collectable.isFound)
    {
        drawCollectable(collectable.x_pos,collectable.y_pos,collectable.size);
        
        var distFromPlayer = dist(collectable.x_pos,collectable.y_pos, gameChar_x, gameChar_y);
        if(distFromPlayer < 20)
        {
            collectable.isFound = true;
        }
    }
     
    //draw flagpole
    //check player has crossed the flagpole, if so raise the flag
    if(!flagpole.isReached && gameChar_x > flagpole.x_pos)
    {
        flagpole.isReached = true;
    }
    drawFlagpole(flagpole.x_pos, floorPos_y,flagpole.isReached);
    

    
    
    
	//draw game character
	if(isLeft && (isFalling || isPlummeting))
	{
		drawJumpingLeft();
	}
	else if(isRight && (isFalling || isPlummeting))
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
	else if(isFalling || isPlummeting)
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
    //fall
    if(isPlummeting)
    {
        //player is falling into the canyon. Keep them falling and constrain their x movement to within the canyon.
        gameChar_y += gravityScale;
        gameChar_x = constrain(gameChar_x, canyon.x_pos, canyon.x_pos+canyon.width);
    }
    pop(); //scrolling elements end

}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.
    if(isPlummeting){return;} //player has fell in canyon, can no longer interact with character.
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
                gameChar_y -= 200
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
