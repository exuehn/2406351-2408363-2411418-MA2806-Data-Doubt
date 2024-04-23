
let scale = 3; //sets the scale of the graphs

let dataset1;
let dataset2;
let dataset3;
let dataset4;

//variables for the first tabs
var tabX1 = 0;
var tabY1 = 0;
var tabW1 = 50;
var tabH1 = 155;

//variables for the second tab
var tabX2 = 0;
var tabY2 = 155;
var tabW2 = 50;
var tabH2 = 155;

//variables for the third tab
var tabX3 = 0;
var tabY3 = 310;
var tabW3 = 50;
var tabH3 = 155;

//variables for the fourth tab
var tabX4 = 0;
var tabY4 = 465;
var tabW4 = 50;
var tabH4 = 155;

var radius = 10; //radius of the lollipop chart circle
var iconsize = 40;

var expX = 70; //x of the info box
var expY = 50; //y of the info box
var expW = 150; //width of the info box
var expH = 100; //height of the infor box;

let g1 = false; //boolean for making all graphs but the first dissapear
let g2 = false; //boolean for the second graph
let g3 = false; //boolean for the third graph
let g4 = false; //boolean for the thir graph

//variables to display the info text
var subhead;

var hideFirst; //display text for B'Tselem
var hideFirstSub;
var hideSecond; //dispaly text for I-P timeline
var hideSecondSub;
var hideThird; //display text for Kaggle
var hideThirdSub;
var hideFourth; //display text for 
var hideFourthSub;


//preloads the data
function preload() {
  //datasets
  dataset1 = loadTable("B'Tselem.csv", "header"); //loads up the data from a csv file
  dataset2 = loadTable("Kaggle.csv", "header");
  dataset3 = loadTable("HDX.csv", "header");
  dataset4 = loadTable("Palestinian Deaths.csv", "header");

  //images
  baby = loadImage("./icons/baby.png");
  child = loadImage("./icons/child.png");
  teen = loadImage("./icons/teen.png");
  adult = loadImage("./icons/adult2.png");
  old = loadImage("./icons/old.png");
  chair = loadImage("./icons/veryold.png");
}

//runs once when the page is loaded
function setup() {
  var canvas = createCanvas(windowWidth - 100, 670); //width in pixels, height in pixels

  //1050, 720

  canvas.parent('canvasHolder');

  colorMode(HSB);

  ellipseMode(CENTER);

  imageMode(CENTER);

  textFont('Arial');

  //call on classes for hidden text
  hideSubhead = document.getElementsByClassName("subhead");

  hideFirst = document.getElementsByClassName('hideFirst');
  hideFirstSub = document.getElementsByClassName("hideFirstSub");

  hideSecond = document.getElementsByClassName('hideSecond');
  hideSecondSub = document.getElementsByClassName("hideSecondSub");

  hideThird = document.getElementsByClassName('hideThird');
  hideThirdSub = document.getElementsByClassName("hideThirdSub");

  hideFourth = document.getElementsByClassName('hideFourth');
  hideFourthSub = document.getElementsByClassName("hideFourthSub");

}

function windowResized() {
  resizeCanvas(windowWidth - 100, 670);
}

//loops the actions infinetly
function draw() {

  background(235, 0, 50);

  stroke(235, 20, 15);
  line(0, height, width, height);

  //tabs for the graphs
  tab1();
  tab2();
  tab3();
  tab4();

  //the actual graphs
  graph1();
  graph2();
  graph3();

  push(); //separating graph so that strokeweight doesn't apply to all
  graph4(3);
  graph4(4);
  pop();

  //tab to open all graphs
  if ((mouseX > 0) && (mouseX < 0 + windowWidth) && (mouseY > 620) && (mouseY < 620 + 50)) {
    fill(350, 0, 100);
    noStroke();
  } else {
    fill(235, 20, 15);
    noStroke();
  }
  rect(0, 620, windowWidth, 50);


}

function tab1() {

  //makes it so that if you hover over it, the colour changes
  if ((mouseX > tabX1) && (mouseX < tabX1 + tabW1) && (mouseY > tabY1) && (mouseY < tabY1 + tabH1)) {
    fill(350, 0, 100);
  } else {
    fill(235, 20, 15);
  }
  noStroke();
  rect(tabX1, tabY1, tabW1, tabH1);

}

