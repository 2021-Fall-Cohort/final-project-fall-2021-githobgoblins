import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import { displayRaceView } from "./race.js";
// import {displayRaceView} from "./race.js";

function displayBackgroundView(mainContainerEl){


    displayHeader(mainContainerEl);

    const mainContentDiv = document.createElement("div");
    mainContentDiv.classList.add("mainContentDiv");

    //making all html elements for the pageTopDiv
    const backgroundTitleEl = document.createElement("h1");
    backgroundTitleEl.classList.add("pageTitle");
    backgroundTitleEl.innerText =  "Background";

    const pageTopDivEl = document.createElement("div");
    pageTopDivEl.classList.add("pageTopDiv");

    const backgroundFormButtonsDivEl = document.createElement("div");
    backgroundFormButtonsDivEl.classList.add("formButtons");

    const backgroundFormEl = document.createElement("form");

    const backgroundSelectEl = document.createElement("select");
    backgroundSelectEl.classList.add("selector");

    const acolyteOptionEl = document.createElement("option");
    acolyteOptionEl.setAttribute('value', 'acolyte');
    acolyteOptionEl.innerText = "Acolyte";

    const charlatanOptionEl = document.createElement("option");
    charlatanOptionEl.setAttribute('value', 'carlatan');
    charlatanOptionEl.innerText = "Charlatan";

    const criminalOptionEl = document.createElement("option");
    criminalOptionEl.setAttribute('value', 'criminal');
    criminalOptionEl.innerText = "Criminal";

    const entertainerOptionEl = document.createElement("option");
    entertainerOptionEl.setAttribute('value', 'entertainer');
    entertainerOptionEl.innerText = "Entertainer";

    const folkHeroOptionEl = document.createElement("option");
    folkHeroOptionEl.setAttribute('value', 'folkHero');
    folkHeroOptionEl.innerText = "Folk Hero";

    const guildArtisanOptionEl = document.createElement("option");
    guildArtisanOptionEl.setAttribute('value', 'guildArtisan');
    guildArtisanOptionEl.innerText = "Guild Artisan";

    const hermitOptionEl = document.createElement("option");
    hermitOptionEl.setAttribute('value', 'hemit');
    hermitOptionEl.innerText = "Hermit";

    const nobleOptionEl = document.createElement("option");
    nobleOptionEl.setAttribute('value', 'noble');
    nobleOptionEl.innerText = "Noble";

    const outlanderOptionEl = document.createElement("option");
    outlanderOptionEl.setAttribute('value', 'outlander');
    outlanderOptionEl.innerText = "Outlander";

    const sageOptionEl = document.createElement("option");
    sageOptionEl.setAttribute('value', 'sage');
    sageOptionEl.innerText = "Sage";

    const sailorOptionEl = document.createElement("option");
    sailorOptionEl.setAttribute('value', 'sailor');
    sailorOptionEl.innerText = "Sailor";

    const soldierOptionEl = document.createElement("option");
    soldierOptionEl.setAttribute('value', 'soldier');
    soldierOptionEl.innerText = "Soldier";

    const urchinOptionEl = document.createElement("option");
    urchinOptionEl.setAttribute('value', 'urchin');
    urchinOptionEl.innerText = "Urchin";

    const backgroundModalButtonEl = document.createElement("button");
    backgroundModalButtonEl.setAttribute('id', 'openBackgroundModal');
    backgroundModalButtonEl.innerText = "Learn More About the Backgroud";

    const backgroundImgEl = document.createElement("img");
    backgroundImgEl.src = "./images/knight.jpg";
    backgroundImgEl.classList.add("selectorArt");

    // creating nav buttons
    const backButtonEl = document.createElement("button");
    backButtonEl.classList.add("navButtons");
    backButtonEl.setAttribute('id', 'backgroundBackButton');
    backButtonEl.innerText = "<";

    const forwardButtonEl = document.createElement("button");
    forwardButtonEl.classList.add("navButtons");
    forwardButtonEl.setAttribute('id', 'backgroundForwardButton');
    forwardButtonEl.innerText = ">";

    //appending all pageTopDiv elements

    backgroundSelectEl.append(acolyteOptionEl);
    backgroundSelectEl.append(charlatanOptionEl);
    backgroundSelectEl.append(criminalOptionEl);
    backgroundSelectEl.append(entertainerOptionEl);
    backgroundSelectEl.append(folkHeroOptionEl);
    backgroundSelectEl.append(guildArtisanOptionEl);
    backgroundSelectEl.append(hermitOptionEl);
    backgroundSelectEl.append(nobleOptionEl);
    backgroundSelectEl.append(outlanderOptionEl);
    backgroundSelectEl.append(sageOptionEl);
    backgroundSelectEl.append(sailorOptionEl);
    backgroundSelectEl.append(soldierOptionEl);
    backgroundSelectEl.append(urchinOptionEl);

    // backgroundFormEl.append(backgroundSelectEl);

    backgroundFormButtonsDivEl.append(backgroundSelectEl);
    backgroundFormButtonsDivEl.append(backgroundModalButtonEl);

    pageTopDivEl.append(backButtonEl);
    pageTopDivEl.append(backgroundFormButtonsDivEl);
    pageTopDivEl.append(backgroundImgEl);
    pageTopDivEl.append(forwardButtonEl);

    mainContentDiv.append(backgroundTitleEl);
    mainContentDiv.append(pageTopDivEl);

    //creating all modal elements

    const backgroundModalDivEl = document.createElement("div");
    backgroundModalDivEl.classList.add("modal");
    backgroundModalDivEl.setAttribute('id', 'backgroundModal');

    const backgroundModalContentDivEl = document.createElement("div");
    backgroundModalContentDivEl.classList.add("modalContent");

    const backgroundModalHeaderDivEl = document.createElement("div");
    backgroundModalHeaderDivEl.classList.add("modalHeader");

    const backgroundModalCloseSpanEl = document.createElement("span");
    backgroundModalCloseSpanEl.classList.add("close");
    backgroundModalCloseSpanEl.innerHTML = "&times";

    const backgroundModalHeaderEl = document.createElement("h2");
    backgroundModalHeaderEl.classList.add("backgroundModalHeader");
    backgroundModalHeaderEl.innerText = "Backround";

    const backgroundModalBodyDivEl = document.createElement("div");
    backgroundModalBodyDivEl.classList.add("modalBody");

    const backgroundModalBodyContentEl = document.createElement("p");
    backgroundModalBodyContentEl.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eaque quia adipisci quis alias, laborum quibusdam dignissimos veniam incidunt, tempore, ex eius repellendus. Iure repudiandae quisquam itaque quis neque quam!";

    //appending all modal content

    backgroundModalHeaderDivEl.append(backgroundModalCloseSpanEl);
    backgroundModalHeaderDivEl.append(backgroundModalHeaderEl);

    backgroundModalBodyDivEl.append(backgroundModalBodyContentEl);

    backgroundModalContentDivEl.append(backgroundModalHeaderDivEl);
    backgroundModalContentDivEl.append(backgroundModalBodyDivEl);

    backgroundModalDivEl.append(backgroundModalContentDivEl);

    mainContentDiv.append(backgroundModalDivEl);

    //making modal work

    backgroundModalButtonEl.addEventListener("click", ()=> {  
      backgroundModalDivEl.style.display = "block";
    })

    backgroundModalCloseSpanEl.onclick = function() {
        backgroundModalDivEl.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == backgroundModalDivEl) {
          backgroundModalDivEl.style.display = "none";
        }
    }

    //creating all pageBottomDiv elements

    const pageBottomDivEl = document.createElement("div");
    pageBottomDivEl.classList.add("div");

    const backgroundLearnDropdownDivEl = document.createElement("div");
    backgroundLearnDropdownDivEl.classList.add("learnDropdown");

    const backgroundDropdownLabelEl = document.createElement("label");
    backgroundDropdownLabelEl.setAttribute('for', 'backgroundNames');
    backgroundDropdownLabelEl.setAttribute('id', 'backgroundLearnLabel');

    const backgroundLearnFormEl = document.createElement("form");
    
    const backgroundLearnSelectEl = document.createElement("select");
    backgroundLearnSelectEl.setAttribute('name', 'backgroundNames');
    backgroundLearnSelectEl.setAttribute('id', 'backgroundNames');

    const acolyteLearnOptionEl = document.createElement("option");
    acolyteLearnOptionEl.setAttribute('value', 'acolyte');
    acolyteLearnOptionEl.innerText = "Acolyte";

    const charlatanLearnOptionEl = document.createElement("option");
    charlatanLearnOptionEl.setAttribute('value', 'carlatan');
    charlatanLearnOptionEl.innerText = "Charlatan";

    const criminalLearnOptionEl = document.createElement("option");
    criminalLearnOptionEl.setAttribute('value', 'criminal');
    charlatanLearnOptionEl.innerText = "Criminal";

    const entertainerLearnOptionEl = document.createElement("option");
    entertainerLearnOptionEl.setAttribute('value', 'entertainer');
    entertainerLearnOptionEl.innerText = "Entertainer";

    const folkHeroLearnOptionEl = document.createElement("option");
    folkHeroLearnOptionEl.setAttribute('value', 'folkHero');
    folkHeroLearnOptionEl.innerText = "Folk Hero";

    const guildArtisanLearnOptionEl = document.createElement("option");
    guildArtisanLearnOptionEl.setAttribute('value', 'guildArtisan');
    guildArtisanLearnOptionEl.innerText = "Guild Artisan";

    const hermitLearnOptionEl = document.createElement("option");
    hermitLearnOptionEl.setAttribute('value', 'hemit');
    hermitLearnOptionEl.innerText = "Hermit";

    const nobleLearnOptionEl = document.createElement("option");
    nobleLearnOptionEl.setAttribute('value', 'noble');
    nobleLearnOptionEl.innerText = "Noble";

    const outlanderLearnOptionEl = document.createElement("option");
    outlanderLearnOptionEl.setAttribute('value', 'outlander');
    outlanderLearnOptionEl.innerText = "Outlander";

    const sageLearnOptionEl = document.createElement("option");
    sageLearnOptionEl.setAttribute('value', 'sage');
    sageLearnOptionEl.innerText = "Sage";

    const sailorLearnOptionEl = document.createElement("option");
    sailorLearnOptionEl.setAttribute('value', 'sailor');
    sailorLearnOptionEl.innerText = "Sailor";

    
    const soldierLearnOptionEl = document.createElement("option");
    soldierLearnOptionEl.setAttribute('value', 'soldier');
    soldierLearnOptionEl.innerText = "Soldier";


    const urchinLearnOptionEl = document.createElement("option");
    urchinLearnOptionEl.setAttribute('value', 'urchin');
    urchinLearnOptionEl.innerText = "Urchin";

    const backgroundMoreInfoButtonEl = document.createElement("button");
    backgroundMoreInfoButtonEl.innerText = "More Info";
    backgroundMoreInfoButtonEl.setAttribute('id', 'backgroundMoreInfoButton');

    //creating more info elements for page dropdown

    const backgroundMoreInfoDivEl = document.createElement("div");
    backgroundMoreInfoDivEl.setAttribute('id', 'backgroundMoreInfoDiv');
    

    const backgroundMoreInfoTextEl = document.createElement("p");
    backgroundMoreInfoDivEl.classList.add("backgroundMoreInfoText");
    backgroundMoreInfoDivEl.innerText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur numquam quaerat accusantium voluptatum vero necessitatibus architecto molestiae molestias eligendi amet facere aspernatur, sed ullam a dolorum atque laborum nulla labore.";
    //appending more info content

    backgroundMoreInfoDivEl.append(backgroundMoreInfoTextEl);
     
    mainContentDiv.append(backgroundMoreInfoDivEl);

    //appending all pageBottomDiv elements

    backgroundLearnSelectEl.append(acolyteLearnOptionEl);
    backgroundLearnSelectEl.append(charlatanLearnOptionEl);
    backgroundLearnSelectEl.append(criminalLearnOptionEl);
    backgroundLearnSelectEl.append(entertainerLearnOptionEl);
    backgroundLearnSelectEl.append(folkHeroLearnOptionEl);
    backgroundLearnSelectEl.append(guildArtisanLearnOptionEl);
    backgroundLearnSelectEl.append(hermitLearnOptionEl);
    backgroundLearnSelectEl.append(nobleLearnOptionEl);
    backgroundLearnSelectEl.append(outlanderLearnOptionEl);
    backgroundLearnSelectEl.append(sageLearnOptionEl);
    backgroundLearnSelectEl.append(sailorLearnOptionEl);
    backgroundLearnSelectEl.append(soldierLearnOptionEl);
    backgroundLearnSelectEl.append(urchinLearnOptionEl);

    backgroundLearnFormEl.append(backgroundLearnSelectEl);

    backgroundLearnDropdownDivEl.append(backgroundDropdownLabelEl);
    // backgroundFormButtonsDivEl.append(backgroundFormEl);

    pageBottomDivEl.append(backgroundLearnDropdownDivEl);
    pageBottomDivEl.append(backgroundLearnFormEl);
    pageBottomDivEl.append(backgroundMoreInfoButtonEl);
    mainContentDiv.append(pageBottomDivEl);

    //creating backgroundLearnMoreDiv elements

    const backgroundLearnMoreDivEl = document.createElement("div");
    backgroundLearnMoreDivEl.setAttribute('id', 'raceLearnMoreDiv');

    const backgroundLearnMoreContentEl = document.createElement("p");
    backgroundLearnMoreContentEl.setAttribute('id', 'backgroundLearnMoreContent');

    //wiring up nav buttons
    backButtonEl.addEventListener("click", () => {
      clearChildren(mainContainerEl);
      displayRaceView(mainContainerEl);
    });

    //appending backgroundMoreDiv content

    backgroundLearnMoreDivEl.append(backgroundLearnMoreContentEl);
    mainContentDiv.append(backgroundLearnMoreDivEl);

    function learnBackgroundFunction(){
        var x = document.getElementById("backgroundMoreInfoDiv");
        if (x.style.display === "block") {
          x.style.display = "none";
        } else {
          x.style.display = "block";
        }
    }
  
    backgroundMoreInfoButtonEl.addEventListener("click", ()=> {
        learnBackgroundFunction();
    })

    mainContainerEl.append(mainContentDiv);

    displayFooter(mainContainerEl);
}

export {displayBackgroundView}
