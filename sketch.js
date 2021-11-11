function preload(){
  teapot=loadModel("yourMesh.stl",true);
}
  
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
}
function draw() {
  background(0);
  push();
  scale(3);
  rotateX(PI/2);
  rotateZ(frameCount*0.01);
  noStroke();
  ambientLight(100);
  directionalLight(130,200,255,150,20,50)
  model(teapot);
  pop();
  normalMaterial();
  translate(-width/2,-height/2);
  ellipse(mouseX,mouseY,100,100);
}