function graph1() {

  for (let row = 0; row < dataset1.getRowCount(); row++) {
    let ageIndex = dataset1.getNum(row, 2);
    let age = dataset1.getNum(row, 0);
    let amount = dataset1.getNum(row, 1);
    let y = height - 50; //y coordinates of the points
    let x = 50 + ageIndex * 1.5; //x coordinates of the points
    let h = y - amount - 10; //height of the lillipops

    var d = dist(mouseX, mouseY, x, h); //variable to track mouse location relative to the circle

    //makes it so that if you hover over it, the colour changes
    if (d < radius && g1 == true && ageIndex == 10) { //baby icon hover
      noFill();
      stroke(350, 0, 100);
      line(x, y, x, h);
      image(baby, x, h, iconsize * 1.5, iconsize * 1.5);
    } else if (d < radius && g1 == true && ageIndex >= 20 && ageIndex <= 130) { //child icon hover
      noFill();
      stroke(350, 0, 100);
      line(x, y, x, h);
      image(child, x, h, iconsize * 1.5, iconsize * 1.5);
    } else if (d < radius && g1 == true && ageIndex >= 140 && ageIndex <= 200) { //teen icon hover
      noFill();
      stroke(350, 0, 100);
      line(x, y, x, h);
      image(teen, x, h, iconsize * 1.5, iconsize * 1.5);
    } else if (d < radius && g1 == true && ageIndex >= 210 && ageIndex <= 610) { //adult icon hover
      noFill();
      stroke(350, 0, 100);
      line(x, y, x, h);
      image(adult, x, h, iconsize * 1.5, iconsize * 1.5);
    } else if (d < radius && g1 == true && ageIndex >= 620 && ageIndex <= 950) { //old icon hover
      noFill();
      stroke(350, 0, 100);
      line(x, y, x, h);
      image(old, x, h, iconsize * 1.5, iconsize * 1.5);
    } else if (d < radius && g1 == true && ageIndex >= 980) { //very old icon hover
      noFill();
      stroke(350, 0, 100);
      line(x, y, x, h);
      image(chair, x, h, iconsize * 1.5, iconsize * 1.5);
    } else if ((mouseX > tabX1) && (mouseX < tabX1 + tabW1) && (mouseY > tabY1) && (mouseY < tabY1 + tabH1)) {
      fill(350, 0, 100);
      stroke(350, 0, 100);
      ellipse(x, h, radius, radius);
      line(x, y, x, h);
    } else if ((mouseX > tabX2) && (mouseX < tabX2 + tabW2) && (mouseY > tabY2) && (mouseY < tabY2 + tabH2)) {
      noFill();
    } else if ((mouseX > tabX3) && (mouseX < tabX3 + tabW3) && (mouseY > tabY3) && (mouseY < tabY3 + tabH3)) {
      noFill();
      noStroke();
    } else if ((mouseX > tabX4) && (mouseX < tabX4 + tabW4) && (mouseY > tabY4) && (mouseY < tabY4 + tabH4)) {
      noFill();
      noStroke();
    } else if (g2 == true || g3 == true || g4 == true) {
      noFill();
    } else if (g1 == true && ageIndex == 10) { //baby icon
      noFill();
      stroke(235, 20, 15);
      line(x, y, x, h);
      image(baby, x, h, iconsize, iconsize);
    } else if (g1 == true && ageIndex >= 20 && ageIndex <= 130) { //child icon
      noFill();
      stroke(235, 20, 15);
      line(x, y, x, h);
      image(child, x, h, iconsize, iconsize);
    } else if (g1 == true && ageIndex >= 140 && ageIndex <= 200) { //teen icon
      noFill();
      stroke(235, 20, 15);
      line(x, y, x, h);
      image(teen, x, h, iconsize, iconsize);
    } else if (g1 == true && ageIndex >= 210 && ageIndex <= 610) { //adult icon
      noFill();
      stroke(235, 20, 15);
      line(x, y, x, h);
      image(adult, x, h, iconsize, iconsize);
    } else if (g1 == true && ageIndex >= 620 && ageIndex <= 950) { //old icon
      noFill();
      stroke(235, 20, 15);
      line(x, y, x, h);
      image(old, x, h, iconsize, iconsize);
    } else if (g1 == true && ageIndex >= 980) { //very old icon
      noFill();
      stroke(235, 20, 15);
      line(x, y, x, h);
      image(chair, x, h, iconsize, iconsize);
    } else {
      fill(235, 20, 15);
      stroke(235, 20, 15);
      ellipse(x, h, radius, radius);
      line(x, y, x, h);
    }

    if (d < radius && g1 == true) { //info box
      fill(350, 0, 100);
      stroke(350, 0, 100);
      rect(expX, expY, expW, expH);

      fill(235, 20, 15);
      stroke(235, 20, 15);
      text('Age: ' + age, expX + 10, expY + 20, expW, expH);
      text('Casualties: ' + amount, expX + 10, expY + 60, expW, expH);
      textSize(16);
    }

  }
}

