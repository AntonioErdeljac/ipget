const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  console.log((req.headers['x-forwarded-for'] || '').split(',').pop())
  console.log(req.connection.remoteAddress)
  console.log(req.socket.remoteAddress)
  console.log(req.connection.socket.remoteAddress)
});

http.createServer(app).listen(process.env.PORT || 3001);