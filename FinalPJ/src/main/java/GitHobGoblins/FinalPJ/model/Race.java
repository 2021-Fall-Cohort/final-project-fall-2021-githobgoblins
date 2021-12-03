package GitHobGoblins.FinalPJ.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Race {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "race")
    private Collection<Feature> features;

//    @OneToMany(mappedBy = "abilityScore")
//    private Collection<AbilityScores> abilityScore;

    public Race(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Race(){
        //zero arg constructor
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

//    public Collection<AbilityScores> getAbilityScore() {
//        return abilityScore;
//    }
}
