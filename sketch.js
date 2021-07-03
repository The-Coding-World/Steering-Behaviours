var vehicles = [];
var font;
var points;
function preload(){
  font = loadFont('font.TTF')
}
function setup() {
createCanvas(600, 300);
textFont(font);
//textSize(128);
//fill(0,255,0);
//noStroke();
//text('train',100,200);
points = font.textToPoints('train',25,200,192);
for(var i = 0;i < points.length;i++){
  var pt = points[i];
  var vehicle = new Vehicle(pt.x,pt.y);
  vehicles.push(vehicle);
  //stroke(255);
  //strokeWeight(8);
  //point(pt.x,pt.y);
}
}

function draw() {
background(00);
for(var i = 0;i < points.length;i++){
  var v = vehicles[i];
  v.behaviors();
  v.update();
  v.show();
}
}
