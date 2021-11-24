package GitHobGoblins.FinalPJ.controllers;

import GitHobGoblins.FinalPJ.model.*;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/buildcharacter")
public class BuildCharacterController {

    private AbilityRepository abilityRepo;
    private BackgroundRepository backgroundRepo;
    private BaseFeaturesRepository baseFeaturesRepo;
    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;

    public BuildCharacterController(AbilityRepository abilityRepo, BackgroundRepository backgroundRepo,
                                    BaseFeaturesRepository baseFeaturesRepo, CharacterRepository characterRepo, DNDClassRepository dndClassRepo, RaceRepository raceRepo) {
        this.abilityRepo = abilityRepo;
        this.backgroundRepo = backgroundRepo;
        this.baseFeaturesRepo = baseFeaturesRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
    }

//    Create base features: name, level, alignment patches
    @PostMapping("/base")
    public PlayerCharacter createBase(@RequestBody BaseFeatures baseFeatures){
        baseFeaturesRepo.save(baseFeatures);
        PlayerCharacter temp1 = new PlayerCharacter(null, null, baseFeatures, null, null);
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editbase/{id}")
    public PlayerCharacter editBase (@RequestBody BaseFeatures baseFeatures, @PathVariable Long id){
        baseFeaturesRepo.save(baseFeatures);
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeBase(baseFeatures);
        characterRepo.save(temp1);
        return temp1;
    }

    @PostMapping("/ability")
    public PlayerCharacter setAbility(@RequestBody Ability ability){
        abilityRepo.save(ability);
        PlayerCharacter temp1 = new PlayerCharacter(ability, null, null, null, null);
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editability/{id}")
    public PlayerCharacter editAbility (@RequestBody Ability ability, @PathVariable Long id){
        abilityRepo.save(ability);
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeAbility(ability);
        characterRepo.save(temp1);
        return temp1;
    }

    @PostMapping("/background")
    public PlayerCharacter setBackground(@RequestBody Background background){
        backgroundRepo.save(background);
        PlayerCharacter temp1 = new PlayerCharacter(null, background, null, null, null);
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

    @PostMapping("/class")
    public PlayerCharacter setClass(@RequestBody DNDClass dndClass){
        dndClassRepo.save(dndClass);
        PlayerCharacter temp1 = new PlayerCharacter(null, null, null, dndClass, null);
        characterRepo.save(temp1);
        return temp1;
    }

    @PutMapping("/editclass/{id}")
    public PlayerCharacter editClass (@RequestBody DNDClass dndClass, @PathVariable Long id){
        dndClassRepo.save(dndClass);
        PlayerCharacter temp1 = characterRepo.findById(id).get();
        temp1.changeClass(dndClass);
        characterRepo.save(temp1);
        return temp1;
    }

    @PostMapping("/race")
    public PlayerCharacter setRace(@RequestBody Race race){
        raceRepo.save(race);
        PlayerCharacter temp1 = new PlayerCharacter(null, null, null, null, race);
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




}