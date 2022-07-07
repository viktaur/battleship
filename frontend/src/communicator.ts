const socket: WebSocket = new WebSocket('ws://localhost:8080');

var isActive: boolean = false;

// when the channel is opened, send a message to the server and set the channel as active
socket.addEventListener('open', (event) => {
    socket.send("Hey I'm a client!");
    isActive = true;
});

// when a message is received, log it and pass it to the handler
socket.addEventListener('message', (event) => {
    console.log('I received the message from server: ', event.data);

    handleReceive(event.data);
});

// if the channel is closed, set it as not active
socket.addEventListener('close', (event) => {
    isActive = false;
})

const requestListener = function (req, res) {
    res.end("Your IP Addresss is: " + req.socket.localAddress);
};

// handle the message received
function handleReceive(message: string) {
    
}

// send the desired message if the socket is active
export function communicate(message: string) {
    if (isActive) { socket.send(message); }
}