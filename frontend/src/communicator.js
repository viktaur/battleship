const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', () => {
    socket.send('This is the client');
});

socket.addEventListener('message', () => {
    socket.send('This is the message');
});

export default socket;