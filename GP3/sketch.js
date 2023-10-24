/*
	The Game Project Part 3 - Using Variables
*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var collectable;
var mountain;
var cloud;
var flagpole;

function drawCharStandingFrontFacing() {
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

function drawFlagpole(baseX, baseY, raised) {
    //flag
    fill(0,0,128);
    if(raised){ triangle(baseX,baseY - 200,baseX, baseY-170,baseX+30, baseY - 185); }
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

function drawCollectable(posX, posY, size) {
    fill(218,165,32);
    ellipse(posX,posY,size);
    fill(255,215,0);
    ellipse(posX,posY,size*.8);
    fill(218,165,32);
    rect(posX-((size*.2)/2),posY-((size*.5)/2), size*.2,size*.5);
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
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y =floorPos_y+20
    
    flagpole = {
        x_pos:800
    }
    
    collectable ={
        x_pos: 100,
        y_pos: 380,
        size: 25
    }
    mountain ={
        x_pos: 400,
        y_pos: floorPos_y,
        width: 300,
        height: 400
    }
    cloud = {
        x_pos: 100,
        y_pos: 100,
        width: 100,
        height: 100
    }
}

function draw()
{
	background(56, 173, 181); //fill the sky blue

	noStroke();
	fill(252,252,253);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    //draw cloud
    drawCloud(cloud.x_pos,cloud.y_pos,cloud.width,cloud.height);
    
    //draw mountain
    drawMountain(mountain.x_pos,mountain.y_pos,mountain.width,mountain.height);

    //draw tree
    drawTree(treePos_x,treePos_y, 20,120);
    //draw flagpole
    drawFlagpole(flagpole.x_pos, floorPos_y,true);
    //draw collectable
    drawCollectable(collectable.x_pos,collectable.y_pos,collectable.size);
    //draw char
    drawCharStandingFrontFacing();
    
}

function mousePressed()
{
    gameChar_x = mouseX;
    gameChar_y = mouseY;
}
