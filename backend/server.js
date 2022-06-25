"use strict";
// app.js
exports.__esModule = true;
exports.handleReceive = void 0;
var ws_1 = require("ws");
var uuidv4_1 = require("uuidv4");
var wss = new ws_1.WebSocket.Server({ port: 8080 });
var clients = new Map();
wss.on('connection', function (socket) {
    var id = (0, uuidv4_1.uuid)();
    clients.set(socket, id);
    socket.on('message', function (data) {
        console.log('received: %s', data);
        handleReceive(data.toString(), socket);
    });
    socket.on("close", function () {
        clients["delete"](socket);
    });
});
// console.log(wss.clients);
function handleReceive(message, socket) {
}
exports.handleReceive = handleReceive;
