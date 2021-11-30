package GitHobGoblins.FinalPJ.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class BaseInfo {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String level;
    private String alignment;
    private int proficiencyBonus = 2;
    private int experiencePoints = 0;

    @OneToOne
    private PlayerCharacter playerCharacter;

    public BaseInfo(String name, String level, String alignment, int proficiencyBonus, int experiencePoints) {
        this.name = name;
        this.level = level;
        this.alignment = alignment;
        this.proficiencyBonus = proficiencyBonus;
        this.experiencePoints = experiencePoints;
    }

    public BaseInfo(){
        //zero argument const.
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getLevel() {
        return level;
    }

    public String getAlignment() {
        return alignment;
    }

    public int getProficiencyBonus() {
        return proficiencyBonus;
    }

    public void setProficiencyBonus(int proficiencyBonus) {
        this.proficiencyBonus = proficiencyBonus;
    }

    public int getExperiencePoints() {
        return experiencePoints;
    }

//    public PlayerCharacter getPlayerCharacter() {
//        return playerCharacter;
//    }
}
