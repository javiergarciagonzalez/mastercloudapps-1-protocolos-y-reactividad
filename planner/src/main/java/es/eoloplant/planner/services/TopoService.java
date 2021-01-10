package es.eoloplant.planner.services;

import java.util.concurrent.CompletableFuture;

import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import es.eoloplant.planner.dtos.TopoRequestDto;
import es.eoloplant.planner.dtos.TopoResponseDto;

@Service
public class TopoService {

    private final RestTemplate restTemplate;

    public TopoService(RestTemplateBuilder restTemplateBuilder) {
        this.restTemplate = restTemplateBuilder.build();
    }

    @Async
    public CompletableFuture<TopoResponseDto> getTopographyInfo(TopoRequestDto request) {
        String url = "http://localhost:8080/api/topographicdetails/" + request.getCity();
        TopoResponseDto response = restTemplate.getForObject(url, TopoResponseDto.class);
        return CompletableFuture.completedFuture(response);
    }
}
