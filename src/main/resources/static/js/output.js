import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";

function displayOutputView(mainContainerEl, currentCharacter) {
    console.log(currentCharacter);
    displayHeader(mainContainerEl);

    //making all fields and content for Character page

    const mainContentDivEl = document.createElement("div");
    mainContentDivEl.classList.add("mainContentDiv");

    const outputHeaderEl = document.createElement("h1");
    outputHeaderEl.classList.add("outputHeader");
    outputHeaderEl.innerText = "Dungeons & Dragons";

    const outputDivEl = document.createElement("div");
    outputDivEl.classList.add("outputDiv");

    // Base Features Div

    const nameLabelEl = document.createElement("h3");
    nameLabelEl.innerText = "Name";

    const nameOutputDivEl = document.createElement("div");
    nameOutputDivEl.classList.add("outputDiv");
    
    const nameOutputEl = document.createElement("h4");
    nameOutputEl.innerText = currentCharacter.baseFeatures.name;

    nameOutputDivEl.append(nameOutputEl);

    // Class Features Div

    const classLabelEl = document.createElement("h3");
    classLabelEl.innerText = "Class";

    const classOutputDivEl = document.createElement("div");
    classOutputDivEl.classList.add("outputDiv");
    
    const classOutputEl = document.createElement("h4");
    classOutputEl.innerText = currentCharacter.dndClass.name;

    classOutputDivEl.append(classOutputEl);

    // Background Features Div
    const backgroundOutputDivEl = document.createElement("div");
    backgroundOutputDivEl.classList.add("outputDiv");

    const backgroundLabelEl = document.createElement("h3");
    backgroundLabelEl.innerText = "Background";
     
    const backgroundOutputEl = document.createElement("h4");
    backgroundOutputEl.innerText = currentCharacter.background.name;
    
    
    
    backgroundOutputDivEl.append(backgroundOutputEl);


    // Race Features Div 

    const raceEl = document.createElement("h3");
    raceEl.innerText = "Race";

    const raceOutputDivEl = document.createElement("div");
    raceOutputDivEl.classList.add("outputDiv");
    
    const raceOutputEl = document.createElement("h4");
    raceOutputEl.innerText = currentCharacter.race.name;

    raceOutputDivEl.append(raceOutputEl);


// NEEDS TO BE APPENDED AND ADDED TO BASE 
    const levelEl = document.createElement("h3");
    levelEl.innerText = "Level";

    const levelOutputDivEl = document.createElement("div");
    levelOutputDivEl.classList.add("outputDiv");
    
    const levelOutputEl = document.createElement("h4");
    levelOutputEl.innerText = currentCharacter.baseFeatures.level;

    levelOutputDivEl.append(levelOutputEl);

    const alignmentEl = document.createElement("h3");
    alignmentEl.innerText = "Alignment";

    const alignmentOutputDivEl = document.createElement("div");
    alignmentOutputDivEl.classList.add("outputDiv");
    
    const alignmentOutputEl = document.createElement("h4");
    alignmentOutputEl.innerText = currentCharacter.baseFeatures.alignment;

    alignmentOutputDivEl.append(alignmentOutputEl);


// EXPERIENCE POINTS LIKELY REMOVED 
    const experiencePointsEl = document.createElement("h3");
    experiencePointsEl.innerText = "Experience Points";

    const experiencePointsOutputDivEl = document.createElement("div");
    experiencePointsOutputDivEl.classList.add("outputDiv");
    
    const experiencePointsOutputEl = document.createElement("h4");
    experiencePointsOutputEl.innerText = currentCharacter.baseFeatures.experiencePoints;

    experiencePointsOutputDivEl.append(experiencePointsOutputEl);
// ********************************************************************

    const bonusEl = document.createElement("h3");
    bonusEl.innerText = "Proficiency Bonus";

    const bonusOutputDivEl = document.createElement("div");
    bonusOutputDivEl.classList.add("outputDiv");
    
    const bonusOutputEl = document.createElement("h4");
    bonusOutputEl.innerText = currentCharacter.baseFeatures.proficiencyBonus;

    bonusOutputDivEl.append(bonusOutputEl);

    const hpEl = document.createElement("h3");
    hpEl.innerText = "Hit Points";

    const hpOutputDivEl = document.createElement("div");
    hpOutputDivEl.classList.add("outputDiv");
    
    const hpOutputEl = document.createElement("h4");
    hpOutputEl.innerText = "Hit Points placeholder";

    hpOutputDivEl.append(hpOutputEl);
    
    //creating ability scores output elements

    const abilitiesDivEl = document.createElement("div");
    abilitiesDivEl.classList.add("abilitiesDiv");

    const abilitiesTitleEl = document.createElement("h4");
    abilitiesTitleEl.classList.add("abilitiesTitle");
    abilitiesTitleEl.innerText = "Ability Scores";

    const strDivEl = document.createElement("div");
    strDivEl.classList.add("abilityDiv");

    const strTitleEl = document.createElement("h4");
    strTitleEl.classList.add("abilityTitle");
    strTitleEl.innerText = "Strength";

    const strOutputEl = document.createElement("h3");
    strOutputEl.innerText = currentCharacter.abilityScores.strength;

    strDivEl.append(strTitleEl);
    strDivEl.append(strOutputEl);

    const dexDivEl = document.createElement("div");
    dexDivEl.classList.add("abilityDiv");

    const dexTitleEl = document.createElement("h4");
    dexTitleEl.classList.add("abilityTitle");
    dexTitleEl.innerText = "Dexterity";

    const dexOutputEl = document.createElement("h3");
    dexOutputEl.innerText = currentCharacter.abilityScores.dexterity;

    dexDivEl.append(dexTitleEl);
    dexDivEl.append(dexOutputEl);

    const conDivEl = document.createElement("div");
    conDivEl.classList.add("abilityDiv");

    const conTitleEl = document.createElement("h4");
    conTitleEl.classList.add("abilityTitle");
    conTitleEl.innerText = "Constitution";

    const conOutputEl = document.createElement("h3");
    conOutputEl.innerText = currentCharacter.abilityScores.constitution;

    conDivEl.append(conTitleEl);
    conDivEl.append(conOutputEl);

    const intDivEl = document.createElement("div");
    intDivEl.classList.add("abilityDiv");

    const intTitleEl = document.createElement("h4");
    intTitleEl.classList.add("abilityTitle");
    intTitleEl.innerText = "Intelligence";

    const intOutputEl = document.createElement("h3");
    intOutputEl.innerText = currentCharacter.abilityScores.intelligence;

    intDivEl.append(intTitleEl);
    intDivEl.append(intOutputEl);

    const wisDivEl = document.createElement("div");
    wisDivEl.classList.add("abilityDiv");

    const wisTitleEl = document.createElement("h4");
    wisTitleEl.classList.add("abilityTitle");
    wisTitleEl.innerText = "Wisdom";

    const wisOutputEl = document.createElement("h3");
    wisOutputEl.innerText = currentCharacter.abilityScores.wisdom;

    wisDivEl.append(wisTitleEl);
    wisDivEl.append(wisOutputEl);

    const chaDivEl = document.createElement("div");
    chaDivEl.classList.add("abilityDiv");

    const chaTitleEl = document.createElement("h4");
    chaTitleEl.classList.add("abilityTitle");
    chaTitleEl.innerText = "Charisma";

    const chaOutputEl = document.createElement("h3");
    chaOutputEl.innerText = currentCharacter.abilityScores.charisma;

    chaDivEl.append(chaTitleEl);
    chaDivEl.append(chaOutputEl);

    abilitiesDivEl.append(abilitiesTitleEl);
    abilitiesDivEl.append(strDivEl);
    abilitiesDivEl.append(dexDivEl);
    abilitiesDivEl.append(conDivEl);
    abilitiesDivEl.append(intDivEl);
    abilitiesDivEl.append(wisDivEl);
    abilitiesDivEl.append(chaDivEl);

    // append these to the top

    outputDivEl.append(nameLabelEl);
    outputDivEl.append(nameOutputDivEl);
    outputDivEl.append(classLabelEl);
    outputDivEl.append(classOutputEl);
    outputDivEl.append(backgroundLabelEl);
    outputDivEl.append(backgroundOutputEl);
    outputDivEl.append(raceEl);
    outputDivEl.append(raceOutputDivEl);
    outputDivEl.append(levelEl);
    outputDivEl.append(levelOutputDivEl);
    outputDivEl.append(alignmentEl);
    outputDivEl.append(alignmentOutputDivEl);
    outputDivEl.append(experiencePointsEl);
    outputDivEl.append(experiencePointsOutputDivEl);
    outputDivEl.append(bonusEl);
    outputDivEl.append(bonusOutputDivEl);
    outputDivEl.append(hpEl);
    outputDivEl.append(hpOutputDivEl);
    outputDivEl.append(abilitiesDivEl);

    mainContentDivEl.append(outputHeaderEl);
    mainContentDivEl.append(outputDivEl);

    mainContainerEl.append(mainContentDivEl);

   const proficiencyBonusEl = document.createElement("h3");
    proficiencyBonusEl.innerText = "Proficiency Bonus";

    const strengthEl = document.createElement("h3");
    strengthEl.innerText = "Strength";

    const dexterityEl = document.createElement("h3");
    dexterityEl.innerText = "Dexterity";

    const constitutionEl = document.createElement("h3");
    constitutionEl.innerText = "Constitution";

    const intelligenceEl = document.createElement("h3");
    intelligenceEl.innerText = "Intelligence";

    const wisdomEl = document.createElement("h3");
    wisdomEl.innerText = "Wisdom";

    const charismaEl = document.createElement("h3");
    charismaEl.innerText = "Charisma";

    displayFooter(mainContainerEl);

}

export {displayOutputView}


