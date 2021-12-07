import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";

// function displayOutputView(mainContainerEl, currentCharacter) {
//     console.log(currentCharacter);
//     displayHeader(mainContainerEl);

//     //making all fields and content for Character page

//     const mainContentDivEl = document.createElement("div");
//     mainContentDivEl.classList.add("mainContentDiv");
    
//     const outputDivEl = document.createElement("div");
//     outputDivEl.classList.add("finalOutputDiv");
   
//     mainContentDivEl.append(outputDivEl);
//     // mainContainerEl.append(mainContentDivEl);  Redundant SHOULDN'T BE HERE PROBABLY APPENDS TO MAIN PAGE ON INDEX 

// // HEADER & PRINT BUTTONS 
//     const headingDiv =document.createElement("div");
//     headingDiv.classList.add("heading");

//     const outputHeaderEl = document.createElement("h1");
//     outputHeaderEl.innerText = "Dungeons & Dragons Final Character";

//     const emailCharBtn =document.createElement("button");
//     emailCharBtn.setAttribute("id", "user-email");

//     const printCharBtn =document.createElement("button");
//     printCharBtn.setAttribute("id", "user-print");

//     const tweetCharBtn =document.createElement("button");
//     tweetCharBtn.setAttribute("id", "user-tweet");

//     headingDiv.append(outputHeaderEl);
//     headingDiv.append(emailCharBtn);
//     headingDiv.append(printCharBtn);
//     headingDiv.append(tweetCharBtn);
//     outputDivEl.append(headingDiv);

// // Base Features Div

//     const baseFeaturesDiv = document.createElement("div");
//     baseFeaturesDiv.classList.add("outputDiv");

// // Current Features Sections
//     const baseCurrentSection =document.createElement("section");
//     baseCurrentSection.classList.add("base", "current-seclection");
//     baseCurrentSection.setAttribute("id", "base");
    
//     const baseHeading =document.createElement("h1");
//     baseHeading.innerText= "Current Base Features";

//     const nameLabelEl = document.createElement("h3");
//     nameLabelEl.innerText = "Name";
    
//     const nameOutputEl = document.createElement("small");
//     nameOutputEl.innerText = currentCharacter.baseFeatures.name;

//     const levelEl = document.createElement("h3");
//     levelEl.innerText = "Level";

//     const levelOutputEl = document.createElement("small");
//     levelOutputEl.innerText = currentCharacter.baseFeatures.level;

//     const alignmentEl = document.createElement("h3");
//     alignmentEl.innerText = "Alignment";
    
//     const alignmentOutputEl = document.createElement("small");
//     alignmentOutputEl.innerText = currentCharacter.baseFeatures.alignment;

//     const profBonus = document.createElement("h3");
//     profBonus.innerText = "Proficiency Bonus";
    
//     const bonusOutputEl = document.createElement("small");
//     bonusOutputEl.innerText = currentCharacter.baseFeatures.proficiencyBonus;

//     const experiencePointsEl = document.createElement("h3");
//     experiencePointsEl.innerText = "Experience Points";
    
//     const experiencePointsOutputEl = document.createElement("small");
//     experiencePointsOutputEl.innerText = currentCharacter.baseFeatures.experiencePoints;   

//     baseCurrentSection.append(experiencePointsOutputEl);
//     baseCurrentSection.append(experiencePointsEl);
//     baseCurrentSection.append(profBonus);
//     baseCurrentSection.append(bonusOutputEl);
//     baseCurrentSection.append(alignmentOutputEl);
//     baseCurrentSection.append(alignmentEl);
//     baseCurrentSection.append(levelOutputEl);
//     baseCurrentSection.append(levelEl);
//     baseCurrentSection.append(nameOutputEl);
//     baseCurrentSection.append(nameLabelEl);  
//     baseCurrentSection.append(baseHeading);
//     baseFeaturesDiv.append(baseCurrentSection);
//     mainContentDivEl.append(baseFeaturesDiv);
 
// // Edit Base Features Section 

//     const baseEditWrapper= document.createElement("div");
//     baseEditWrapper.classList.add("edit-div");
//     baseEditWrapper.setAttribute("id", "edit-base");

