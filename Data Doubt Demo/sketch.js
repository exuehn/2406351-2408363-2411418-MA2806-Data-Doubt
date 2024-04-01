
 let scale = 3; //sets the scale of the graphs

 let dataset1; 

 //variables for the tabs
 var tabX = 0;
 var tabY = 400;
 var tabW = 50;
 var tabH = 50;

 var radius = 10; //radius of the lollipop chart circle

 let g1 = false; //boolean for making all graphs but the first dissapear
 let g2 = false; //boolean for the second graph

 //preloads the data
 function preload(){
   dataset1 = loadTable("parties.csv", "header"); //loads up the data from a csv file
 }
 
 //runs once when the page is loaded
 function setup() {
   createCanvas(700, 500); //width in pixels, height in pixels
  
   colorMode(HSB);

   ellipseMode(CENTER);
   

  }
 
 //loops the actions infinetly
 function draw() {

   background(340, 100, 100);

   stroke(350, 100, 50);
   line(0, height-100, width, height-100);

   //tabs for the graphs
   tab1();
   tab2();

   //the actual graphs
   graph2();
   graph1();

   //testing rectangle
   if((mouseX>100) && (mouseX<100+50) && (mouseY>100) && (mouseY<100+50)){
    fill(350, 100, 50);
   }else{
    fill(350, 0, 100);
   }
   rect(100, 100, 50, 50);
   

 }

 function tab1(){

  //makes it so that if you hover over it, the colour changes
  if((mouseX>tabX) && (mouseX<tabX+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
   fill(350, 0, 100);
  }else{
   fill(350, 100, 50);
  }
  noStroke();
  rect(tabX, tabY, tabW, tabH);

 }

 function graph1(){

   for(let row=0; row<dataset1.getRowCount(); row++){
    let dayIndex = dataset1.getNum(row, 1);
    let date = dataset1.getString(row, 0);
    let value = dataset1.getNum(row, 2);
    let y = height-100; //y coordinates of the points
    let x = dayIndex * scale; //x coordinates of the points
    let h = y-value; //height of the lillipops

    var d = dist(mouseX, mouseY, x, h); //variable to track mouse location relative to the circle

    //makes it so that if you hover over it, the colour changes
    if(d < radius){
      fill(350, 0, 100);
      stroke(350, 0, 100);
    }else if((mouseX>tabX) && (mouseX<tabX+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
      fill(350, 0, 100);
      stroke(350, 0, 100);
    }else if((mouseX>50) && (mouseX<50+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
      noFill();
    }else if(g2 == true){
      noFill();
    }else{
      fill(350, 100, 50);
      stroke(350, 100, 50);
    }
    ellipse(x, h, radius, radius);
    line(x, y, x, h);

  }
 }

 function tab2(){

  if((mouseX>50) && (mouseX<50+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
   fill(350, 0, 100);
  }else{
   fill(350, 100, 50);
  }
  noStroke();
  rect(50, tabY, tabW, tabH);

 }

 function graph2(){

  for(let row=0; row<dataset1.getRowCount(); row++){
    let dayIndex = dataset1.getNum(row, 1);
    let date = dataset1.getString(row, 0);
    let value = dataset1.getNum(row, 2);
    let y = height-100;
    let x = dayIndex * scale;
    let h = value; //no 'y-' as the rectangles are drawn from the upper left corner.

    if((mouseX>x) && (mouseX<x+10) && (mouseY>y-h) && (mouseY<400)){
      fill(350, 0, 100);
    }else if((mouseX>50) && (mouseX<50+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
      fill(350, 0, 100);
    }else if((mouseX>tabX) && (mouseX<tabX+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
      noFill();
    }else if(g1 == true){
      noFill();
    }else{
      fill(350, 100, 50);
    }
    rect(x, y, 10, -h);
  }

 }

 function mouseClicked(){

  //defines when the boolean will be true - when the mouse is clicked while inside the tabs, the boolean is switched
  if((mouseX>tabX) && (mouseX<tabX+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
    g1 = true;
    g2 = false;
  }else if((mouseX>50) && (mouseX<50+tabW) && (mouseY>tabY) && (mouseY<tabY+tabH)){
    g2 = true;
    g1 = false;
  }else if((mouseX>100) && (mouseX<100+50) && (mouseY>100) && (mouseY<100+50)){
    g1 = false;
    g2 = false;
  }

 }