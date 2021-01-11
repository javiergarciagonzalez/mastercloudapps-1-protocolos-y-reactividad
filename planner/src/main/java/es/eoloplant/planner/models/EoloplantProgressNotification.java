package es.eoloplant.planner.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EoloplantProgressNotification {

    private Long id;
    private String city;
    private String planning;

    @Builder.Default
   private int progress = 0;

    public void incrementProgress() {
        this.progress += 25;
    }

    public boolean isCompleted() {
        return this.progress == 100;
    }

    public String updatePlanning(String planningStep) {
        if (this.planning == null) {
            this.planning = this.city;
        }

        this.planning = this.planning + '-' + planningStep;

        return this.city.matches("^[A-Ma-m].*") ? this.planning.toLowerCase() : this.planning.toUpperCase();
    }

    private String getComputedPlanning() {
        return this.isCompleted() ? this.planning : "null";
    }

    public String getJSONString() {
        return
            '{' +
             "\"" + "id" +  "\"" + ": " + id + ',' +
             "\"" + "city" +  "\"" + ": " + '\"' + city + '\"' + ',' +
             "\"" + "progress" +  "\"" + ": " + progress + ',' +
             "\"" + "completed" +  "\"" + ": " + isCompleted() + ',' +
             "\"" + "planning" +  "\"" + ": " + "\"" + getComputedPlanning() + "\"" +
            '}';
    }
}
