var express = require('express');
var socket = require("socket.io");
var app = express();

app.use(express.static('public'));

var server = app.listen(process.env.PORT|| 3000);
var io = socket(server);

io.sockets.on('connection', function(socket){
  console.log("Connected to client", socket.id);

  socket.on('mouse', function(data){
    console.log("Received: 'mouse' " + data.x + " " +data.y);
    socket.broadcast.emit('serverMouse', data);//this is the event that get's broadcasted to everyone
  });
});