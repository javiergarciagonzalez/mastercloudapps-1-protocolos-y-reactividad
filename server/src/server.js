
import express from 'express';
import bodyParser from 'body-parser';

import { connectAMQP } from './amqp/amqpConnection.js';
import { connectWebSocket } from './config/ws.js';
import { initDB } from './config/db.js';
import routes from './routes/index.js';

const server = new express();

connectWebSocket(server);
connectAMQP();
initDB();

server.use(express.json({
    type: ['application/json', 'text/plain']
}));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(express.static('public'));
server.use('/', routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
