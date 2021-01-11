import { appendOrUpdateCityToList } from "../template-literals/index.js";

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

function readMessageFromWS(message) {;
    const { city, progress, planning } = JSON.parse(message);
    appendOrUpdateCityToList(city, progress, planning);
}

export default function setUpWebSocket() {
    const socket = new WebSocket('ws://localhost:4000/');

    socket.onopen =  () => wsOnOpen(socket);
    socket.onmessage = ({data}) => {
        console.log(`[Message] Data received from server: ${data}`);
        readMessageFromWS(data);
    };
    socket.onclose = wsOnClose;
    socket.onerror = error => console.log(`[error] ${error.message}`);
};
