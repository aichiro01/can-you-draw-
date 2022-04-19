let gamestate = "title";

let drawStart = false;

let timeLimit = 60;

let countDown;

let goR;

let goG;

let goB;

let goFill;

let goText;

function setup() {
  createCanvas(500, 500);

  frameRate(80);

  myButton = new Clickable(); //Create button

  myButton.onPress = function () {
    //When myButton is pressed
    this.color = "#00FF00"; //Change button color
    alert("Shall we begin?"); //Show an alert message
  };
  myButton.width = 250;
  myButton.height = 100;
  myButton.locate(125, 250); //Position Button
  myButton.text = "Play";       //Text of the clickable (string)
  myButton.color = "#00FF00";       //Background color of the clickable (hex number as a string)
  myButton.textSize = 30;           //Size of the text (integer)
myButton.textFont = "monospace"; //Font of the text (string)

  myButton.onPress = function(){
   gamestate = "lvl1";
}
}

function draw() {
  switch (gamestate){
      case"title":
      titleScreen();
      break;
      case"lvl1":
      play();
      break;
    case 'gameover':
      gameOver();

  }

  myButton.draw();

   fill(255);
  if (mouseIsPressed === true){
    stroke(5);
   line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

function titleScreen() {
  noStroke();
  background(58, 58, 58);
  fill(245, 245, 220)
  strokeWeight(1);
  rect(0, 0, 500, 40);
  rect(0, 460, 500, 40);
  rect(0, 0, 20, 500);
  rect(480, 0, 20, 500);
  stroke(255);
  fill(255);
  textSize(50);
  textAlign(CENTER);
  text('Can You Draw?', width*0.5, height*0.35);
}

function play() {

  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40);
  rect(0, 460, 500, 40);
  rect(0, 0, 20, 500);
  rect(480, 0, 20, 500);
  fill(58);
  rect(20, 40, 150, 420);
  rect(20, 40, 440, 150);
  rect(460, 40, 20, 420);
  rect(20, 430, 460, 30);

  fill(255, 255, 255);
  textAlign(CENTER);
  textSize(25);
  text('Draw what is shown below', width*0.5, height*0.2);
  textSize(10);
  text('You will only have 60 seconds', width*0.5, height*0.89);

  if (drawStart == false){
    background(255, 255, 255);
    drawStart = true;
  }

  let currentTime = int(millis()/ 1000);
  countDown = timeLimit - currentTime;
  textSize(10);
  text("TIMER: " + countDown, 100, 400);

  if (countDown < 0){
    countDown = 0;{
      winloss();
      gamestate = 'gameover';}
    }
  myButton.locate(-190, -350);
}

function gameOver() {
  background(goR, goG, goB);
  textAlign(CENTER);
  noStroke();
  fill(245, 245, 220)
  rect(0, 0, 500, 40);
  rect(0, 460, 500, 40);
  rect(0, 0, 20, 500);
  rect(480, 0, 20, 500);
  stroke(255);
  fill(255);
  textSize(60);
  text('Results!', width*0.5, height*0.23);
  textSize(15);
  text('How did you do?', width*0.5, height*0.35);
  textSize(100);
  text(goText, width * 0.5, height * 0.65)
}

function winloss() {
  let result = random(10);
  console.log(result);
  if (result < 5) {
    goR = 0;
    goG = 255;
    goB = 0;
    goFill = 255;
    goText = 'You Win!'
  } else if (result >=5 ) {
    goR = 255;
    goB = 0;
    goG = 0;
    goFill = 0;
    goText = 'You Lose!';  }
}
