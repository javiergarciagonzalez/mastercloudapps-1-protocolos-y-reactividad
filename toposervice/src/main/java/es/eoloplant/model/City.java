package es.eoloplant.model;

import org.springframework.data.annotation.Id;

public class City {

    @Id
    private String id;
    private String landscape;

    protected City() {}

    public City(String id, String landscape) {
        this.id = id;
        this.landscape = landscape;
    }

    public String getId() {
        return id;
    }

    public String getLandscape() {
        return landscape;
    }

    public void setLandscape(String landscape) {
        this.landscape = landscape;
    }

}
