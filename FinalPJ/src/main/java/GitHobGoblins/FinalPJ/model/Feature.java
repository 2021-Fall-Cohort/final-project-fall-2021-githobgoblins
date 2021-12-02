package GitHobGoblins.FinalPJ.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @JsonIgnore
    private PlayerCharacter playerCharacter;

    @ManyToOne
    @JsonIgnore
    private Race race;

    @ManyToOne
    @JsonIgnore
    private Background background;

    @ManyToOne
    @JsonIgnore
    private DNDClass dndClass;

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

    public Race getRace() {
        return race;
    }

    public void addRace(Race race){
        this.race = race;
    }

    public void addBackground(Background background){
        this.background = background;
    }

    public void addDNDClass(DNDClass dndClass){
        this.dndClass = dndClass;
    }


    public void addPlayerCharacter(PlayerCharacter character){
        playerCharacter= character;
    }
    public void removePlayerCharacter(){
        playerCharacter= null;
    }
    //    public PlayerCharacter getPlayerCharacter() {
//        return playerCharacter;
//    }

}
