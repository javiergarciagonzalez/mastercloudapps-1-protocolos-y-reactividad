package es.eoloplant.repository;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

import es.eoloplant.model.City;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@Repository
public interface CityRepository extends ReactiveCrudRepository<City, Long> {
    Mono<City> findByIdIgnoreCase(String id);
    Flux<City> findAll();
}
