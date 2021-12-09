import { clearChildren } from "./app.js";
import { displayDNDClassView } from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";
import { displayOutputView } from "./output.js";



function displayUserCreationsView(mainContainerEl){

    displayHeader(mainContainerEl);

    // const mainContainerEl = document.createElement("div");
    // mainContainerEl.classList.add("mainContainer");

    const mainCreationsDivEl = document.createElement("div");
        mainCreationsDivEl.classList.add("mainCreationsDiv");

    const userCreationsHeaderEl = document.createElement("h1");
    userCreationsHeaderEl.classList.add("userCreationsHeader");
    userCreationsHeaderEl.innerText =  "All Characters";

    const allCreationsDivEl = document.createElement("div");
    allCreationsDivEl.classList.add("allCreations");

    fetch('http://localhost:8080/character/getcharacters')
    .then(res => res.json())
    .then(playerCharacters => {
        playerCharacters.forEach(playerCharacter => {
            const userCreationInfoDivEl = document.createElement("div");
            userCreationInfoDivEl.classList.add("creationInfo");

            const userCreationsNameLabelEl = document.createElement("h1");
            userCreationsNameLabelEl.innerText = " Name: " + playerCharacter.baseFeatures.name;
            userCreationsNameLabelEl.classList.add("userName")
            

            const userCreationsCharacterIdEl = document.createElement("input");
            userCreationsCharacterIdEl.value= playerCharacter.id;
            userCreationsCharacterIdEl.type = "hidden";

            const userCreationsCharacterClassEl = document.createElement("h3");
            userCreationsCharacterClassEl.innerText = " Class: " + playerCharacter.dndClass.name;
            userCreationsCharacterClassEl.classList.add("characterClass")
            
            const userCreationsCharacterRaceEl = document.createElement("h3");
            userCreationsCharacterRaceEl.innerText =" Race: " + playerCharacter.race.name;
            userCreationsCharacterRaceEl.classList.add("characterRace");

            const userCreationsLearnMoreButton = document.createElement("button");
            userCreationsLearnMoreButton.innerText = "Learn More";
            userCreationsLearnMoreButton.classList.add("learnMore");

            userCreationsLearnMoreButton.addEventListener("click",() =>{
                clearChildren(mainContainerEl);
                displayOutputView(mainContainerEl,playerCharacter);


            })

            userCreationInfoDivEl.append(userCreationsNameLabelEl);
            userCreationInfoDivEl.append(userCreationsCharacterIdEl);
            userCreationInfoDivEl.append(userCreationsCharacterClassEl);
            userCreationInfoDivEl.append(userCreationsCharacterRaceEl);
            userCreationInfoDivEl.append(userCreationsLearnMoreButton);
            allCreationsDivEl.append(userCreationInfoDivEl);

            
           
        });
    })
    .catch(err => console.error(err));

     //append all userCreations

    

    mainCreationsDivEl.append(userCreationsHeaderEl);

    
    mainCreationsDivEl.append(allCreationsDivEl);

    mainContainerEl.append(mainCreationsDivEl);
    
    // userCardsDivEl.append(mainContainerEl);










}
export {displayUserCreationsView}