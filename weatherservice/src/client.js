// THIS FILE IS HERE FOR TESTING PURPOSE ONLY.
// Planner service will call this Weather service.
const grpc = require('grpc');
const WeatherService = require('./interface');
const { PORT } = require('./utils');

const client = new WeatherService(`localhost:${PORT}`, grpc.credentials.createInsecure());

client.GetWeather({city: 'Naboo'}, (error, response) => {

    if(error){
        return console.error(error);
    }

    console.log(`Response: ${JSON.stringify(response)}`);

});
