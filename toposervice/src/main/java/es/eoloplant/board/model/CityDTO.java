package es.eoloplant.board.model;

public class CityDTO {

    private String id;
    private String landscape;

    public CityDTO(String id, String landscape) {
        this.id = id;
        this.landscape = landscape;
    }

    public String getId() {
        return id;
    }

    public String getLandscape() {
        return landscape;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setLandscape(String landscape) {
        this.landscape = landscape;
    }
}
