package GitHobGoblins.FinalPJ;

import GitHobGoblins.FinalPJ.model.*;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;

@Component
public class Populator implements CommandLineRunner {

    private FeatureRepository abilityRepo;
    private BackgroundRepository backgroundRepo;
    private BaseInfoRepository baseFeaturesRepo;

    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;

    public Populator(FeatureRepository abilityRepo, BackgroundRepository backgroundRepo, BaseInfoRepository baseFeaturesRepo, CharacterRepository characterRepo, DNDClassRepository dndClassRepo, RaceRepository raceRepo) {
        this.abilityRepo = abilityRepo;
        this.backgroundRepo = backgroundRepo;
        this.baseFeaturesRepo = baseFeaturesRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Feature doublejump = new Feature("Double Jump", " ");
        Collection<Feature> abilities= new ArrayList<Feature>();

        Background acolyte = new Background("Acolyte", "As an acolyte, you command the respect of those who share your faith");
        Background rogue = new Background("rogue", "As rogue...");

        DNDClass warlock = new DNDClass("Warlock", " ");

        Race dwarf = new Race("dwarf", " ");

        BaseInfo basefeatures1 = new BaseInfo("josh", "1", "test align", 1, 0);


        PlayerCharacter josh = new PlayerCharacter(basefeatures1, abilities, acolyte, warlock, dwarf);
        backgroundRepo.save(acolyte);
        backgroundRepo.save(rogue);

        dndClassRepo.save(warlock);
        raceRepo.save(dwarf);
        abilityRepo.save(doublejump);
        baseFeaturesRepo.save(basefeatures1);

        characterRepo.save(josh);

    }
}
