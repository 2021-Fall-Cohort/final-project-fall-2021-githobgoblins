package GitHobGoblins.FinalPJ.model;

import javax.persistence.*;
import java.util.Arrays;
import java.util.Collection;

@Entity
public class PlayerCharacter {

    @Id
    @GeneratedValue
    private Long id;

    //features
    @OneToMany(mappedBy = "playerCharacter")
    private Collection<Ability> ability;

    @OneToOne
    private Background background;

    @OneToOne
    private BaseFeatures baseFeatures;

    @OneToOne
    private DNDClass dndClass;

    @OneToOne
    private Race race;

    public PlayerCharacter(BaseFeatures baseFeatures, Collection<Ability> ability, Background background, DNDClass dndClass, Race race) {
        this.baseFeatures = baseFeatures;
        this.ability = ability;
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

    public Collection<Ability> getAbility() {
        return ability;
    }

    public Background getBackground() {
        return background;
    }

    public BaseFeatures getBaseFeatures() {
        return baseFeatures;
    }

    public DNDClass getDndClass() {
        return dndClass;
    }

    public Race getRace() {
        return race;
    }

    public void changeBase(BaseFeatures base){
        this.baseFeatures=base;
    }


//
//    public void changeAbility(Collection<Ability> ability){
//        this.ability = ability;
//    }
//
//    public void changeBackground(Background background){
//        this.background=background;
//    }
//    public void changeClass(DNDClass dndClass){
//        this.dndClass=dndClass;
//    }
//    public void changeRace(Race race){
//        this.race=race;
//    }
}
