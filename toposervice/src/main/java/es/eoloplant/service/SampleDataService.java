package es.eoloplant.service;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.eoloplant.model.City;
import es.eoloplant.repository.CityRepository;
import reactor.core.publisher.Flux;

@Service
public class SampleDataService {

    @Autowired
    private CityRepository cityRepository;

    @PostConstruct
    public void init() {

        this.cityRepository.deleteAll();

        Flux<City> cities = Flux.just(
                new City("Madrid", "Flat"),
                new City("Naboo", "Mountain"),
                new City("Neverland", "Mountain"),
                new City("South Park", "Mountain"),
                new City("Gothan", "Flat"),
                new City("Springfield", "Mountain"),
                new City("Quahog", "Mountain"),
                new City("Nueva Nueva York", "Flat"),
                new City("Desembarco del Rey", "Flat"),
                new City("Oasis", "Flat"),
                new City("Metropoli", "Mountain"),
                new City("Rivendell", "Flat"),
                new City("Comarca", "Mountain"),
                new City("Coruscant", "Flat"),
                new City("Shangri-la", "Mountain"),
                new City("San Fierro", "Mountain"),
                new City("Los Santos", "Flat"),
                new City("Las Venturas", "Flat")
        );

        cities.flatMap(this.cityRepository::save).blockLast();
    }

}
