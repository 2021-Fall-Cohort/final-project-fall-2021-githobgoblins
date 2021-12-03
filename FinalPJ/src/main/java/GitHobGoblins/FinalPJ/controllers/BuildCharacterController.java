package GitHobGoblins.FinalPJ.controllers;

import GitHobGoblins.FinalPJ.model.*;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collection;

@RestController
@RequestMapping("/buildcharacter")
public class BuildCharacterController {

    private FeatureRepository featureRepo;
    private BackgroundRepository backgroundRepo;
    private BaseInfoRepository baseInfoRepo;
    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;
    private AbilityRepository abilityRepo;

    public BuildCharacterController(FeatureRepository featureRepo, BackgroundRepository backgroundRepo,
                                    BaseInfoRepository baseFeaturesRepo, CharacterRepository characterRepo,
                                    DNDClassRepository dndClassRepo, RaceRepository raceRepo, AbilityRepository abilityRepo) {
        this.featureRepo = featureRepo;
        this.backgroundRepo = backgroundRepo;
        this.baseInfoRepo = baseFeaturesRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
        this.abilityRepo=abilityRepo;
    }

    // Create base info: name, level
    // class
    // race - alignment
    // background - abilityScores - features

    //create character
    @PostMapping("/base")
    public PlayerCharacter createBase(@RequestBody BaseInfo baseInfo){
        PlayerCharacter temp1 = new PlayerCharacter(baseInfo, null, null, null, null);
        baseInfoRepo.save(baseInfo);
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editbase/{id}")
    public PlayerCharacter editBase (@RequestBody BaseInfo baseInfo, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        baseInfoRepo.save(baseInfo);
        temp1.changeBase(baseInfo);
        characterRepo.save(temp1);
        return temp1;
    }

    //add class
    @PutMapping("/class/{id}")
    public PlayerCharacter setClass(@RequestBody DNDClass dndClass, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeClass(dndClass);
        dndClassRepo.save(dndClass);
        characterRepo.save(temp1);
        //        for each feature in race get it (part of for each), add it to player, then save feature
        Collection<Feature> currentFeatures= dndClass.getFeatures();
        for (Feature currentFeature: currentFeatures) {
            currentFeature.addPlayerCharacter(temp1);
            currentFeature.addDNDClass(dndClass);
            featureRepo.save(currentFeature);
        }
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editclass/{id}")
    public PlayerCharacter editClass (@RequestBody DNDClass dndClass, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        DNDClass currentClass= temp1.getDndClass();
        ArrayList<Long> featureIds = new ArrayList<Long>();

        for(Feature oldFeature: currentClass.getFeatures()){
//            oldFeature.removePlayerCharacter();
//            featureRepo.save(oldFeature);
            featureIds.add(oldFeature.getId());
        }
        for (Long featureId: featureIds) {
            featureRepo.deleteById(featureId);
        }

        dndClassRepo.save(dndClass);
        temp1.changeClass(dndClass);
        characterRepo.save(temp1);
        Collection<Feature> currentFeatures= dndClass.getFeatures();
        for (Feature currentFeature: currentFeatures) {
            currentFeature.addPlayerCharacter(temp1);
            currentFeature.addDNDClass(dndClass);
            featureRepo.save(currentFeature);
        }

        characterRepo.save(temp1);
        return characterRepo.findById(id).get();
    }



    //add race
    @PutMapping("/race/{id}")
    public PlayerCharacter setRace(@RequestBody Race race, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeRace(race);
        raceRepo.save(race);
        characterRepo.save(temp1);
        //        for each feature in race get it (part of for each), add it to player, then save feature
        Collection<Feature> currentFeatures= race.getFeatures();
        for (Feature currentFeature: currentFeatures) {
            currentFeature.addPlayerCharacter(temp1);
            currentFeature.addRace(race);
            featureRepo.save(currentFeature);
        }
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping ("/editrace/{id}")
    public PlayerCharacter editRace (@RequestBody Race race, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        Race currentRace= temp1.getRace();
        ArrayList<Long> featureIds = new ArrayList<Long>();

        for(Feature oldFeature: currentRace.getFeatures()){
//            oldFeature.removePlayerCharacter();
//            featureRepo.save(oldFeature);
            featureIds.add(oldFeature.getId());
        }
        for (Long featureId: featureIds) {
            featureRepo.deleteById(featureId);
        }

        raceRepo.save(race);
        temp1.changeRace(race);
        characterRepo.save(temp1);
        Collection<Feature> currentFeatures= race.getFeatures();
        for (Feature currentFeature: currentFeatures) {
            currentFeature.addPlayerCharacter(temp1);
            currentFeature.addRace(race);
            featureRepo.save(currentFeature);
        }

        characterRepo.save(temp1);
        return characterRepo.findById(id).get();
    }

    @PutMapping("/background/{id}")
    public PlayerCharacter setBackground(@RequestBody Background background, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeBackground(background);
        backgroundRepo.save(background);
        characterRepo.save(temp1);
        Collection<Feature> currentFeatures = background.getFeatures();

        for (Feature currentFeature: currentFeatures) {
        currentFeature.addPlayerCharacter(temp1);
        currentFeature.addBackground(background);
        featureRepo.save(currentFeature);
    }
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editbackground/{id}")
    public PlayerCharacter editBackground (@RequestBody Background background, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        Background currentBackground = temp1.getBackground();
        ArrayList<Long> featureIds = new ArrayList<Long>();

        for(Feature oldFeature: currentBackground.getFeatures()){
//            oldFeature.removePlayerCharacter();
//            featureRepo.save(oldFeature);
            featureIds.add(oldFeature.getId());
        }
        for (Long featureId: featureIds) {
            featureRepo.deleteById(featureId);
        }

        backgroundRepo.save(background);
        temp1.changeBackground(background);
        characterRepo.save(temp1);
        Collection<Feature> currentFeatures= background.getFeatures();
        for (Feature currentFeature: currentFeatures) {
            currentFeature.addPlayerCharacter(temp1);
            currentFeature.addBackground(background);
            featureRepo.save(currentFeature);
        }

        characterRepo.save(temp1);
        return characterRepo.findById(id).get();
    }
    @PutMapping("/abilityscore/{id}")
    public PlayerCharacter setAbilityScore(@RequestBody AbilityScores abilityScore, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeAbilityScore(abilityScore);
        abilityRepo.save(abilityScore);
        characterRepo.save(temp1);
//        Collection<Feature> currentFeatures = abilityScore.getFeatures();
//
//        for (Feature currentFeature: currentFeatures) {
//            currentFeature.addPlayerCharacter(temp1);
//            currentFeature.addBackground(background);
//            featureRepo.save(currentFeature);
//        }
//        characterRepo.save(temp1);
        return temp1;
    }

//    @PutMapping("/editabilityscore/{id}")
//    public PlayerCharacter editBackground (@RequestBody AbilityScores abilityScore, @PathVariable Long id){
//        PlayerCharacter temp1 = characterRepo.findById(id).get();
//        AbilityScores currentAbilityScore = temp1.getAbilityScores();
//        ArrayList<Long> featureIds = new ArrayList<Long>();
//
//        for(Feature oldFeature: currentBackground.getFeatures()){
////            oldFeature.removePlayerCharacter();
////            featureRepo.save(oldFeature);
//            featureIds.add(oldFeature.getId());
//        }
//        for (Long featureId: featureIds) {
//            featureRepo.deleteById(featureId);
//        }
//
//        backgroundRepo.save(background);
//        temp1.changeBackground(background);
//        characterRepo.save(temp1);
//        Collection<Feature> currentFeatures= background.getFeatures();
//        for (Feature currentFeature: currentFeatures) {
//            currentFeature.addPlayerCharacter(temp1);
//            currentFeature.addBackground(background);
//            featureRepo.save(currentFeature);
//        }
//
//        characterRepo.save(temp1);
//        return characterRepo.findById(id).get();
//    }


}