function wsOnClose(event) {
    if (!event.wasClean) {
        console.log('[close] Connection died');
        return;
    }
    console.log(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
}

function wsOnOpen(socket) {
    const message = 'WebSocket connection established';
    console.log(message);
    socket.send(message);
}

export default function setUpWebSocket() {
    const socket = new WebSocket('ws://localhost:8080/');

    socket.onopen =  () => wsOnOpen(socket);
    socket.onmessage =  ({data}) => console.log(`[Message] Data received from server: ${data}`);
    socket.onclose = wsOnClose;
    socket.onerror = error => console.log(`[error] ${error.message}`);
};
