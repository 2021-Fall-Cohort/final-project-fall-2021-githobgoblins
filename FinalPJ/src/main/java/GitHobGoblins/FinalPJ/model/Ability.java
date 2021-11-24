package GitHobGoblins.FinalPJ.model;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Ability {

    @Id
    @GeneratedValue
    private Long id;
    private String name;

    @Lob
    private String description;

    @OneToMany(mappedBy = "ability")
    private Collection<PlayerCharacter> playerCharacters;

    public Ability(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public Ability(){
        //zero argument constructor
    }

//    public Collection<PlayerCharacter> getPlayerCharacters() {
//        return playerCharacters;
//    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Ability ability = (Ability) o;
//        return Objects.equals(id, ability.id) && Objects.equals(name, ability.name) && Objects.equals(description, ability.description) && Objects.equals(playerCharacters, ability.playerCharacters);
//    }

//    @Override
//    public int hashCode() {
//        return Objects.hash(id, name, description);
//    }

}
