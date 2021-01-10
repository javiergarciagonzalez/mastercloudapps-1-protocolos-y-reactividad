package es.eoloplant.planner.services;

import java.util.concurrent.CompletableFuture;

import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import es.eoloplant.weatherservice.GetWeatherRequest;
import es.eoloplant.weatherservice.GetWeatherResponse;
import es.eoloplant.weatherservice.WeatherServiceGrpc.WeatherServiceBlockingStub;
import net.devh.boot.grpc.client.inject.GrpcClient;

@Service
public class WeatherService {

    @GrpcClient("weatherClient")
    private WeatherServiceBlockingStub client;

    @Async
    public CompletableFuture<String> getWeather(String city) {

        GetWeatherRequest request = GetWeatherRequest.newBuilder()
                .setCity(city)
                .build();

        GetWeatherResponse response = this.client.getWeather(request);

        return CompletableFuture.completedFuture(response.getWeather());
    }

}