//     const editBaseSection =document.createElement("section");
//     editBaseSection.classList.add("base", "edits");
    
//     const editBaseH1 =document.createElement("h3");
//     editBaseH1.innerText= "Edit Base Features";

//     const editName = document.createElement("input");
//     editName.type = "text";
//     editName.placeholder = "Edit Your Character's Name";

//     const levelFieldEl = document.createElement("input");
//     levelFieldEl.type = "number";
//     levelFieldEl.placeholder = "Choose 1-3";

//     const editPB = document.createElement("input");
//     editPB.type = "text";
//     editPB.placeholder = "Edit Proficnency Bonus";

//     const editXP = document.createElement("input");
//     editXP.type = "text";
//     editXP.placeholder = "Edit Expereince Points";

//     editBaseSection.append(editXP);
//     editBaseSection.append(editPB);
//     editBaseSection.append(levelFieldEl);
//     editBaseSection.append(editName);
//     editBaseSection.append(editBaseH1);
//     baseEditWrapper.append(editBaseSection);
//     baseFeaturesDiv.append(baseEditWrapper);

// // Base Feature Buttons

//     const editBtnDiv= document.createElement("div");
//     editBtnDiv.classList.add("edit-button-div");

//     const baseEditBtn= document.createElement("button");
//     baseEditBtn.classList.add("edit-button");
//     baseEditBtn.setAttribute("id", "base-edit-button");

//     const cancSubBtnDiv= document.createElement("div");
//     cancSubBtnDiv.classList.add("cancel-submit");

//     const baseCancEdit= document.createElement("button");
//     baseCancEdit.classList.add("edit", "cancel");
//     baseCancEdit.setAttribute("id", "base-cancel-edit");
    
//     const baseSubmit= document.createElement("button");
//     baseSubmit.classList.add("edit", "submit");
//     baseSubmit.setAttribute("id", "base-submit");

//     editBtnDiv.append(baseEditBtn);    
//     cancSubBtnDiv.append(baseCancEdit);
//     cancSubBtnDiv.append(baseSubmit);
//     baseFeaturesDiv.append(editBtnDiv);
//     baseFeaturesDiv.append(cancSubBtnDiv);

// // ----------------------------Class Features Div------------------------------
//     const classOutputDivEl = document.createElement("div");
//     classOutputDivEl.classList.add("outputDiv");

//     const editClassSection =document.createElement("section");
//     editClassSection.classList.add("dnd-class", "current-selections");
//     editClassSection.setAttribute("id", "dnd-class");    

//     const classLabelEl = document.createElement("h3");
//     classLabelEl.innerText = "Current Class";    
    
//     const classOutputEl = document.createElement("small");
//     classOutputEl.innerText = currentCharacter.dndClass.name;

//     const classDes = document.createElement("h3");
//     classDes.innerText = "Description";  
    
//     const classDesOutput= document.createElement("small");
//     classDesOutput.innerText = currentCharacter.dndClass.description; 
    
    


//     classOutputDivEl.append(classOutputEl);
//     outputDivEl.append(classLabelEl);
//     outputDivEl.append(classOutputEl);
   

// // -----------------------------Background Features Div------------------------------
//     const backgroundOutputDivEl = document.createElement("div");
//     backgroundOutputDivEl.classList.add("outputDiv");

//     const backgroundLabelEl = document.createElement("h3");
//     backgroundLabelEl.innerText = "Background";
     
//     const backgroundOutputEl = document.createElement("h4");
//     backgroundOutputEl.innerText = currentCharacter.background.name;   
    
    
//     backgroundOutputDivEl.append(backgroundOutputEl);
//     outputDivEl.append(backgroundLabelEl);
//     outputDivEl.append(backgroundOutputEl);

// // Race Features Div 

//     const raceEl = document.createElement("h3");
//     raceEl.innerText = "Race";

//     const raceOutputDivEl = document.createElement("div");
//     raceOutputDivEl.classList.add("outputDiv");
    
//     const raceOutputEl = document.createElement("h4");
//     raceOutputEl.innerText = currentCharacter.race.name;

//     raceOutputDivEl.append(raceOutputEl);
//     outputDivEl.append(raceEl);
//     outputDivEl.append(raceOutputDivEl);
   

