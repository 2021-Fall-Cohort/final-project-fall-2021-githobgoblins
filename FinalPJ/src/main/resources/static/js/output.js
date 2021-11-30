import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";

function  displayOutputView(mainContainerEl) {

    const mainContentDivEl = document.createElement("div");
    mainContentDivEl.classList.add("mainContentDiv");

    const outputHeaderEl = document.createElement("h1");
    outputHeaderEl.classList.add("outputHeader");
    outputHeaderEl.innerText = "Basic Info";

    const outputDivEl = document.createElement("div");
    outputDivEl.classList.add("outputDiv");
    
    const nameLabelEl = document.createElement("h3");
    nameLabelEl.innerText = "Name";

    const nameFieldEl = document.createElement("output");
    nameFieldEl.type = "text";
    nameFieldEl.placeholder = "";

    const levelLabelEl = document.createElement("h3");
    levelLabelEl.innerText = "Level";

    const levelFieldEl = document.createElement("output");
    levelFieldEl.type = "number";
    levelFieldEl.placeholder = "Choose 1-3";

    const alignmentLabelEl = document.createElement("h3");
    alignmentLabelEl.innerText = "Alignment";

    const alignmentFieldEl = document.createElement("output");
    alignmentFieldEl.type = "text";
    alignmentFieldEl.placeholder = "Select an Alignment";

    //making level modal elements
    
    
}

