package GitHobGoblins.FinalPJ.model;

import net.bytebuddy.utility.dispatcher.JavaDispatcher;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class BaseFeatures {

    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String level;
    private String alignment;
    private int proficiencyBonus = 2;

    public BaseFeatures(String name, String level, String alignment, int proficiencyBonus) {
        this.name = name;
        this.level = level;
        this.alignment = alignment;
        this.proficiencyBonus = proficiencyBonus;
    }

    public BaseFeatures(){
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

}
