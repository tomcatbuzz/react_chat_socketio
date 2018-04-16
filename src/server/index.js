const express = require('express');
const path = require ('path');

const app = express()
const server = require('http').Server(app)

const io = module.exports.io = require('socket.io')(server)



const port = process.env.PORT || 8080;

const SocketManager = require('./SocketManager')

app.use(express.static(path.join(__dirname, '/../../build')))

io.on('connection', SocketManager)

server.listen(port, () => {
  if (port === 8080) console.log(`Server started on http://localhost:${port}`);
  else console.log(`Server started on ${port}`);
});
