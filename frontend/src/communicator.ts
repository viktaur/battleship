const socket: WebSocket = new WebSocket('ws://localhost:8080');
const clientId: number = Math.floor(Math.random() * 999999);

socket.addEventListener('open', (event) => {
    socket.send(`Client ${clientId}`);
});

socket.addEventListener('message', (event) => {
    console.log('I received the message from server: ', event.data);

    handleReceive(event.data);
});

function send(message: string) {
    socket.send(message);
}

function handleReceive(message: string) {
    
}