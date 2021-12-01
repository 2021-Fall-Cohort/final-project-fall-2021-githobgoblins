package GitHobGoblins.FinalPJ.model;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Feature {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @Lob
    private String description;

    @ManyToOne
    private PlayerCharacter playerCharacter;

//    @ManyToOne
//    private Race race;

    public Feature(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Feature() {
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

//    public PlayerCharacter getPlayerCharacter() {
//        return playerCharacter;
//    }

}
