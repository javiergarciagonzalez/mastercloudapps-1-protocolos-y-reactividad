import amqpProducer from './../amqp/amqpProducer.js';
import EoloPlant from '../models/Eoloplant.js';

export default async function (req, res) {
    const { city } = req.body;

    const result = await EoloPlant.create({ city });
    const { id } = result;
    const data = {
        id,
        city,
        progress: 0,
        completed: false,
        planning: null
    }

    amqpProducer(JSON.stringify({ id, city }));
}