// //  HIT POINTS LIKELY REMOVED 
//     // const hpEl = document.createElement("h3");
//     // hpEl.innerText = "Hit Points";

//     // const hpOutputDivEl = document.createElement("div");
//     // hpOutputDivEl.classList.add("outputDiv");
    
//     // const hpOutputEl = document.createElement("h4");
//     // hpOutputEl.innerText = "Hit Points placeholder";

//     // hpOutputDivEl.append(hpOutputEl);
    
//     // outputDivEl.append(hpEl);
//     // outputDivEl.append(hpOutputDivEl);

// //---------------------------creating ability scores output elements------------------------------

//     const abilitiesDivEl = document.createElement("div");
//     abilitiesDivEl.classList.add("abilitiesDiv");

//     const abilitiesTitleEl = document.createElement("h4");
//     abilitiesTitleEl.classList.add("abilitiesTitle");
//     abilitiesTitleEl.innerText = "Ability Scores";

//     const strDivEl = document.createElement("div");
//     strDivEl.classList.add("abilityDiv");

//     const strTitleEl = document.createElement("h4");
//     strTitleEl.classList.add("abilityTitle");
//     strTitleEl.innerText = "Strength";

//     const strOutputEl = document.createElement("h3");
//     strOutputEl.innerText = currentCharacter.abilityScores.strength;

//     strDivEl.append(strTitleEl);
//     strDivEl.append(strOutputEl);

//     const dexDivEl = document.createElement("div");
//     dexDivEl.classList.add("abilityDiv");

//     const dexTitleEl = document.createElement("h4");
//     dexTitleEl.classList.add("abilityTitle");
//     dexTitleEl.innerText = "Dexterity";

//     const dexOutputEl = document.createElement("h3");
//     dexOutputEl.innerText = currentCharacter.abilityScores.dexterity;

//     dexDivEl.append(dexTitleEl);
//     dexDivEl.append(dexOutputEl);

//     const conDivEl = document.createElement("div");
//     conDivEl.classList.add("abilityDiv");

//     const conTitleEl = document.createElement("h4");
//     conTitleEl.classList.add("abilityTitle");
//     conTitleEl.innerText = "Constitution";

//     const conOutputEl = document.createElement("h3");
//     conOutputEl.innerText = currentCharacter.abilityScores.constitution;

//     conDivEl.append(conTitleEl);
//     conDivEl.append(conOutputEl);

//     const intDivEl = document.createElement("div");
//     intDivEl.classList.add("abilityDiv");

//     const intTitleEl = document.createElement("h4");
//     intTitleEl.classList.add("abilityTitle");
//     intTitleEl.innerText = "Intelligence";

//     const intOutputEl = document.createElement("h3");
//     intOutputEl.innerText = currentCharacter.abilityScores.intelligence;

//     intDivEl.append(intTitleEl);
//     intDivEl.append(intOutputEl);

//     const wisDivEl = document.createElement("div");
//     wisDivEl.classList.add("abilityDiv");

//     const wisTitleEl = document.createElement("h4");
//     wisTitleEl.classList.add("abilityTitle");
//     wisTitleEl.innerText = "Wisdom";

//     const wisOutputEl = document.createElement("h3");
//     wisOutputEl.innerText = currentCharacter.abilityScores.wisdom;

//     wisDivEl.append(wisTitleEl);
//     wisDivEl.append(wisOutputEl);

//     const chaDivEl = document.createElement("div");
//     chaDivEl.classList.add("abilityDiv");

//     const chaTitleEl = document.createElement("h4");
//     chaTitleEl.classList.add("abilityTitle");
//     chaTitleEl.innerText = "Charisma";

//     const chaOutputEl = document.createElement("h3");
//     chaOutputEl.innerText = currentCharacter.abilityScores.charisma;

//     chaDivEl.append(chaTitleEl);
//     chaDivEl.append(chaOutputEl);

//     abilitiesDivEl.append(abilitiesTitleEl);
//     abilitiesDivEl.append(strDivEl);
//     abilitiesDivEl.append(dexDivEl);
//     abilitiesDivEl.append(conDivEl);
//     abilitiesDivEl.append(intDivEl);
//     abilitiesDivEl.append(wisDivEl);
//     abilitiesDivEl.append(chaDivEl);

