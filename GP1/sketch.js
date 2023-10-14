/*
	Game Project Part 1 - Background Scenery
*/

function setup()
{
	createCanvas(1024, 576);
}

function cloud(posX,posY, sizeX,sizeY)
{
    ellipse(posX,posY,sizeX,sizeY); // main ellipse
    ellipse(posX + (sizeX/2),posY + (sizeY/5),(sizeX/4) * 3,(sizeY/4) * 3);
    ellipse(posX - (sizeX/2),posY + (sizeY/5),(sizeX/4) * 2,(sizeY/4) * 2);
}

function mountain(baseX, baseY, width, height)
{
    fill(45,94,65);
    triangle(baseX-(width/2),baseY,baseX, baseY-height, baseX+(width/2),baseY);
    
    fill(252,253,254);
    peak1X = baseX-(width/2) + ((width-(width/2))*.65);
    peak2X = baseX+(width/2) - ((width-(width/2))*.65);
    peakY = baseY - (height*.65);
    triangle(peak1X,peakY,baseX,baseY-height,peak2X,peakY);
    
    fill(119,136,153);
    
}
function tree(baseX, baseY, width, height, birdhole)
{
    //Trunk
    fill(139,69,19);
    rect(baseX - (width/2),baseY-height,width,height);
    
    //Branch
    fill(139,69,19);
    beginShape();
    vertex(baseX-(width/2),baseY-(height*.75));
    vertex(baseX-(width/2),baseY-(height*.80));
    vertex(baseX-40,baseY-(height*.90));
    vertex(baseX-40,baseY-(height*.85));
    endShape(CLOSE);
    
    //leaves
    fill(50,205,50);
    var bigLeafX = baseX;
    var bigLeafY = baseY-(height*1.2);
    var bigLeafSize = height/2;
    
    fill(252,252,253);
    ellipse(bigLeafX,bigLeafY-(bigLeafSize/2), bigLeafSize/2,bigLeafSize/2); //top middle
    ellipse(bigLeafX-(bigLeafSize/3),bigLeafY -(bigLeafSize/3) , bigLeafSize/2,bigLeafSize/2); //top left
    ellipse(bigLeafX+(bigLeafSize/3),bigLeafY -(bigLeafSize/3) , bigLeafSize/2,bigLeafSize/2); //top right
    fill(50,205,50);
    ellipse(bigLeafX,bigLeafY,bigLeafSize,bigLeafSize);
    ellipse(bigLeafX-(bigLeafSize/2),bigLeafY, bigLeafSize/2,bigLeafSize/2); //middle left
    ellipse(bigLeafX+(bigLeafSize/2),bigLeafY, bigLeafSize/2,bigLeafSize/2); //middle right
    
    fill(50,205,50);
    ellipse(bigLeafX-(bigLeafSize/3),bigLeafY +(bigLeafSize/3) , bigLeafSize/2,bigLeafSize/2); //bottom left
    ellipse(bigLeafX+(bigLeafSize/3),bigLeafY +(bigLeafSize/3) , bigLeafSize/2,bigLeafSize/2); //bottom right
    if(birdhole)
    {
        fill(20,20,20);
        ellipse(baseX, baseY - (height*.65), width*.75 ,(width*.75)*1.5);
    }
}

function draw()
{
	background(56, 173, 181); //fill the sky blue

	noStroke();
	fill(252,252,253);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
	noStroke();
	fill(255);
	text("cloud", 200, 100);
    
    cloud(200,100,100,100);
    cloud(400,120,120,120);
    cloud(700,230,60,40);
    
	//2. a mountain in the distance
	//... add your code here
	noStroke();
	fill(255);
	text("mountain", 500, 256);
    mountain(760,450, 300,200);
    mountain(500, 435,300,400);

	//3. a tree
	//... add your code here
    tree(200,450,20,200, true);
    tree(400,450,15,130, false);
    tree(650,480,20,100, true);
    tree(800,500,20,140, true)

	noStroke();
	fill(255);
	text("tree", 200, 346);

	//4. a collectable token - eg. a jewel, fruit, coins
	//... add your code here

	noStroke();
	fill(255);
	text("collectable item", 400, 400);


	//5. a flag pole 
	// you'll reach this at the end of the game level
	// it will eventually have two states / flag down and flag raised
	//... add your code here

	noStroke();
	fill(255);
	text("flag pole", 800, 346);
    
    fill(255);
	text(`${mouseX},${mouseY}`, mouseX, mouseY);

}
