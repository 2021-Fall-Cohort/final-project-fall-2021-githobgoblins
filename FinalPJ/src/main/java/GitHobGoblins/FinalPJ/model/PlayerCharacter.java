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
    private Collection<Feature> feature;

    @OneToOne
    private Background background;

    @OneToOne
    private BaseInfo baseInfo;

    @OneToOne
    private DNDClass dndClass;

    @OneToOne
    private Race race;

    public PlayerCharacter(BaseInfo baseInfo, Background background, DNDClass dndClass, Race race) {
        this.baseInfo = baseInfo;
        this.background = background;
        this.dndClass = dndClass;
        this.race = race;
    }

    public PlayerCharacter(){
        //zero argument const.
    }

    public Long getId() {
        return id;
    }

    public Collection<Feature> getFeature() {
        return feature;
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

    public void changeBase(BaseInfo base){
        this.baseInfo =base;
    }


    public void changeFeature(Feature newFeature){
        feature.add(newFeature);
    }
    public void removeFeature(Feature newFeature){
        feature.remove(newFeature);
    }

    public void changeBackground(Background background){
        this.background=background;
    }
    public void changeClass(DNDClass dndClass){
        this.dndClass=dndClass;
    }
    public void changeRace(Race race){
        this.race=race;
    }
}
