let x = 760;
let characterY = 90;
cloudX = 600;
cloudY = 100;
cloudX2 = 600;
cloudY2 = 125;

//gamelogic i guess
let velocityY = 4;
let acceleration = 0.2;
let notMirrored = true;

let gameState = false;

function setup() {
    createCanvas (600, 700);
}

function character(x, y, mirrored) {
    push();
    scale(0.5);
    translate(x, y);
    //mirrored true
    if (mirrored) {
        scale(-1, 1);
    }

    //main body colours
    strokeWeight(5);
        stroke(120, 120, 110);
        fill(150, 147, 137);
    
        //ears
        push();
        ellipse(-75, -40, 75, 90);
        ellipse(75, -40, 75, 90);
        //inside ears
        push();
        noStroke();
        fill(196, 193, 183);
        ellipse(-75, -40, 45, 60);
        ellipse(75, -40, 45, 60);
        pop();
        pop();
    
        //body
        push();
        translate(+20, +120);
        rotate(1.55);
        ellipse(0, 0, 250, 135);
        //stomach
        push();
        noStroke();
        fill(196, 193, 183);
        ellipse(15, 30, 150, 60);
        pop();
        pop();
    
        //head
        push();
        ellipse(0, 0, 150);
        pop();
    
        //for facial features:
        push();
        noStroke();
    
        //eyes
        fill(25, 25, 25);
        
    //left
        push();
        translate (-30, -5);
        ellipse(0, 0, 30);
        pop();
    //right
        push();
        translate(+30, -5);
        ellipse(0, 0, 30);
        pop();
    
        //eye-shine
        push();
        fill(245, 245, 245);
    //left
        push();
        translate(-30, -5);  
        ellipse(2, -4, 15);
        ellipse(-3, 7, 5);
        pop();
    //right
        translate(+30, -5);
        ellipse(2, -4, 15);
        ellipse(-3, 7, 5);
        pop();
    
        //nose
        push();
        rotate(1.55);
        ellipse(20, 0, 50, 35);
        pop();
        pop();
    
        //mouth
        push();
        noFill();
        strokeWeight(5);
        stroke(51, 50, 45);
        translate(0, +30);
        rotate(2.3);
        arc(0, 0, 50, 50, 30, 0);
        pop();
    
        //left arm
        push();
        beginShape();
        vertex(+40, +80);
        bezierVertex(-10, +140, -90, +80, -120, +100);
        bezierVertex(-130, +190, 0, +170, +40, +130);
        //bezierVertex(310, 370, 305, 340, 290, 330);
        endShape();
        pop();
    
    
        //leg
        push();
        translate(+5, +220);
        rotate(0.4);
        ellipse(0, 0, 125, 90);
        pop();
        //leg 'extension'
        push();
        beginShape();
        vertex(-50, +190);
        bezierVertex(-65, +215, -65, +260, -25, +282);
        bezierVertex(+20, +290, +30, +260, 0, +220);
        endShape();
        pop();
    
        //fingers
        push();
        ellipse(-120, +100, 20, 15);
        ellipse(-120, +120, 20, 15);
        ellipse(-120, +110, 20, 15);
        pop();
    
        //toes
        push();
        translate(-30, +280);
        rotate(-0.4);
        ellipse(0, 0, 20, 15);
        pop();
    
        push();
        translate(-25, +280);
        rotate(-0.4);
        ellipse(0, 0, 20, 15);
        pop();
        
        push();
        translate(-15, +280);
        rotate(-0.4);
        ellipse(0, 0, 20, 15);
        pop();
    
        //body/butt fixer
        push();
        bezier(+87, +130, +100, +210, +85, +261, +34, +267);
        pop();
        pop();
}

function koalaFace(x, y) {
    push();
    translate(x, y);
    strokeWeight(5);
        stroke(120, 120, 110);
        fill(150, 147, 137);
    
        //ears
        push();
        ellipse(-75, -40, 75, 90);
        ellipse(75, -40, 75, 90);
        //inside ears
        push();
        noStroke();
        fill(196, 193, 183);
        ellipse(-75, -40, 45, 60);
        ellipse(75, -40, 45, 60);
        pop();
        pop();
    
        //head
        push();
        ellipse(0, 0, 150);
        pop();
    
        //for facial features:
        push();
        noStroke();
    
        //eyes
        fill(25, 25, 25);
        
    //left
        push();
        translate (-30, -5);
        ellipse(0, 0, 30);
        pop();
    //right
        push();
        translate(+30, -5);
        ellipse(0, 0, 30);
        pop();
    
        //eye-shine
        push();
        fill(245, 245, 245);
    //left
        push();
        translate(-30, -5);  
        ellipse(2, -4, 15);
        ellipse(-3, 7, 5);
        pop();
    //right
        translate(+30, -5);
        ellipse(2, -4, 15);
        ellipse(-3, 7, 5);
        pop();
    
        //nose
        push();
        rotate(1.55);
        ellipse(20, 0, 50, 35);
        pop();
        pop();
    
        //mouth
        push();
        noFill();
        strokeWeight(5);
        stroke(51, 50, 45);
        translate(0, +30);
        rotate(2.3);
        arc(0, 0, 50, 50, 30, 0);
        pop();
        pop();
}

