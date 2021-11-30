import {clearChildren} from "./app.js";
import {displayHeader} from "./app.js";
import {displayFooter} from "./app.js";
import {displayDNDClassView} from "./race.js";

function displayRaceView(mainContainerEl){

    displayHeader(mainContainerEl);

    //making all html elements for the pageTopDiv
    const raceTitleEl = document.createElement("h1");
    raceTitleEl.classList.add("pageTitle");

    const pageTopDivEl = document.createElement("div");
    pageTopDivEl.classList.add("pageTopDiv");

    const 

    displayFooter(mainContainerEl);
}