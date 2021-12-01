package GitHobGoblins.FinalPJ.controllers;

import GitHobGoblins.FinalPJ.model.Feature;
import GitHobGoblins.FinalPJ.model.PlayerCharacter;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/character")
public class PlayerCharacterController {

    private FeatureRepository featureRepo;
    private BackgroundRepository backgroundRepo;
    private BaseInfoRepository baseFeaturesRepo;
    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;

    public PlayerCharacterController(BaseInfoRepository baseFeaturesRepo, FeatureRepository featureRepo, BackgroundRepository backgroundRepo, CharacterRepository characterRepo, DNDClassRepository dndClassRepo, RaceRepository raceRepo) {
        this.baseFeaturesRepo = baseFeaturesRepo;
        this.featureRepo = featureRepo;
        this.backgroundRepo = backgroundRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
    }

    @GetMapping("/getcharacters")
        public Iterable<PlayerCharacter> getCharacters() {
         return characterRepo.findAll();
        }
    @GetMapping("/showallfeatures")
        public Iterable<Feature> getAllFeatures(){
        return featureRepo.findAll();
    }
}
