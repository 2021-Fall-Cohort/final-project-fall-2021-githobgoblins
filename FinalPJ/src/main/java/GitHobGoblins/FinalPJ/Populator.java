package GitHobGoblins.FinalPJ;

import GitHobGoblins.FinalPJ.model.*;
import GitHobGoblins.FinalPJ.repositories.*;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.Collection;

@Component
public class Populator implements CommandLineRunner {

    private FeatureRepository featureRepo;
    private BackgroundRepository backgroundRepo;
    private BaseInfoRepository baseFeaturesRepo;

    private CharacterRepository characterRepo;
    private DNDClassRepository dndClassRepo;
    private RaceRepository raceRepo;

    public Populator(FeatureRepository featureRepo, BackgroundRepository backgroundRepo, BaseInfoRepository baseFeaturesRepo, CharacterRepository characterRepo, DNDClassRepository dndClassRepo, RaceRepository raceRepo) {
        this.featureRepo = featureRepo;
        this.backgroundRepo = backgroundRepo;
        this.baseFeaturesRepo = baseFeaturesRepo;
        this.characterRepo = characterRepo;
        this.dndClassRepo = dndClassRepo;
        this.raceRepo = raceRepo;
    }

    @Override
    public void run(String... args) throws Exception {

        Feature doublejump = new Feature("Double Jump", "");
        Feature highKick = new Feature("high kick", "");
        Feature magic = new Feature("magic", "");
        Feature teleport = new Feature("Teleport", "");
        featureRepo.save(doublejump);
        featureRepo.save(highKick);
        featureRepo.save(magic);
        featureRepo.save(teleport);


        ArrayList<Feature>  dwarfFeatures= new ArrayList<Feature>();
        dwarfFeatures.add(doublejump);
        dwarfFeatures.add(highKick);

        ArrayList<Feature> orkFeatures= new ArrayList<Feature>();
        orkFeatures.add(magic);
        orkFeatures.add(teleport);


        Background acolyte = new Background("Acolyte", "As an acolyte, you command the respect of those who share your faith");
        Background rogue = new Background("rogue", "As rogue...");
        backgroundRepo.save(acolyte);
        backgroundRepo.save(rogue);

        DNDClass warlock = new DNDClass("Warlock", " ");
        dndClassRepo.save(warlock);

        Race dwarf = new Race("dwarf", " ");
        Race ork = new Race("ork", " ");
        raceRepo.save(dwarf);
        raceRepo.save(ork);

        BaseInfo basefeatures1 = new BaseInfo("josh", "1", "test align", 1, 0);
        BaseInfo basefeatures2 = new BaseInfo("britney", "1", "test align", 1, 0);
        baseFeaturesRepo.save(basefeatures1);
        baseFeaturesRepo.save(basefeatures2);

        PlayerCharacter josh = new PlayerCharacter(basefeatures1, acolyte, warlock, dwarf);
        PlayerCharacter britney = new PlayerCharacter(basefeatures2, acolyte, warlock, ork);
        characterRepo.save(josh);
        characterRepo.save(britney);


        orkFeatures.get(0).addPlayerCharacter(josh);
        dwarfFeatures.get(0).addPlayerCharacter(britney);

        featureRepo.save(doublejump);
        featureRepo.save(highKick);
        featureRepo.save(magic);
        featureRepo.save(teleport);









    }
}
