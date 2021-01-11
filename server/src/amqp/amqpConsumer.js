import amqpData from './amqpData.js';
import { updateEoloplantStatus } from '../models/Eoloplant.js';

const { progress: queue } = amqpData.amqp.queues;

export default function amqpConsumer(ch) {
    ch.consume(queue, async (message) => {

    console.log('Consuming message: ', message.content.toString());
    const parsedMessage = message.content.toString();

    // Remove baclslash and initial/ending double quotes to be able to parse the message
    const cleanMessage = parsedMessage.replace(/\\/g, '').slice(1,-1);

    const eoloplant = JSON.parse(cleanMessage);

    await updateEoloplantStatus(eoloplant);

    }, {
        noAck: true
    });
}
