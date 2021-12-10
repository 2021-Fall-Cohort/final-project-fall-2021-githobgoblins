const classJson = [
    {
        "id": 1,
        "title": "Barbarian",
        "desc": "A tall human tribesman strides through a blizzard, draped in fur and hefting his axe. He laughs as he charges toward the frost giant who dared poach his people’s elk herd. A half-orc snarls at the latest challenger to her authority over their savage tribe, ready to break his neck with her bare hands as she did to the last six rivals. Frothing at the mouth, a dwarf slams his helmet into the face of his drow foe, then turns to drive his armored elbow into the gut of another. These barbarians, different as they might be, are defined by their rage: unbridled, unquenchable, and unthinking fury. More than a mere emotion, their anger is the ferocity of a cornered predator, the unrelenting assault of a storm, the churning turmoil of the sea. For some, their rage springs from a communion with fierce animal spirits. Others draw from a roiling reservoir of anger at a world full of pain. For every barbarian, rage is a power that fuels not just a battle frenzy but also uncanny reflexes, resilience, and feats of strength.",
        "features": [
            {
              "name" : "Rage",
              "description" :"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action. While raging, you gain the following benefits if you aren't wearing heavy armor: \n\nYou have advantage on Strength checks and Strength saving throws.\n\nWhen you make a melee weapon Attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.\n\nYou have Resistance to bludgeoning, piercing, and slashing damage\n\nIf you are able to cast Spells, you can't cast them or concentrate on them while raging.\n\nYour rage lasts for 1 minute. It ends early if you are knocked Unconscious or if Your Turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on Your Turn as a Bonus Action.\n\nOnce you have raged the maximum number of times for your barbarian level, you must finish a Long Rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th.",
            },
            {
              "name" : "Unarmored Defense",
              "description" :"While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
            }
        
          ]
    },
    {
        "id": 2,
        "title": "Bard",
        "desc": "Humming as she traces her fingers over an ancient monument in a long-forgotten ruin, a half-elf in rugged leathers finds knowledge springing into her mind, conjured forth by the magic of her song — knowledge of the people who constructed the monument and the mythic saga it depicts. A stern human warrior bangs his sword rhythmically against his scale mail, setting the tempo for his war chant and exhorting his companions to bravery and heroism. The magic of his song fortifies and emboldens them. Laughing as she tunes her cittern, a gnome weaves her subtle magic over the assembled nobles, ensuring that her companions’ words will be well received. Whether scholar, skald, or scoundrel, a bard weaves magic through words and music to inspire allies, demoralize foes, manipulate minds, create illusions, and even heal wounds.",
        "features": [
            {
              "name" : "Bardic Inspiration",
              "description" :"You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6. Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the GM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time. \n\nYou can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest. \n\nYour Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
            },
            {
              "name" : "Spellcasting: Bard",
              "description" :"You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations."
            }
        
          ]
    },
    {
        "id": 3,
        "title": "Cleric",
        "desc": "Arms and eyes upraised toward the sun and a prayer on his lips, an elf begins to glow with an inner light that spills out to heal his battle-worn companions. Chanting a song of glory, a dwarf swings his axe in wide swaths to cut through the ranks of orcs arrayed against him, shouting praise to the gods with every foe’s fall. Calling down a curse upon the forces of undeath, a human lifts her holy symbol as light pours from it to drive back the zombies crowding in on her companions. Clerics are intermediaries between the mortal world and the distant planes of the gods. As varied as the gods they serve, clerics strive to embody the handiwork of their deities. No ordinary priest, a cleric is imbued with divine magic. Divine magic, as the name suggests, is the power of the gods, flowing from them into the world. Clerics are conduits for that power, manifesting it as miraculous effects. The gods don’t grant this power to everyone who seeks it, but only to those chosen to fulfill a high calling. Harnessing divine magic doesn’t rely on study or training. A cleric might learn formulaic prayers and ancient rites, but the ability to cast cleric spells relies on devotion and an intuitive sense of a deity’s wishes. Clerics combine the helpful magic of healing and inspiring their allies with spells that harm and hinder foes. They can provoke awe and dread, lay curses of plague or poison, and even call down flames from heaven to consume their enemies. For those evildoers who will benefit most from a mace to the head, clerics depend on their combat training to let them wade into melee with the power of the gods on their side.",
        "features": [
            {
              "name" : "Spellcasting: Cleric",
              "description" :"As a conduit for divine power, you can cast cleric spells."
            },
            {
              "name" : "Divine Domain",
              "description" :"Choose one domain related to your deity: Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Only the Life domain is detailed in the Open Game Licensed SRD. Additional Domains are described in the official rulebooks or products from other publishers.\n\nYour domain grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.",
            }
          ]
    },
    {
        "id": 4,
        "title": "Druid",
        "desc": "Holding high a gnarled staff wreathed with holly, an elf summons the fury of the storm and calls down explosive bolts of lightning to smite the torch-carrying orcs who threaten her forest. Crouching out of sight on a high tree branch in the form of a leopard, a human peers out of the jungle at the strange construction of a temple of Evil Elemental Air, keeping a close eye on the cultists’ activities. Swinging a blade formed of pure fire, a half-elf charges into a mass of skeletal soldiers, sundering the unnatural magic that gives the foul creatures the mocking semblance of life. Whether calling on the elemental forces of nature or emulating the creatures of the animal world, druids are an embodiment of nature’s resilience, cunning, and fury. They claim no mastery over nature. Instead, they see themselves as extensions of nature’s indomitable will.",
        "features": [
            {
              "name" : "Spellcasting: Druid",
              "description" :"Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will."
            },
            {
              "name" : "Druidic",
              "description" :"You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
            }
          ]
    },
    {
        "id": 5,
        "title": "Fighter",
        "desc": "A human in clanging plate armor holds her shield before her as she runs toward the massed goblins. An elf behind her, clad in studded leather armor, peppers the goblins with arrows loosed from his exquisite bow. The half-orc nearby shouts orders, helping the two combatants coordinate their assault to the best advantage. A dwarf in chain mail interposes his shield between the ogre’s club and his companion, knocking the deadly blow aside. His companion, a half-elf in scale armor, swings two scimitars in a blinding whirl as she circles the ogre, looking for a blind spot in its defenses. A gladiator fights for sport in an arena, a master with his trident and net, skilled at toppling foes and moving them around for the crowd’s delight — and his own tactical advantage. His opponent’s sword flares with blue light an instant before she sends lightning flashing forth to smite him. All of these heroes are fighters, perhaps the most diverse class of characters in the worlds of Dungeons & Dragons. Questing knights, conquering overlords, royal champions, elite foot soldiers, hardened mercenaries, and bandit kings — as fighters, they all share an unparalleled mastery with weapons and armor, and a thorough knowledge of the skills of combat. And they are well acquainted with death, both meting it out and staring it defiantly in the face.",
        "features": [
            {
              "name" : "Fighting Style",
              "description" :"You adopt a particular style of fighting as your specialty. Choose one of the following options. You can't take a Fighting Style option more than once, even if you later get to choose again."
            },
            {
              "name" : "Second Wind",
              "description" :"You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level. Once you use this feature, you must finish a short or long rest before you can use it again."
            }
        
          ]
    },
    {
        "id": 6,
        "title": "Monk",
        "desc": "Her fists a blur as they deflect an incoming hail of arrows, a half-elf springs over a barricade and throws herself into the massed ranks of hobgoblins on the other side. She whirls among them, knocking their blows aside and sending them reeling, until at last she stands alone. Taking a deep breath, a human covered in tattoos settles into a battle stance. As the first charging orcs reach him, he exhales and a blast of fire roars from his mouth, engulfing his foes. Moving with the silence of the night, a black-clad halfling steps into a shadow beneath an arch and emerges from another inky shadow on a balcony a stone’s throw away. She slides her blade free of its cloth-wrapped scabbard and peers through the open window at the tyrant prince, so vulnerable in the grip of sleep. Whatever their discipline, monks are united in their ability to magically harness the energy that flows in their bodies. Whether channeled as a striking display of combat prowess or a subtler focus of defensive ability and speed, this energy infuses all that a monk does.",
        "features": [
            {
              "name" : "Unarmored Defense",
              "description" :"Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
            },
            {
              "name" : "Martial Arts",
              "description" :"At 1st level, your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two- handed or heavy property.\n\nYou gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield:\n\nYou can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.\n\nYou can roll a d4 in place of the normal damage of your unarmed strike or monk weapon. This die changes as you gain monk levels, as shown in the Martial Arts column of Table: The Monk.\n\nWhen you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.\n\nCertain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama). Whatever name you use for a monk weapon, you can use the game statistics provided for the weapon."
            }
        
          ]
    },
    {
        "id": 7,
        "title": "Paladin",
        "desc": "Clad in plate armor that gleams in the sunlight despite the dust and grime of long travel, a human lays down her sword and shield and places her hands on a mortally wounded man. Divine radiance shines from her hands, the man’s wounds knit closed, and his eyes open wide with amazement. A dwarf crouches behind an outcrop, his black cloak making him nearly invisible in the night, and watches an orc war band celebrating its recent victory. Silently, he stalks into their midst and whispers an oath, and two orcs are dead before they even realize he is there. Silver hair shining in a shaft of light that seems to illuminate only him, an elf laughs with exultation. His spear flashes like his eyes as he jabs again and again at a twisted giant, until at last his light overcomes its hideous darkness. Whatever their origin and their mission, paladins are united by their oaths to stand against the forces of evil. Whether sworn before a god’s altar and the witness of a priest, in a sacred glade before nature spirits and fey beings, or in a moment of desperation and grief with the dead as the only witness, a paladin’s oath is a powerful bond. It is a source of power that turns a devout warrior into a blessed champion.",
        "features": [
            {
              "name" : "Divine Smite",
              "description" :"Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
            },
            {
              "name" : "Lay On Hands",
              "description" :"Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.\n\nAs an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.\n\nAlternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.\n\nThis feature has no effect on undead and constructs."
            }
        
          ]
    },
    {
        "id": 8,
        "title": "Ranger",
        "desc": "Rough and wild looking, a human stalks alone through the shadows of trees, hunting the orcs he knows are planning a raid on a nearby farm. Clutching a shortsword in each hand, he becomes a whirlwind of steel, cutting down one enemy after another. After tumbling away from a cone of freezing air, an elf finds her feet and draws back her bow to loose an arrow at the white dragon. Shrugging off the wave of fear that emanates from the dragon like the cold of its breath, she sends one arrow after another to find the gaps between the dragon’s thick scales. Holding his hand high, a half-elf whistles to the hawk that circles high above him, calling the bird back to his side. Whispering instructions in Elvish, he points to the owlbear he’s been tracking and sends the hawk to distract the creature while he readies his bow. Far from the bustle of cities and towns, past the hedges that shelter the most distant farms from the terrors of the wild, amid the dense-packed trees of trackless forests and across wide and empty plains, rangers keep their unending watch.",
        "features": [
            {
              "name" : "Favored Enemy",
              "description" :"At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit"
            },
            {
              "name" : "Natural Explorer",
              "description" :"You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, or swamp. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.\n\nWhile traveling for an hour or more in your favored terrain, you gain the following benefits:\n\nDifficult terrain doesn't slow your group's travel.\n\n Your group can't become lost except by magical means.\n\nEven when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.\n\nIf you are traveling alone, you can move stealthily at a normal pace.\n\nWhen you forage, you find twice as much food as you normally would.\n\nWhile tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.\n\nYou choose additional favored terrain types at 6th and 10th level."
            }
          ]
    },
    {
        "id": 9,
        "title": "Rogue",
        "desc": "Signaling for her companions to wait, a halfling creeps forward through the dungeon hall. She presses an ear to the door, then pulls out a set of tools and picks the lock in the blink of an eye. Then she disappears into the shadows as her fighter friend moves forward to kick the door open. A human lurks in the shadows of an alley while his accomplice prepares for her part in the ambush. When their target — a notorious slaver — passes the alleyway, the accomplice cries out, the slaver comes to investigate, and the assassin’s blade cuts his throat before he can make a sound. Suppressing a giggle, a gnome waggles her fingers and magically lifts the key ring from the guard’s belt. In a moment, the keys are in her hand, the cell door is open, and she and her companions are free to make their escape. Rogues rely on skill, stealth, and their foes’ vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem, demonstrating a resourcefulness and versatility that is the cornerstone of any successful adventuring party.",
        "features": [
            {
              "name" : "Expertise",
              "description" :"At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.\n\nAt 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit"
            },
            {
              "name" : "Sneak Attack",
              "description" :"Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.\n\nYou don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.\n\nThe amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
            }
        
          ]
    },
    {
        "id": 10,
        "title": "Sorceror",
        "desc": "Golden eyes flashing, a human stretches out her hand and unleashes the dragonfire that burns in her veins. As an inferno rages around her foes, leathery wings spread from her back and she takes to the air. Long hair whipped by a conjured wind, a half-elf spreads his arms wide and throws his head back. Lifting him momentarily off the ground, a wave of magic surges up in him, through him, and out from him in a mighty blast of lightning. Crouching behind a stalagmite, a halfling points a finger at a charging troglodyte. A blast of fire springs from her finger to strike the creature. She ducks back behind the rock formation with a grin, unaware that her wild magic has turned her skin bright blue. Sorcerers carry a magical birthright conferred upon them by an exotic bloodline, some otherworldly influence, or exposure to unknown cosmic forces. One can’t study sorcery as one learns a language, any more than one can learn to live a legendary life. No one chooses sorcery; the power chooses the sorcerer.",
        "features": [
            {
              "name" : "Dragon Ancestor",
              "description" :"At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.\n\nYou can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your proficiency bonus is doubled if it applies to the check."
            },
            {
              "name" : "Sorcerous Origin",
              "description" :"Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline or Wild Magic, both detailed at the end of the class description.\n\nYour choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
            }
        
          ]
    },
    {
        "id": 11,
        "title": "Warlock",
        "desc": "With a pseudodragon curled on his shoulder, a young elf in golden robes smiles warmly, weaving a magical charm into his honeyed words and bending the palace sentinel to his will. As flames spring to life in her hands, a wizened human whispers the secret name of her demonic patron, infusing her spell with fiendish magic. Shifting his gaze between a battered tome and the odd alignment of the stars overhead, a wild-eyed tiefling chants the mystic ritual that will open a doorway to a distant world. Warlocks are seekers of the knowledge that lies hidden in the fabric of the multiverse. Through pacts made with mysterious beings of supernatural power, warlocks unlock magical effects both subtle and spectacular. Drawing on the ancient knowledge of beings such as fey nobles, demons, devils, hags, and alien entities of the Far Realm, warlocks piece together arcane secrets to bolster their own power.",
        "features": [
            {
              "name" : "Otherworldly Patron",
              "description" :"At 1st level, you have struck a bargain with an otherworldly being of your choice: the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
            },
            {
              "name" : "Pact Magic",
              "description" :"Your arcane research and the magic bestowed on you by your patron have given you facility with spells."
            }
        
          ]
    },
    {
        "id": 12,
        "title": "Wizard",
        "desc": "Clad in the silver robes that denote her station, an elf closes her eyes to shut out the distractions of the battlefield and begins her quiet chant. Fingers weaving in front of her, she completes her spell and launches a tiny bead of fire toward the enemy ranks, where it erupts into a conflagration that engulfs the soldiers. Checking and rechecking his work, a human scribes an intricate magic circle in chalk on the bare stone floor, then sprinkles powdered iron along every line and graceful curve. When the circle is complete, he drones a long incantation. A hole opens in space inside the circle, bringing a whiff of brimstone from the otherworldly plane beyond. Crouching on the floor in a dungeon intersection, a gnome tosses a handful of small bones inscribed with mystic symbols, muttering a few words of power over them. Closing his eyes to see the visions more clearly, he nods slowly, then opens his eyes and points down the passage to his left. Wizards are supreme magic-users, defined and united as a class by the spells they cast. Drawing on the subtle weave of magic that permeates the cosmos, wizards cast spells of explosive fire, arcing lightning, subtle deception, and brute-force mind control. Their magic conjures monsters from other planes of existence, glimpses the future, or turns slain foes into zombies. Their mightiest spells change one substance into another, call meteors down from the sky, or open portals to other worlds.",
    "features": [
        {
          "name" : "Spellcasting: Wizard",
          "description" :"As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power."
        },
        {
          "name" : "Arcane Recovery",
          "description" :"You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.\n\nFor example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level spell slot or two 1st-level spell slots."
        }
    
      ]
    },
]

