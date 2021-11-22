package GitHobGoblins.FinalPJ.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Background {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String feature;

    public Background(String name, String feature) {
        this.name = name;
        this.feature = feature;
    }

    public Background(){
        //zero arg const.
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getFeature() {
        return feature;
    }
}
