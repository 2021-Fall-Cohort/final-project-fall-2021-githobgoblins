import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import { displayRaceView } from "./race.js";
import {displayOutputView} from "./output.js";

function displayAbilitiesView(mainContainerEl, currentCharacter) {

    displayHeader(mainContainerEl);

    //creating arrays for button to cycle through

    const fifteen = 15;
    const fourteen = 14;
    const thirteen = 13;
    const twelve = 12;
    const ten = 10;
    const eight = 8;

    let scores = [fifteen, fourteen, thirteen, twelve, ten, eight];

    let abilityNames = ["Strength", "Dexterity", "Constituion", "Wisdom", "Intelligence", "Charisma"];

    //creating html elements to select ability scores

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("abilityMainContentDiv");

    const abilitiesDiv = document.createElement("div");
    abilitiesDiv.classList.add("abilitiesViewDiv");

    const defaultDivEl = document.createElement("div");
    defaultDivEl.classList.add("abilitySelectDiv");

    const defaultTitleEl = document.createElement("h4");
    defaultTitleEl.classList.add("abilityTitle");
    defaultTitleEl.innerText = abilityNames[0];

    const defaultInputEl = document.createElement("select");
    defaultInputEl.classList.add("abilitySelect");

    const abilityButtonEl = document.createElement("button");
    abilityButtonEl.classList.add("abilityButton");
    abilityButtonEl.innerText = "Next Ability Score";

    //creating ability score output display

    const abilitiesHolderDivEl = document.createElement("div");
    abilitiesHolderDivEl.setAttribute('id', 'abilitiesHolderDiv');

    const abilitiesOutputDiv = document.createElement("div");
    abilitiesOutputDiv.classList.add("abilitiesOutputDiv");
    
    const abilitiesOutputTitleEl = document.createElement("h2");
    abilitiesOutputTitleEl.classList.add("abilitiesOutputTitle");
    abilitiesOutputTitleEl.innerText = currentCharacter.baseFeatures.name + "'s Ability Scores";

    const abilitiesTitleEl = document.createElement("h4");
    abilitiesTitleEl.classList.add("abilitiesTitle");
    abilitiesTitleEl.innerText = "Ability Scores";

    const strDivEl = document.createElement("div");
    strDivEl.classList.add("abilityDiv");

    const strTitleEl = document.createElement("h4");
    strTitleEl.classList.add("abilityTitle");
    strTitleEl.innerText = "STR";

    const strOutputEl = document.createElement("h3");
    strOutputEl.innerText = "15";

    strDivEl.append(strTitleEl);
    strDivEl.append(strOutputEl);

    const dexDivEl = document.createElement("div");
    dexDivEl.classList.add("abilityDiv");

    const dexTitleEl = document.createElement("h4");
    dexTitleEl.classList.add("abilityTitle");
    dexTitleEl.innerText = "DEX";

    const dexOutputEl = document.createElement("h3");
    dexOutputEl.innerText = "14";

    dexDivEl.append(dexTitleEl);
    dexDivEl.append(dexOutputEl);

    const conDivEl = document.createElement("div");
    conDivEl.classList.add("abilityDiv");

    const conTitleEl = document.createElement("h4");
    conTitleEl.classList.add("abilityTitle");
    conTitleEl.innerText = "CON";

    const conOutputEl = document.createElement("h3");
    conOutputEl.innerText = "13";

    conDivEl.append(conTitleEl);
    conDivEl.append(conOutputEl);

    const intDivEl = document.createElement("div");
    intDivEl.classList.add("abilityDiv");

    const intTitleEl = document.createElement("h4");
    intTitleEl.classList.add("abilityTitle");
    intTitleEl.innerText = "INT";

    const intOutputEl = document.createElement("h3");
    intOutputEl.innerText = "12";

    intDivEl.append(intTitleEl);
    intDivEl.append(intOutputEl);

    const wisDivEl = document.createElement("div");
    wisDivEl.classList.add("abilityDiv");

    const wisTitleEl = document.createElement("h4");
    wisTitleEl.classList.add("abilityTitle");
    wisTitleEl.innerText = "WIS";

    const wisOutputEl = document.createElement("h3");
    wisOutputEl.innerText = "10";

    wisDivEl.append(wisTitleEl);
    wisDivEl.append(wisOutputEl);

    const chaDivEl = document.createElement("div");
    chaDivEl.classList.add("abilityDiv");

    const chaTitleEl = document.createElement("h4");
    chaTitleEl.classList.add("abilityTitle");
    chaTitleEl.innerText = "CHA";

    const chaOutputEl = document.createElement("h3");
    chaOutputEl.innerText = "8";

    chaDivEl.append(chaTitleEl);
    chaDivEl.append(chaOutputEl);

    abilitiesOutputDiv.append(abilitiesOutputTitleEl);
    abilitiesOutputDiv.append(strDivEl);
    abilitiesOutputDiv.append(dexDivEl);
    abilitiesOutputDiv.append(conDivEl);
    abilitiesOutputDiv.append(wisDivEl);
    abilitiesOutputDiv.append(intDivEl);
    abilitiesOutputDiv.append(chaDivEl);

    let i;
    let j = 0;
    for(i = 0; i < scores.length; i++) {
        let optionEl = document.createElement("option");
        optionEl.setAttribute('value', scores[i]);
        optionEl.innerText = scores[i].toString();
        defaultInputEl.append(optionEl);
    }

    abilityButtonEl.addEventListener("click", () =>{
        j++;
        scores.splice(defaultInputEl.selectedIndex, 1);
        console.log(defaultInputEl.value);
        console.log(scores);
        removeOptions(defaultInputEl);
        for(i = 0; i < scores.length; i++) {
            let optionEl = document.createElement("option");
            optionEl.setAttribute('value', scores[i]);
            optionEl.innerText = scores[i].toString();
            defaultInputEl.append(optionEl);
        }
        defaultTitleEl.innerText = abilityNames[j];
        console.log(j);
        console.log(abilityNames);
        
        if(j===6){
            abilityButtonEl.style.display = "none";
            defaultInputEl.style.display = "none";
            defaultTitleEl.style.display = "none";
            abilitiesHolderDivEl.style.display = "block";   
        }
    })

    defaultDivEl.append(defaultTitleEl);
    defaultDivEl.append(defaultInputEl);
    defaultDivEl.append(abilityButtonEl);
    abilitiesHolderDivEl.append(abilitiesOutputDiv);
    abilitiesDiv.append(defaultDivEl);
    mainContentDiv.append(abilitiesDiv);
    mainContentDiv.append(abilitiesHolderDivEl);
    mainContainerEl.append(mainContentDiv);
    

    displayFooter(mainContainerEl);
}

function removeOptions(selectElement) {
    var i, L = selectElement.options.length - 1;
    for(i = L; i >= 0; i--) {
       selectElement.remove(i);
    }
}
 

export {displayAbilitiesView}