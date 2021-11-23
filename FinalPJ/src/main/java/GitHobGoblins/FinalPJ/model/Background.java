package GitHobGoblins.FinalPJ.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Background{

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String feature;

//    @OneToMany(mappedBy = "background")
//    private Collection<PlayerCharacter> playerCharacters;


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

//    public Collection<PlayerCharacter> getPlayerCharacters() {
//        return playerCharacters;
//    }

//    @Override
//    public boolean equals(Object o) {
//        if (this == o) return true;
//        if (o == null || getClass() != o.getClass()) return false;
//        Background that = (Background) o;
//        return Objects.equals(id, that.id) && Objects.equals(name, that.name) && Objects.equals(feature, that.feature) && Objects.equals(playerCharacters, that.playerCharacters);
//    }
//
//    @Override
//    public int hashCode() {
//        return Objects.hash(id, name, feature);
//    }
}
