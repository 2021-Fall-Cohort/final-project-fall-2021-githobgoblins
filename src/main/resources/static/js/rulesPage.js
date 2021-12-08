function displayRulesPage(mainContainerEl) {
    const mainSection = document.createElement("section");
    mainSection.classList.add("content-section");

    mainContainerEl.append(mainSection);

    const mainH1El = document.createElement("h1");
    mainH1El.innerText= "DND Rules Page";

    const contentUL = document.createElement("ul");
    mainSection.append(mainH1El);
    mainSection.appendChild(contentUL);

    //infoBox and infoBoxText
    const infoBox = document.createElement("div");
    infoBox.classList.add("infoBoxDiv");
    const infoBoxText = document.createElement("p");
    infoBoxText.classList.add("infoBoxText");
    infoBoxText.innerText = "";
    const infoBoxH2 = document.createElement("h2");
    infoBoxH2.classList.add("infoBoxH2");
    infoBoxH2.innerText="Click on what you'd like to learn more about.";


    mainSection.appendChild(infoBox);
    infoBox.appendChild(infoBoxH2);
    infoBox.appendChild(infoBoxText);
    

    //create and append ListItems as needed

    //Class section
    const listItem1 = document.createElement("li");
    listItem1.classList.add("item-list");
    const item1Button = document.createElement("button");
    item1Button.classList.add("clicktohide");
    item1Button.innerText ="Classes";

    //Race section
    const listItem2 = document.createElement("li");
    listItem2.classList.add("item-list");
    const item2Button = document.createElement("button");
    item2Button.classList.add("clicktohide");
    item2Button.innerText= "Races ";
    
    //Background section
    const listItem3 = document.createElement("li");
    listItem3.classList.add("item-list");
    const item3Button = document.createElement("button");
    item3Button.classList.add("clicktohide");
    item3Button.innerText= "Backgrounds";

    //Ability Scores
    const listItem4 = document.createElement("li");
    listItem4.classList.add("item-list");
    const item4Button = document.createElement("button");
    item4Button.classList.add("clicktohide");
    item4Button.innerText= "Ability Scores";

    //Adventuring
    const listItem5 = document.createElement("li");
    listItem5.classList.add("item-list");
    const item5Button = document.createElement("button");
    item5Button.classList.add("clicktohide");
    item5Button.innerText= "Adventuring";

    //Monsters
    const listItem6 = document.createElement("li");
    listItem6.classList.add("item-list");
    const item6Button = document.createElement("button");
    item6Button.classList.add("clicktohide");
    item6Button.innerText= "Monsters";

    //Resting
    const listItem7 = document.createElement("li");
    listItem7.classList.add("item-list");
    const item7Button = document.createElement("button");
    item7Button.classList.add("clicktohide");
    item7Button.innerText= "Resting";

    //Combat
    const listItem8 = document.createElement("li");
    listItem8.classList.add("item-list");
    const item8Button = document.createElement("button");
    item8Button.classList.add("clicktohide");
    item8Button.innerText= "Combat";
    


    //classes
    contentUL.appendChild(listItem1);
    listItem1.appendChild(item1Button);

    item1Button.addEventListener("click", ()=>{

        fetch('https://www.dnd5eapi.co/api/traits/darkvision/', {
        method: 'GET'
    })
        .then(response => response.json())
        .then(classes => {
            infoBoxText.innerText = classes;
            console.log("fetch complete");
        })
    });

    //races
    contentUL.appendChild(listItem2);
    listItem2.appendChild(item2Button);

    //backgrounds
    contentUL.appendChild(listItem3);
    listItem3.appendChild(item3Button);

    //Ability Scores
    contentUL.appendChild(listItem4);
    listItem4.appendChild(item4Button);

    //Adventuring
    contentUL.appendChild(listItem5);
    listItem5.appendChild(item5Button);

    //Monsters
    contentUL.appendChild(listItem6);
    listItem6.appendChild(item6Button);

    //Resting
    contentUL.appendChild(listItem7);
    listItem7.appendChild(item7Button);

    //Combat
    contentUL.appendChild(listItem8);
    listItem8.appendChild(item8Button);






}


export {displayRulesPage};
