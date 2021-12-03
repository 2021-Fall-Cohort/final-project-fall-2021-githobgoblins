package GitHobGoblins.FinalPJ.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Background{

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "background")
    private Collection<Feature> features;

    @OneToOne
    private PlayerCharacter playerCharacter;

    public Background(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Background() {
        //zero arg const.
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public Collection<Feature> getFeatures() {
        return features;
    }

}
