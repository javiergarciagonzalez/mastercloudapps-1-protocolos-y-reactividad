const grpc = require('grpc');
const WeatherService = require('./interface');
const weatherServiceImpl = require('./weatherService');
const { isProduction, PORT } = require('./utils');

if (!isProduction) {
    // Execute example request in client.js
    require('./client');
}

const server = new grpc.Server();

server.addService(WeatherService.service, weatherServiceImpl);

server.bind(`127.0.0.1:${PORT}`, grpc.ServerCredentials.createInsecure());

console.log(`gRPC server running at http://127.0.0.1:${PORT}`);

server.start();
