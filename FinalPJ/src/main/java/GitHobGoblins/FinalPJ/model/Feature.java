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

    @ManyToOne
//    @JoinColumn(name="race_id")
    private Race race;

//    @ManyToOne
//    private Background background;

//    @ManyToOne
//    private DNDClass dndClass;

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
