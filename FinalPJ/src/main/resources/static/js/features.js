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
    levelModalBodyContentEl.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque quia adipisci quis alias, laborum quibusdam dignissimos veniam incidunt, tempore, ex eius repellendus. Iure repudiandae quisquam itaque quis neque quam!";

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
    alignmentModalBodyContentEl.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque quia adipisci quis alias, laborum quibusdam dignissimos veniam incidunt, tempore, ex eius repellendus. Iure repudiandae quisquam itaque quis neque quam!";

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

    //appending all features page content

    featureDivEl.append(nameLabelEl);
    featureDivEl.append(nameFieldEl);
    featureDivEl.append(levelLabelEl);
    featureDivEl.append(levelFieldEl);
    featureDivEl.append(levelModalButtonEl);
    featureDivEl.append(alignmentLabelEl);
    featureDivEl.append(alignmentFieldEl);
    featureDivEl.append(alignmentModalButtonEl);

    mainContentDivEl.append(alignmentModalDivEl);
    mainContentDivEl.append(levelModalDivEl);
    mainContentDivEl.append(featureHeaderEl);
    mainContentDivEl.append(featureDivEl);

    mainContainerEl.append(mainContentDivEl);

    displayFooter(mainContainerEl);

}

export {displayFeaturesView}