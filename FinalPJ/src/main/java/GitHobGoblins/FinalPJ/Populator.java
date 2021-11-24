package GitHobGoblins.FinalPJ;

import GitHobGoblins.FinalPJ.model.*;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Populator implements CommandLineRunner {

    private AbilityRepository abilityRepo;
    private BackgroundRepository backgroundRepo;
    private BaseFeaturesRepository baseFeaturesRepo;
    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;

    public Populator(AbilityRepository abilityRepo, BackgroundRepository backgroundRepo, BaseFeaturesRepository baseFeaturesRepo, CharacterRepository characterRepo, DNDClassRepository dndClassRepo, RaceRepository raceRepo) {
        this.abilityRepo = abilityRepo;
        this.backgroundRepo = backgroundRepo;
        this.baseFeaturesRepo = baseFeaturesRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
    }

    @Override
    public void run(String... args) throws Exception{
        Background acolyte = new Background("Acolyte", "As an acolyte, you command the respect of those who share your faith");
        Background rogue = new Background("rogue", "As rogue...");

        DNDClass warlock = new DNDClass("Warlock", " ");
        Race dwarf = new Race("dwarf", " ");
        Ability doublejump = new Ability("Double Jump", " ");
        BaseFeatures basefeatures1 = new BaseFeatures("josh", "1", "test align", 1, 0);

        PlayerCharacter josh = new PlayerCharacter(doublejump, acolyte, basefeatures1, warlock, dwarf);
        backgroundRepo.save(acolyte);
        backgroundRepo.save(rogue);

        dndClassRepo.save(warlock);
        raceRepo.save(dwarf);
        abilityRepo.save(doublejump);
        baseFeaturesRepo.save(basefeatures1);

        characterRepo.save(josh);

    }
}
