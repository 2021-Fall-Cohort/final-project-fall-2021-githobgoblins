package GitHobGoblins.FinalPJ.controllers;

import GitHobGoblins.FinalPJ.model.*;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/buildCharacter")
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
    public Iterable<Ability> setAbility(@RequestBody Ability ability){
        abilityRepo.save(ability);
        return abilityRepo.findAll();
    }

    @PostMapping("/background")
    public Iterable <Background> setBackground(@RequestBody Background background){
        backgroundRepo.save(background);
        return backgroundRepo.findAll();
    }
    @PostMapping("/class")
    public Iterable<DNDClass> setClass(@RequestBody DNDClass dndClass){
        dndClassRepo.save(dndClass);
        return dndClassRepo.findAll();
    }
    @PostMapping("/race")
    public Iterable<Race> setRace(@RequestBody Race race){
        raceRepo.save(race);
        return raceRepo.findAll();
    }
}