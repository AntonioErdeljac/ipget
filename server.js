const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) => {
  console.log(req.headers['X-Forwarded-For']);
});

http.createServer(app).listen(process.env.PORT || 3001);