package GitHobGoblins.FinalPJ.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Ability extends PlayerCharacter {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;

    public Ability(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Ability(){
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
}
