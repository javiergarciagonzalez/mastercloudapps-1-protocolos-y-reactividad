import { sendMessage } from './amqpConnection.js';

export default function amqpProducer(message) {
    sendMessage(message);
}
