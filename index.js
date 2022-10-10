const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

/**
 * 路由
 */
//http://172.20.10.2:8085/
app.get('/', (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
});

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css');
});

app.get('/reset.css', (req, res) => {
    res.sendFile(__dirname + '/reset.css');
});

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/animation.css');
});

/**
 * 監聽 port
 */

server.listen(8085, () => {
    console.log('listening on *:8085');
});