function tab2() {

  if ((mouseX > tabX2) && (mouseX < tabX2 + tabW2) && (mouseY > tabY2) && (mouseY < tabY2 + tabH2)) {
    fill(350, 0, 100);
  } else {
    fill(235, 20, 15);
  }
  noStroke();
  rect(tabX2, tabY2, tabW2, tabH2);

}

function graph2() {

  for (let row = 0; row < dataset4.getRowCount(); row++) {
    let dayIndex = dataset4.getNum(row, 6);
    let date = dataset4.getString(row, 0);
    let value = dataset4.getNum(row, 1);
    let y = height - 50;
    let x = 50 + dayIndex; //0.373
    let h = value * 3; //no 'y-' as the rectangles are drawn from the upper left corner.

    if ((mouseX > x) && (mouseX < x + 10) && (mouseY > y - h) && (mouseY < windowWidth) && g2 == true) {
      fill(350, 0, 100);
      stroke(350, 0, 100);
    } else if ((mouseX > tabX2) && (mouseX < tabX2 + tabW2) && (mouseY > tabY2) && (mouseY < tabY2 + tabH2)) {
      fill(350, 0, 100);
      stroke(350, 0, 100);
    } else if ((mouseX > tabX1) && (mouseX < tabX1 + tabW1) && (mouseY > tabY1) && (mouseY < tabY1 + tabH1)) {
      noFill();
      noStroke();
    } else if ((mouseX > tabX3) && (mouseX < tabX3 + tabW3) && (mouseY > tabY3) && (mouseY < tabY3 + tabH3)) {
      noFill();
      noStroke();
    } else if ((mouseX > tabX4) && (mouseX < tabX4 + tabW4) && (mouseY > tabY4) && (mouseY < tabY4 + tabH4)) {
      noFill();
      noStroke();
    } else if (g1 == true || g3 == true || g4 == true) {
      noFill();
      noStroke();
    } else {
      fill(235, 20, 15);
      stroke(235, 20, 15);
    }
    rect(x, y, 5, -h);

    if ((mouseX > x) && (mouseX < x + 10) && (mouseY > y - h) && (mouseY < windowWidth) && g2 == true) {
      fill(350, 0, 100);
      stroke(350, 0, 100);
      rect(expX, expY, expW, expH);

      fill(235, 20, 15);
      stroke(235, 20, 15);
      text('Month: ' + date, expX + 10, expY + 20, expW, expH);
      text('Casualties: ' + value, expX + 10, expY + 60, expW, expH);
      textSize(16);
    }

  }

}

function tab3() {

  //makes it so that if you hover over it, the colour changes
  if ((mouseX > tabX3) && (mouseX < tabX3 + tabW3) && (mouseY > tabY3) && (mouseY < tabY3 + tabH3)) {
    fill(350, 0, 100);
  } else {
    fill(235, 20, 15);
  }
  noStroke();
  rect(tabX3, tabY3, tabW3, tabH3);

}

