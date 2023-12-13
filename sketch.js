//This a simple HTML game made using the p5.js library. Players are tasked with getting through
//a simple randomly generated platforming level whilst an enemy UFO gives chase frequently shooting 
//projectiles towards them!

//game world positions
var floorPos_y;
var backgroundFloorPos_Y;
var levelWidth;
var cameraPosX;

//game objects
var gameChar;
var boss;
var flagpole;
var canyons;
var currentCanyon;
var collectables;
var button;

//background objects
var trees;
var clouds;
var mountains;
var snow;

//game info
var currentScore;
var gameOver;
var levelComplete;
var jumpPressed;

//enum for player airborne state
const AirborneState = {
    NONE: 'none',
    JUMPING: 'jumping',
    FALLING: 'falling',
    PLUMMETING: 'plummeting'
}
function setup()
{
	var canvas = createCanvas(windowWidth,windowHeight);
    canvas.position(0,0);


    //intialise game world positions
	floorPos_y = height * 3/4;
    backgroundFloorPos_Y = floorPos_y-100;
    levelWidth = 7500;
    cameraPosX = 0;

    //initialise game objects
    gameChar =
    {
        x_pos:-80,
        y_pos:floorPos_y,
        isLeft:false,
        isRight:false,
        airborneState:AirborneState.NONE,
        speed:8,
        jumpHeight:150,
        jumpSpeed:12,
        gravityScale:8,
        jumpStartYPosition:null,
        velocityMultiplier: 1

    };
    boss = {
        x_pos: -0,
        y_pos: floorPos_y-300,
        offset: 0,
        speed: 16,
        size: 200,
        projectile_xPos: -200,
        projectile_yPos: floorPos_y-300,
        projectile_size:20,
        projectileFired: false,
        projectileTarget: null,
        projectileCooldown:100,
        projectileCooldownTimer: 100

    };
    flagpole = {
        x_pos:levelWidth+75,
        isReached: false
    };
    canyons = GenerateCanyons(100);
    currentCanyon = null;
    collectables = GenerateCollectables(100);
    button = {
        x_pos: levelWidth+500,
        y_pos:floorPos_y,
        pressed: false
    };

    //initialise background objects
    trees = GenerateTrees(100);
    clouds = GenerateClouds(30);
    mountains = GenerateMoutains(20);
    snow = GenerateSnow(3000);
    
    //initialise game info
    currentScore = 0;
    gameOver = false;
    levelComplete = false;
    jumpPressed = false;

  
}
function draw()
{
    //Maintain camera position to focus on player and not go constrain it to start and end of level.
    cameraPosX = gameChar.x_pos-width/2;
    cameraPosX = constrain(cameraPosX, -200, levelWidth);

    drawSky();
	drawGround();
    ///////////////////////////////////
    /////SCROLLING ELEMENTS BEGIN/////
    /////////////////////////////////
    push();
    translate(-cameraPosX,0);
    
    ///////BACKGROUND ELEMENTS///////
    //draw clouds - move them to right
    for (i = 0; i < clouds.length; i++)
    {
        c = clouds[i];
        c.posX += c.size/500;
        if(c.posX > levelWidth+c.size)
        {
            c.posX = -500;
        }
        drawCloud(c.posX,c.posY,c.size);
    }
    //draw mountains
    for(i =0; i < mountains.length; i++)
    {
        m = mountains[i];
        drawMountain(m.posX,m.posY,m.sizeX,m.sizeY);
    }
    //draw trees
    for(i = 0; i < trees.length; i++)
    {
        t = trees[i];
        drawTree(t.x_pos,t.y_pos, 20,120, i%2 == 0);
    }
    drawSnow();

    ///////GAME ELEMENTS//////////
    //draw canyons
    for(i = 0; i < canyons.length; i++)
    {
        drawCanyon();
    }
    //draw collectable - collectable dissapears if player nearby, score increments by 1.
    for(i =0; i < collectables.length; i++)
    {
        c = collectables[i];

        if(!c.isFound)
        {
            drawCollectable(c.x_pos,c.y_pos,c.size);
        
            var distFromPlayer = dist(c.x_pos,c.y_pos, gameChar.x_pos, gameChar.y_pos);
            if(distFromPlayer < 35 && !c.isFound)
            {
                currentScore += 1;
                c.isFound = true;
            }
        }
    }
    //draw flagpole - raise flag if player has crossed the flagpole
    if(!flagpole.isReached && gameChar.x_pos > flagpole.x_pos)
    {
        flagpole.isReached = true;
    }
    drawFlagpole(flagpole.x_pos, floorPos_y-20,flagpole.isReached);
    
	//draw game character
	handlePlayerDrawing();

	///////////INTERACTION CODE//////////
    //horizontal movement
    handleMovement();
    //jump
    handleJump();
    //canyon interaction
    handleCanyons();
    //draw boss, handle boss and handle projectile interaction if level complete button not yet pressed
    if(!button.pressed)
    {
        handleBoss();
        drawBoss();
        fireBossProjectile();
    }
    //draw level complete button and handle level complete button interaction
    drawButton(button.x_pos, button.y_pos,button.pressed);
    handleButton();
    ///////////////////////////////////
    /////SCROLLING ELEMENTS END///////
    /////////////////////////////////
    pop();

    //UI
    drawHUD();
}
//#region Functions to populate arrays
function GenerateSnow(amount) {
    arrayToReturn = [];
    for (i = 0; i < amount; i++) {
        arrayToReturn.push({ x_pos: random(-200, levelWidth + width), y_pos: random(-500, floorPos_y), size: random(1, 5), dormantTimer: 250 });
    };
    return arrayToReturn;
}

