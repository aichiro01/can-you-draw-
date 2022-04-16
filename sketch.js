let img;

function preload() {
  img = loadImage('title.JPG');
}


function setup() {
  createCanvas(620, 575);
  myButton = new Clickable(); //Create button
  
  myButton.onPress = function () {
    //When myButton is pressed
    this.color = "#00FF00"; //Change button color
    alert("Shall we begin?"); //Show an alert message
  };
}

function draw() {
  background(img);
  image(img, 0, 0);
  myButton.width = 250;
  myButton.height = 100;
  myButton.locate(190, 350); //Position Button
  myButton.draw(); // <- Draw the 'myButton' Clickable
  myButton.text = "Play";       //Text of the clickable (string)
  myButton.color = "#00FF00";       //Background color of the clickable (hex number as a string)
  myButton.textSize = 30;           //Size of the text (integer)
myButton.textFont = "monospace"; //Font of the text (string)
}
