import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";

function displayRaceView(mainContainerEl){

    displayHeader(mainContainerEl);

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("mainContentDiv");

    //making all html elements for the pageTopDiv
    const raceTitleEl = document.createElement("h1");
    raceTitleEl.classList.add("pageTitle");
    raceTitleEl.innerText = "Select Your Race";

    const pageTopDivEl = document.createElement("div");
    pageTopDivEl.classList.add("pageTopDiv");

    const raceFormButtonsDivEl = document.createElement("div");
    raceFormButtonsDivEl.classList.add("formButtons");
    const raceFormEl = document.createElement("form");
    
    const raceSelectEl = document.createElement("select");
    raceSelectEl.classList.add("selector");

    const dragonbornOptionEl = document.createElement("option");
    dragonbornOptionEl.setAttribute('value', 'dragonborn');
    dragonbornOptionEl.innerText = "Dragonborn";

    const dwarfOptionEl = document.createElement("option");
    dwarfOptionEl.setAttribute('value', 'dwarf');
    dwarfOptionEl.innerText = "Dwarf";

    const elfOptionEl = document.createElement("option");
    elfOptionEl.setAttribute('value', 'elf');
    elfOptionEl.innerText = "Elf";

    const gnomeOptionEl = document.createElement("option");
    gnomeOptionEl.setAttribute('value', 'gnome');
    gnomeOptionEl.innerText = "Gnome";

    const halfElfOptionEl = document.createElement("option");
    halfElfOptionEl.setAttribute('value', 'halfElf');
    halfElfOptionEl.innerText = "Half-Elf";

    const halfOrcOptionEl = document.createElement("option");
    halfOrcOptionEl.setAttribute('value', 'halfOrc');
    halfOrcOptionEl.innerText = "Half-Orc";

    const halflingOptionEl = document.createElement("option");
    halflingOptionEl.setAttribute('value', 'halfling');
    halflingOptionEl.innerText = "Halfling";

    const humanOptionEl = document.createElement("option");
    humanOptionEl.setAttribute('value', 'human');
    humanOptionEl.innerText = "Human";

    const tieflingOptionEl = document.createElement("option");
    tieflingOptionEl.setAttribute('value', 'tiefling');
    tieflingOptionEl.innerText = "Tiefling";

    const raceModalButtonEl = document.createElement("button");
    raceModalButtonEl.setAttribute('id', 'openRaceModal');
    raceModalButtonEl.innerText = "Learn More About Race";

    const raceImgEl = document.createElement("img");
    raceImgEl.src = "/FinalPJ/src/main/resources/static/images/queen.jpg";
    raceImgEl.classList.add("selectorArt");

    //appending all pageTopDiv elements

    raceSelectEl.append(dragonbornOptionEl);
    raceSelectEl.append(dwarfOptionEl);
    raceSelectEl.append(elfOptionEl);
    raceSelectEl.append(gnomeOptionEl);
    raceSelectEl.append(halfElfOptionEl);
    raceSelectEl.append(halfOrcOptionEl);
    raceSelectEl.append(halflingOptionEl);
    raceSelectEl.append(humanOptionEl);
    raceSelectEl.append(tieflingOptionEl);

    raceFormEl.append("raceSelectEl");

    raceFormButtonsDivEl.append(raceFormEl);
    raceFormButtonsDivEl.append(raceModalButtonEl);

    pageTopDivEl.append(raceFormButtonsDivEl);
    pageTopDivEl.append(raceImgEl);

    mainContentDiv.append(raceTitleEl);
    mainContentDiv.append(pageTopDivEl);

    //creating all modal elements

    const raceModalDivEl = document.createElement("div");
    raceModalDivEl.classList.add("modal");
    raceModalDivEl.setAttribute('id', 'raceModal');

    const raceModalContentDivEl = document.createElement("div");
    raceModalContentDivEl.classList.add("modalContent");

    const modalHeaderDivEl = document.createElement("div");
    modalHeaderDivEl.classList.add("modalHeader");
    
    const modalCloseSpanEl = document.createElement("span");
    modalCloseSpanEl.classList.add("close");
    modalCloseSpanEl.innerHTML = "&times;";

    const raceModalHeaderEl = document.createElement("h2");
    raceModalHeaderEl.classList.add("raceModalHeader");
    raceModalHeaderEl.innerText = "Race";

    const raceModalBodyDivEl = document.createElement("div");
    raceModalBodyDivEl.classList.add("modalBody");

    const raceModalBodyContentEl = document.createElement("p");
    raceModalBodyContentEl.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque quia adipisci quis alias, laborum quibusdam dignissimos veniam incidunt, tempore, ex eius repellendus. Iure repudiandae quisquam itaque quis neque quam!";

    //appending all modal content

    modalHeaderDivEl.append(modalCloseSpanEl);
    modalHeaderDivEl.append(raceModalHeaderEl);

    raceModalBodyDivEl.append(raceModalBodyContentEl);

    raceModalContentDivEl.append(modalHeaderDivEl);
    raceModalContentDivEl.append(raceModalBodyDivEl);

    raceModalDivEl.append(raceModalContentDivEl);

    mainContentDiv.append(raceModalDivEl);

    //creating all pageBottomDiv elements

    const pageBottomDivEl = document.createElement("div");
    pageBottomDivEl.classList.add("div");

    const raceLearnDropdownDivEl = document.createElement("div");
    raceLearnDropdownDivEl.classList.add("learnDropdown");

    const raceDropdownLabelEl = document.createElement("label");
    raceDropdownLabelEl.setAttribute('for', 'raceNames');
    raceDropdownLabelEl.setAttribute('id', 'raceLearnLabel');

    const raceLearnFormEl = document.createElement("form");
    
    const raceLearnSelectEl = document.createElement("select");
    raceLearnSelectEl.setAttribute('name', 'raceNames');
    raceLearnSelectEl,setAttribute9('id', 'raceNames');

    const dragonbornLearnOptionEl = document.createElement("option");
    dragonbornLearnOptionEl.setAttribute('value', 'dragonborn');
    dragonbornLearnOptionEl.innerText = "Dragonborn";

    const dwarfLearnOptionEl = document.createElement("option");
    dwarfLearnOptionEl.setAttribute('value', 'dwarf');
    dwarfLearnOptionEl.innerText = "Dwarf";

    const elfLearnOptionEl = document.createElement("option");
    elfLearnOptionEl.setAttribute('value', 'elf');
    elfLearnOptionEl.innerText = "Elf";

    const gnomeLearnOptionEl = document.createElement("option");
    gnomeLearnOptionEl.setAttribute('value', 'gnome');
    gnomeLearnOptionEl.innerText = "Gnome";

    const halfElfLearnOptionEl = document.createElement("option");
    halfElfLearnOptionEl.setAttribute('value', 'halfElf');
    halfElfLearnOptionEl.innerText = "Half-Elf";

    const halfOrcLearnOptionEl = document.createElement("option");
    halfOrcLearnOptionEl.setAttribute('value', 'halfOrc');
    halfOrcLearnOptionEl.innerText = "Half-Orc";

    const halflingLearnOptionEl = document.createElement("option");
    halflingLearnOptionEl.setAttribute('value', 'halfling');
    halflingLearnOptionEl.innerText = "Halfling";

    const humanLearnOptionEl = document.createElement("option");
    humanLearnOptionEl.setAttribute('value', 'human');
    humanLearnOptionEl.innerText = "Human";

    const tieflingLearnOptionEl = document.createElement("option");
    tieflingLearnOptionEl.setAttribute('value', 'tiefling');
    tieflingLearnOptionEl.innerText = "Tiefling";

    const raceMoreInfoButtonEl = document.createElement("button");
    raceMoreInfoButtonEl.innerText = "More Info";
    raceMoreInfoButtonEl.setAttribute('id', 'raceMoreInfoButton');

    //appending all pageBottomDiv elements

    raceLearnSelectEl.append(dragonbornLearnOptionEl);
    raceLearnSelectEl.append(dwarfLearnOptionEl);
    raceLearnSelectEl.append(elfLearnOptionEl);
    raceLearnSelectEl.append(gnomeLearnOptionEl);
    raceLearnSelectEl.append(halfElfLearnOptionEl);
    raceLearnSelectEl.append(halfOrcLearnOptionEl);
    raceLearnSelectEl.append(halflingLearnOptionEl);
    raceLearnSelectEl.append(humanLearnOptionEl);
    raceLearnSelectEl.append(tieflingLearnOptionEl);

    raceLearnFormEl.append(raceLearnSelectEl);

    raceLearnDropdownDivEl.append(raceDropdownLabelEl);
    raceLearnDropdownDivEl.append(raceLearnFormEl);

    pageBottomDivEl.append(raceLearnDropdownDivEl);
    pageBottomDivEl.append(raceMoreInfoButtonEl);
    mainContentDiv.append(pageBottomDivEl);


    displayFooter(mainContainerEl);
}