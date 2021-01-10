package es.eoloplant.planner.queues;

import java.util.concurrent.CompletableFuture;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import es.eoloplant.planner.dtos.TopoRequestDto;
import es.eoloplant.planner.dtos.TopoResponseDto;
import es.eoloplant.planner.models.EoloplantProgressNotification;
import es.eoloplant.planner.services.TopoService;
import es.eoloplant.planner.services.WeatherService;

@Component
public class EoloplantCreationRequestsConsumer {

    @Autowired
    private EoloplantCreationProgressNotificationsProducer AMQPproducer;

    @Autowired
    private WeatherService weatherService;

    @Autowired
    private TopoService topoService;

    @RabbitListener(queues = "eoloplantCreationRequests", ackMode = "AUTO")
    public void received(EoloplantProgressNotification eoloplantProgressNotification) {
        TopoRequestDto topoRequest = new TopoRequestDto(eoloplantProgressNotification.getCity());

        CompletableFuture<String> weatherResponse = weatherService.getWeather(eoloplantProgressNotification.getCity());
        CompletableFuture<TopoResponseDto> topoResponse = topoService.getTopographyInfo(topoRequest);
        CompletableFuture<Void> allFutures = CompletableFuture.allOf(topoResponse);

        eoloplantProgressNotification.incrementProgress();
        AMQPproducer.sendMessage(eoloplantProgressNotification);

        weatherResponse.whenCompleteAsync((response, error) -> {
            weatherResponse.join();
            eoloplantProgressNotification.updatePlanning(response);
            eoloplantProgressNotification.incrementProgress();
            AMQPproducer.sendMessage(eoloplantProgressNotification);
        });

        topoResponse.whenCompleteAsync((response, error) -> {
            weatherResponse.join();
            eoloplantProgressNotification.incrementProgress();
            eoloplantProgressNotification.updatePlanning(response.getLandscape());
            AMQPproducer.sendMessage(eoloplantProgressNotification);
        });

        allFutures.join();

        eoloplantProgressNotification.incrementProgress();
        AMQPproducer.sendMessage(eoloplantProgressNotification);

    }
}
