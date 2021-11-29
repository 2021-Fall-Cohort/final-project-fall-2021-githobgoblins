package GitHobGoblins.FinalPJ.model;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Background{

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String feature;


    @OneToOne
//    @JoinColumn(name = "playerCharacter_id")
    private PlayerCharacter playerCharacter;

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

//    public PlayerCharacter getPlayerCharacter() {
//        return playerCharacter;
//    }
}
