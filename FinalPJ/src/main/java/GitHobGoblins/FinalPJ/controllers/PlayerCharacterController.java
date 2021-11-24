package GitHobGoblins.FinalPJ.controllers;

import GitHobGoblins.FinalPJ.model.PlayerCharacter;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/character")
public class PlayerCharacterController {

    private AbilityRepository abilityRepo;
    private BackgroundRepository backgroundRepo;
    private BaseFeaturesRepository baseFeaturesRepo;
    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;

    public PlayerCharacterController(AbilityRepository abilityRepo, BackgroundRepository backgroundRepo, BaseFeaturesRepository baseFeaturesRepo, CharacterRepository characterRepo, DNDClassRepository dndClassRepo, RaceRepository raceRepo) {
        this.abilityRepo = abilityRepo;
        this.backgroundRepo = backgroundRepo;
        this.baseFeaturesRepo = baseFeaturesRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
    }

    @GetMapping("/getcharacter")
        public Iterable<PlayerCharacter> getCharacters() {
         return characterRepo.findAll();
        }


}
