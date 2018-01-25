var socket;

function setup(){
  createCanvas(windowWidth-20,windowHeight);
  background(0);
  for(let i = (windowWidth/4); i<windowWidth-(windowWidth/4); i+=30){
    for(let j = 0; j<windowHeight; j+=30){
      rect(i,j,20,20);
    }
  }

 socket = io.connect('http://localhost:3000');

 socket.on('serverMouse', function(data){
  fill(0,0,255);
  noStroke();
  ellipse(data.x, data.y, 15, 15);
 });
}

function draw(){
  // for(let i = 0; i<width; i+=30){
  //   for(let j = 0; j<height; j+=30){
  //     rect(i,j,30,30);
  //   }
  // }
}

function mouseDragged(){
  // for(let i = 0; i<500; i+=30){
  //   for(let j = 0; j<500; j+=30){
  //     rect(i,j,30,30);
  //   }
  // }
  fill(55);
  noStroke();
  ellipse(mouseX, mouseY, 15, 15);
}


// var socket;

// function setup(){
//   createCanvas(500,500);
//   // background(0);
//   for(let i = 0; i<500; i+=30){
//     for(let j = 0; j<500; j+=30){
//       rect(i,j,30,30);
//     }
//   }

//  socket = io.connect('http://localhost:3000');

//  socket.on('serverMouse', function(data){
//   fill(0,0,255);
//   noStroke();
//   ellipse(data.x, data.y, 15, 15);
//  });
// }

// function draw(){
//   // for(let i = 0; i<width; i+=30){
//   //   for(let j = 0; j<height; j+=30){
//   //     rect(i,j,30,30);
//   //   }
//   // }
// }

// function mouseDragged(){
//   // for(let i = 0; i<500; i+=30){
//   //   for(let j = 0; j<500; j+=30){
//   //     rect(i,j,30,30);
//   //   }
//   // }
//   fill(55);
//   noStroke();
//   ellipse(mouseX, mouseY, 15, 15);
//   sendMouse(mouseX, mouseY);
// }

// function sendMouse(xpos, ypos){
//   var data = {
//     x: xpos,
//     y: ypos
//   }

//   socket.emit('mouse', data);
// }