// app.js

const WebSocket = require('ws');

// const http = require('http').createServer();
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (socket) => {
    socket.on('message', (data) => {
        console.log('received: %s', data);
    });

    socket.send('This is the server');
});