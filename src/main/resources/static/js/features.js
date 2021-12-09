import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";

function displayFeaturesView(mainContainerEl) {

    displayHeader(mainContainerEl);

    //making all fields and content for features page

    const mainContentDivEl = document.createElement("div");
    mainContentDivEl.classList.add("mainContentDiv");

    const featureHeaderEl = document.createElement("h1");
    featureHeaderEl.classList.add("featureHeader");
    featureHeaderEl.innerText = "Basic Info";

    const featureDivEl = document.createElement("div");
    featureDivEl.classList.add("featureDiv");

    const nameLabelEl = document.createElement("h3");
    nameLabelEl.innerText = "Name";

    const nameFieldEl = document.createElement("input");
    nameFieldEl.type = "text";
    nameFieldEl.placeholder = "Enter Your Character's Name";

    const levelLabelEl = document.createElement("h3");
    levelLabelEl.innerText = "Level";

    const levelFieldEl = document.createElement("input");
    levelFieldEl.type = "number";
    levelFieldEl.placeholder = "Choose 1-3";

    const alignmentLabelEl = document.createElement("h3");
    alignmentLabelEl.innerText = "Alignment";

    const alignmentFieldEl = document.createElement("select");
    alignmentFieldEl.placeholder = "Select an Alignment";

    const randOptionEl = document.createElement("option");
    randOptionEl.setAttribute('value', 'randomize');
    randOptionEl.innerText = "Randomize!";

    const lawGoodOptionEl = document.createElement("option");
    lawGoodOptionEl.setAttribute('value', 'Lawful-Good');
    lawGoodOptionEl.innerText = "Lawful-Good";

    const neutGoodOptionEl = document.createElement("option");
    neutGoodOptionEl.setAttribute('value', 'Neutral-Good');
    neutGoodOptionEl.innerText = "Neutral-Good";

    const chaGoodOptionEl = document.createElement("option");
    chaGoodOptionEl.setAttribute('value', 'Chaotic-Good');
    chaGoodOptionEl.innerText = "Chaotic-Good";

    const lawNeutralOptionEl = document.createElement("option");
    lawNeutralOptionEl.setAttribute('value', 'Lawful-Neutral');
    lawNeutralOptionEl.innerText = "Lawful-Neutral";

    const trueNeutOptionEl = document.createElement("option");
    trueNeutOptionEl.setAttribute('value', 'True-Neutral');
    trueNeutOptionEl.innerText = "True-Neutral";

    const chaNeutralOptionEl = document.createElement("option");
    chaNeutralOptionEl.setAttribute('value', 'Chaotic-Neutral');
    chaNeutralOptionEl.innerText = "Chaotic-Neutral";

    const lawEvilOptionEl = document.createElement("option");
    lawEvilOptionEl.setAttribute('value', 'Lawful-Evil');
    lawEvilOptionEl.innerText = "Lawful-Evil";

    const neutEvilOptionEl = document.createElement("option");
    neutEvilOptionEl.setAttribute('value', 'Neutral-Evil');
    neutEvilOptionEl.innerText = "Neutral-Evil";

    const chaEvilOptionEl = document.createElement("option");
    chaEvilOptionEl.setAttribute('value', 'Chaotic-Evil');
    chaEvilOptionEl.innerText = "Chaotic-Evil"; 

    //appending all alignment options

    alignmentFieldEl.append(randOptionEl);
    alignmentFieldEl.append(lawGoodOptionEl);
    alignmentFieldEl.append(neutGoodOptionEl);
    alignmentFieldEl.append(chaEvilOptionEl);
    alignmentFieldEl.append(lawNeutralOptionEl);
    alignmentFieldEl.append(trueNeutOptionEl);
    alignmentFieldEl.append(chaNeutralOptionEl);
    alignmentFieldEl.append(lawEvilOptionEl);
    alignmentFieldEl.append(neutEvilOptionEl);
    alignmentFieldEl.append(chaEvilOptionEl);

    //making level modal elements

    const levelModalButtonEl = document.createElement("button");
    levelModalButtonEl.innerText = "?"

    const levelModalDivEl = document.createElement("div");
    levelModalDivEl.classList.add("modal");
    levelModalDivEl.setAttribute('id', 'levelModalDiv');

    const levelModalContentDivEl = document.createElement("div");
    levelModalContentDivEl.classList.add("levelModalContent");

    const levelModalHeaderDivEl = document.createElement("div");
    levelModalHeaderDivEl.classList.add("levelModalHeaderDiv");

    const levelModalCloseSpanEl = document.createElement("span");
    levelModalCloseSpanEl.classList.add("close");
    levelModalCloseSpanEl.innerHTML = "&times;";

    const levelModalHeaderEl = document.createElement("h2");
    levelModalHeaderEl.classList.add("levelModalHeader");
    levelModalHeaderEl.innerText = "Level";

    const levelModalBodyDivEl = document.createElement("div");
    levelModalBodyDivEl.classList.add("modalBody");

    const levelModalBodyContentEl = document.createElement("p");
    levelModalBodyContentEl.innerText = "As your character goes on adventures and overcomes challenges, he or she gains experience, represented by experience points. A character who reaches a specified experience point total advances in capability. This advancement is called gaining a level. When your character gains a level, his or her class often grants additional features, as detailed in the class description. Some of these features allow you to increase your ability scores, either increasing two scores by 1 each or increasing one score by 2. You can’t increase an ability score above 20. In addition, every character's proficiency bonus increases at certain levels.";

    //appending level modal elements

    levelModalHeaderDivEl.append(levelModalCloseSpanEl);
    levelModalHeaderDivEl.append(levelModalHeaderEl);

    levelModalBodyDivEl.append(levelModalBodyContentEl);

    levelModalContentDivEl.append(levelModalHeaderDivEl);
    levelModalContentDivEl.append(levelModalBodyDivEl);

    levelModalDivEl.append(levelModalContentDivEl);

    //making level modal work

    levelModalButtonEl.addEventListener("click", ()=> {  
        levelModalDivEl.style.display = "block";
    })
  
    levelModalCloseSpanEl.onclick = function() {
        levelModalDivEl.style.display = "none";
    }
  
    window.onclick = function(event) {
        if (event.target == levelModalDivEl) {
            levelModalDivEl.style.display = "none";
        }
    }

    //making all alignment modal elements

    const alignmentModalButtonEl = document.createElement("button");
    alignmentModalButtonEl.innerText = "?"

    const alignmentModalDivEl = document.createElement("div");
    alignmentModalDivEl.classList.add("modal");
    alignmentModalDivEl.setAttribute('id', 'levelModalDiv');

    const alignmentModalContentDivEl = document.createElement("div");
    alignmentModalContentDivEl.classList.add("alignmentModalContent");

    const alignmentModalHeaderDivEl = document.createElement("div");
    alignmentModalHeaderDivEl.classList.add("alignmentModalHeaderDiv");

    const alignmentModalCloseSpanEl = document.createElement("span");
    alignmentModalCloseSpanEl.classList.add("close");
    alignmentModalCloseSpanEl.innerHTML = "&times;";

    const alignmentModalHeaderEl = document.createElement("h2");
    alignmentModalHeaderEl.classList.add("alignmentModalHeader");
    alignmentModalHeaderEl.innerText = "Alignment";

    const alignmentModalBodyDivEl = document.createElement("div");
    alignmentModalBodyDivEl.classList.add("modalBody");

    const alignmentModalBodyContentEl = document.createElement("p");
    alignmentModalBodyContentEl.innerText = "A typical creature in the game world has an alignment, which broadly describes its moral and personal attitudes. Alignment is a combination of two factors: one identifies morality (good, evil, or neutral), and the other describes attitudes toward society and order (lawful, chaotic, or neutral). Thus, nine distinct alignments define the possible combinations. These brief summaries of the nine alignments describe the typical behavior of a creature with that alignment. Individuals might vary significantly from that typical behavior, and few people are perfectly and consistently faithful to the precepts of their alignment.";

    //appending all alignment modal content

    alignmentModalHeaderDivEl.append(alignmentModalCloseSpanEl);
    alignmentModalHeaderDivEl.append(alignmentModalHeaderEl);

    alignmentModalBodyDivEl.append(alignmentModalBodyContentEl);

    alignmentModalContentDivEl.append(alignmentModalHeaderDivEl);
    alignmentModalContentDivEl.append(alignmentModalBodyDivEl);

    alignmentModalDivEl.append(alignmentModalContentDivEl);

    //making alignment modal work

    alignmentModalButtonEl.addEventListener("click", ()=> {  
        alignmentModalDivEl.style.display = "block";
    })
  
    alignmentModalCloseSpanEl.onclick = function() {
        alignmentModalDivEl.style.display = "none";
    }
  
    window.onclick = function(event) {
        if (event.target == alignmentModalDivEl) {
            alignmentModalDivEl.style.display = "none";
        }
    }

    

    const forwardButtonEl = document.createElement("button");
    forwardButtonEl.classList.add("navButtons");
    forwardButtonEl.setAttribute('id', 'backgroundForwardButton');
    forwardButtonEl.innerText = ">";

  

    let currentCharacter; 

    //wiring up forward button
    forwardButtonEl.addEventListener("click", () => {
        const characterBaseJson = {
            "name": nameFieldEl.value,
            "level": levelFieldEl.value,
            "alignment": alignmentFieldEl.value,
            "proficiencyBonus": 2,
            "experiencePoints": 0
        };
          
        fetch(`http://localhost:8080/buildcharacter/base/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(characterBaseJson)
      })
    .then(res => res.json())
    .then(character => {
        clearChildren(mainContainerEl);
        displayDNDClassView(mainContainerEl, character);
        currentCharacter = character;
    })
    .catch(err => console.error(err));
    })

    //appending all features page content
    
    featureDivEl.append(nameLabelEl);
    featureDivEl.append(nameFieldEl);
    featureDivEl.append(levelLabelEl);
    featureDivEl.append(levelFieldEl);
    featureDivEl.append(levelModalButtonEl);
    featureDivEl.append(alignmentLabelEl);
    featureDivEl.append(alignmentFieldEl);
    featureDivEl.append(alignmentModalButtonEl);
    featureDivEl.append(forwardButtonEl);

    mainContentDivEl.append(alignmentModalDivEl);
    mainContentDivEl.append(levelModalDivEl);
    mainContentDivEl.append(featureHeaderEl);
    mainContentDivEl.append(featureDivEl);

    mainContainerEl.append(mainContentDivEl);

    displayFooter(mainContainerEl);

}

export {displayFeaturesView}