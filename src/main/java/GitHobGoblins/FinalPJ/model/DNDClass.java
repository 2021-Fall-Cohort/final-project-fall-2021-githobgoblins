package GitHobGoblins.FinalPJ.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class DNDClass{

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;

    @OneToMany(mappedBy = "dndClass")
    private Collection<Feature> features;

    public DNDClass(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public DNDClass (){
        //zero argument constructor
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

    public Collection<Feature> getFeatures(){
        return features;
    }

//    public PlayerCharacter getPlayerCharacter() {
//        return playerCharacter;
//    }
}

