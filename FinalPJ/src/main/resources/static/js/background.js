import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import {displayDNDClassView} from "./race.js";

function displayBackgroundView{


    displayHeader(mainContainerEl);

    //making all html elements for the pageTopDiv
    const backgroundTitleEl = document.createElement("h1");
    backgroundTitleEl.classList.add("pageTitle");
    backgroundTitleEl.innerText = "Select Your Background";

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
    charlatanOptionEl.innerText = "Criminal";

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

    const soilderOptionEl = document.createElement("option");
    sageOptionEl.setAttribute('value', 'soilder');
    soilderOptionEl.innerText = "Soilder";

    const urchinOptionEl = document.createElement("option");
    urchinOptionEl.setAttribute('value', 'urchin');
    urchinOptionEl.innerText = "Urchin";

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
    backgroundSelectEl.append(soilderOptionEl);
    backgroundSelectEl.append(urchinOptionEl);

}