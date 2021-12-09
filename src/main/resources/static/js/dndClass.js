import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import {displayFeaturesView} from "./features.js";
import {displayRaceView} from "./race.js";
import {classJson} from "./descJson.js";

function displayDNDClassView(mainContainerEl, currentCharacter){
  
displayHeader(mainContainerEl);

console.log(currentCharacter);

  const mainContentDivEl = document.createElement("div");
  mainContentDivEl.classList.add("mainContentDiv");

  //creating elements for pageTopDiv

  const pageTitleEl = document.createElement("h1");
  pageTitleEl.classList.add("pageTitle");
  pageTitleEl.innerText = "Select Your Class";

  const pageTopDivEl = document.createElement("div");
  pageTopDivEl.classList.add("pageTopDiv");

  const formButtonsDivEl = document.createElement("div")
  formButtonsDivEl.classList.add("formButtonsDiv");

  const formEl = document.createElement("form");

  const selectEl = document.createElement("select");
  selectEl.classList.add("classSelector");
  
  const barbarianOptionEl = document.createElement("option");
  barbarianOptionEl.setAttribute('value', 'barbarian');
  barbarianOptionEl.innerText = "Barbarian";

  const bardOptionEl = document.createElement("option");
  bardOptionEl.setAttribute('value', 'bard');
  bardOptionEl.innerText = "Bard";

  const clericOptionEl = document.createElement("option");
  clericOptionEl.setAttribute('value', 'cleric');
  clericOptionEl.innerText = "Cleric";

  const druidOptionEl = document.createElement("option");
  druidOptionEl.setAttribute('value', 'druid');
  druidOptionEl.innerText = "Druid";
  
  const fighterOptionEl = document.createElement("option");
  fighterOptionEl.setAttribute('value', 'fighter');
  fighterOptionEl.innerText = "Fighter";

  const monkOptionEl = document.createElement("option");
  monkOptionEl.setAttribute('value', 'monk');
  monkOptionEl.innerText  = "Monk";

  const paladinOptionEl = document.createElement("option");
  paladinOptionEl.setAttribute('value', 'paladin');
  paladinOptionEl.innerText = "Paladin";

  const rangerOptionEl = document.createElement("option");
  rangerOptionEl.setAttribute('value', 'ranger');
  rangerOptionEl.innerText = "Ranger";

  const rogueOptionEl = document.createElement("option");
  rogueOptionEl.setAttribute('value', 'rogue');
  rogueOptionEl.innerText = "Rogue";

  const sorcererOptionEl = document.createElement("option");
  sorcererOptionEl.setAttribute('value', 'sorcerer');
  sorcererOptionEl.innerText = "Sorcerer";

  const warlockOptionEl = document.createElement("option");
  warlockOptionEl.setAttribute('value', 'warlock');
  warlockOptionEl.innerText = "Warlock";

  const wizardOptionEl = document.createElement("option");
  wizardOptionEl.setAttribute('value', 'wizard');
  wizardOptionEl.innerText = "Wizard";

  const inputEl = document.createElement("input")
  inputEl.type = "submit";

  const modalButtonEl = document.createElement("button");
  modalButtonEl.setAttribute('id', 'openClassModal');
  modalButtonEl.innerText = "Learn More About Class";

  const imgEl = document.createElement("img");
  imgEl.classList.add("selectorArt");
  imgEl.src = "./images/queen.jpg";

  //forward and back buttons

  const backButtonEl = document.createElement("button");
  backButtonEl.classList.add("navButtons");
  backButtonEl.setAttribute('id', 'backButton');
  backButtonEl.innerText = "<";

  const forwardButtonEl = document.createElement("button");
  forwardButtonEl.classList.add("navButtons");
  forwardButtonEl.setAttribute('id', 'forwardButton');
  forwardButtonEl.innerText = ">";
  
  //appending all pageTopDiv content
  selectEl.append(barbarianOptionEl);
  selectEl.append(bardOptionEl);
  selectEl.append(clericOptionEl);
  selectEl.append(druidOptionEl);
  selectEl.append(fighterOptionEl);
  selectEl.append(monkOptionEl);
  selectEl.append(paladinOptionEl);
  selectEl.append(rangerOptionEl);
  selectEl.append(rogueOptionEl);
  selectEl.append(sorcererOptionEl);
  selectEl.append(warlockOptionEl);
  selectEl.append(wizardOptionEl);

  formEl.append(selectEl);
  formEl.append(inputEl);

  formButtonsDivEl.append(formEl);
  formButtonsDivEl.append(modalButtonEl);
  
  pageTopDivEl.append(backButtonEl);
  pageTopDivEl.append(formButtonsDivEl);
  pageTopDivEl.append(imgEl);
  pageTopDivEl.append(forwardButtonEl);

  mainContentDivEl.append(pageTitleEl);
  mainContentDivEl.append(pageTopDivEl);

  //creating all modal elements

  const classModalEl = document.createElement("div");
  classModalEl.classList.add("modal");
  classModalEl.setAttribute('id', 'classModal');

  const modalContentEl = document.createElement("div");
  modalContentEl.classList.add("modalContent");

  const modalHeaderEl = document.createElement("div");
  modalHeaderEl.classList.add("modalHeader");

  const closeEl = document.createElement("span");
  closeEl.classList.add("close");
  closeEl.innerHTML = "&times;"

  const classesEl = document.createElement("h2");
  classesEl.innerText = "Classes";

  const modalBodyEl = document.createElement("div");
  modalBodyEl.classList.add("modalBody");

  const modalBodyContentEl = document.createElement("p");
  modalBodyContentEl.innerText = "Class is the primary definition of what your character can do. It’s more than a profession; it’s your character’s calling. Class shapes the way you think about the world and interact with it and your relationship with other people and powers in the multiverse. A fighter, for example, might view the world in pragmatic terms of strategy and maneuvering, and see herself as just a pawn in a much larger game. A cleric, by contrast, might see himself as a willing servant in a god’s unfolding plan or a conflict brewing among various deities. While the fighter has contacts in a mercenary company or army, the cleric might know a number of priests, paladins, and devotees who share his faith. Your class gives you a variety of special features, such as a fighter’s mastery of weapons and armor, and a wizard’s spells. At low levels, your class gives you only two or three features, but as you advance in level you gain more and your existing features often improve.";

  //appending all modal content

  modalHeaderEl.append(closeEl);
  modalHeaderEl.append(classesEl);

  modalBodyEl.append(modalBodyContentEl);
  
  modalContentEl.append(modalHeaderEl);
  modalContentEl.append(modalBodyEl);
  
  classModalEl.append(modalContentEl);

  mainContentDivEl.append(classModalEl);

  //creating all pageBottomDiv content
  
  const pageBottomDivEl = document.createElement("div");
  pageBottomDivEl.classList.add("pageBottomDiv");

  const learnDropdownEl = document.createElement("div");
  learnDropdownEl.classList.add("learnDropdown");

  const learnLabelEl = document.createElement("label");
  learnLabelEl.classList.add("learnLabel");
  learnLabelEl.setAttribute('for', 'classNames');
  learnLabelEl.innerText = "Select what class you want to learn about";

  const learnFormEl = document.createElement("form");

  const classNamesEl = document.createElement("select");4
  classNamesEl.setAttribute('id', 'classNames');

  const barbarianLearnOptionEl = document.createElement("option");
  barbarianLearnOptionEl.setAttribute('value', 'barbarian');
  barbarianLearnOptionEl.innerText = "Barbarian";

  const bardLearnOptionEl = document.createElement("option");
  bardLearnOptionEl.setAttribute('value', 'bardLearn');
  bardLearnOptionEl.innerText = "Bard";

  const clericLearnOptionEl = document.createElement("option");
  clericLearnOptionEl.setAttribute('value', 'clericLearn');
  clericLearnOptionEl.innerText = "Cleric";

  const druidLearnOptionEl = document.createElement("option");
  druidLearnOptionEl.setAttribute('value', 'druidLearn');
  druidLearnOptionEl.innerText = "Druid";
  
  const fighterLearnOptionEl = document.createElement("option");
  fighterLearnOptionEl.setAttribute('value', 'fighterLearn');
  fighterLearnOptionEl.innerText = "Fighter";

  const monkLearnOptionEl = document.createElement("option");
  monkLearnOptionEl.setAttribute('value', 'monkLearn');
  monkLearnOptionEl.innerText = "Monk";

  const paladinLearnOptionEl = document.createElement("option");
  paladinLearnOptionEl.setAttribute('value', 'paladinLearn');
  paladinLearnOptionEl.innerText = "Paladin";

  const rangerLearnOptionEl = document.createElement("option");
  rangerLearnOptionEl.setAttribute('value', '12');
  rangerLearnOptionEl.innerText = "Ranger";

  const rogueLearnOptionEl = document.createElement("option");
  rogueLearnOptionEl.setAttribute('value', 'rogueLearn');
  rogueLearnOptionEl.innerText = "Rogue";

  const sorcererLearnOptionEl = document.createElement("option");
  sorcererLearnOptionEl.setAttribute('value', 'sorcererLearn');
  sorcererLearnOptionEl.innerText = "Sorcerer";

  const warlockLearnOptionEl = document.createElement("option");
  warlockLearnOptionEl.setAttribute('value', 'warlockLearn');
  warlockLearnOptionEl.innerText = "Warlock";

  const wizardLearnOptionEl = document.createElement("option");
  wizardLearnOptionEl.setAttribute('value', 'wizardLearn');
  wizardLearnOptionEl.innerText = "Wizard";

  const moreInfoButtonEl = document.createElement("button");
  moreInfoButtonEl.setAttribute('id', 'moreInfoButton');
  moreInfoButtonEl.innerText = " More Info";

  

  //appending all pageBottomDiv content
  classNamesEl.append(barbarianLearnOptionEl);
  classNamesEl.append(bardLearnOptionEl);
  classNamesEl.append(clericLearnOptionEl);
  classNamesEl.append(druidLearnOptionEl);
  classNamesEl.append(fighterLearnOptionEl);
  classNamesEl.append(monkLearnOptionEl);
  classNamesEl.append(paladinLearnOptionEl);
  classNamesEl.append(rangerLearnOptionEl);
  classNamesEl.append(rogueLearnOptionEl);
  classNamesEl.append(sorcererLearnOptionEl);
  classNamesEl.append(warlockLearnOptionEl);
  classNamesEl.append(wizardLearnOptionEl);

  learnFormEl.append(classNamesEl);

  learnDropdownEl.append(learnLabelEl);
  learnDropdownEl.append(learnFormEl);
  
  pageBottomDivEl.append(learnDropdownEl);
  pageBottomDivEl.append(moreInfoButtonEl);

  mainContentDivEl.append(pageBottomDivEl);

  //creating more info elements for page dropdown

  const moreInfoDivEl = document.createElement("div");
  moreInfoDivEl.setAttribute('id', 'moreInfoDiv');

  const moreInfoCloseEl = document.createElement("h4");
  moreInfoCloseEl.classList.add("moreInfoClose");
  moreInfoCloseEl.innerText = "x";

  const moreInfoTitleEl = document.createElement("h3");
  moreInfoTitleEl.classList.add("learnMoreTitle");

  const moreInfoTextEl = document.createElement("p");
  moreInfoTextEl.classList.add("moreInfoText");

  //appending more info content

  moreInfoDivEl.append(moreInfoCloseEl);
  moreInfoDivEl.append(moreInfoTitleEl);
  moreInfoDivEl.append(moreInfoTextEl);

  mainContentDivEl.append(moreInfoDivEl);

  forwardButtonEl.addEventListener("click", () => {
    const userClassJson = {
      "name": selectEl.value,
      "description": "warlock boi",
      "features": classJson[selectEl.selectedIndex].features,
    };
      fetch(`http://localhost:8080/buildcharacter/class/${currentCharacter.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userClassJson)
      })
    .then(res => res.json())
    .then(character => {
        clearChildren(mainContainerEl);
        displayRaceView(mainContainerEl, currentCharacter);
        currentCharacter = character;
    })
    .catch(err => console.error(err));
  })

  backButtonEl.addEventListener("click", () => {
    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl, currentCharacter);
  })


  mainContainerEl.append(mainContentDivEl);

  //modal functionalities
  
  var modal = document.getElementById("classModal");
  var btn = document.getElementById("openClassModal");
  var span = document.getElementsByClassName("close")[0];
  console.log(span);

  btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  function learnClassFunction(){
      var x = document.getElementById("moreInfoDiv");
      if (x.style.display === "block") {
        x.style.display = "none";
      } else {
        x.style.display = "block";
      }
  }

  moreInfoCloseEl.addEventListener("click", ()=>{
    learnClassFunction();
  })

  const moreInfoButton = document.getElementById("moreInfoButton");
  moreInfoButton.addEventListener("click", ()=> {
      learnClassFunction();
      console.log(classNamesEl.selectedOptions);
      moreInfoTitleEl.innerText = classJson[classNamesEl.selectedIndex].title;
      moreInfoTextEl.innerText = classJson[classNamesEl.selectedIndex].desc;
  })

  displayFooter(mainContainerEl);
}




export{displayDNDClassView}