// app.js

import { WebSocket } from "ws";
import { Player, Game } from "./game";
import { v4 } from "uuid";

const wss = new WebSocket.Server({ port: 8080 });
const clients = new Map<WebSocket, string>();

wss.on('connection', (socket) => {
    const id = v4();
    clients.set(socket, id);

    socket.on('message', (data) => {
        console.log('received: %s', data);
        
        handleReceive(data.toString(), socket);
    });

    socket.on("close", () => {
        clients.delete(socket);
    })

});

// console.log(wss.clients);

export function handleReceive(message: string, socket: WebSocket) {
    if (message.startsWith("EX")) {
        var response : string = "This is the server, I received a message starting with EX";
        socket.send(response);
        // console.log(response);
    }
}