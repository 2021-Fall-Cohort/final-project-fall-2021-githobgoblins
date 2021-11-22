package GitHobGoblins.FinalPJ.model;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class PlayerCharacter {

    @Id
    @GeneratedValue
    private Long id;

    private String race;

}
