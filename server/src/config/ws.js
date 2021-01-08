const WebSocket = require('ws');
let wss;

function connectWebSocket() {

    wss = new WebSocket.Server({ port: 4000 });
    wss.on('connection', function connection(ws, req) {

        console.log('User connected');

        ws.on('message', function (msg) {
            console.log('Message received:' + msg);
        });

        ws.send('')

        setInterval(()=>{

            ws.send("Browser message");

        },1000);

    });
}

function sendWSMessage(message) {
    wss.on('connection', ws => {
        ws.send(message)
    })
}


module.exports = {connectWebSocket, sendWSMessage};


