package GitHobGoblins.FinalPJ.model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class AbilityScores {

    @Id
    @GeneratedValue
    private long id;

    private int strength;
    private int dexterity;
    private int constitution;
    private int intelligence;
    private int wisdom;
    private int charisma;


    public AbilityScores(int strength, int dexterity, int constitution, int intelligence, int wisdom, int charisma) {
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
    }

    public AbilityScores() {

    }

    public long getId() {
        return id;
    }

    public int getStrength() {
        return strength;
    }

    public int getDexterity() {
        return dexterity;
    }

    public int getConstitution() {
        return constitution;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public int getWisdom() {
        return wisdom;
    }

    public int getCharisma() {
        return charisma;
    }

    public void calculateRaceBonus(int abilityScoreImprovement1, int abilityScoreImprovement2, String
            abilityScoreImprovementName1, String abilityScoreImprovementName2) {

        if (abilityScoreImprovementName1.equals("strength")) {
            strength += abilityScoreImprovement1;
        } else if (abilityScoreImprovementName1.equals("dexterity")) {
            dexterity += abilityScoreImprovement1;
        } else if (abilityScoreImprovementName1.equals("constitution")) {
            constitution += abilityScoreImprovement1;
        } else if (abilityScoreImprovementName1.equals("intelligence")) {
            intelligence += abilityScoreImprovement1;
        } else if (abilityScoreImprovementName1.equals("wisdom")) {
            wisdom += abilityScoreImprovement1;
        } else if (abilityScoreImprovementName1.equals("charisma")) {
            charisma += abilityScoreImprovement1;
        }

        if (abilityScoreImprovementName2.equals("strength")) {
            strength += abilityScoreImprovement2;
        } else if (abilityScoreImprovementName2.equals("dexterity")) {
            dexterity += abilityScoreImprovement2;
        } else if (abilityScoreImprovementName2.equals("constitution")) {
            constitution += abilityScoreImprovement2;
        } else if (abilityScoreImprovementName2.equals("intelligence")) {
            intelligence += abilityScoreImprovement2;
        } else if (abilityScoreImprovementName2.equals("wisdom")) {
            wisdom += abilityScoreImprovement2;
        } else if (abilityScoreImprovementName2.equals("charisma")) {
            charisma += abilityScoreImprovement2;
        }
    }

}