function graph3() {

  for (let row = 0; row < dataset2.getRowCount(); row++) {
    let yearIndex = dataset2.getNum(row, 4);
    let date = dataset2.getString(row, 0);
    let value = dataset2.getNum(row, 1);
    let total = dataset2.getNum(row, 1);
    let pal = dataset2.getNum(row, 2);
    let is = dataset2.getNum(row, 3);
    let y = height - 50; //y coordinates of the points
    let x = 50 + yearIndex * 7; //x coordinates of the points
    let h = y - value * 0.2; //height of the lillipops
    let r = total * 0.1; //radius of total
    let r2 = pal * 0.1; //radius of palestine
    let r3 = is * 0.1; // radius of israel

    var d = dist(mouseX, mouseY, x, h); //variable to track mouse location relative to the circle

    //makes it so that if you hover over it, the colour changes
    if (d < r && g3 == true) {
      push();
      fill(350, 0, 100);
      stroke(350, 0, 100);
      ellipse(x, h, r, r);
      pop();

      push();
      fill(235, 20, 15);
      stroke(235, 20, 15);
      ellipse(x, h, r2, r2);
      pop();

      push();
      fill(235, 0, 50);
      stroke(235, 0, 50);
      ellipse(x, h, r3, r3);
      pop();

    } else if ((mouseX > tabX3) && (mouseX < tabX3 + tabW3) && (mouseY > tabY3) && (mouseY < tabY3 + tabH3)) {
      fill(350, 0, 100);
      stroke(350, 0, 100);
      ellipse(x, h, r, r);
    } else if ((mouseX > tabX2) && (mouseX < tabX2 + tabW2) && (mouseY > tabY2) && (mouseY < tabY2 + tabH2)) {
      noFill();
      noStroke();
    } else if ((mouseX > tabX1) && (mouseX < tabX1 + tabW1) && (mouseY > tabY1) && (mouseY < tabY1 + tabH1)) {
      noFill();
      noStroke();
    } else if ((mouseX > tabX4) && (mouseX < tabX4 + tabW4) && (mouseY > tabY4) && (mouseY < tabY4 + tabH4)) {
      noFill();
      noStroke();
    } else if (g2 == true || g1 == true || g4 == true) {
      noFill();
      noStroke();
    } else if (g3 == true) {

      push();
      fill(235, 20, 15);
      stroke(235, 20, 15);
      ellipse(x, h, r, r);
      pop();

      push();
      fill(350, 0, 100);
      stroke(350, 0, 100);
      ellipse(x, h, r2, r2);
      pop();

      push();
      fill(235, 0, 50);
      stroke(235, 0, 50);
      ellipse(x, h, r3, r3);
      pop();

    } else {
      fill(235, 20, 15);
      stroke(235, 20, 15);
      ellipse(x, h, r, r);
    }


    if (d < r && g3 == true) {
      fill(350, 0, 100);
      stroke(350, 0, 100);
      rect(expX, expY, 240, 170);

      fill(235, 20, 15);
      stroke(235, 20, 15);
      text('Year: ' + date, expX + 10, expY + 20, 240, expH);
      text('Outer Ring - Total: ' + total, expX + 10, expY + 60, 240, expH);
      text('Middle Ring - Palestinian: ' + pal, expX + 10, expY + 100, 240, expH);
      text('Center Ring - Israeli: ' + is, expX + 10, expY + 140, 240, expH);
      textSize(16);
    }

  }
}

function tab4() {

  //makes it so that if you hover over it, the colour changes
  if ((mouseX > tabX4) && (mouseX < tabX4 + tabW4) && (mouseY > tabY4) && (mouseY < tabY4 + tabH4)) {
    fill(350, 0, 100);
  } else {
    fill(235, 20, 15);
  }
  noStroke();
  rect(tabX4, tabY4, tabW4, tabH4);
}

function graph4(column) {

  beginShape();
  for (let row = 0; row < dataset3.getRowCount(); row++) {
    let emissions = dataset3.getNum(row, column);
    let scaledEmissions = emissions * 0.08;
    let x = 50 + (row * 15);
    let y = height - 50;
    vertex(x, y - scaledEmissions);
    strokeWeight(5);
    noFill();

    var lineD = dist(mouseX, mouseY, x, y - scaledEmissions);

    if ((mouseX > tabX4) && (mouseX < tabX4 + tabW4) && (mouseY > tabY4) && (mouseY < tabY4 + tabH4)) {
      stroke(350, 0, 100);
    } else if ((mouseX > tabX2) && (mouseX < tabX2 + tabW2) && (mouseY > tabY2) && (mouseY < tabY2 + tabH2)) {
      noStroke();
    } else if ((mouseX > tabX1) && (mouseX < tabX1 + tabW1) && (mouseY > tabY1) && (mouseY < tabY1 + tabH1)) {
      noStroke();
    } else if ((mouseX > tabX3) && (mouseX < tabX3 + tabW3) && (mouseY > tabY3) && (mouseY < tabY3 + tabH3)) {
      noStroke();
    } else if (g2 == true || g1 == true || g3 == true) {
      noStroke();
    } else if (g4 == true && column == 3) {
      stroke(350, 0, 100);
    } else {
      stroke(235, 20, 15);
    }
  }

  endShape(OPEN);

  if (g4 == true) {
    strokeWeight(1);
    fill(350, 0, 100);
    stroke(350, 0, 100);
    rect(expX, expY, 170, 170);

    fill(235, 20, 15);
    stroke(235, 20, 15);
    text('Oct 2023 - Mar 2024', expX + 10, expY + 20, 170, expH);
    text('White: Daily Injured', expX + 10, expY + 60, 170, expH);
    text('Black: Daily Killed', expX + 10, expY + 100, 170, expH);
    text('Peak = 7,510', expX + 10, expY + 140, 170, 170);
    textSize(16);
  }

}

