const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const initDB = require('./config/db');

const {connectWebSocket} = require('./config/ws');

const PORT = process.env.PORT || 3000;
const server = new express();

server.use(bodyParser.json());
server.use(express.static(__dirname + '/public'));
connectWebSocket(server);
server.use('/', routes);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));

initDB();
