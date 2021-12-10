import {
    clearChildren
} from "./app.js";
import {
    classJson,
    raceJson,
    backgroundJson
} from "./descJson.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";

function displayRulesPage(mainContainerEl) {

    displayHeader(mainContainerEl);

    const mainSection = document.createElement("section");
    mainSection.classList.add("content-section");

    mainContainerEl.append(mainSection);

    const mainH1El = document.createElement("h1");
    mainH1El.innerText = "DND Rules Page";

    const contentUL = document.createElement("ul");
    mainSection.append(mainH1El);
    mainSection.appendChild(contentUL);

    const infoBox = document.createElement("div");
    infoBox.classList.add("infoBoxDiv");
    const infoBoxH2 = document.createElement("h2");
    infoBoxH2.classList.add("infoBoxH2");
    infoBoxH2.innerText = "Click on what you'd like to learn more about.";

    mainSection.appendChild(infoBox);
    infoBox.appendChild(infoBoxH2);

    //Class section
    const listItem1 = document.createElement("li");
    listItem1.classList.add("item-list");
    const item1Button = document.createElement("button");
    item1Button.classList.add("clicktohide");
    item1Button.innerText = "Classes";

    //Race section
    const listItem2 = document.createElement("li");
    listItem2.classList.add("item-list");
    const item2Button = document.createElement("button");
    item2Button.classList.add("clicktohide");
    item2Button.innerText = "Races ";

    //Background section
    const listItem3 = document.createElement("li");
    listItem3.classList.add("item-list");
    const item3Button = document.createElement("button");
    item3Button.classList.add("clicktohide");
    item3Button.innerText = "Backgrounds";

    //Ability Scores
    const listItem4 = document.createElement("li");
    listItem4.classList.add("item-list");
    const item4Button = document.createElement("button");
    item4Button.classList.add("clicktohide");
    item4Button.innerText = "Ability Scores";

    //Adventuring
    const listItem5 = document.createElement("li");
    listItem5.classList.add("item-list");
    const item5Button = document.createElement("button");
    item5Button.classList.add("clicktohide");
    item5Button.innerText = "Adventuring";

    //Monsters
    const listItem6 = document.createElement("li");
    listItem6.classList.add("item-list");
    const item6Button = document.createElement("button");
    item6Button.classList.add("clicktohide");
    item6Button.innerText = "Monsters";

    //Resting
    const listItem7 = document.createElement("li");
    listItem7.classList.add("item-list");
    const item7Button = document.createElement("button");
    item7Button.classList.add("clicktohide");
    item7Button.innerText = "Resting";

    //Combat
    const listItem8 = document.createElement("li");
    listItem8.classList.add("item-list");
    const item8Button = document.createElement("button");
    item8Button.classList.add("clicktohide");
    item8Button.innerText = "Combat";

    //classes
    contentUL.appendChild(listItem1);
    listItem1.appendChild(item1Button);

    item1Button.addEventListener("click", () => {

        clearChildren(infoBox);
        let i = 0;
        let someDudesFav = document.createElement("hr");
        infoBox.append(infoBoxH2);
        infoBox.append(someDudesFav);
        infoBoxH2.innerText = "Classes";

        fetch('https://www.dnd5eapi.co/api/classes', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(classes => {
                classes.results.forEach(result => {
                    let classObjectName = document.createElement("h2");
                    classObjectName.classList.add("infoBoxH2");
                    classObjectName.innerText = result.name;
                    infoBox.appendChild(classObjectName);

                    let classDesc = document.createElement("p");
                    classDesc.classList.add("infoBoxText");

                    classDesc.innerText = classJson[i].desc;

                    infoBox.append(classDesc);
                    i++;
                });
            })
    });

    //races
    contentUL.appendChild(listItem2);
    listItem2.appendChild(item2Button);
    item2Button.addEventListener("click", () => {

        clearChildren(infoBox);
        let i = 0;
        let someDudesFav = document.createElement("hr");
        infoBox.append(infoBoxH2);
        infoBox.append(someDudesFav);
        infoBoxH2.innerText = "Races";

        fetch('https://www.dnd5eapi.co/api/races', {
                method: 'GET'
            })
            .then(response => response.json())
            .then(races => {
                races.results.forEach(result => {
                    let raceObjectName = document.createElement("h2");
                    raceObjectName.classList.add("infoBoxH2");
                    raceObjectName.innerText = result.name;
                    infoBox.appendChild(raceObjectName);

                    let raceDesc = document.createElement("p");
                    raceDesc.classList.add("race-info");
                    raceDesc.innerText = raceJson[i].desc;

                    infoBox.append(raceDesc);
                    i++;
                });
            });
    });

    //backgrounds
    contentUL.appendChild(listItem3);
    listItem3.appendChild(item3Button);
    item3Button.addEventListener("click", () => {

        clearChildren(infoBox);
        let someDudesFav = document.createElement("hr");
        infoBox.append(infoBoxH2);
        infoBox.append(someDudesFav);
        infoBoxH2.innerText = "Backgrounds";

        backgroundJson.forEach(object => {
            let backgroundObjectName = document.createElement("h2");
            let backgroundDesc = document.createElement("p");
            backgroundObjectName.classList.add("infoBoxH2");
            backgroundObjectName.innerText = object.title;
            backgroundDesc.classList.add("background-info");
            backgroundDesc.innerText = object.desc;

            infoBox.appendChild(backgroundObjectName);
            infoBox.appendChild(backgroundDesc);
        });
    });

    //Ability Scores
    contentUL.appendChild(listItem4);
    listItem4.appendChild(item4Button);
    item4Button.addEventListener("click", () => {

        clearChildren(infoBox);
        let someDudesFav = document.createElement("hr");
        infoBox.append(infoBoxH2);
        infoBox.append(someDudesFav);
        infoBoxH2.innerText = "Ability Scores";

        fetch('https://www.dnd5eapi.co/api/ability-scores', {
                method: 'GET'
            })
            .then(res => res.json())
            .then(abilities => {
                abilities.results.forEach(mainAbility => {
                    let abilityScore = document.createElement("h2");
                    abilityScore.classList.add("infoBoxH2");
                    abilityScore.innerText = mainAbility.name;
                    infoBox.appendChild(abilityScore);

                    let abilityUrl = "" + mainAbility.url;
                    fetch("https://www.dnd5eapi.co" + abilityUrl, {
                            method: 'GET'
                        })
                        .then(res => res.json())
                        .then(abilities2 => {
                            let abilityDeets = document.createElement("p");
                            abilityDeets.classList.add("ability-desc");
                            abilityDeets.innerText = abilities2.desc;
                            infoBox.appendChild(abilityScore);
                            infoBox.appendChild(abilityDeets);
                            console.log(abilityUrl);

                            if (abilityScore.innerText == "CHA") {
                                abilityScore.innerText = abilities2.full_name;
                            }
                            if (abilityScore.innerText == "CON") {
                                abilityScore.innerText = abilities2.full_name;
                            }
                            if (abilityScore.innerText == "DEX") {
                                abilityScore.innerText = abilities2.full_name;
                            }
                            if (abilityScore.innerText == "INT") {
                                abilityScore.innerText = abilities2.full_name;
                            }
                            if (abilityScore.innerText == "STR") {
                                abilityScore.innerText = abilities2.full_name;
                            }
                            if (abilityScore.innerText == "WIS") {
                                abilityScore.innerText = abilities2.full_name;
                            }

                        })
                })
            })

    })

    //Adventuring
    contentUL.appendChild(listItem5);
    listItem5.appendChild(item5Button);
    item5Button.addEventListener("click", ()=> {

        clearChildren(infoBox);
        let someDudesFav = document.createElement("hr");
        infoBox.append(infoBoxH2);
        infoBox.append(someDudesFav);
        infoBoxH2.innerText = "Adventuring Info and Rules";

        fetch('https://www.dnd5eapi.co/api/rules/adventuring', {
                method: 'GET'
            })
            .then(res => res.json())
            .then(adventures => {
                console.log(adventures);
                adventures.subsections.forEach(section => {
                    let subSection = document.createElement("h2");
                    subSection.classList.add("infoBoxH2");
                    subSection.innerText = section.name;
                    infoBox.appendChild(subSection);

                    let sectionUrl = "" + section.url;
                    fetch ("https://www.dnd5eapi.co"+ sectionUrl, {
                        method: 'GET'
                    })
                    .then(res => res.json())
                    .then(getDesc => {
                        let sectionDesc = document.createElement("p");
                        sectionDesc.innerText = getDesc.desc;
                        infoBox.appendChild(subSection);
                        infoBox.appendChild(sectionDesc);
                    })                
                });
            });
    });


    //Monsters
    contentUL.appendChild(listItem6);
    listItem6.appendChild(item6Button);
    item6Button.addEventListener("click", () => {

        clearChildren(infoBox);
        let someDudesFav = document.createElement("hr");
        infoBox.append(infoBoxH2);
        infoBox.append(someDudesFav);
        infoBoxH2.innerText = "Monsters";

        fetch('https://www.dnd5eapi.co/api/monsters', {
                method: 'GET'
            })
            .then(res => res.json())
            .then(monsters => {
                monsters.results.forEach(monsterList => {
                    let monster = document.createElement("h3");
                    monster.classList.add("infoBoxH3");
                    monster.innerText = monsterList.name;
                    infoBox.appendChild(monster);

                })
            })
    })

    //Resting, resting is already in adventure rules section
    // contentUL.appendChild(listItem7);
    // listItem7.appendChild(item7Button);



    //Combat api/rules/combat
    contentUL.appendChild(listItem8);
    listItem8.appendChild(item8Button);
    item8Button.addEventListener("click", () => {

        clearChildren(infoBox);
        let someDudesFav = document.createElement("hr");
        infoBox.append(infoBoxH2);
        infoBox.append(someDudesFav);
        infoBoxH2.innerText = "Combat Rules and Details";

        fetch('https://www.dnd5eapi.co/api/rules/combat', {
                method: 'GET'
            })
            .then(res => res.json())
            .then(combatDeets => {
                combatDeets.subsections.forEach(combatdetails => {
                    let combatSections = document.createElement("h2");
                    combatSections.classList.add("infoBoxH2");
                    combatSections.innerText = combatdetails.name;

                    let combatSubUrls = "" + combatdetails.url;
                    fetch('https://www.dnd5eapi.co' + combatSubUrls, {
                    method: 'GET'
                    })
                    .then(res => res.json())
                    .then(moreCombatDeets =>{
                        let combatDescriptions = document.createElement("p");
                        combatDescriptions.innerText = moreCombatDeets.desc;

                        infoBox.appendChild(combatSections);
                        infoBox.append(combatDescriptions);
                    })
                })
            })
    })


    displayFooter(mainContainerEl);
}
export { displayRulesPage };