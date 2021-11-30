import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import {displayRaceView} from "./race.js";

function displayDNDClassView(mainContainerEl){
  
displayHeader(mainContainerEl);

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
  selectEl.classList.add("selector");
  
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
  modalBodyContentEl.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam quaerat accusantium voluptatum vero necessitatibus architecto molestiae molestias eligendi amet facere aspernatur, sed ullam a dolorum atque laborum nulla labore.";

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
  learnLabelEl.innerText = "Select what classes you want to learn about";

  const learnFormEl = document.createElement("form");

  const classNamesEl = document.createElement("select");
  classNamesEl.setAttribute('name', 'classNames');
  classNamesEl.setAttribute('id', 'classNames');

  const barbarianLearnOptionEl = document.createElement("option");
  barbarianLearnOptionEl.setAttribute('value', 'barbarianLearn');
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
  rangerLearnOptionEl.setAttribute('value', 'rangerLearn');
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

  const moreInfoTextEl = document.createElement("p");
  moreInfoTextEl.classList.add("moreInfoText");
  moreInfoTextEl.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam quaerat accusantium voluptatum vero necessitatibus architecto molestiae molestias eligendi amet facere aspernatur, sed ullam a dolorum atque laborum nulla labore.";

  //appending more info content

  moreInfoDivEl.append(moreInfoTextEl);

  mainContentDivEl.append(moreInfoDivEl);

  forwardButtonEl.addEventListener("click", () => {
    clearChildren(mainContainerEl);
    displayRaceView(mainContainerEl);
  })

  // backwardButtonEl.addEventListener("click", () => {
  //   clearChildren(mainContainerEl);
  //   displayBackgroundView(mainContainerEl);
  // })


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

  const moreInfoButton = document.getElementById("moreInfoButton");
  moreInfoButton.addEventListener("click", ()=> {
      learnClassFunction();
  })

  displayFooter(mainContainerEl);
}




export{displayDNDClassView}