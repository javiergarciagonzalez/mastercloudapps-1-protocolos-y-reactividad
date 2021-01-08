const router = require('express').Router();

function echo(ws, req) {
    ws.on('message', function(msg) {
        console.log(msg);
    });

    ws.send('hola')
    console.log('socket', req.testing);
};

module.exports = {echo};
