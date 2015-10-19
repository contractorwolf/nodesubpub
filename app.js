
var application_root = __dirname;
var express = require("express");
var http = require("http");


// app initialization
var port = process.env.port || 4242;
var app = express();
var server = http.createServer(app);
var socketio = require('socket.io');

var io = socketio.listen(server);

io.set("transports", ["xhr-polling","websocket", "polling"]); 
io.set("polling duration", 10); 
io.set('log level', 1);

console.log("app started");

io.on('connection', function(socket){
  console.log('a user connected');
  io.sockets.emit('message', "client, thank you for connecting");
});


//start server
server.listen(port);