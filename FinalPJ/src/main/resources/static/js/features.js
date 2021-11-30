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

    const alignmentFieldEl = document.createElement("input");
    alignmentFieldEl.type = "text";
    alignmentFieldEl.placeholder = "Select an Alignment";

    //making level modal elements

    featureModalDivEl = document.createElement("div");
    featureModalDivEl.classList.add("featureModal");
    featureModalDivEl.setAttribute('id', 'featureModalDiv');

    const featureModalContentDivEl = document.createElement("div");
    featureModalContentDivEl.classList.add("featureModalContent");

    const featureModalHeaderDivEl = document.createElement("div");
    featureModalHeaderDivEl.classList.add("featureModalHeaderDiv");

    

    //appending all features page content

    featureDivEl.append(nameLabelEl);
    featureDivEl.append(nameFieldEl);
    featureDivEl.append(levelLabelEl);
    featureDivEl.append(levelFieldEl);
    featureDivEl.append(alignmentLabelEl);
    featureDivEl.append(alignmentFieldEl);

    mainContentDivEl.append(featureHeaderEl);
    mainContentDivEl.append(featureDivEl);

    mainContainerEl.append(mainContentDivEl);
}

export {displayFeaturesView}