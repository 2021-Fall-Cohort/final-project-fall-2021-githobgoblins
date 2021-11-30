package GitHobGoblins.FinalPJ.controllers;

import GitHobGoblins.FinalPJ.model.*;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/buildcharacter")
public class BuildCharacterController {

    private FeatureRepository abilityRepo;
    private BackgroundRepository backgroundRepo;
    private BaseInfoRepository baseInfoRepo;
    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;

    public BuildCharacterController(FeatureRepository abilityRepo, BackgroundRepository backgroundRepo,
                                    BaseInfoRepository baseFeaturesRepo, CharacterRepository characterRepo, DNDClassRepository dndClassRepo, RaceRepository raceRepo) {
        this.abilityRepo = abilityRepo;
        this.backgroundRepo = backgroundRepo;
        this.baseInfoRepo = baseFeaturesRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
    }

    // Create base info: name, level
    // class
    // race - alignment
    // background - abilityScores - features

    //create character
    @PostMapping("/base")
    public PlayerCharacter createBase(@RequestBody BaseInfo baseInfo){
        PlayerCharacter temp1 = new PlayerCharacter(baseInfo, null,null, null, null);
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
        dndClassRepo.save(dndClass);
        temp1.changeClass(dndClass);
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editclass/{id}")
    public PlayerCharacter editClass (@RequestBody DNDClass dndClass, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        dndClassRepo.save(dndClass);
        temp1.changeClass(dndClass);
        characterRepo.save(temp1);
        return temp1;
    }

    //add race
    @PutMapping("/race/{id}")
    public PlayerCharacter setRace(@RequestBody Race race, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeRace(race);
        raceRepo.save(race);
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editrace/{id}")
    public PlayerCharacter editRace (@RequestBody Race race, @PathVariable Long id){
        raceRepo.save(race);
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeRace(race);
        characterRepo.save(temp1);
        return temp1;
    }

    //add background
    @PutMapping("/background/{id}")
    public PlayerCharacter setBackground(@RequestBody Background background, @PathVariable Long id){
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeBackground(background);
        backgroundRepo.save(background);
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editbackground/{id}")
    public PlayerCharacter editBackground (@RequestBody Background background, @PathVariable Long id){
        backgroundRepo.save(background);
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeBackground(background);
        characterRepo.save(temp1);
        return temp1;
    }


//    @PostMapping("/feature")
//    public PlayerCharacter setAbility(@RequestBody Feature feature, @PathVariable Long id) {
//
//        PlayerCharacter temp1 = characterRepo.findById(id).get();
//        temp1.changeFeature(feature);
//
//        abilityRepo.save(feature);
//        characterRepo.save(temp1);
//        return temp1;
//    }
//    @PutMapping("/editfeature/{id}")
//    public PlayerCharacter editAbility (@RequestBody Feature feature, @PathVariable Long id){
//        abilityRepo.save(feature);
//        PlayerCharacter temp1 = characterRepo.findById(id).get();
//        temp1.changeAbility(feature);
//        characterRepo.save(temp1);
//        return temp1;
//    }
}