function tree(x, y){
    push();
    strokeWeight(5);
    stroke(207, 135, 76);
    fill(237, 163, 102);
    rect(240, -10, 125, 780);
    pop();
}

function ground(){
    push();
    noStroke();
    fill(161, 245, 152);
    rect(0, 600, 1000, 100);
    pop();
}

function cloud(x, y) {
    push();
    noStroke();
    fill(255);
    ellipse(x, y, 250, 100);
    pop();
}

function gameLogo() {
    push();    strokeWeight(5);
    stroke(207, 135, 76);

    fill(237, 163, 102);
    ellipse(300, 180, 350, 175);

    push();
    noStroke();
    fill(207, 135, 76);
    textSize(48);
    text('Koala Climber', 150, 160, 400, 200);
    pop();
    
    pop();
}

function playButton() {
    noStroke();
    push();
    fill(52, 235, 140);
    rect(150, 300, 300, 100);
    pop();

    //text
    push();
    fill(189, 255, 221);
    textSize(50);
    text('Play Game', 175, 325, 300, 200);
    pop();
}

function gameOverText(){
    noStroke();
    push();
    fill(52, 235, 140);
    rect(150, 155, 300, 100);
    pop();

    //text
    push();
    fill(189, 255, 221);
    textSize(50);
    text('Game Over', 170, 180, 300, 200);
    pop();
}

function successText(){
    noStroke();
    push();
    fill(52, 235, 140);
    rect(150, 155, 300, 100);
    pop();

    //text
    push();
    fill(189, 255, 221);
    textSize(40);
    text('Koala is Good', 170, 190, 300, 200);
    pop();
}

function replayButton() {
    noStroke();
    push();
    fill(52, 235, 140);
    rect(150, 300, 300, 100);
    pop();

    //text
    push();
    fill(189, 255, 221);
    textSize(50);
    text('Replay', 220, 325, 300, 200);
    pop();
}

function koalaGood() {
    push();
    textSize(15);
    fill(52, 235, 140);
    text("koala made it down safely", 210, 60, 300, 50);
    pop();
}

function koalaBad() {
    push();
    fill(52, 235, 140);
    text("too fast, koala hurt his butt", 220, 60, 400, 100);
    pop();
}

//keyCode
function keyPressed() {
    console.log("Key " + keyCode + " has been pressed");
}

function mouseClicked() {    
    if (gameState === false) {
    if (mouseX > 150 && mouseX < 450 && mouseY > 300 && mouseY < 400) {
        console.log("det fungerade??!");
        clear();
  
        gameState = true;
        characterY = 90;
        velocityY = 4;
        acceleration = 0.2;
    }
    }
}

function draw() {

    background(199, 250, 255);
    playButton();
    gameLogo();
    koalaFace(300, 550);
    
    if (gameState === true) {
        background(199, 250, 255);
        random(10, 600);
        cloud(cloudX, cloudY);
            cloudX = cloudX - 0.5;
        if (cloudX < - 100) {
        cloudX = width + 100;
        }
        cloud(cloudX2, cloudY2);
        cloudX2 = cloudX2 - 1;
        if (cloudX2 < - 100) {
            cloudX2 = width + 100;
            }
                
        tree();
        ground();
        character(x, characterY, notMirrored);

        //physics - taken from demo time (flappy-ufo)
        characterY = characterY + velocityY;
        velocityY = velocityY + acceleration;

        if (x < 400) {
            notMirrored = true;
            }

        //game character movement (up/left/right) 
        // up movement
        if (keyIsDown(32)) {
        velocityY = velocityY - 0.7;
        }
   
        // left movement
        if (keyIsDown(37)) {
           x = 450;
           notMirrored = true;
    
        // right movement
        } else if (keyIsDown(39)) {
        x = 760;
        notMirrored = false;
        }
        
        if (x > 600) {
            notMirrored = false;
        }
        }

    if (characterY > 920) {
        if (x < 400) {
            notMirrored = true;
        }
        if (velocityY > 3.5) {
            gameState = false;
            background(199, 250, 255);
            koalaBad();
            gameOverText();
            replayButton();
            koalaFace(300, 675);
            console.log("too fast, koala hurt his butt");
        } else {
            gameState = false;
            background(199, 250, 255);
            koalaGood();
            successText();
            replayButton();
            koalaFace(300, 675);
            console.log("koala made it down safely");
        }
        }
}