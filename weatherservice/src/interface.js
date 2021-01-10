const grpc = require('grpc');
const path = require('path');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.resolve(__dirname + './../WeatherService.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });

const weatherServiceProto = grpc.loadPackageDefinition(packageDefinition);

module.exports = weatherServiceProto.es.eoloplant.weatherservice.WeatherService;
