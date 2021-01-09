package es.eoloplant.service;

import java.time.Duration;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import es.eoloplant.model.City;
import es.eoloplant.repository.CityRepository;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Service
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public Mono<City> getCity(String id) {
        return this.cityRepository.findByIdIgnoreCase(id)
                .delayElement(Duration.ofMillis(new Random().nextInt(3000)))
                .switchIfEmpty(
                        Mono.error(new ResponseStatusException(
                            HttpStatus.NOT_FOUND, "City not found.")));
                        }

    public Flux<City> getAllCities() {
        return this.cityRepository.findAll();
    }
}
