import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";

function displayOutputView(mainContainerEl, currentCharacter) {

    displayHeader(mainContainerEl);

    //making all fields and content for Character page

    const mainContentDivEl = document.createElement("div");
    mainContentDivEl.classList.add("mainContentDiv");

    const outputHeaderEl = document.createElement("h1");
    outputHeaderEl.classList.add("outputHeader");
    outputHeaderEl.innerText = "Dungeons & Dragons";

    const outputDivEl = document.createElement("div");
    outputDivEl.classList.add("outputDiv");

    const nameLabelEl = document.createElement("h3");
    nameLabelEl.innerText = "Name";

    const nameLabelInputEl = document.createElement("input");
    nameLabelEl.type = "text";
    nameLabelEl.placeholder = "Name";

    const nameFieldEl = document.createElement("h3");
    nameFieldEl.innerText = "Character Name";

    const nameFieldInputEl = document.createElement("input");
    nameFieldEl.type = "text";
    nameFieldEl.placeholder = "Character Name";

    const classLevelEl = document.createElement("h3");
    classLevelEl.innerText = "Class & Level";

    const classLevelInputEl = document.createElement("input");
    classLevelEl.type = "text";
    classLevelEl.placeholder = "Class & Level";

    const backgroundEl = document.createElement("h3");
    backgroundEl.innerText = "Background";

    const backgroundInputEl = document.createElement("input");
    backgroundEl.type = "number";
    backgroundEl.placeholder = "Choose 1";

    const playerNameEl = document.createElement("h3");
    playerNameEl.innerText = "Player Name";
    
    const playerNameInputEl = document.createElement("input");
    playerNameEl.type = "text";
    playerNameEl.placeholder = "Player Name";

    const raceEl = document.createElement("h3");
    raceEl.innerText = "Race";

    const raceInputEl = document.createElement("input");
    raceEl.type = "text";
    raceEl.placeholder = "Race";

    const alignmentEl = document.createElement("h3");
    alignmentEl.innerText = "Alignment";

    const alignmentInputEl = document.createElement("input");
    alignmentEl.type = "text";
    alignmentEl.placeholder = "Alingment";

    const experiencePointsEl = document.createElement("h3");
    experiencePointsEl.innerText = "Experience Points";

    const experiencePointsInputEl = document.createElement("input");
    experiencePointsEl.type = "text";
    experiencePointsEl.placeholder = "Experience Points";

    // append these to the top

    outputDivEl.append(nameLabelEl);
    outputDivEl.append(nameLabelInputEl);
    outputDivEl.append(nameFieldEl);
    outputDivEl.append(nameFieldInputEl);
    outputDivEl.append(classLevelEl);
    outputDivEl.append(classLevelInputEl);
    outputDivEl.append(backgroundEl);
    outputDivEl.append(backgroundInputEl);
    outputDivEl.append(playerNameEl);
    outputDivEl.append(playerNameInputEl);
    outputDivEl.append(raceEl);
    outputDivEl.append(raceInputEl);
    outputDivEl.append(alignmentEl);
    outputDivEl.append(alignmentInputEl);
    outputDivEl.append(experiencePointsEl);
    outputDivEl.append(experiencePointsInputEl);

    mainContentDivEl.append(outputHeaderEl);
    mainContentDivEl.append(outputDivEl);

    mainContainerEl.append(mainContentDivEl);

   const proficiencyBonusEl = document.createElement("h3");
    proficiencyBonusEl.innerText = "Proficiency Bonus";

    const strengthEl = document.createElement("h3");
    strengthEl.iinnerText = "Strength";

    const dexterityEl = document.createElement("h3");
    dexterityEl.iinnerText = "Dexterity";

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


