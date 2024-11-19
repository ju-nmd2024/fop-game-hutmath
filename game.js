/*
Koala sliding down a tree game

OBJECTS
Koala
Tree
Clouds/Sky - background
Ground - grass

MECHANICS
Tree moving upwards, animation; simulating that the koala is sliding downwards
||
tree stays still, koala slides towards the ground

collision with ground; deoends on speed of collision; success || fail (Koala lives || You dead)
slow down with key press 

scale example taken from https://editor.p5js.org/creativecoding/sketches/0JBTBmvGb,
as well as from a lab session
 */

let x = 685;
let y = 90;
let characterY = 90;

let velocityY = 4;
let gravity = 4;
let acceleration = 0.2;
let isMirrored = true;

let gameState = true;
let gamePlay = true;


function setup() {
    createCanvas (550, 700);
}

function character(x, y, mirrored) {
    push();
    scale(0.5);
    translate(x, y);
    //mirrored true
    if (mirrored) {
        scale(-1, 1);
    }
    // translate(-x, -y);

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
    
        //right arm
        // push();
        // beginShape();
        // vertex(x+50, y+95);
        // bezierVertex(x, y+155, x-80, y+95, x-110, y+115);
        // bezierVertex(x-120, y+205, x+10, y+185, x+50, y+145);
        // endShape();
        // pop();
    
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

function tree(x, y){
    push();
    strokeWeight(5);
    stroke(207, 135, 76);
    fill(237, 163, 102);
    rect(200, -10, 125, 780);
    pop();
}

function ground(){
    push();
    noStroke();
    fill(161, 245, 152);
    rect(0, 600, 1000, 100);
    pop();
}

function youDiedText(){
    noStroke();
    push();
    fill(52, 235, 140);
    rect(130, 155, 300, 100);
    pop();

    //text
    push();
    fill(189, 255, 221);
    textSize(50);
    text('Game Over', 150, 180, 300, 200);
    pop();
}

function playButton() {
     noStroke();
    push();
    fill(52, 235, 140);
    rect(130, 155, 300, 100);
    pop();

    //text
    push();
    fill(189, 255, 221);
    textSize(50);
    text('Play Game', 150, 180, 300, 200);
    pop();
}

//keyCode
function keyPressed() {
    console.log("Key " + keyCode + " has been pressed");
}

function draw(){
    background(199, 250, 255);
    tree();
    ground();
    notMirrored = false;

    /*gameplay button
    mousepressed within parameters, then gamestate === true,
    therefore the game is starting
    */
    if (gamePlay === true) {
    //button pressed >> the game is playing
    if (gameState === true) {

    characterY = characterY + velocityY;
    velocityY = velocityY + acceleration;

    // up-key
    if (keyIsDown(38)) {
    velocityY = velocityY - 0.7;
    }
   
    // left movement
    if (keyIsDown(37 || 65)) {
       x = 360;
       notMirrored = true;
    
    // right movement
    } else if (keyIsDown(39 || 68)) {
        x = 685;
        notMirrored = false;
    }


    if (characterY > 920) {
        gameState = false;
        console.log("you died");
    }

    if (x < 400) {
        notMirrored = true;
    }
    }

    if (gameState === false) {
        youDiedText();
        if (x < 400) {
            notMirrored = true;
        }
    }

    character(x, characterY, notMirrored);
}
}