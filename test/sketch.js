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

  dataset = loadTable("data.csv", "header");

}

function setup() {

  // Create our canvas element, and store its reference 
  canvas = createCanvas(640, 800);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}

function draw(){

  clear();

  let pos = myMap.latLngToPixel(31.9522, 35.2332);
  fill(0);
  ellipse(pos.x, pos.y, 5, 5);
  textSize(20);
  text("Palestine", pos.x, pos.y-5);

}