const raceJson = [
    {
        "id": 1,
        "title": "Dragonborn",
        "desc": "Born of dragons, as their name proclaims, the dragonborn walk proudly through a world that greets them with fearful incomprehension. Shaped by draconic gods or the dragons themselves, dragonborn originally hatched from dragon eggs as a unique race, combining the best attributes of dragons and humanoids. Some dragonborn are faithful servants to true dragons, others form the ranks of soldiers in great wars, and still others find themselves adrift, with no clear calling in life. Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built, often standing close to 6½ feet tall and weighing 300 pounds or more. Their hands and feet are strong, talonlike claws with three fingers and a thumb on each hand. The blood of a particular type of dragon runs very strong through some dragonborn clans. These dragonborn often boast scales that more closely match those of their dragon ancestor — bright red, green, blue, or white, lustrous black, or gleaming metallic gold, silver, brass, copper, or bronze.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 1,
        "abilityScoreImprovementName1": "strength",
        "abilityScoreImprovementName2": "charisma",
        "features": [
            {
              "name" : "Draconic Ancestry",
              "description" :"You have draconic ancestry. Choose one type of dragon from the Draconic Ancestry table. Your breath weapon and damage resistance are determined by the dragon type, as shown in the table.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Breath Weapon",
              "description" :"When you use your breath weapon, each creature in the area of the exhalation must make a saving throw, the type of which is determined by your draconic ancestry. The DC for this saving throw equals 8 + your Constitution modifier + your proficiency bonus. A creature takes 2d6 damage on a failed save, and half as much damage on a successful one. The damage increases to 3d6 at 6th level, 4d6 at 11th level, and 5d6 at 16th level. After you use your breath weapon, you cannot use it again until you complete a short or long rest.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 2,
        "title": "Dwarf",
        "desc": "Kingdoms rich in ancient grandeur, halls carved into the roots of mountains, the echoing of picks and hammers in deep mines and blazing forges, a commitment to clan and tradition, and a burning hatred of goblins and orcs — these common threads unite all dwarves. Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk. Dwarven skin ranges from deep brown to a paler hue tinged with red, but the most common shades are light brown or deep tan, like certain tones of earth. Their hair, worn long but in simple styles, is usually black, gray, or brown, though paler dwarves often have red hair. Male dwarves value their beards highly and groom them carefully. Dwarves can live to be more than 400 years old, so the oldest living dwarves often remember a very different world. For example, some of the oldest dwarves living in Citadel Felbarr (in the world of the Forgotten Realms) can recall the day, more than three centuries ago, when orcs conquered the fortress and drove them into an exile that lasted over 250 years. This longevity grants them a perspective on the world that shorter-lived races such as humans and halflings lack. Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change. They respect the traditions of their clans, tracing their ancestry back to the founding of their most ancient strongholds in the youth of the world, and don’t abandon those traditions lightly. Part of those traditions is devotion to the gods of the dwarves, who uphold the dwarven ideals of industrious labor, skill in battle, and devotion to the forge. Individual dwarves are determined and loyal, true to their word and decisive in action, sometimes to the point of stubbornness. Many dwarves have a strong sense of justice, and they are slow to forget wrongs they have suffered. A wrong done to one dwarf is a wrong done to the dwarf’s entire clan, so what begins as one dwarf’s hunt for vengeance can become a full-blown clan feud.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 0,
        "abilityScoreImprovementName1": "constitution",
        "abilityScoreImprovementName2": "none",
        "features": [
            {
              "name" : "Dwarven Resilience",
              "description" :"You have advantage on saving throws against poison, and you have resistance against poison damage.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Stonecunning",
              "description" :"Whenever you make an Intelligence (History) check related to the origin of stonework, you are considered proficient in the History skill and add double your proficiency bonus to the check, instead of your normal proficiency bonus.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 3,
        "title": "Elf",
        "desc": "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world. With their unearthly grace and fine features, elves appear hauntingly beautiful to humans and members of many other races. They are slightly shorter than humans on average, ranging from well under 5 feet tall to just over 6 feet. They are more slender than humans, weighing only 100 to 145 pounds. Males and females are about the same height, and males are only marginally heavier than females. Elves’ coloration encompasses the normal human range and also includes skin in shades of copper, bronze, and almost bluish-white, hair of green or blue, and eyes like pools of liquid gold or silver. Elves have no facial and little body hair. They favor elegant clothing in bright colors, and they enjoy simple yet lovely jewelry. Elves can live well over 700 years, giving them a broad perspective on events that might trouble the shorter-lived races more deeply. They are more often amused than excited, and more likely to be curious than greedy. They tend to remain aloof and unfazed by petty happenstance. When pursuing a goal, however, whether adventuring on a mission or learning a new skill or art, elves can be focused and relentless. They are slow to make friends and enemies, and even slower to forget them. They reply to petty insults with disdain and to serious insults with vengeance. Like the branches of a young tree, elves are flexible in the face of danger. They trust in diplomacy and compromise to resolve differences before they escalate to violence. They have been known to retreat from intrusions into their woodland homes, confident that they can simply wait the invaders out. But when the need arises, elves reveal a stern martial side, demonstrating skill with sword, bow, and strategy.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 0,
        "abilityScoreImprovementName1": "dexterity",
        "abilityScoreImprovementName2": "none",
        "features": [
            {
              "name" : "Fey Ancestry",
              "description" :"You have advantage on saving throws against being charmed, and magic cannot put you to sleep.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Trance",
              "description" :"Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 4,
        "title": "Gnome",
        "desc": "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. \n\nGnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play. A gnome’s energy and enthusiasm for living shines through every inch of his or her tiny body. Gnomes average slightly over 3 feet tall and weigh 40 to 45 pounds. Their tan or brown faces are usually adorned with broad smiles (beneath their prodigious noses), and their bright eyes shine with excitement. Their fair hair has a tendency to stick out in every direction, as if expressing the gnome’s insatiable interest in everything around. A gnome’s personality is writ large in his or her appearance. A male gnome’s beard, in contrast to his wild hair, is kept carefully trimmed but often styled into curious forks or neat points. A gnome’s clothing, though usually made in modest earth tones, is elaborately decorated with embroidery, embossing, or gleaming jewels. As far as gnomes are concerned, being alive is a wonderful thing, and they squeeze every ounce of enjoyment out of their three to five centuries of life. Humans might wonder about getting bored over the course of such a long life, and elves take plenty of time to savor the beauties of the world in their long years, but gnomes seem to worry that even with all that time, they can’t get in enough of the things they want to do and see. Gnomes speak as if they can’t get the thoughts out of their heads fast enough. Even as they offer ideas and opinions on a range of subjects, they still manage to listen carefully to others, adding the appropriate exclamations of surprise and appreciation along the way. Though gnomes love jokes of all kinds, particularly puns and pranks, they’re just as dedicated to the more serious tasks they undertake. Many gnomes are skilled engineers, alchemists, tinkers, and inventors. They’re willing to make mistakes and laugh at themselves in the process of perfecting what they do, taking bold (sometimes foolhardy) risks and dreaming large.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 0,
        "abilityScoreImprovementName1": "intelligence",
        "abilityScoreImprovementName2": "none",
        "features": [
            {
              "name" : "Gnome Cunning",
              "description" :"You have advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Darkvision",
              "description" :"You have superior vision in dark and dim conditions. You can see in dim light within 60 feet of you as if it were bright light, and in darkness as if it were dim light. You cannot discern color in darkness, only shades of gray.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 5,
        "title": "Half-Elf",
        "desc": "Walking in two worlds but truly belonging to neither, half-elves combine what some say are the best qualities of their elf and human parents: human curiosity, inventiveness, and ambition tempered by the refined senses, love of nature, and artistic tastes of the elves. Some half-elves live among humans, set apart by their emotional and physical differences, watching friends and loved ones age while time barely touches them. Others live with the elves, growing restless as they reach adulthood in the timeless elven realms, while their peers continue to live as children. Many half-elves, unable to fit into either society, choose lives of solitary wandering or join with other misfits and outcasts in the adventuring life. To humans, half-elves look like elves, and to elves, they look human. In height, they’re on par with both parents, though they’re neither as slender as elves nor as broad as humans. They range from under 5 feet to about 6 feet tall, and from 100 to 180 pounds, with men only slightly taller and heavier than women. Half-elf men do have facial hair, and sometimes grow beards to mask their elven ancestry. Half-elven coloration and features lie somewhere between their human and elf parents, and thus show a variety even more pronounced than that found among either race. They tend to have the eyes of their elven parents. Half-elves have no lands of their own, though they are welcome in human cities and somewhat less welcome in elven forests. In large cities in regions where elves and humans interact often, half-elves are sometimes numerous enough to form small communities of their own. They enjoy the company of other half-elves, the only people who truly understand what it is to live between these two worlds. In most parts of the world, though, half-elves are uncommon enough that one might live for years without meeting another. Some half-elves prefer to avoid company altogether, wandering the wilds as trappers, foresters, hunters, or adventurers and visiting civilization only rarely. Like elves, they are driven by the wanderlust that comes of their longevity. Others, in contrast, throw themselves into the thick of society, putting their charisma and social skills to great use in diplomatic roles or as swindlers.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 1,
        "abilityScoreImprovementName1": "charisma",
        "abilityScoreImprovementName2": "dexterity",
        "features": [
            {
              "name" : "Fey Ancestry",
              "description" :"You have advantage on saving throws against being charmed, and magic cannot put you to sleep.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Animal Handling",
              "description" :"When there is any question whether you can calm down a domesticated animal, keep a mount from getting spooked, or intuit an animal's intentions, the GM might call for a Wisdom (Animal Handling) check. You also make a Wisdom (Animal Handling) check to control your mount when you attempt a risky maneuver.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 6,
        "title": "Half-Orc",
        "desc": "Whether united under the leadership of a mighty warlock or having fought to a standstill after years of conflict, orc and human tribes sometimes form alliances, joining forces into a larger horde to the terror of civilized lands nearby. When these alliances are sealed by marriages, half-orcs are born. Some half-orcs rise to become proud chiefs of orc tribes, their human blood giving them an edge over their full-blooded orc rivals. Some venture into the world to prove their worth among humans and other more civilized races. Many of these become adventurers, achieving greatness for their mighty deeds and notoriety for their barbaric customs and savage fury. Half-orcs’ grayish pigmentation, sloping foreheads, jutting jaws, prominent teeth, and towering builds make their orcish heritage plain for all to see. Half-orcs stand between 5 and 7 feet tall and usually weigh between 180 and 250 pounds. Orcs regard battle scars as tokens of pride and ornamental scars as things of beauty. Other scars, though, mark an orc or half-orc as a former slave or a disgraced exile. Any half-orc who has lived among or near orcs has scars, whether they are marks of humiliation or of pride, recounting their past exploits and injuries. Such a half-orc living among humans might display these scars proudly or hide them in shame. The one-eyed god Gruumsh created the orcs, and even those orcs who turn away from his worship can’t fully escape his influence. The same is true of half-orcs, though their human blood moderates the impact of their orcish heritage. Some half-orcs hear the whispers of Gruumsh in their dreams, calling them to unleash the rage that simmers within them. Others feel Gruumsh’s exultation when they join in melee combat — and either exult along with him or shiver with fear and loathing. Half-orcs are not evil by nature, but evil does lurk within them, whether they embrace it or rebel against it. Beyond the rage of Gruumsh, half-orcs feel emotion powerfully. Rage doesn’t just quicken their pulse, it makes their bodies burn. An insult stings like acid, and sadness saps their strength. But they laugh loudly and heartily, and simple bodily pleasures — feasting, drinking, wrestling, drumming, and wild dancing — fill their hearts with joy. They tend to be short-tempered and sometimes sullen, more inclined to action than contemplation and to fighting than arguing. The most accomplished half-orcs are those with enough self-control to get by in a civilized land. Half-orcs most often live among orcs. Of the other races, humans are most likely to accept half-orcs, and half-orcs almost always live in human lands when not living among orc tribes. Whether proving themselves among rough barbarian tribes or scrabbling to survive in the slums of larger cities, half-orcs get by on their physical might, their endurance, and the sheer determination they inherit from their human ancestry.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 1,
        "abilityScoreImprovementName1": "strength",
        "abilityScoreImprovementName2": "constitution",
        "features": [
            {
              "name" : "Savage Attacks",
              "description" :"When you score a critical hit with a melee weapon attack, you can roll one of the weapon's damage dice one additional time and add it to the extra damage of the critical hit.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Trance",
              "description" :"Elves do not need to sleep. Instead, they meditate deeply, remaining semiconscious, for 4 hours a day. (The Common word for such meditation is \"trance.\") While meditating, you can dream after a fashion; such dreams are actually mental exercises that have become reflexive through years of practice. After resting this way, you gain the same benefit that a human does from 8 hours of sleep.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 7,
        "title": "Halfling",
        "desc": "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along an dirt road or a raft floating downriver. The diminutive halflings survive in a world full of larger creatures by avoiding notice or, barring that, avoiding offense. Standing about 3 feet tall, they appear relatively harmless and so have managed to survive for centuries in the shadow of empires and on the edges of wars and political strife. They are inclined to be stout, weighing between 40 and 45 pounds. Halflings’ skin ranges from tan to pale with a ruddy cast, and their hair is usually brown or sandy brown and wavy. They have brown or hazel eyes. Halfling men often sport long sideburns, but beards are rare among them and mustaches even more so. They like to wear simple, comfortable, and practical clothes, favoring bright colors. Halfling practicality extends beyond their clothing. They’re concerned with basic needs and simple pleasures and have little use for ostentation. Even the wealthiest of halflings keep their treasures locked in a cellar rather than on display for all to see. They have a knack for finding the most straightforward solution to a problem, and have little patience for dithering. Halflings are an affable and cheerful people. They cherish the bonds of family and friendship as well as the comforts of hearth and home, harboring few dreams of gold or glory. Even adventurers among them usually venture into the world for reasons of community, friendship, wanderlust, or curiosity. They love discovering new things, even simple things, such as an exotic food or an unfamiliar style of clothing. Halflings are easily moved to pity and hate to see any living thing suffer. They are generous, happily sharing what they have even in lean times.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 0,
        "abilityScoreImprovementName1": "dexterity",
        "abilityScoreImprovementName2": "none",
        "features": [
            {
              "name" : "Brave",
              "description" :"You have advantage on saving throw against being frightened.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Halfling Nimbleness",
              "description" :"You can move through the space of any creature that is of a size larger than yours.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 8,
        "title": "Human",
        "desc": "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds. With their penchant for migration and conquest, humans are more physically diverse than other common races. There is no typical human. An individual can stand from 5 feet to a little over 6 feet tall and weigh from 125 to 250 pounds. Human skin shades range from nearly black to very pale, and hair colors from black to blond (curly, kinky, or straight); males might sport facial hair that is sparse or thick. A lot of humans have a dash of nonhuman blood, revealing hints of elf, orc, or other lineages. Humans reach adulthood in their late teens and rarely live even a single century. Humans are the most adaptable and ambitious people among the common races. They have widely varying tastes, morals, and customs in the many different lands where they have settled. When they settle, though, they stay: they build cities to last for the ages, and great kingdoms that can persist for long centuries. An individual human might have a relatively short life span, but a human nation or culture preserves traditions with origins far beyond the reach of any single human’s memory. They live fully in the present — making them well suited to the adventuring life — but also plan for the future, striving to leave a lasting legacy. Individually and as a group, humans are adaptable opportunists, and they stay alert to changing political and social dynamics.",
        "abilityScoreImprovement1": 1,
        "abilityScoreImprovement2": 1,
        "abilityScoreImprovementName1": "strength",
        "abilityScoreImprovementName2": "dexterity",
        "features": [
            {
              "name" : "Languages",
              "description" :"You can speak, read, and write Common and one extra language of your choice. HUmans typically learn the languages of other peoples they deal with, including obscure dialects.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Ability Score Increase",
              "description" :"Your ability scores each increase by one.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
    {
        "id": 9,
        "title": "Tiefling",
        "desc": "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus — overlord of the Nine Hells — into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable. Tieflings are derived from human bloodlines, and in the broadest possible sense, they still look human. However, their infernal heritage has left a clear imprint on their appearance. Tieflings have large horns that take any of a variety of shapes: some have curling horns like a ram, others have straight and tall horns like a gazelle’s, and some spiral upward like an antelopes’ horns. They have thick tails, four to five feet long, which lash or coil around their legs when they get upset or nervous. Their canine teeth are sharply pointed, and their eyes are solid colors — black, red, white, silver, or gold — with no visible sclera or pupil. Their skin tones cover the full range of human coloration, but also include various shades of red. Their hair, cascading down from behind their horns, is usually dark, from black or brown to dark red, blue, or purple. Tieflings subsist in small minorities found mostly in human cities or towns, often in the roughest quarters of those places, where they grow up to be swindlers, thieves, or crime lords. Sometimes they live among other minority populations in enclaves where they are treated with more respect. Lacking a homeland, tieflings know that they have to make their own way in the world and that they have to be strong to survive. They are not quick to trust anyone who claims to be a friend, but when a tiefling’s companions demonstrate that they trust him or her, the tiefling learns to extend the same trust to them. And once a tiefling gives someone loyalty, the tiefling is a firm friend or ally for life.",
        "abilityScoreImprovement1": 2,
        "abilityScoreImprovement2": 0,
        "abilityScoreImprovementName1": "dexterity",
        "abilityScoreImprovementName2": "none",
        "features": [
            {
              "name" : "Hellish Resistance",
              "description" :"You have resistance to fire damage.",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "Infernal Legacy",
              "description" :"You know the thaumaturgy cantrip. When you reach 3rd level, you can cast the hellish rebuke spell as a 2nd-level spell once with this trait and regain the ability to do so when you finish a long rest. When you reach 5th level, you can cast the darkness spell once with this trait and regain the ability to do so when you finish a long rest. Charisma is your spellcasting ability for these spells.",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ],
    },
]

const backgroundJson = [
    {
        "id": 1,
        "title": "Acolyte",
        "desc": "You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary between the realm of the holy and the mortal world, performing sacred rites and offering sacrifices in order to conduct worshipers into the presence of the divine. You are not necessarily a cleric — performing sacred rites is not the same thing as channeling divine power. Choose a god, a pantheon of gods, or some other quasi-divine being and work with your DM to detail the nature of your religious service. Were you a lesser functionary in a temple, raised from childhood to assist the priests in the sacred rites? Or were you a high priest who suddenly experienced a call to serve your god in a different way? Perhaps you were the leader of a small cult outside of any established temple structure, or even an occult group that served a fiendish master that you now deny.",
        "features" : [
            {
              "name" : "Shelter of the Faithful",
              "description" :"As an acolyte, you command the respect of those who share your faith, and you can perform the religious ceremonies of your deity. You and your adventuring companions can expect to receive free healing and care at a temple, shrine, or other established presence of your faith, though you must provide any material components needed for spells. Those who share your religion will support you (but only you) at a modest lifestyle.\n\nYou might also have ties to a specific temple dedicated to your chosen deity or pantheon, and you have a residence there. This could be the temple where you used to serve, if you remain on good terms with it, or a temple where you have found a new home. While near your temple, you can call upon the priests for assistance, provided the assistance you ask for is not hazardous and you remain in good standing with your temple."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 2,
        "title": "Charlatan",
        "desc": "You have always had a way with people. You know what makes them tick, you can tease out their hearts' desires after a few minutes of conversation, and with a few leading questions you can read them like they were children's books. It's a useful talent, and one that you're perfectly willing to use for your advantage. You know what people want and you deliver, or rather, you promise to deliver. Common sense should steer people away from things that sound too good to be true, but common sense seems to be in short supply when you're around. The bottle of pink colored liquid will surely cure that unseemly rash, this ointment – nothing more than a bit of fat with a sprinkle of silver dust can restore youth and vigor, and there's a bridge in the city that just happens to be for sale. These marvels sound implausible, but you make them sound like the real deal.",
        "features" : [
            {
              "name" : "False Identity",
              "description" :"You have created a second identity that includes documentation, established acquaintances, and disguises that allow you to assume that persona. Additionally, you can forge documents including official papers and personal letters, as long as you have seen an example of the kind of document or the handwriting you are trying to copy."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 3,
        "title": "Criminal",
        "desc": "You are an experienced criminal with a history of breaking the law. You have spent a lot of time among other criminals and still have contacts within the criminal underworld. You’re far closer than most people to the world of murder, theft, and violence that pervades the underbelly of civilization, and you have survived up to this point by flouting the rules and regulations of society.",
        "features" : [
            {
              "name" : "Criminal Contact",
              "description" :"You have a reliable and trustworthy contact who acts as your liaison to a network of other criminals. You know how to get messages to and from your contact, even over great distances; specifically, you know the local messengers, corrupt caravan masters, and seedy sailors who can deliver messages for you."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 4,
        "title": "Entertainer",
        "desc": "You thrive in front of an audience. You know how to entrance them, entertain them, and even inspire them. Your poetics can stir the hearts of those who hear you, awakening grief or joy, laughter or anger. Your music raises their spirits or captures their sorrow. Your dance steps captivate, your humor cuts to the quick. Whatever techniques you use, your art is your life.",
        "features" : [
            {
              "name" : "By Popular Demand",
              "description" :"You can always find a place to perform, usually in an inn or tavern but possibly with a circus, at a theater, or even in a noble's court. At such a place, you receive free lodging and food of a modest or comfortable standard (depending on the quality of the establishment), as long as you perform each night. In addition, your performance makes you something of a local figure. When strangers recognize you in a town where you have performed, they typically take a liking to you."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 5,
        "title": "Folk Hero",
        "desc": "You come from a humble social rank, but you are destined for so much more. Already the people of your home village regard you as their champion, and your destiny calls you to stand against the tyrants and monsters that threaten the common folk everywhere.",
        "features" : [
            {
              "name" : "Rustic Hospitality",
              "description" :"Since you come from the ranks of the common folk, you fit in among them with ease. You can find a place to hide, rest, or recuperate among other commoners, unless you have shown yourself to be a danger to them. They will shield you from the law or anyone else searching for you, though they will not risk their lives for you."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 6,
        "title": "Guild Artisan",
        "desc": "You are a member of an artisan's guild, skilled in a particular field and closely associated with other artisans. You are a well-established part of the mercantile world, freed by talent and wealth from the constraints of a feudal social order. You learned your skills as an apprentice to a master artisan, under the sponsorship of your guild, until you became a master in your own right.",
        "features" : [
            {
              "name" : "Guild Membership",
              "description" :"As an established and respected member of a guild, you can rely on certain benefits that membership provides. Your fellow guild members will provide you with lodging and food if necessary, and pay for your funeral if needed. In some cities and towns, a guildhall offers a central place to meet other members of your profession, which can be a good place to meet potential patrons, allies, or hirelings. Guilds often wield tremendous political power. If you are accused of a crime, your guild will support you if a good case can be made for your innocence or the crime is justifiable. You can also gain access to powerful political figures through the guild, if you are a member in good standing. Such connections might require the donation of money or magic items to the guild's coffers. You must pay dues of 5 gp per month to the guild. If you miss payments, you must make up back dues to remain in the guild's good graces."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 7,
        "title": "Hermit",
        "desc": "You lived in seclusion – either in a sheltered community such as a monastery, or entirely alone – for a formative part of your life. In your time apart from the clamor of society, you found quiet, solitude, and perhaps some of the answers you were looking for.",
        "features" : [
            {
              "name" : "Hermit",
              "description" :"The quiet seclusion of your extended hermitage gave you access to a unique and powerful discovery. The exact nature of this revelation depends on the nature of your seclusion. It might be a great truth about the cosmos, the deities, the powerful beings of the outer planes, or the forces of nature. It could be a site that no one else has ever seen. You might have uncovered a fact that has long been forgotten, or unearthed some relic of the past that could rewrite history. It might be information that would be damaging to the people who or consigned you to exile, and hence the reason for your return to society. Work with your DM to determine the details of your discovery and its impact on the campaign."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 8,
        "title": "Noble",
        "desc": "You understand wealth, power, and privilege. You carry a noble title, and your family owns land, collects taxes, and wields significant political influence. You might be a pampered aristocrat unfamiliar with work or discomfort, a former merchant just elevated to the nobility, or a disinherited scoundrel with a disproportionate sense of entitlement. Or you could be an honest, hard-working landowner who cares deeply about the people who live and work on your land, keenly aware of your responsibility to them. Work with your DM to come up with an appropriate title and determine how much authority that title carries. A noble title doesn’t stand on its own — it’s connected to an entire family, and whatever title you hold, you will pass it down to your own children. Not only do you need to determine your noble title, but you should also work with the DM to describe your family and their influence on you.",
        "features" : [
            {
              "name" : "Position of Privilege",
              "description" :"Thanks to your noble birth, people are inclined to think the best of you. You are welcome in high society, and people assume you have the right to be wherever you are. The common folk make every effort to accommodate you and avoid your displeasure, and other people of high birth treat you as a member of the same social sphere. You can secure an audience with a local noble if you need to."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 9,
        "title": "Outlander",
        "desc": "You grew up in the wilds, far from civilization and the comforts of town and technology. You've witnessed the migration of herds larger than forests, survived weather more extreme than any city-dweller could comprehend, and enjoyed the solitude of being the only thinking creature for miles in any direction. The wilds are in your blood, whether you were a nomad, an explorer, a recluse, a hunter-gatherer, or even a marauder. Even in places where you don't know the specific features of the terrain, you know the ways of the wild.",
        "features" : [
            {
              "name" : "Outlander",
              "description" :"You have an excellent memory for maps and geography, and you can always recall the general layout of terrain, settlements, and other features around you. In addition, you can find food and fresh water for yourself and up to five other people each day, provided that the land offers berries, small game, water, and so forth."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 10, 
        "title": "Sage",
        "desc": "You spent years learning the lore of the multiverse. You scoured manuscripts, studied scrolls, and listened to the greatest experts on the subjects that interest you. Your efforts have made you a master in your fields of study.",
        "features" : [
            {
              "name" : "Researcher",
              "description" :"The lifestyle of an adventurer was never really to your suiting. Your friends went off and fought dragons and pixies; whatever took their fancy. But not you. You found interest in the smaller details of life. Why does this stone have this particular mark on it? Where on earth is this item or information found? You have dedicated your life to the much humbler lifestyle of finding these mysteries and then answering them. You are a researcher! Why do you prefer this opposed to adventuring? Do you find the ideals of adventuring too dangerous, or too boring? Do you see yourself as an Indiana Jones character? What do you study? Why do you want to study it? Does it relate to your parents' professions or are your simply seeking power through knowledge?"
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 11,
        "title": "Sailor", 
        "desc": "You sailed on a seagoing vessel for years. In that time, you faced down mighty storms, monsters of the deep, and those who wanted to sink your craft to the bottomless depths. Your first love is the distant line of the horizon, but the time has come to try your hand at something new. Discuss the nature of the ship you previously sailed with your DM. Was it a merchant ship, a naval vessel, a ship of discovery, or a pirate ship? How famous (or infamous) is it? Is it widely traveled? Is it still sailing, or is it missing and presumed lost with all hands? What were your duties on board – boatswain, captain, navigator, cook, or some other position? Who were the captain and first mate? Did you leave your ship on good terms with your fellows, or on the run?",
        "features" : [
            {
              "name" : "Ship's Passage",
              "description" :"When you need to, you can secure free passage on a sailing ship for yourself and your adventuring companions. You might sail on the ship you served on, or another ship you have good relations with (perhaps one captained by a former crewmate). Because you're calling in a favor, you can't be certain of a schedule or route that will meet your every need. Your DM will determine how long it takes to get where you need to go. In return for your free passage, you and your companions are expected to assist the crew during the voyage."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 12,
        "title": "Soldier",
        "desc": "War has been your life for as long as you care to remember. You trained as a youth, studied the use of weapons and armor, learned basic survival techniques, including how to stay alive on the battlefield. You might have been part of a standing national army or a mercenary company, or perhaps a member of a local militia who rose to prominence during a recent war. When you choose this background, work with your DM to determine which military organization you were a part of, how far through its ranks you progressed, and what kind of experiences you had during your military career. Was it a standing army, a town guard, or a village militia? Or it might have been a noble’s or merchant’s private army, or a mercenary company.",
        "features" : [
            {
              "name" : "Military Rank",
              "description" :"You have a military rank from your career as a soldier. Soldiers loyal to your former military organization still recognize your authority and influence, and they defer to you if they are of a lower rank. You can invoke your rank to exert influence over other soldiers and requisition simple equipment or horses for temporary use. You can also usually gain access to friendly military encampments and fortresses where your rank is recognized."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
    {
        "id": 13,
        "title": "Urchin",
        "desc": "You grew up on the streets alone, orphaned, and poor, You had no one to watch over you or to provide for you, so you learned to provide for yourself. You fought fiercely over food and kept a constant watch out for other desperate souls who might steal from you. You slept on rooftops and in alleyways, exposed to the elements, and endured sickness without the advantage of medicine or a place to recuperate. You've survived despite all odds, and did so through cunning, strength, speed, or some combination of each. You begin your adventuring career with enough money to live modestly but securely for at least ten days. How did you come by that money? What allowed you to break free of your desperate circumstances and embark on a better life?",
        "features" : [
            {
              "name" : "City Secrets",
              "description" :"You know the secret patterns and flow to cities and can find passages through the urban sprawl that others would miss. When you are not in combat, you (and companions you lead) can travel between any two locations in the city twice as fast as your speed would normally allow."
            },
            {
              "name" : "Speed reading",
              "description" : "get 'er don"
            }
          ]
    },
]

export {raceJson, backgroundJson, classJson}