function GenerateTrees(amount)
{
    arrayToReturn = [];
    for (i = 0; i < amount; i++) {
        arrayToReturn.push({ x_pos: random(-200, levelWidth+width), y_pos: backgroundFloorPos_Y+50, sizeX: random(20, 40), sizeY: random(80, 200) });
    }
    return arrayToReturn;
}

function GenerateCanyons(amount) 
{
    arrayToReturn = [];
    startX = 0;
    for (i = 0; i < amount; i++) 
    {
        newXPos = random(startX, startX+200);
        newSize = random(100, 260);

        startX = newXPos + newSize + 100;
        if(startX > levelWidth)
        {
            break;
        }

        arrayToReturn.push({x_pos:newXPos, width:newSize});
    }
    return arrayToReturn;
}

function GenerateMoutains(amount) 
{
    arrayToReturn = [];
    for (i = 0; i < amount; i++) {
        arrayToReturn.push({ posX: random(-200, levelWidth+width), posY: backgroundFloorPos_Y, sizeX: random(100, 500), sizeY: random(100, 500) });
    }
    return arrayToReturn;
}

function GenerateClouds(amount)
{
    arrayToReturn = [];
    for (i = 0; i < amount; i++) 
    {
        arrayToReturn.push({ posX: random(-200, levelWidth+width), posY: random(0, 100), size: random(50, 100) });
    }
    return arrayToReturn;
}

