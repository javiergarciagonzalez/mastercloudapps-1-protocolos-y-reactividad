const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;

const routes = require('./routes');

const server = new express();

server.use(bodyParser.json());
server.use(express.static(__dirname + '/public'));

server.use('/', routes);

server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
