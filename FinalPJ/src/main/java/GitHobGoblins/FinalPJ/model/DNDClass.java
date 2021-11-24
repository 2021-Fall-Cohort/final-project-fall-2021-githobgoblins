package GitHobGoblins.FinalPJ.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
    private Collection<PlayerCharacter> playerCharacters;

    public DNDClass(String name, String description) {
        this.name = name;
        this.description = description;
    }

    public DNDClass (){
        //zero argument constructor
    }

    public Collection<PlayerCharacter> getPlayerCharacters() {
        return playerCharacters;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DNDClass dndClass = (DNDClass) o;
        return Objects.equals(id, dndClass.id) && Objects.equals(name, dndClass.name) && Objects.equals(description, dndClass.description) && Objects.equals(playerCharacters, dndClass.playerCharacters);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }
}