function GenerateCollectables(amount)
{
    arrayToReturn = [];
    for (i = 0; i < amount; i++)
    {
        newXPos = random((levelWidth / amount) * i, (levelWidth / amount) * i + levelWidth / amount);
        newYPos = floorPos_y - 20;

        for (j = 0; j < canyons.length; j++)
        {
            if (newXPos >= canyons[j].x_pos && newXPos <= canyons[j].x_pos + canyons[j].width)
            {
                newYPos = floorPos_y - 50 - canyons[j].width/3;
            }
        }
        arrayToReturn.push({
            x_pos: newXPos,
            y_pos: newYPos,
            size: 25,
            isFound: false
        });
    }
    return arrayToReturn;
}
//#endregion
//#region Functions to handle input
function keyPressed()
{
    if(gameOver || levelComplete || gameChar.airborneState == AirborneState.PLUMMETING)
    {
        return; //exit this method if game complete or player falling to death.
    }

    switch(key)
    {
        case "a":
            gameChar.isLeft = true;
            break;
        case "d":
            gameChar.isRight = true;
            break;
        case "w":
            jumpPressed = true;
            if(gameChar.airborneState != AirborneState.FALLING && gameChar.airborneState != AirborneState.JUMPING)
            {
                gameChar.airborneState = AirborneState.JUMPING;
            }
            break;
    }

}
function keyReleased()
{
    switch(key)
    {
        case "a":
            gameChar.isLeft = false;
            break;
        case "d":
            gameChar.isRight = false;
            break;
        case "w":
            jumpPressed = false;
            break;
        case " ":
            if(gameOver || levelComplete)
            {
                location.reload();
            }
    }
}
//#endregion
//#region Functions to draw player
function drawStandingFrontFacing() {
    //feet 
        stroke(0);
        fill(214,85,99);
        ellipse(gameChar.x_pos-10, gameChar.y_pos-2.5,10,5);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-2.5,10,5);
        
    //wings
        stroke(0);
        fill(255);
        
    //left wing
        var wingPosX = gameChar.x_pos-20;
        var wingPosY = gameChar.y_pos - 30;
        beginShape();
        vertex(wingPosX-7.5, wingPosY-7.5); 
        vertex(wingPosX+7.5,wingPosY) 
        curveVertex(wingPosX-2.5,wingPosY+5);
        endShape(CLOSE);
        line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);
    //right wing
        var wingPosX = gameChar.x_pos+20;
        var wingPosY = gameChar.y_pos - 30;
        beginShape();
        vertex(wingPosX+7.5, wingPosY-7.5); 
        vertex(wingPosX-7.5,wingPosY) 
        curveVertex(wingPosX+2.5,wingPosY+5);
        endShape(CLOSE);
        line(wingPosX, wingPosY-1,wingPosX+2,wingPosY+2);
        
    //main body
        stroke(0);
        fill(99,155,255);
        ellipse(gameChar.x_pos, gameChar.y_pos-20,40,40);
        
    //mouth
        noStroke();
        fill(0);
        arc(gameChar.x_pos, gameChar.y_pos-26.5, 20, 20, 0, PI );
        
    //eyes
        noStroke();
        fill(0);
        ellipse(gameChar.x_pos-10, gameChar.y_pos-30,3,3);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-30,3,3);
        
    //eye hilights
        noStroke();
        fill(255);
        ellipse(gameChar.x_pos-10.5, gameChar.y_pos-30.5,1.5,1.5);
        ellipse(gameChar.x_pos+10.5, gameChar.y_pos-30.5,1.5,1.5);
}
    function drawJumpingFrontFacing() {
    //feet 
        stroke(0);
        fill(214,85,99);
        ellipse(gameChar.x_pos-10, gameChar.y_pos-2.5,5,10);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-2.5,5,10);
        
    //wings
        stroke(0);
        fill(255);
    //left wing
        var wingPosX = gameChar.x_pos-20;
        var wingPosY = gameChar.y_pos - 30;
        beginShape();
        vertex(wingPosX-7.5, wingPosY+7.5); 
        vertex(wingPosX+7.5,wingPosY) 
        curveVertex(wingPosX-2.5,wingPosY-5);
        endShape(CLOSE);
        line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);
    //right wing
        var wingPosX = gameChar.x_pos+20;
        var wingPosY = gameChar.y_pos - 30;
        beginShape();
        vertex(wingPosX+7.5, wingPosY+7.5); 
        vertex(wingPosX-7.5,wingPosY) 
        curveVertex(wingPosX+2.5,wingPosY-5);
        endShape(CLOSE);
        line(wingPosX, wingPosY-1,wingPosX+2,wingPosY+2);
    
    //main body
        stroke(0);
        fill(99,155,255);
        ellipse(gameChar.x_pos, gameChar.y_pos-20,40,40);
        
    //mouth
        noStroke();
        fill(0);
        arc(gameChar.x_pos, gameChar.y_pos-26.5, 20, 20, 0, PI );
    
    //eyes
        noStroke();
        fill(0);
        ellipse(gameChar.x_pos-10, gameChar.y_pos-30,3,3);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-30,3,3);
        
    //eye hilights
        noStroke();
        fill(255);
        ellipse(gameChar.x_pos-10.5, gameChar.y_pos-30.5,1.5,1.5);
        ellipse(gameChar.x_pos+10.5, gameChar.y_pos-30.5,1.5,1.5);
}
    function drawWalkingLeft() {
    //back foot 
        stroke(0);
        fill(214,85,99); 
        ellipse(gameChar.x_pos-10, gameChar.y_pos-2.5,10,5);
    
    //main body
        stroke(0);
        fill(99,155,255);
        ellipse(gameChar.x_pos, gameChar.y_pos-20,40,40);
        
    //front foot
        fill(214,85,99);
        ellipse(gameChar.x_pos-1, gameChar.y_pos-3.5,10,5);
        
    //wings
        stroke(0);
        fill(255);
    //left wing
        var wingPosX = gameChar.x_pos+5;
        var wingPosY = gameChar.y_pos - 30;
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
        vertex(gameChar.x_pos-5, gameChar.y_pos-27)
        vertex(gameChar.x_pos-5, gameChar.y_pos-25)
        vertex(gameChar.x_pos-6, gameChar.y_pos-22)
        vertex(gameChar.x_pos-8, gameChar.y_pos-20)
        vertex(gameChar.x_pos-11, gameChar.y_pos-18)
        vertex(gameChar.x_pos-15, gameChar.y_pos-17)
        vertex(gameChar.x_pos-18, gameChar.y_pos-17)
        vertex(gameChar.x_pos-20, gameChar.y_pos-18)
        vertex(gameChar.x_pos-20, gameChar.y_pos-21)
        vertex(gameChar.x_pos-19, gameChar.y_pos-24)
        vertex(gameChar.x_pos-19, gameChar.y_pos-27)
        vertex(gameChar.x_pos-17, gameChar.y_pos-27)
        endShape(CLOSE);
        
    //eye
        noStroke();
        fill(0);
        ellipse(gameChar.x_pos-10, gameChar.y_pos-30,3,3);
    
    //eye hilight
        noStroke();
        fill(255);
        ellipse(gameChar.x_pos-9.75, gameChar.y_pos-30.5,1.5,1.5);
}
    function drawWalkingRight() {
    //back foot 
        stroke(0);
        fill(214,85,99);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-2.5,10,5);
        
    //main body
        stroke(0);
        fill(99,155,255);
        ellipse(gameChar.x_pos, gameChar.y_pos-20,40,40);
        
    //front foot
        fill(214,85,99);
        ellipse(gameChar.x_pos+1, gameChar.y_pos-3.5,10,5);
        
    //wings
        stroke(0);
        fill(255);
    //right wing
        var wingPosX = gameChar.x_pos-5;
        var wingPosY = gameChar.y_pos - 30;
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
        vertex(gameChar.x_pos+5, gameChar.y_pos-27)
        vertex(gameChar.x_pos+5, gameChar.y_pos-25)
        vertex(gameChar.x_pos+6, gameChar.y_pos-22)
        vertex(gameChar.x_pos+8, gameChar.y_pos-20)
        vertex(gameChar.x_pos+11, gameChar.y_pos-18)
        vertex(gameChar.x_pos+15, gameChar.y_pos-17)
        vertex(gameChar.x_pos+18, gameChar.y_pos-17)
        vertex(gameChar.x_pos+20, gameChar.y_pos-18)
        vertex(gameChar.x_pos+20, gameChar.y_pos-21)
        vertex(gameChar.x_pos+19, gameChar.y_pos-24)
        vertex(gameChar.x_pos+19, gameChar.y_pos-27)
        vertex(gameChar.x_pos+17, gameChar.y_pos-27)
        endShape(CLOSE);
        
    //eye
        noStroke();
        fill(0);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-30,3,3);
        
    //eye hilight
        noStroke();
        fill(255);
        ellipse(gameChar.x_pos+9.75, gameChar.y_pos-30.5,1.5,1.5);
}
    function drawJumpingLeft() {
        //back foot 
        stroke(0);
        fill(214,85,99);
        
        ellipse(gameChar.x_pos-10, gameChar.y_pos-2.5,5,10);
        
        //main body
        stroke(0);
        fill(99,155,255);
        
        ellipse(gameChar.x_pos, gameChar.y_pos-20,40,40);
        
        //front foot
        fill(214,85,99);
        ellipse(gameChar.x_pos-1, gameChar.y_pos-3.5,5,10);
        
        //wings
        stroke(0);
        fill(255);
        
       //left wing
        var wingPosX = gameChar.x_pos+5;
        var wingPosY = gameChar.y_pos - 30;
        beginShape();
        vertex(wingPosX-7.5, wingPosY+7.5); 
        vertex(wingPosX+7.5,wingPosY) 
        curveVertex(wingPosX-2.5,wingPosY-5);
        endShape(CLOSE);
        line(wingPosX, wingPosY-1,wingPosX-2,wingPosY+2);
        
        //mouth
        noStroke();
        fill(0);
        
        //arc(gameChar.x_pos+15, gameChar.y_pos-26.5, 20, 20, 0, PI );
        beginShape()
        vertex(gameChar.x_pos-5, gameChar.y_pos-27)
        vertex(gameChar.x_pos-5, gameChar.y_pos-25)
        vertex(gameChar.x_pos-6, gameChar.y_pos-22)
        vertex(gameChar.x_pos-8, gameChar.y_pos-20)
        vertex(gameChar.x_pos-11, gameChar.y_pos-18)
        vertex(gameChar.x_pos-15, gameChar.y_pos-17)
        vertex(gameChar.x_pos-18, gameChar.y_pos-17)
        vertex(gameChar.x_pos-20, gameChar.y_pos-18)
        vertex(gameChar.x_pos-20, gameChar.y_pos-21)
        vertex(gameChar.x_pos-19, gameChar.y_pos-24)
        vertex(gameChar.x_pos-19, gameChar.y_pos-27)
        vertex(gameChar.x_pos-17, gameChar.y_pos-27)
        endShape(CLOSE);
        //eye
        noStroke();
        fill(0);
        
        ellipse(gameChar.x_pos-10, gameChar.y_pos-30,3,3);
        
        //eye hilight
        noStroke();
        fill(255);
        
        ellipse(gameChar.x_pos-9.75, gameChar.y_pos-30.5,1.5,1.5);
}
    function drawJumpingRight() {
    //back foot 
        stroke(0);
        fill(214,85,99);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-2.5,5,10);
        
    //main body
        stroke(0);
        fill(99,155,255);
        ellipse(gameChar.x_pos, gameChar.y_pos-20,40,40);
        
    //front foot
        fill(214,85,99);
        ellipse(gameChar.x_pos+1, gameChar.y_pos-3.5,5,10);
        
    //wings
        stroke(0);
        fill(255);
    //right wing
        var wingPosX = gameChar.x_pos-5;
        var wingPosY = gameChar.y_pos - 30;
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
        vertex(gameChar.x_pos+5, gameChar.y_pos-27)
        vertex(gameChar.x_pos+5, gameChar.y_pos-25)
        vertex(gameChar.x_pos+6, gameChar.y_pos-22)
        vertex(gameChar.x_pos+8, gameChar.y_pos-20)
        vertex(gameChar.x_pos+11, gameChar.y_pos-18)
        vertex(gameChar.x_pos+15, gameChar.y_pos-17)
        vertex(gameChar.x_pos+18, gameChar.y_pos-17)
        vertex(gameChar.x_pos+20, gameChar.y_pos-18)
        vertex(gameChar.x_pos+20, gameChar.y_pos-21)
        vertex(gameChar.x_pos+19, gameChar.y_pos-24)
        vertex(gameChar.x_pos+19, gameChar.y_pos-27)
        vertex(gameChar.x_pos+17, gameChar.y_pos-27)
        endShape(CLOSE);
        
    //eye
        noStroke();
        fill(0);
        ellipse(gameChar.x_pos+10, gameChar.y_pos-30,3,3);
        
    //eye hilight
        noStroke();
        fill(255);
        ellipse(gameChar.x_pos+9.75, gameChar.y_pos-30.5,1.5,1.5);
}
//#endregion
//#region Functions to draw objects
function drawSky() {
    var colorA = color(100, 100, 255);
    var colorB = color(255, 150, 0);
    for (i = 0; i < 100; i++) {
        fill(lerpColor(colorA, colorB, i / 80));
        rect(0, i * (height / 101), width, height / 100);
    }
}
function drawGround() {
    noStroke();
    fill(175);
    rect(0, floorPos_y, width, height - floorPos_y);
    fill(235);
    rect(0, backgroundFloorPos_Y, width, floorPos_y - backgroundFloorPos_Y);
}
function drawCanyon() {
    fill(235);
    rect(canyons[i].x_pos -20, floorPos_y, canyons[i].width + 40, height - floorPos_y);
    fill(92, 40, 0);
    rect(canyons[i].x_pos-10, floorPos_y, canyons[i].width+20, height - floorPos_y);
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
function drawCloud(posX, posY, size) {
        fill(255);
        ellipse(posX, posY, size, size); // main ellipse
        ellipse(posX + (size / 2), posY + (size / 5), (size / 4) * 3, (size / 4) * 3); //right ellipse
        ellipse(posX - (size / 2), posY + (size / 5), (size / 4) * 2, (size / 4) * 2); //left ellipse
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
function drawSnow()
    {
        for( i = 0; i < snow.length; i++)
        {
            fill(235);
            if(snow[i].y_pos < floorPos_y)
            {
                snow[i].x_pos -=.5;
                snow[i].y_pos += 1;
            }
            else
            {
                snow[i].dormantTimer--;
                if(snow[i].dormantTimer <= 0)
                {
                    snow[i].y_pos = 0;
                    snow[i].dormantTimer = 200;
                }
            }
            ellipse(snow[i].x_pos,snow[i].y_pos,5,5);
        
        }
}
function drawHUD()
{
    fill(0);
    textSize(20);
    textAlign(LEFT);
    text("Score: " + currentScore, 20,20);

    //restart box and darken screen
    if(gameOver || levelComplete)
    {
        fill(0,0,0,150);
        rect(0,0,width,height);
        fill(0);
        rect(width/2-200,height/2+25,400,50);
        fill(255);
        textSize(30);
        textAlign(CENTER);
        text("Space to Restart", width/2,height/2+62.5);
    }
    //gameover box
    if(gameOver)
    {
        fill(0);
        rect(width/2-200,height/2-100,400,100);
        fill(255);
        textSize(50);
        textAlign(CENTER);
        text("Game Over!", width/2,height/2-25);
    }
    //level complete box
    if(levelComplete)
    {
        fill(0);
        rect(width/2-200,height/2-100,400,100);
        fill(255);
        textSize(50);
        textAlign(CENTER);
        text("Level Complete!", width/2,height/2-50);
        textSize(30);
        text("Score: " + currentScore.toString(), width/2,height/2-10);

    }  
}
function drawCrosshairs(x_pos,y_pos)
{
    noFill();
    stroke(255,0,0);
    strokeWeight(3);
    ellipse(x_pos, y_pos, 20, 20);
    line(x_pos + 7, y_pos, x_pos+15, y_pos);
    line(x_pos - 7, y_pos, x_pos-15, y_pos);
    line(x_pos, y_pos+7, x_pos, y_pos+15);
    line(x_pos, y_pos-7, x_pos, y_pos-15);
}


function drawBoss()
{
    //alien head
    fill(50);
    ellipse(boss.x_pos,boss.y_pos-boss.size/4,boss.size/8,boss.size/4);
    //alien eyes
    fill(0,255,0);
    ellipse(boss.x_pos-5,boss.y_pos-boss.size/4-5,boss.size/32,boss.size/32);
    ellipse(boss.x_pos+5,boss.y_pos-boss.size/4-5,boss.size/32,boss.size/32);
    //glass dome
    fill(255,255,255, 210);
    ellipse(boss.x_pos,boss.y_pos-boss.size/8,boss.size/2,boss.size/2);

    colorA = color(0,255,0);
    colorB = color(255,255,255);
    fill(lerpColor(colorA,colorB,boss.projectileCooldownTimer/boss.projectileCooldown));
    
    //white ring
    ellipse(boss.x_pos,boss.y_pos-5,boss.size+2.5,boss.size/4+2.5);   
    //red ring
    fill(255,0,0);
    ellipse(boss.x_pos,boss.y_pos,boss.size,boss.size/4); 
    //black shoot area with white lines 
    fill(50);
    stroke(lerpColor(colorA,colorB,boss.projectileCooldownTimer/boss.projectileCooldown));
    strokeWeight(2 +(boss.projectileCooldown/boss.projectileCooldownTimer)/5);
    line(boss.x_pos,boss.y_pos,boss.x_pos,boss.y_pos-boss.size/8);
    line(boss.x_pos,boss.y_pos,boss.x_pos,boss.y_pos+boss.size/8);
    line(boss.x_pos,boss.y_pos,boss.x_pos+boss.size/2,boss.y_pos);
    line(boss.x_pos,boss.y_pos,boss.x_pos-boss.size/2,boss.y_pos);
    ellipse(boss.x_pos,boss.y_pos,boss.size/2,boss.size/8);
}
function drawBossProjectile()
{
    fill(255,0,0);
    ellipse(boss.projectile_xPos,boss.projectile_yPos,boss.projectile_size,boss.projectile_size);
}

function drawButton(x_pos,y_pos,pressed)
{
    noStroke();
    fill(255,0,0);

    if(!pressed)
    {
        rect(x_pos-30,y_pos-5,60,10);   
    }
    else
    {
        rect(x_pos-30,y_pos-1,60,5);   
    }
    fill(100);
    rect(x_pos-50,y_pos, 100,5);
}
//#endregion
//#region Functions to handle mechanics
function handleJump(){
        if(gameChar.airborneState == AirborneState.JUMPING)
        {
            if(gameChar.jumpStartYPosition == null)
            {
                gameChar.velocityMultiplier = 1;
                gameChar.jumpStartYPosition = gameChar.y_pos;
            }
            gameChar.velocityMultiplier-= 0.01;
            gameChar.velocityMultiplier = constrain(gameChar.velocityMultiplier,0.05,1);
            if(jumpPressed)
            {
            gameChar.y_pos-=gameChar.jumpSpeed * gameChar.velocityMultiplier;
            }
    
            if(gameChar.y_pos < gameChar.jumpStartYPosition - gameChar.jumpHeight || !jumpPressed)
            {
                console.log("jump over");
                gameChar.jumpStartYPosition = null;
                gameChar.airborneState = AirborneState.FALLING
                gameChar.velocityMultiplier = 0;
            }
        }
        else if(gameChar.airborneState == AirborneState.FALLING)
        {
            gameChar.velocityMultiplier+= 0.075;
            gameChar.velocityMultiplier = constrain(gameChar.velocityMultiplier,0,1);
            gameChar.y_pos += gameChar.gravityScale * gameChar.velocityMultiplier;
        }

        if(gameChar.airborneState == AirborneState.FALLING && gameChar.y_pos >= floorPos_y)
        {
            gameChar.airborneState = AirborneState.NONE;
        }
}
function handleCanyons(){
        if(gameChar.airborneState != AirborneState.PLUMMETING)
        {
            var playerXInCanyon = false;
            var playerYInCanyon = false;
            for(i = 0; i < canyons.length; i++)
            {
                playerXInCanyon = gameChar.x_pos >= canyons[i].x_pos && gameChar.x_pos <=  canyons[i].x_pos+ canyons[i].width
                playerYInCanyon = gameChar.y_pos >= floorPos_y
                if(playerXInCanyon && playerYInCanyon)
                {
                    currentCanyon = i;
                    gameChar.airborneState = AirborneState.PLUMMETING
                }
            }
        }
        else
        {
            //player is falling into the canyon. Keep them falling and constrain their x movement to within the canyon.
            gameChar.y_pos += gameChar.gravityScale;
            gameChar.x_pos = constrain(gameChar.x_pos,
                 canyons[currentCanyon].x_pos+10,
                  canyons[currentCanyon].x_pos+canyons[currentCanyon].width-10);

            if(gameChar.y_pos > height)
            {
                gameOver = true;
            }
        }
}
function handleBoss()
{
    if(gameOver || levelComplete){return;}
    if(!boss.projectileFired)
    {
        boss.projectileCooldownTimer--;
        if(boss.projectileCooldownTimer <= 0)
        {
            boss.projectileCooldownTimer = boss.projectileCooldown;
            boss.projectileFired = true;
            boss.offset = random(-200,350);
        }
    }

    if(Math.abs(gameChar.x_pos+boss.offset - boss.x_pos) >= boss.speed)
    {
        if(gameChar.x_pos+boss.offset > boss.x_pos)
        {
            boss.x_pos+= boss.speed;
        }   
        else if(gameChar.x_pos+boss.offset < boss.x_pos)
        {
            boss.x_pos-= boss.speed;
        }
    }   
    else
    {
        boss.x_pos = gameChar.x_pos+boss.offset;
    }

    //contrstain boss to prevent going offscreen
    boss.x_pos = constrain(boss.x_pos, -300, levelWidth+width)

    
}
function fireBossProjectile() {
    if (!boss.projectileFired) {
        boss.projectile_xPos = boss.x_pos;
        boss.projectile_yPos = boss.y_pos;
        return;
    }
    drawBossProjectile();    
    if (boss.projectileTarget == null) {
        boss.projectileTarget = { x_pos: random(gameChar.x_pos-50,gameChar.x_pos+300), y_pos: floorPos_y };
    }
    drawCrosshairs(boss.projectileTarget.x_pos,boss.projectileTarget.y_pos)
    
    // Calculate the velocity based on the target position
    var velocityX = (boss.projectileTarget.x_pos - boss.projectile_xPos) / 30;
    var velocityY = (boss.projectileTarget.y_pos - boss.projectile_yPos) / 30;
    
    // Calculate the distance to the target
    var distance = dist(boss.projectile_xPos, boss.projectile_yPos, boss.projectileTarget.x_pos, boss.projectileTarget.y_pos);
    
    // Normalize the velocity vector
    var normalizedVelocityX = velocityX / distance;
    var normalizedVelocityY = velocityY / distance;
    
    // Update the projectile position based on the normalized velocity
    boss.projectile_xPos += normalizedVelocityX * 200;
    boss.projectile_yPos += normalizedVelocityY * 200;
    
    // Calculate the distance between the projectile and its target position
    var distanceToTarget = dist(boss.projectile_xPos, boss.projectile_yPos, boss.projectileTarget.x_pos, boss.projectileTarget.y_pos);
    if(distanceToTarget < 10)
    {
        boss.projectileFired = false;
        boss.projectileTarget = null;
        boss.projectile_xPos = boss.x_pos;
        boss.projectile_yPos = boss.y_pos;
    }

    var distanceToPlayer = dist(boss.projectile_xPos, boss.projectile_yPos, gameChar.x_pos, floorPos_y);
    if(distanceToPlayer < 30)
    {
        gameOver = true;
    }

}
function handleButton()
{
    distFromButton = dist(gameChar.x_pos,gameChar.y_pos, button.x_pos, button.y_pos);
    if(distFromButton < 30 && gameChar.airborneState != AirborneState.JUMPING && gameChar.airborneState != AirborneState.FALLING)
    {
        button.pressed = true;
        levelComplete = true;
    }
}
function handleMovement() {
    if (!gameOver && !levelComplete) {
        if (gameChar.isLeft) {
            gameChar.x_pos -= gameChar.speed;
        }
        if (gameChar.isRight) {
            gameChar.x_pos += gameChar.speed;
        }
    }
}

function handlePlayerDrawing() {
    if (gameChar.isLeft && (gameChar.airborneState == AirborneState.FALLING || gameChar.airborneState == AirborneState.PLUMMETING)) {
        drawJumpingLeft();
    }
    else if (gameChar.isRight && (gameChar.airborneState == AirborneState.FALLING || gameChar.airborneState == AirborneState.PLUMMETING)) {
        drawJumpingRight();
    }
    else if (gameChar.isLeft) {
        drawWalkingLeft();
    }
    else if (gameChar.isRight) {
        drawWalkingRight();
    }
    else if (gameChar.airborneState == AirborneState.FALLING || gameChar.airborneState == AirborneState.PLUMMETING) {
        drawJumpingFrontFacing();
    }

    else {
        drawStandingFrontFacing();
    }
}
//#endregion