//     // append these to the top

//     outputDivEl.append(abilitiesDivEl);

//     const proficiencyBonusEl = document.createElement("h3");
//     proficiencyBonusEl.innerText = "Proficiency Bonus";

//     const strengthEl = document.createElement("h3");
//     strengthEl.innerText = "Strength";

//     const dexterityEl = document.createElement("h3");
//     dexterityEl.innerText = "Dexterity";

//     const constitutionEl = document.createElement("h3");
//     constitutionEl.innerText = "Constitution";

//     const intelligenceEl = document.createElement("h3");
//     intelligenceEl.innerText = "Intelligence";

//     const wisdomEl = document.createElement("h3");
//     wisdomEl.innerText = "Wisdom";

//     const charismaEl = document.createElement("h3");
//     charismaEl.innerText = "Charisma";

//     displayFooter(mainContainerEl);

// }



// export {displayOutputView}

function displayOutputView(mainContainerEl, currentCharacter) {
    console.log(currentCharacter);
    displayHeader(mainContainerEl);

        //making all fields and content for Character page
        const mainContentDivEl = document.createElement("div");
        mainContentDivEl.classList.add("mainContentDiv");

        const outputDivEl = document.createElement("div");
        outputDivEl.classList.add("finalOutputDiv");

//      --------------ADD HEADING---------- 

        const headingDiv =document.createElement("div");
        headingDiv.classList.add("heading");

        const outputHeaderEl = document.createElement("h1");
        outputHeaderEl.innerText = "Dungeons & Dragons Final Character";

        const emailCharBtn =document.createElement("button");
        emailCharBtn.setAttribute("id", "user-email,");
        emailCharBtn.classList.add("output-button");
        emailCharBtn.innerText="Email Character";

        const printCharBtn =document.createElement("button");
        printCharBtn.setAttribute("id", "user-print");
        printCharBtn.classList.add("output-button");
        printCharBtn.innerText="Print Character";

        const tweetCharBtn =document.createElement("button");
        tweetCharBtn.setAttribute("id", "user-tweet");
        tweetCharBtn.classList.add("output-button");
        tweetCharBtn.innerText="Tweet Character";

        headingDiv.append(outputHeaderEl);
        headingDiv.append(emailCharBtn);
        headingDiv.append(printCharBtn);
        headingDiv.append(tweetCharBtn);
        outputDivEl.append(headingDiv);
        
// ****************BASE FEASTURES******************************

        const baseFeaturesDiv = document.createElement("div");
        baseFeaturesDiv.classList.add("outputDiv");
       

 // ----------Current Base Features Sections

        const baseCurrentSection =document.createElement("section");
        baseCurrentSection.classList.add("base", "current-selection");
        baseCurrentSection.setAttribute("id", "base");

        const baseFeaturesh2= document.createElement("h2");
        baseFeaturesh2.innerText= "Base Features";
        
        const currentBaseh3= document.createElement("h3");
        currentBaseh3.innerText= "Cuurent Base Features";

        const nameLabelEl = document.createElement("h3");
        nameLabelEl.innerText = "Name";

        const nameOutputEl = document.createElement("h4");
        nameOutputEl.innerText = currentCharacter.baseFeatures.name;

        const levelEl = document.createElement("h3");
        levelEl.innerText = "Level";

        const levelOutputEl = document.createElement("small");
        levelOutputEl.innerText = currentCharacter.baseFeatures.level;

        const alignmentEl = document.createElement("h3");
        alignmentEl.innerText = "Alignment";
        
        const alignmentOutputEl = document.createElement("small");
        alignmentOutputEl.innerText = currentCharacter.baseFeatures.alignment;

        const profBonus = document.createElement("h3");
        profBonus.innerText = "Proficiency Bonus";
        
        const bonusOutputEl = document.createElement("small");
        bonusOutputEl.innerText = currentCharacter.baseFeatures.proficiencyBonus;

        const experiencePointsEl = document.createElement("h3");
        experiencePointsEl.innerText = "Experience Points";
        
        const experiencePointsOutputEl = document.createElement("small");
        experiencePointsOutputEl.innerText = currentCharacter.baseFeatures.experiencePoints;            
        
        baseCurrentSection.append(baseFeaturesh2);
        baseCurrentSection.append(currentBaseh3);
        baseCurrentSection.append(nameLabelEl);
        baseCurrentSection.append(nameOutputEl); 
        baseCurrentSection.append(levelEl);
        baseCurrentSection.append(levelOutputEl);
        baseCurrentSection.append(alignmentEl);         
        baseCurrentSection.append(alignmentOutputEl);
        baseCurrentSection.append(bonusOutputEl);
        baseCurrentSection.append(profBonus);  
        baseCurrentSection.append(experiencePointsEl);
        baseCurrentSection.append(experiencePointsOutputEl);
        baseFeaturesDiv.append(baseCurrentSection);
        outputDivEl.append(baseFeaturesDiv);

//-----------Edit Base Features Section 

    const baseEditWrapper= document.createElement("div");
    baseEditWrapper.classList.add("edit-div");
    baseEditWrapper.setAttribute("id", "edit-base");

    const editBaseSection =document.createElement("section");
    editBaseSection.classList.add("base", "edits");
    
    const editBaseH1 =document.createElement("h3");
    editBaseH1.innerText= "Edit Base Features";

    const editName = document.createElement("input");
    editName.type = "text";
    editName.placeholder = "Edit Your Character's Name";

    const editLevelFieldEl = document.createElement("input");
    editLevelFieldEl.type = "number";
    editLevelFieldEl.placeholder = "Choose 1-3";

    const editPB = document.createElement("input");
    editPB.type = "text";
    editPB.placeholder = "Edit Proficnency Bonus";

    const editXP = document.createElement("input");
    editXP.type = "text";
    editXP.placeholder = "Edit Expereince Points";  

// ------Edit Alignment------------
    const alignmentLabelEl = document.createElement("h4");
    alignmentLabelEl.innerText = "Alignment";

    const editAlignmentFieldEl = document.createElement("select");
    editAlignmentFieldEl.placeholder = "Select an Alignment";

    const randOptionEl = document.createElement("option");
    randOptionEl.setAttribute('value', 'randomize');
    randOptionEl.innerText = "Randomize!";

    const lawGoodOptionEl = document.createElement("option");
    lawGoodOptionEl.setAttribute('value', 'Lawful-Good');
    lawGoodOptionEl.innerText = "Lawful-Good";

    const neutGoodOptionEl = document.createElement("option");
    neutGoodOptionEl.setAttribute('value', 'Neutral-Good');
    neutGoodOptionEl.innerText = "Neutral-Good";

    const chaGoodOptionEl = document.createElement("option");
    chaGoodOptionEl.setAttribute('value', 'Chaotic-Good');
    chaGoodOptionEl.innerText = "Chaotic-Good";

    const lawNeutralOptionEl = document.createElement("option");
    lawNeutralOptionEl.setAttribute('value', 'Lawful-Neutral');
    lawNeutralOptionEl.innerText = "Lawful-Neutral";

    const trueNeutOptionEl = document.createElement("option");
    trueNeutOptionEl.setAttribute('value', 'True-Neutral');
    trueNeutOptionEl.innerText = "True-Neutral";

    const chaNeutralOptionEl = document.createElement("option");
    chaNeutralOptionEl.setAttribute('value', 'Chaotic-Neutral');
    chaNeutralOptionEl.innerText = "Chaotic-Neutral";

    const lawEvilOptionEl = document.createElement("option");
    lawEvilOptionEl.setAttribute('value', 'Lawful-Evil');
    lawEvilOptionEl.innerText = "Lawful-Evil";

    const neutEvilOptionEl = document.createElement("option");
    neutEvilOptionEl.setAttribute('value', 'Neutral-Evil');
    neutEvilOptionEl.innerText = "Neutral-Evil";

    const chaEvilOptionEl = document.createElement("option");
    chaEvilOptionEl.setAttribute('value', 'Chaotic-Evil');
    chaEvilOptionEl.innerText = "Chaotic-Evil"; 

//  appending all alignment options

    editAlignmentFieldEl.append(randOptionEl);
    editAlignmentFieldEl.append(lawGoodOptionEl);
    editAlignmentFieldEl.append(neutGoodOptionEl);
    editAlignmentFieldEl.append(chaEvilOptionEl);
    editAlignmentFieldEl.append(lawNeutralOptionEl);
    editAlignmentFieldEl.append(trueNeutOptionEl);
    editAlignmentFieldEl.append(chaNeutralOptionEl);
    editAlignmentFieldEl.append(lawEvilOptionEl);
    editAlignmentFieldEl.append(neutEvilOptionEl);
    editAlignmentFieldEl.append(chaEvilOptionEl);

    // Append Remaining Items    

    editBaseSection.append(editBaseH1);
    editBaseSection.append(editName);
    editBaseSection.append(editLevelFieldEl);
    editBaseSection.append(alignmentEl);
    editBaseSection.append(editAlignmentFieldEl);    
    editBaseSection.append(editXP);
    editBaseSection.append(editPB);
    baseEditWrapper.append(editBaseSection);
    baseFeaturesDiv.append(baseEditWrapper);

//------------- Base Feature Buttons-----------

    const editBtnDiv= document.createElement("div");
    editBtnDiv.classList.add("edit-btn-div");

    const baseEditBtn= document.createElement("button");
    baseEditBtn.classList.add("edit-button", "output-button");
    baseEditBtn.setAttribute("id", "base-edit-button");
    baseEditBtn.innerText="Edit";
    

    const cancSubBtnDiv= document.createElement("div");
    cancSubBtnDiv.classList.add("cancel-submit", "output-button");

    const baseCancEdit= document.createElement("button");
    baseCancEdit.classList.add("edit", "cancel", "output-button");
    baseCancEdit.setAttribute("id", "base-cancel-edit");
    baseCancEdit.innerText="Cancel Edit";
    
    const baseSubmit= document.createElement("button");
    baseSubmit.classList.add("edit", "submit", "output-button");
    baseSubmit.setAttribute("id", "base-submit");
    baseSubmit.innerText="Submit";

    editBtnDiv.append(baseEditBtn);    
    cancSubBtnDiv.append(baseCancEdit);
    cancSubBtnDiv.append(baseSubmit);
    baseFeaturesDiv.append(editBtnDiv);
    baseFeaturesDiv.append(cancSubBtnDiv);

//  Edit, Cancel Edit and Submit Event Listeners 
        

    //Edit Button
    baseSubmit.addEventListener("click", () => {
        const characterBaseJson = {
            "name": editName.value,
            "level": editLevelFieldEl.value,
            "alignment": editAlignmentFieldEl.value,
            "proficiencyBonus": 2,
            "experiencePoints": 0
        };
          
        fetch(`http://localhost:8080/buildcharacter/editbase/${currentCharacter.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(characterBaseJson)
      })
    .then(res => res.json())
    .then(character => {
        clearChildren(mainContainerEl);
        displayOutputView(mainContainerEl, character);
        currentCharacter = character;
        console.log(character);
    })
    .catch(err => console.error(err));
    })

//-************************Class Features Div   

//     const classOutputDivEl = document.createElement("div");
//     classOutputDivEl.classList.add("outputDiv");

//     const editClassSection =document.createElement("section");
//     editClassSection.classList.add("dnd-class", "current-selections");
//     editClassSection.setAttribute("id", "dnd-class");    

//     const classLabelEl = document.createElement("h3");
//     classLabelEl.innerText = "Current Class";    
    
//     const classOutputEl = document.createElement("small");
//     classOutputEl.innerText = currentCharacter.dndClass.name;

//     const classDes = document.createElement("h3");
//     classDes.innerText = "Description";  
    
//     const classDesOutput= document.createElement("small");
//     classDesOutput.innerText = currentCharacter.dndClass.description; 
    

        const classOutputDivEl = document.createElement("div");
        classOutputDivEl.classList.add("outputDiv");

        const classLabelEl = document.createElement("h3");
        classLabelEl.innerText = "Class";

        const classOutputEl = document.createElement("h4");
        classOutputEl.innerText = currentCharacter.dndClass.name;


        outputDivEl.append(classLabelEl);
        outputDivEl.append(classOutputEl);
        classOutputDivEl.append(classOutputEl);

//-------------------- Background Features Div
        const backgroundOutputDivEl = document.createElement("div");
        backgroundOutputDivEl.classList.add("outputDiv");

        const backgroundLabelEl = document.createElement("h3");
        backgroundLabelEl.innerText = "Background";

        const backgroundOutputEl = document.createElement("h4");
        backgroundOutputEl.innerText = currentCharacter.background.name;

        outputDivEl.append(backgroundLabelEl);
        outputDivEl.append(backgroundOutputEl);
        backgroundOutputDivEl.append(backgroundOutputEl);

//----------------------- Race Features Div 
        const raceEl = document.createElement("h3");
        raceEl.innerText = "Race";

        const raceOutputDivEl = document.createElement("div");
        raceOutputDivEl.classList.add("outputDiv");

        const raceOutputEl = document.createElement("h4");
        raceOutputEl.innerText = currentCharacter.race.name;

        outputDivEl.append(raceEl);
        outputDivEl.append(raceOutputDivEl);
        raceOutputDivEl.append(raceOutputEl);

    // NEEDS TO BE APPENDED AND ADDED TO BASE 
        // const levelEl = document.createElement("h3");
        // levelEl.innerText = "Level";

        // const levelOutputDivEl = document.createElement("div");
        // levelOutputDivEl.classList.add("outputDiv");

        // const levelOutputEl = document.createElement("h4");
        // levelOutputEl.innerText = currentCharacter.baseFeatures.level;

        // levelOutputDivEl.append(levelOutputEl);
        // outputDivEl.append(levelEl);
        // outputDivEl.append(levelOutputDivEl);
        

        // const alignmentEl = document.createElement("h3");
        // alignmentEl.innerText = "Alignment";

        // const alignmentOutputDivEl = document.createElement("div");
        // alignmentOutputDivEl.classList.add("outputDiv");

        // const alignmentOutputEl = document.createElement("h4");
        // alignmentOutputEl.innerText = currentCharacter.baseFeatures.alignment;

        // outputDivEl.append(alignmentEl);
        // outputDivEl.append(alignmentOutputDivEl);
        // alignmentOutputDivEl.append(alignmentOutputEl);

    // EXPERIENCE POINTS LIKELY REMOVED 
    //     const experiencePointsEl = document.createElement("h3");
    //     experiencePointsEl.innerText = "Experience Points";

    //     const experiencePointsOutputDivEl = document.createElement("div");
    //     experiencePointsOutputDivEl.classList.add("outputDiv");

    //     const experiencePointsOutputEl = document.createElement("h4");

    //     experiencePointsOutputEl.innerText = currentCharacter.baseFeatures.experiencePoints;

    //     outputDivEl.append(experiencePointsEl);
    //     outputDivEl.append(experiencePointsOutputDivEl);
        
    //     experiencePointsOutputDivEl.append(experiencePointsOutputEl);

    // // *************************PROFICIENCY BONUS *******************************************
    //     const bonusEl = document.createElement("h3");
    //     bonusEl.innerText = "Proficiency Bonus";

    //     const bonusOutputDivEl = document.createElement("div");
    //     bonusOutputDivEl.classList.add("outputDiv");

    //     const bonusOutputEl = document.createElement("h4");
    //     bonusOutputEl.innerText = currentCharacter.baseFeatures.proficiencyBonus;

    //     outputDivEl.append(bonusEl);
    //     outputDivEl.append(bonusOutputDivEl);
    //     bonusOutputDivEl.append(bonusOutputEl);

// ------HIT POINTS------------
        const hpEl = document.createElement("h3");
        hpEl.innerText = "Hit Points";

        const hpOutputDivEl = document.createElement("div");
        hpOutputDivEl.classList.add("outputDiv");

        const hpOutputEl = document.createElement("h4");
        hpOutputEl.innerText = "Hit Points placeholder";

        outputDivEl.append(hpEl);
        outputDivEl.append(hpOutputDivEl);
        hpOutputDivEl.append(hpOutputEl);

//***************KEEP creating ability scores output elements
        const abilitiesDivEl = document.createElement("div");
        abilitiesDivEl.classList.add("abilitiesDiv");

        const abilitiesTitleEl = document.createElement("h4");
        abilitiesTitleEl.classList.add("abilitiesTitle");
        abilitiesTitleEl.innerText = "Ability Scores";


        const strDivEl = document.createElement("div");
        strDivEl.classList.add("abilityDiv");
        const strTitleEl = document.createElement("h4");
        strTitleEl.classList.add("abilityTitle");

        strTitleEl.innerText = "Strength";
        const strOutputEl = document.createElement("h3");
        strOutputEl.innerText = currentCharacter.abilityScores.strength;

        strDivEl.append(strTitleEl);
        strDivEl.append(strOutputEl);

        const dexDivEl = document.createElement("div");
        dexDivEl.classList.add("abilityDiv");

        const dexTitleEl = document.createElement("h4");
        dexTitleEl.classList.add("abilityTitle");
        dexTitleEl.innerText = "Dexterity";

        const dexOutputEl = document.createElement("h3");
        dexOutputEl.innerText = currentCharacter.abilityScores.dexterity;

        dexDivEl.append(dexTitleEl);
        dexDivEl.append(dexOutputEl);

        const conDivEl = document.createElement("div");
        conDivEl.classList.add("abilityDiv");

        const conTitleEl = document.createElement("h4");
        conTitleEl.classList.add("abilityTitle");
        conTitleEl.innerText = "Constitution";

        const conOutputEl = document.createElement("h3");
        conOutputEl.innerText = currentCharacter.abilityScores.constitution;

        conDivEl.append(conTitleEl);
        conDivEl.append(conOutputEl);

        const intDivEl = document.createElement("div");
        intDivEl.classList.add("abilityDiv");

        const intTitleEl = document.createElement("h4");
        intTitleEl.classList.add("abilityTitle");
        intTitleEl.innerText = "Intelligence";

        const intOutputEl = document.createElement("h3");
        intOutputEl.innerText = currentCharacter.abilityScores.intelligence;

        intDivEl.append(intTitleEl);
        intDivEl.append(intOutputEl);

        const wisDivEl = document.createElement("div");
        wisDivEl.classList.add("abilityDiv");

        const wisTitleEl = document.createElement("h4");
        wisTitleEl.classList.add("abilityTitle");
        wisTitleEl.innerText = "Wisdom";

        const wisOutputEl = document.createElement("h3");
        wisOutputEl.innerText = currentCharacter.abilityScores.wisdom;

        wisDivEl.append(wisTitleEl);
        wisDivEl.append(wisOutputEl);

        const chaDivEl = document.createElement("div");
        chaDivEl.classList.add("abilityDiv");

        const chaTitleEl = document.createElement("h4");
        chaTitleEl.classList.add("abilityTitle");
        chaTitleEl.innerText = "Charisma";

        const chaOutputEl = document.createElement("h3");
        chaOutputEl.innerText = currentCharacter.abilityScores.charisma;

        chaDivEl.append(chaTitleEl);
        chaDivEl.append(chaOutputEl);
        abilitiesDivEl.append(abilitiesTitleEl);
        abilitiesDivEl.append(strDivEl);
        abilitiesDivEl.append(dexDivEl);
        abilitiesDivEl.append(conDivEl);
        abilitiesDivEl.append(intDivEl);
        abilitiesDivEl.append(wisDivEl);
        abilitiesDivEl.append(chaDivEl);


        // append these to the top 
        outputDivEl.append(abilitiesDivEl);
        mainContentDivEl.append(outputHeaderEl);
        mainContentDivEl.append(outputDivEl);
        mainContainerEl.append(mainContentDivEl);


        const proficiencyBonusEl = document.createElement("h3");
        proficiencyBonusEl.innerText = "Proficiency Bonus";
        const strengthEl = document.createElement("h3");
        strengthEl.innerText = "Strength";
        const dexterityEl = document.createElement("h3");
        dexterityEl.innerText = "Dexterity";
        const constitutionEl = document.createElement("h3");
        constitutionEl.innerText = "Constitution";
        const intelligenceEl = document.createElement("h3");
        intelligenceEl.innerText = "Intelligence";
        const wisdomEl = document.createElement("h3");
        wisdomEl.innerText = "Wisdom";
        const charismaEl = document.createElement("h3");
        charismaEl.innerText = "Charisma";

        displayFooter(mainContainerEl);
}
export {displayOutputView}
