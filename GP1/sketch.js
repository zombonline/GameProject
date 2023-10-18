/*
	Game Project Part 1 - Background Scenery
*/

function setup()
{
	createCanvas(1024, 576);
}

function cloud(posX,posY, sizeX,sizeY)
{
    fill(255);
    ellipse(posX,posY,sizeX,sizeY); // main ellipse
    ellipse(posX + (sizeX/2),posY + (sizeY/5),(sizeX/4) * 3,(sizeY/4) * 3); //right ellipse
    ellipse(posX - (sizeX/2),posY + (sizeY/5),(sizeX/4) * 2,(sizeY/4) * 2); //left ellipse
}

function mountain(baseX, baseY, width, height)
{
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

function tree(baseX, baseY, width, height, birdhole)
{
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

function collectable(posX, posY)
{
    fill(218,165,32);
    ellipse(posX,posY,32,32);
    fill(255,215,0);
    ellipse(posX,posY,26.26);
    fill(218,165,32);
    rect(posX-3,posY-8, 6,16);
}

function flagPole(baseX, baseY, raised)
{
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
function draw()
{
	background(56, 173, 181); //fill the sky blue

	noStroke();
	fill(252,252,253);
	rect(0, 432, 1024, 144); //snowy ground
    fill(72,66,76);
    rect(0,472,1024,200); //main road/path

	//1. a cloud in the sky
	//... add your code here
//	noStroke();
//	fill(255);
//	text("cloud", 200, 100);
    cloud(200,100,100,100);
    cloud(400,120,120,120);
    cloud(700,170,60,40);
    
	//2. a mountain in the distance
	//... add your code here
//	noStroke();
//	fill(255);
//	text("mountain", 500, 256);
    mountain(500, 435,300,400);

	//3. a tree
	//... add your code here
//	noStroke();
//	fill(255);
//	text("tree", 200, 346);
    tree(200,450,20,200,true);
    
	//4. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
//	noStroke();
//	fill(255);
//	text("collectable item", 400, 400);
    collectable(400,400);

	//5. a flag pole 
	// you'll reach this at the end of the game level
	// it will eventually have two states / flag down and flag raised
	//... add your code here
//	noStroke();
//	fill(255);
//	text("flag pole", 800, 346);
    flagPole(800,515,true);

}
