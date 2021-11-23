package GitHobGoblins.FinalPJ.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
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
    private Collection<PlayerCharacter> playerCharacters;

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

    public Collection<PlayerCharacter> getPlayerCharacters() {
        return playerCharacters;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Race race = (Race) o;
        return Objects.equals(id, race.id) && Objects.equals(name, race.name) && Objects.equals(description, race.description) && Objects.equals(playerCharacters, race.playerCharacters);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description);
    }
}
