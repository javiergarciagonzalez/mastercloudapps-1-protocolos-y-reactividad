import { connect } from 'amqplib';
import  amqpConsumer from './amqpConsumer.js';
import amqpData from './amqpData.js';

const { creation: queue } = amqpData.amqp.queues;
const { url } = amqpData.amqp;

let ch;

export async function connectAMQP() {
    const conn = await connect(url);
    ch = await conn.createChannel();

    amqpConsumer(ch);

    process.on('exit', () => {
        ch.close();
        console.log(`Closing rabbitmq channel`);
    });
}

export function sendMessage(message) {
    ch.sendToQueue(queue, Buffer.from(message));
}
