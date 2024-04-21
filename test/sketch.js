const options = {

  lat: 31.9522, //latitude
  lng: 35.2332, //longitude
  zoom: 7,
  style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'

}
const mappa = new Mappa('Leaflet')

let myMap;
let canvas;
let dataset;

function preload() {

  //loading in table
  dataset = loadTable("data.csv", "header");

}

function setup() {

  //creating the canvas and map
  canvas = createCanvas(640, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

  //getting the dataset
  for (let row of dataset.rows){

    //console.log(row.get('Name'));

  }

}

function draw(){

  clear();

  //adding a point and text on the map
  let pos = myMap.latLngToPixel(31.9522, 35.2332);
  fill(0);
  ellipse(pos.x, pos.y, 5, 5);
  textSize(20);
  text("Palestine", pos.x, pos.y-5);

}