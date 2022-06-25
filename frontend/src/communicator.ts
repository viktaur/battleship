const socket: WebSocket = new WebSocket('ws://localhost:8080');

var isActive: boolean = false;

socket.addEventListener('open', (event) => {
    socket.send("Hey I'm a client!");
    isActive = true;
});

socket.addEventListener('message', (event) => {
    console.log('I received the message from server: ', event.data);

    handleReceive(event.data);
});

socket.addEventListener('close', (event) => {
    isActive = false;
})

const requestListener = function (req, res) {
    res.end("Your IP Addresss is: " + req.socket.localAddress);
};

function handleReceive(message: string) {
    
}

export function communicate(message: string) {
    if (isActive) { socket.send(message); }
}