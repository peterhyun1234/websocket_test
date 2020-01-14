// Node.js WebSocket server script
const http = require('http');
const WebSocketServer = require('websocket').server;
const server = http.createServer();
const delay = require('delay');


server.listen(8000);
const wsServer = new WebSocketServer({
  httpServer: server
});
wsServer.on('request', function (request) {
  const connection = request.accept(null, request.origin);

  //let ip = request.header['x-fowarded-for'] || request.connection.remoteAddress;

  console.log("Client has connected");

  connection.on('message', function (message) {

    var recvMsg = message.utf8Data;

    console.log("[recvMsg: " + recvMsg + "]");

    if (recvMsg == "start") {
      //console.log("you in if");
      for (var i = 0; i < 10; i++) {
        var result = Math.floor(Math.random() * 10) + 1;
        sleep(1000);
        connection.sendUTF(result);
        console.log("Sending num: " + result);
      }
      console.log("All numbers sent");
    }
  });
  connection.on('close', function (reasonCode, description) {
    console.log('Client has disconnected.');
  });
});

function sleep(delay) {
  var start = new Date().getTime();
  while (new Date().getTime() < start + delay);
}

var express = require('express');

// mysql 연동
var mysql_db = require('./db_connection.js');
var connect = mysql_db.mysql_init();
mysql_db.mysql_open(connect);
exports.connection = connect;

var app = express();

// configuration ===============================================================
app.set('port', process.env.PORT || 3345);

app.get('/', function (req, res) {
  res.send('Root');
});

app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});