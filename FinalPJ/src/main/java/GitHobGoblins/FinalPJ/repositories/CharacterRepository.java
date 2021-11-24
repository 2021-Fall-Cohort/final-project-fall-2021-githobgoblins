package GitHobGoblins.FinalPJ.repositories;

import GitHobGoblins.FinalPJ.model.PlayerCharacter;
import org.springframework.data.repository.CrudRepository;

public interface CharacterRepository extends CrudRepository<PlayerCharacter, Long> {

}