function mouseClicked() {

  //defines when the boolean will be true - when the mouse is clicked while inside the tabs, the boolean is switched
  if ((mouseX > tabX1) && (mouseX < tabX1 + tabW1) && (mouseY > tabY1) && (mouseY < tabY1 + tabH1)) { //display first graph
    g1 = true;
    g2 = false;
    g3 = false;
    g4 = false;

    hideSubhead[0].style.display = "none";

    hideFirstSub[0].style.display = "block";
    for (let i = 0; i < hideFirst.length; i++) {
      hideFirst[i].style.display = "block";
    }

    hideSecondSub[0].style.display = "none";
    for (let i = 0; i < hideSecond.length; i++) {
      hideSecond[i].style.display = "none";
    }

    hideThirdSub[0].style.display = "none";
    for (let i = 0; i < hideThird.length; i++) {
      hideThird[i].style.display = "none";
    }

    hideFourthSub[0].style.display = "none";
    for (let i = 0; i < hideFourth.length; i++) {
      hideFourth[i].style.display = "none";
    }

  } else if ((mouseX > tabX2) && (mouseX < tabX2 + tabW2) && (mouseY > tabY2) && (mouseY < tabY2 + tabH2)) { //display second graph
    g2 = true;
    g1 = false;
    g3 = false;
    g4 = false;

    hideSubhead[0].style.display = "none";

    hideFirstSub[0].style.display = "none";
    for (let i = 0; i < hideFirst.length; i++) {
      hideFirst[i].style.display = "none";
    }

    hideSecondSub[0].style.display = "block";
    for (let i = 0; i < hideSecond.length; i++) {
      hideSecond[i].style.display = "block";
    }

    hideThirdSub[0].style.display = "none";
    for (let i = 0; i < hideThird.length; i++) {
      hideThird[i].style.display = "none";
    }

    hideFourthSub[0].style.display = "none";
    for (let i = 0; i < hideFourth.length; i++) {
      hideFourth[i].style.display = "none";
    }

  } else if ((mouseX > tabX3) && (mouseX < tabX3 + tabW3) && (mouseY > tabY3) && (mouseY < tabY3 + tabH3)) { //display third graph
    g3 = true;
    g1 = false;
    g2 = false;
    g4 = false;

    hideSubhead[0].style.display = "none";

    hideFirstSub[0].style.display = "none";
    for (let i = 0; i < hideFirst.length; i++) {
      hideFirst[i].style.display = "none";
    }

    hideSecondSub[0].style.display = "none";
    for (let i = 0; i < hideSecond.length; i++) {
      hideSecond[i].style.display = "none";
    }

    hideThirdSub[0].style.display = "block";
    for (let i = 0; i < hideThird.length; i++) {
      hideThird[i].style.display = "block";
    }

    hideFourthSub[0].style.display = "none";
    for (let i = 0; i < hideFourth.length; i++) {
      hideFourth[i].style.display = "none";
    }

  } else if ((mouseX > tabX4) && (mouseX < tabX4 + tabW4) && (mouseY > tabY4) && (mouseY < tabY4 + tabH4)) { //display fourth graph
    g4 = true;
    g1 = false;
    g2 = false;
    g3 = false;

    hideSubhead[0].style.display = "none";

    hideFirstSub[0].style.display = "none";
    for (let i = 0; i < hideFirst.length; i++) {
      hideFirst[i].style.display = "none";
    }

    hideSecondSub[0].style.display = "none";
    for (let i = 0; i < hideSecond.length; i++) {
      hideSecond[i].style.display = "none";
    }

    hideThirdSub[0].style.display = "none";
    for (let i = 0; i < hideThird.length; i++) {
      hideThird[i].style.display = "none";
    }

    hideFourthSub[0].style.display = "block";
    for (let i = 0; i < hideFourth.length; i++) {
      hideFourth[i].style.display = "block";
    }

  } else if ((mouseX > 0) && (mouseX < 0 + windowWidth) && (mouseY > 620) && (mouseY < 620 + 50)) { //display all
    g1 = false;
    g2 = false;
    g3 = false;
    g4 = false;

    hideSubhead[0].style.display = "block";

    hideFirstSub[0].style.display = "none";
    for (let i = 0; i < hideFirst.length; i++) {
      hideFirst[i].style.display = "none";
    }

    hideSecondSub[0].style.display = "none";
    for (let i = 0; i < hideSecond.length; i++) {
      hideSecond[i].style.display = "none";
    }

    hideThirdSub[0].style.display = "none";
    for (let i = 0; i < hideThird.length; i++) {
      hideThird[i].style.display = "none";
    }

    hideFourthSub[0].style.display = "none";
    for (let i = 0; i < hideFourth.length; i++) {
      hideFourth[i].style.display = "none";
    }

  }

}