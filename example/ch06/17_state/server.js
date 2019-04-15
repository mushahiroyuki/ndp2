"use strict";

const jot = require('json-over-tcp');
//const server = jot.createServer(5000);  // Errataにより修正
const server = jot.createServer();
server.on('connection', socket => {
  socket.on('data', data => {
    console.log('Client data', data);
  });
});

server.listen(5000, () => console.log('Started'));
