import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";
import { displayFeaturesView } from "./features.js";

function displayCardsOutputView(mainContainerEl,currentCharacter){


console.log(currentCharacter);

displayHeader(mainContainerEl);

//header Cards HomePage
const mainContainerEl = document.createElement("div");
mainContainerEl.classList.add("mainContainerEl");

const headerCardsEl = document.createElement("header");
headerCardsEl.classList.add("header");
headerCardsEl.innerText = "One Shot Wizard";

const headerDivCardsEl = document.createElement("div");
headerDivCardsEl.classList.add("headerDiv");

const headerUlCardsEl = document.createElement("ul");
headerUlCardsEl.classList.add =("headerUl");
headerUlCardsEl.innerText = "One Shot Goblin";

const headerLiHomeEl = document.createElement("li");
headerLiHomeEl.classList.add("Home");
headerLiHomeEl.innerText = "Home";

const headerLiCreateCharacterEl = document.createElement("li");
headerLiCreateCharacterEl.classList.add("Create a Character");
headerLiCreateCharacterEl.innerText  = "Create a Character";

const headerLiUserCreationsEl = document.createElement("li");
headerLiUserCreationsEl.classList.add("User Creations");
headerLiUserCreationsEl.innerText = "User Creations";

const headerLiMeetTheGoblinsEl = document.createElement("li");
headerLiMeetTheGoblinsEl.classList.add("Meet the Goblins");
headerLiMeetTheGoblinsEl.innerText = "Meet the Goblins";




//append the header Cards Hompage

headerUlCardsEl.append(headerLiHomeEl);
headerUlCardsEl.append(headerLiCreateCharacterEl);
headerUlCardsEl.append(headerLiUserCreationsEl);
headerUlCardsEl.append(headerLiMeetTheGoblinsEl);

headerDivCardsEl.append(headerUlCardsEl);

headerCardsEl.append(headerDivCardsEl);

headerCardsEl.append(mainContainerEl);

headerLiUserCreationsEl.addEventListener("click"(), => {
display

})


//Cards Section

const cardsEl = document.createElement("div");
cardsEl.classList.add("cards");
cardsEl.innerText = "Portfolio";

const cardCardOneEl = document.createElement("div");
cardCardOneEl.classList.add("card card1");

const portfolioCardEl = document.createElement("img");
portfolioCardEl.add("PortfolioLogo");
portfolioCardEl.src = "./images/card_1.jfif";

const cardDescOneEl = document.createElement("p");
cardDescOneEl.classList.add("card-desc");


// append all Card  Portfolio Sections

cardCardOneEl.append(portfolioCardEl);
cardCardOneEl.append(cardDescOneEl);
cardsEl.append(cardCardOneEl);

cardsEl.append(mainContainerEl);


cardDescOneEl.addEventListener("click", () =>{

    clearChildren(mainContainerEl);
    displayFeaturesView(mainContainerEl,currentCharacter);
    console.log(displayCardsOutputView);
})



const cardCardTwoEl = document.createElement("img");
atHomeOrOnTheGoEl.add("At home or on the go logo");
atHomeOrOnTheGoEl.src = "./images/card_2.jpg";

const cardDescTwoEl = document.createElement("p");
cardDescTwoEl.classList.add("card-desc");

//append At home or on the go Cards

cardCardTwoEl.append();


const cardCardThreeEl = document.createElement("div");
cardCardThreeEl.classList.add("card card3");
cardDescThreeEl.innerText = "Tap into adventure";

const tapIntoAdventureCardEl = document.createElement("img");
tapIntoAdventureCardEl.add("Tap into adventure");
tapIntoAdventureCardEl.src = "./images/card_3.jpg";

const cardDescThreeEl = document.createElement("p");
cardDescThreeEl.classList.add("card-desc");



//Footer Section

const footerCardsEl = document.createElement("footer");
footerCardsEl.classList.add("footer");

const footerLiWeCanCodeItEl = document.createElement("h3");
footerLiWeCanCodeItEl.classList.add("footerLiEl");
footerLiWeCanCodeItEl.innerText = "We Can Code It";

const footerLiGitHobGoblinsEl = document.createElement("h4");
footerLiGitHobGoblinsEl.classList.add("footerLiEl");
footerLiGitHobGoblinsEl.innerText = "Git-HobGoblins";

const footerLiTwoThousandTwentyOneEl = document.createElement("p");
footerLiTwoThousandTwentyOneEl.classList.add("footerLiEl");
footerLiTwoThousandTwentyOneEl.innerText = "2021";

//append Footer

footerCardsEl.append(footerLiWeCanCodeItEl);
footerCardsEl.append(footerLiGitHobGoblinsEl);
footerCardsEl.append(footerLiTwoThousandTwentyOneEl);

footerCardsEl.append(mainContainerEl)

}

export {displayCardsOutputView}




















