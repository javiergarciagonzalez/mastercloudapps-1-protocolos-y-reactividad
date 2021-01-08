package es.eoloplant.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import es.eoloplant.board.model.City;
import es.eoloplant.board.model.CityDTO;
import es.eoloplant.board.model.CityNameDTO;
import es.eoloplant.board.service.CityService;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/topographicdetails")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping("/")
    public Flux<CityNameDTO> getAllCityNames() {
        return cityService.getAllCities().map(this::toCityNameDTO);
    }

    @GetMapping("/{city}")
    public Mono<CityDTO> getCity(@PathVariable String city) {
        return cityService.getCity(city).map(this::toCityDTO);
    }

    private CityDTO toCityDTO(City city) {
        return new CityDTO(city.getId(), city.getLandscape());
    }

    private CityNameDTO toCityNameDTO(City city) {
        return new CityNameDTO(city.getId());
    }

}
