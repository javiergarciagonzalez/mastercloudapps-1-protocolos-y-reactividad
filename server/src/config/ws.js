import WebSocket from 'ws';
let wss;
let storedWs;

export function connectWebSocket() {

    wss = new WebSocket.Server({ port: 4000 });
    wss.on('connection', function connection(ws, req) {

        storedWs = ws;

        console.log('WebSocket connected', storedWs);

        ws.on('message', function (msg) {
            console.log('Message received:' + msg);
        });

    });
}

export function sendWSMessage(message) {
    storedWs.send(message.data)
}
