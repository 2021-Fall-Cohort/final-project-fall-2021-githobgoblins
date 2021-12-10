import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";
import { displayFeaturesView } from "./features.js";

function displayCardsOutputView(mainContainerEl){
  




displayHeader(mainContainerEl);

//header Cards HomePage


const headerCardsEl = document.createElement("header");
headerCardsEl.classList.add("header");


const headerDivCardsEl = document.createElement("div");
headerDivCardsEl.classList.add("headerDiv");

const headerUlCardsEl = document.createElement("ul");
headerUlCardsEl.classList.add =("headerUl");


const headerLiHomeEl = document.createElement("li");
headerLiHomeEl.classList.add("Home");


const headerLiCreateCharacterEl = document.createElement("li");
headerLiCreateCharacterEl.classList.add("CreateACharacter");

const headerLiUserCreationsEl = document.createElement("li");
headerLiUserCreationsEl.classList.add("UserCreations");


const headerLiMeetTheGoblinsEl = document.createElement("li");
headerLiMeetTheGoblinsEl.classList.add("MeetTheGoblins");





//append the header Cards Hompage

headerUlCardsEl.append(headerLiHomeEl);
headerUlCardsEl.append(headerLiCreateCharacterEl);
headerUlCardsEl.append(headerLiUserCreationsEl);
headerUlCardsEl.append(headerLiMeetTheGoblinsEl);

headerDivCardsEl.append(headerUlCardsEl);

headerCardsEl.append(headerDivCardsEl);

mainContainerEl.append(headerCardsEl);




//Portfolio Cards Section

const cardsEl = document.createElement("div");
cardsEl.classList.add("cards");
cardsEl.innerText = "Portfolio";

const cardCardOneEl = document.createElement("div");
cardCardOneEl.classList.add("cardCard1");

const portfolioCardEl = document.createElement("img");
portfolioCardEl.classList.add("PortfolioLogo");
portfolioCardEl.src = "./images/card_1.jfif";

const cardDescOneEl = document.createElement("p");
cardDescOneEl.classList.add("card-desc");




// append all Card  Portfolio Sections

cardCardOneEl.append(portfolioCardEl);
cardCardOneEl.append(cardDescOneEl);
cardsEl.append(cardCardOneEl);

mainContainerEl.append(cardsEl);



// Event Listener for Cards 1
cardDescOneEl.addEventListener("click", () =>{

    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl);
    console.log(displayCardsOutputView);
})



// At home or on  the go Card section 
const cardCardTwoEl = document.createElement("div");
cardCardTwoEl.classList.add("cardCard2");
cardCardTwoEl.innerText = "At Home or on the Go";



const cardAtHomeOrOnTheGoEl = document.createElement("img");
cardAtHomeOrOnTheGoEl.classList.add("AtHomeOrOnTheGoLogo");
cardAtHomeOrOnTheGoEl.src = "./images/card_2.jpg";

const cardDescTwoEl = document.createElement("p");
cardDescTwoEl.classList.add("card-desc");

//append At home or on the go Card Section
cardCardTwoEl.append(cardAtHomeOrOnTheGoEl);
cardCardTwoEl.append(cardDescTwoEl);
cardsEl.append(cardCardTwoEl);

mainContainerEl.append(cardsEl);

// Event Listener for Cards 2
cardDescTwoEl.addEventListener("click", () =>{

    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl);
    console.log(displayCardsOutputView);
})


// Tap into Adventure Card Section
const cardCardThreeEl = document.createElement("div");
cardCardThreeEl.classList.add("cardCard3");
cardCardThreeEl.innerText = "Tap into adventure";

const tapIntoAdventureCardEl  = document.createElement("img");
tapIntoAdventureCardEl.classList.add("TapIntoAdventure");
tapIntoAdventureCardEl.src = "./images/card_3.jpg";

const cardDescThreeEl = document.createElement("p");
cardDescThreeEl.classList.add("card-desc");


// Event Listener for Cards 3
cardDescThreeEl.addEventListener("click", () =>{

    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl);
    console.log(displayCardsOutputView);
})

//Append all Tap into 
cardCardThreeEl.append(tapIntoAdventureCardEl);
cardCardThreeEl.append(cardDescThreeEl);
cardsEl.append(cardCardThreeEl);

mainContainerEl.append(cardDescThreeEl);





displayFooter(mainContainerEl);


}

export {displayCardsOutputView}






















