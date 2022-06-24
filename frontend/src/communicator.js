const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', (event) => {
    socket.send('This is the client');
});

socket.addEventListener('message', (event) => {
    console.log('I received the message from server: ', event.data);

    if (event.data === "Im glad you touched play, client!") {
        socket.send("The client is very very glad. end")
    }
});

export default socket;