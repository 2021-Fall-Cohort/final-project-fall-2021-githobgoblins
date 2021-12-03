import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import { displayRaceView } from "./race.js";
import {displayOutputView} from "./output.js";

function displayAbilitiesView(mainContainerEl, currentCharacter) {

    displayHeader(mainContainerEl);

    const fifteen = 15;
    const fourteen = 14;
    const thirteen = 13;
    const twelve = 12;
    const ten = 10;
    const eight = 8;

    let scores = [fifteen, fourteen, thirteen, twelve, ten, eight];

    let abilityNames = ["Strength", "Dexterity", "Constituion", "Wisdom", "Intelligence", "Charisma"]

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("mainContentDiv");

    const abilitiesDiv = document.createElement("div");
    abilitiesDiv.classList.add("abiltiesViewDiv");

    const strDivEl = document.createElement("div");
    strDivEl.classList.add("abilityDiv");

    const defaultTitleEl = document.createElement("h4");
    defaultTitleEl.classList.add("abilityTitle");
    defaultTitleEl.innerText = abilityNames[0];

    const defaultInputEl = document.createElement("select");

    const abilityButtonEl = document.createElement("button");
    abilityButtonEl.classList.add("abilityButton");
    abilityButtonEl.innerText = "Next Ability Score";

    let i;
    
    for(i = 0; i < scores.length; i++) {
        let optionEl = document.createElement("option");
        optionEl.setAttribute('value', scores[i]);
        optionEl.innerText = scores[i].toString();
        defaultInputEl.append(optionEl);
    }

    abilityButtonEl.addEventListener("click", () =>{
        let j = 1;
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
        
             
    
        
    })

    strDivEl.append(defaultTitleEl);
    strDivEl.append(defaultInputEl);
    strDivEl.append(abilityButtonEl);

    // const dexDivEl = document.createElement("div");
    // dexDivEl.classList.add("abilityDiv");

    // const dexTitleEl = document.createElement("h4");
    // dexTitleEl.classList.add("abilityTitle");
    // dexTitleEl.innerText = "Dexterity";

    // const dexInputEl = document.createElement("select");

    // const abilityButtonEl = document.createElement("button");
    // abilityButtonEl.classList.add("abilityButton");
    // abilityButtonEl.innerText = "Next Ability Score";

    
    // dexDivEl.append(dexTitleEl);
    // dexDivEl.append(strInputEl);
    // dexDivEl.append(abilityButtonEl);

    // const conDivEl = document.createElement("div");
    // conDivEl.classList.add("abilityDiv");

    // const conTitleEl = document.createElement("h4");
    // conTitleEl.classList.add("abilityTitle");
    // conTitleEl.innerText = "Constitution";

    // const conInputEl = document.createElement("select");

    // const abilityButtonEl = document.createElement("button");
    // abilityButtonEl.classList.add("abilityButton");
    // abilityButtonEl.innerText = "Next Ability Score";

    
    // conDivEl.append(conTitleEl);
    // conDivEl.append(conInputEl);
    // conDivEl.append(abilityButtonEl);

    // const wisDivEl = document.createElement("div");
    // wisDivEl.classList.add("abilityDiv");

    // const wisTitleEl = document.createElement("h4");
    // wisTitleEl.classList.add("abilityTitle");
    // wisTitleEl.innerText = "Wisdom";

    // const wisInputEl = document.createElement("select");

    // const abilityButtonEl = document.createElement("button");
    // abilityButtonEl.classList.add("abilityButton");
    // abilityButtonEl.innerText = "Next Ability Score";

    
    // wisDivEl.append(dexTitleEl);
    // wisDivEl.append(strInputEl);
    // wisDivEl.append(abilityButtonEl);

    

    abilitiesDiv.append(strDivEl);
    mainContentDiv.append(abilitiesDiv);
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