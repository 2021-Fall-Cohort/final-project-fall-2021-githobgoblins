package GitHobGoblins.FinalPJ.model;

import javax.persistence.*;
import java.util.Collection;

@Entity
public class PlayerCharacter {

    @Id
    @GeneratedValue
    private Long id;

    //features
    @OneToMany(mappedBy = "playerCharacter")
    private Collection<Feature> features;

    @OneToOne
    private Background background;

    @OneToOne
    private BaseInfo baseInfo;

    @OneToOne
    private DNDClass dndClass;

    @OneToOne
    private Race race;

    @OneToOne
    private AbilityScores abilityScore;

    public PlayerCharacter(BaseInfo baseInfo, Background background, DNDClass dndClass, Race race, AbilityScores abilityScore) {
        this.baseInfo = baseInfo;
        this.background = background;
        this.dndClass = dndClass;
        this.race = race;
        this.abilityScore= abilityScore;
    }

    public PlayerCharacter(){
        //zero argument const.
    }

    public Long getId() {
        return id;
    }

    public Collection<Feature> getFeatures() {
        return features;
    }

    public Background getBackground() {
        return background;
    }

    public BaseInfo getBaseFeatures() {
        return baseInfo;
    }

    public DNDClass getDndClass() {
        return dndClass;
    }

    public Race getRace() {
        return race;
    }

    public AbilityScores getAbilityScores() {
        return abilityScore;
    }

    public void changeBase(BaseInfo base){
        this.baseInfo =base;
    }


    public void changeFeature(Feature newFeature){
        features.add(newFeature);
    }
    public void removeFeature(Feature newFeature){
        features.remove(newFeature);
    }

    public void changeBackground(Background background){
        this.background=background;
    }
    public void changeAbilityScore(AbilityScores abilityScore){
        this.abilityScore=abilityScore;
    }
    public void changeClass(DNDClass dndClass){
        this.dndClass=dndClass;
    }
    public void changeRace(Race race){
        this.race=race;
    }
}
