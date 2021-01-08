const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const initDB = require('./config/db');

const server = new express();
const {connectWebSocket} = require('./config/ws');
connectWebSocket(server);

server.use(bodyParser.json());
server.use(express.static(__dirname + '/public'));
server.use('/', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

initDB();
