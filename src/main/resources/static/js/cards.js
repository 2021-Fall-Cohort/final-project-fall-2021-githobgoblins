import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";
import { displayFeaturesView } from "./features.js";

function displayCardsOutputView(mainContainerEl){
  
    displayHeader(mainContainerEl);


//Portfolio Cards Section

const cardsEl = document.createElement("div");
cardsEl.classList.add("cardsDiv");
// cardsEl.innerText = "Portfolio";

//creating card elements
const cardCardOneEl = document.createElement("div");
cardCardOneEl.classList.add("card");

const portfolioCardEl = document.createElement("img");
portfolioCardEl.classList.add("cardImg");
portfolioCardEl.src = "./images/castle.jpg";

const cardDescOneEl = document.createElement("h2");
cardDescOneEl.classList.add("cardDesc");
cardDescOneEl.innerText = "Create a Character";


const cardCardTwoEl = document.createElement("div");
cardCardTwoEl.classList.add("card");

const portfolioCardTwoEl = document.createElement("img");
portfolioCardTwoEl.classList.add("cardImg");
portfolioCardTwoEl.src = "./images/castle.jpg";

const cardDescTwoEl = document.createElement("h2");
cardDescTwoEl.classList.add("cardDesc");
cardDescTwoEl.innerText = "Rules of D&D";

const cardCardThreeEl = document.createElement("div");
cardCardThreeEl.classList.add("card");

const portfolioCardThreeEl = document.createElement("img");
portfolioCardThreeEl.classList.add("cardImg");
portfolioCardThreeEl.src = "./images/castle.jpg";

const cardDescThreeEl = document.createElement("h2");
cardDescThreeEl.classList.add("cardDesc");
cardDescThreeEl.innerText = "Meet the Goblins";

// append all Card  Portfolio Sections

cardCardOneEl.append(portfolioCardEl);
cardCardOneEl.append(cardDescOneEl);

cardCardTwoEl.append(portfolioCardTwoEl);
cardCardTwoEl.append(cardDescTwoEl);

cardCardThreeEl.append(portfolioCardThreeEl);
cardCardThreeEl.append(cardDescThreeEl);

cardsEl.append(cardCardOneEl);
cardsEl.append(cardCardTwoEl);
cardsEl.append(cardCardThreeEl);

mainContainerEl.append(cardsEl);



// Event Listener for Cards 1
cardDescOneEl.addEventListener("click", () =>{

    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl);
    console.log(displayCardsOutputView);
})



// // At home or on  the go Card section 
// const cardCardTwoEl = document.createElement("div");
// cardCardTwoEl.classList.add("cardCard2");
// cardCardTwoEl.innerText = "At Home or on the Go";



// const cardAtHomeOrOnTheGoEl = document.createElement("img");
// cardAtHomeOrOnTheGoEl.classList.add("AtHomeOrOnTheGoLogo");
// cardAtHomeOrOnTheGoEl.src = "./images/card_2.jpg";

// const cardDescTwoEl = document.createElement("p");
// cardDescTwoEl.classList.add("card-desc");

//append At home or on the go Card Section
// cardCardTwoEl.append(cardAtHomeOrOnTheGoEl);
// cardCardTwoEl.append(cardDescTwoEl);
// cardsEl.append(cardCardTwoEl);

// mainContainerEl.append(cardsEl);

// Event Listener for Cards 2
cardDescTwoEl.addEventListener("click", () =>{

    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl);
    console.log(displayCardsOutputView);
})


// Tap into Adventure Card Section
// const cardCardThreeEl = document.createElement("div");
// cardCardThreeEl.classList.add("cardCard3");
// cardCardThreeEl.innerText = "Tap into adventure";

// const tapIntoAdventureCardEl  = document.createElement("img");
// tapIntoAdventureCardEl.classList.add("TapIntoAdventure");
// tapIntoAdventureCardEl.src = "./images/card_3.jpg";

// const cardDescThreeEl = document.createElement("p");
// cardDescThreeEl.classList.add("card-desc");


// Event Listener for Cards 3
cardDescThreeEl.addEventListener("click", () =>{

    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl);
    console.log(displayCardsOutputView);
})

//Append all Tap into 
// cardCardThreeEl.append(tapIntoAdventureCardEl);
// cardCardThreeEl.append(cardDescThreeEl);
// cardsEl.append(cardCardThreeEl);

// mainContainerEl.append(cardDescThreeEl);





displayFooter(mainContainerEl);


}

export {displayCardsOutputView}






















