var socket;

function setup(){
  createCanvas(500,500);
  background(0);

 socket = io.connect('http://localhost:3000');

 socket.on('serverMouse', function(data){
  fill(0,0,255);
  noStroke();
  ellipse(data.x, data.y, 15, 15);
 });
}

function draw(){
  //nothing here
}

function mouseDragged(){
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 15, 15);
  sendMouse(mouseX, mouseY);
}

function sendMouse(xpos, ypos){
  var data = {
    x: xpos,
    y: ypos
  }

  socket.emit('mouse', data);
}