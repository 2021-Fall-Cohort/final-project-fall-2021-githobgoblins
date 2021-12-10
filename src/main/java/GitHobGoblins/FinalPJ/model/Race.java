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
    @Lob
    private String description;
    private int abilityScoreImprovement1;
    private int abilityScoreImprovement2;
    private String abilityScoreImprovementName1;
    private String abilityScoreImprovementName2;

    @OneToMany(mappedBy = "race")
    private Collection<Feature> features;


    public Race(String name, String description, int abilityScoreImprovement1, int abilityScoreImprovement2,
                String abilityScoreImprovementName1, String abilityScoreImprovementName2) {
        this.name = name;
        this.description = description;
        this.abilityScoreImprovement1 = abilityScoreImprovement1;
        this.abilityScoreImprovement2 = abilityScoreImprovement2;
        this.abilityScoreImprovementName1 = abilityScoreImprovementName1;
        this.abilityScoreImprovementName2 = abilityScoreImprovementName2;
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

    public int getAbilityScoreImprovement1() {
        return abilityScoreImprovement1;
    }

    public int getAbilityScoreImprovement2() {
        return abilityScoreImprovement2;
    }

    public String getAbilityScoreImprovementName1() {
        return abilityScoreImprovementName1;
    }

    public String getAbilityScoreImprovementName2() {
        return abilityScoreImprovementName2;
    }
}

