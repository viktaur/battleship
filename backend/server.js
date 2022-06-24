// app.js

const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (socket) => {
    socket.on('message', (data) => {
        console.log('received: %s', data);
        
        if (data.toString() === "i touched play") {
            var themessage = "Im glad you touched play, client!";
            socket.send(themessage);
            console.log("Sending: ", themessage);
        }
    });

    socket.send('This is the server');
});