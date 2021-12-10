import {clearChildren} from "./app.js";
import {displayDNDClassView} from "./dndClass.js";
import { displayHeader } from "./app.js";
import { displayFooter } from "./app.js";

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

        // const emailCharBtn =document.createElement("button");
        // emailCharBtn.setAttribute("id", "user-email,");
        // emailCharBtn.classList.add("output-button");
        // emailCharBtn.innerText="Download Character";


        const printCharBtn =document.createElement("button");
        printCharBtn.setAttribute("id", "user-print");
        printCharBtn.classList.add("output-button");
        printCharBtn.innerText="Print Character";

        printCharBtn.addEventListener("click", () =>{
            const hideDiv= document.querySelectorAll(".edit-div");
            console.log(hideDiv);
            hideDiv.forEach((editDiv) =>{
                editDiv.style.visibility="hidden";
                
            });
            const hideCancelSubmit= document.querySelectorAll(".cancel-submit");
            console.log(hideCancelSubmit);
            hideCancelSubmit.forEach((submit) =>{
                submit.style.visibility="hidden";
                
            });
            window.print();
        })

        const restartbtn =document.createElement("button");
        restartbtn.setAttribute("id", "user-restart");
        restartbtn.classList.add("output-button");
        restartbtn.innerText="New Character";

        headingDiv.append(outputHeaderEl);
        // headingDiv.append(emailCharBtn);
        headingDiv.append(printCharBtn);
        headingDiv.append(restartbtn);
        outputDivEl.append(headingDiv);
        // mainContentDivEl.append(outputHeaderEl);
        
// ****************BASE FEASTURES******************************

        const baseFeaturesDiv = document.createElement("div");
        baseFeaturesDiv.classList.add("cardDiv");
       

 // ----------Current Base Features Sections

        const baseCurrentSection =document.createElement("section");
        baseCurrentSection.classList.add("base", "current-selection");
        baseCurrentSection.setAttribute("id", "base");

        const baseFeaturesh2= document.createElement("h2");
        baseFeaturesh2.innerText= "Base";
        
        const currentBaseh3= document.createElement("h3");
        currentBaseh3.innerText= "Current Base";

        const nameLabelEl = document.createElement("h4");
        nameLabelEl.innerText = "Name";
        nameLabelEl.classList.add("label");

        const nameOutputEl = document.createElement("p");
        nameOutputEl.innerText = currentCharacter.baseFeatures.name;
        nameOutputEl.classList.add("charText");

        const levelEl = document.createElement("h4");
        levelEl.innerText = "Level";
        levelEl.classList.add("label");

        const levelOutputEl = document.createElement("p");
        levelOutputEl.innerText = currentCharacter.baseFeatures.level;
        levelOutputEl.classList.add("charText");

        const alignmentEl = document.createElement("h4");
        alignmentEl.innerText = "Alignment";
        alignmentEl.classList.add("label");
        
        const alignmentOutputEl = document.createElement("p");
        alignmentOutputEl.innerText = currentCharacter.baseFeatures.alignment;
        alignmentOutputEl.classList.add("charText");

        const profBonus = document.createElement("h4");
        profBonus.innerText = "Proficiency Bonus";
        profBonus.classList.add("label");

        const bonusOutputEl = document.createElement("p");
        bonusOutputEl.innerText = currentCharacter.baseFeatures.proficiencyBonus;
        bonusOutputEl.classList.add("charText");

        const experiencePointsEl = document.createElement("h4");
        experiencePointsEl.innerText = "Experience Points";
        experiencePointsEl.classList.add("label");
        
        const experiencePointsOutputEl = document.createElement("p");
        experiencePointsOutputEl.innerText = currentCharacter.baseFeatures.experiencePoints;            
        experiencePointsOutputEl.classList.add("charText");

        baseCurrentSection.append(baseFeaturesh2);
        baseCurrentSection.append(currentBaseh3);
        baseCurrentSection.append(nameLabelEl);
        baseCurrentSection.append(nameOutputEl); 
        baseCurrentSection.append(levelEl);
        baseCurrentSection.append(levelOutputEl);
        baseCurrentSection.append(alignmentEl);         
        baseCurrentSection.append(alignmentOutputEl);        
        baseCurrentSection.append(profBonus);  
        baseCurrentSection.append(bonusOutputEl);
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
    editBaseH1.innerText= "Edit Base";

    const editNameLabel =document.createElement("label");
    editNameLabel.innerText= "Edit Your Character's Name";
    editNameLabel.setAttribute("id", "edit-name-label");
    
    const editName = document.createElement("input");
    editName.type = "text";
    // editName.placeholder = "Edit Your Character's Name";

    // const editLevelFieldEl = document.createElement("input");
    // editLevelFieldEl.type = "number";
    // editLevelFieldEl.placeholder = "Choose 1-3";

    // const editPB = document.createElement("input");
    // editPB.type = "text";
    // editPB.placeholder = "Edit Proficnency Bonus";

    // const editXP = document.createElement("input");
    // editXP.type = "text";
    // editXP.placeholder = "Edit Expereince Points";  

// ------Edit Alignment------------
    const alignmentLabelEl = document.createElement("p");
    alignmentLabelEl.innerText = "Edit Alignment";
    alignmentLabelEl.classList.add("label");

    const editAlignmentFieldEl = document.createElement("select");
    // editAlignmentFieldEl.placeholder = "Select an Alignment";

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


//------Optional Let/Selector 
    // const selectorEl= document.createElement("div");
    // selectorEl.classList.add("selector");

    // let selectorEl = document.querySelector(".selector");
    //     let baseURL = "https://www.dnd5eapi.co/api/"
    //     let alignmentsURL = baseURL + "alignments";
    //     let classURL = baseURL + "classes";
    //     selectorEl.appendChild(createDropDownFromURL(alignmentsURL));
    //     selectorEl.appendChild(createDropDownFromURL(classURL));
        
    //     function createDropDownFromURL(url){
    //         let dropDownEl = document.createElement("select");
            

    //         fetch(url)
    //         .then(res => res.json())
    //         .then(output => {
    //            //console.log(output); 
    //            output.results.forEach(result=> {
    //                console.log(result.name)
    //                let option = document.createElement("option");
    //                option.innerText = result.name;
    //                option.setAttribute('value',result.name);
    //                dropDownEl.appendChild(option); 
    //             })
    //         })
    //         return dropDownEl;
    //     }    

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
    editBaseSection.append(editNameLabel);
    editBaseSection.append(editName);
    // editBaseSection.append(editLevelFieldEl);
    editBaseSection.append(alignmentLabelEl);    
    editBaseSection.append(editAlignmentFieldEl);    
    // editBaseSection.append(editXP);
    // editBaseSection.append(editPB);
    baseEditWrapper.append(editBaseSection);
    baseFeaturesDiv.append(baseEditWrapper);

//------------- Base Feature Buttons-----------

    // const editBtnDiv= document.createElement("div");
    // editBtnDiv.classList.add("edit-btn-div");

    // const baseEditBtn= document.createElement("button");
    // baseEditBtn.classList.add("edit-button", "output-button");
    // baseEditBtn.setAttribute("id", "base-edit-button");
    // baseEditBtn.innerText="Edit";
    

    const cancSubBtnDiv= document.createElement("div");
    cancSubBtnDiv.classList.add("cancel-submit", "output-button");

    // const baseCancEdit= document.createElement("button");
    // baseCancEdit.classList.add("edit", "cancel", "output-button");
    // baseCancEdit.setAttribute("id", "base-cancel-edit");
    // baseCancEdit.innerText="Cancel Edit";
    
    const baseSubmit= document.createElement("button");
    baseSubmit.classList.add("edit", "submit", "output-button");
    baseSubmit.setAttribute("id", "base-submit");
    baseSubmit.innerText="Submit Edit";

    // editBtnDiv.append(baseEditBtn);    
    // cancSubBtnDiv.append(baseCancEdit);
    cancSubBtnDiv.append(baseSubmit);
    // baseFeaturesDiv.append(editBtnDiv);
    baseFeaturesDiv.append(cancSubBtnDiv);

// Submit Event Listeners        

    
    baseSubmit.addEventListener("click", () => {
        const characterBaseJson = {
            "name": editName.value,
            "level": 1,
            "alignment": editAlignmentFieldEl.value,
            "proficiencyBonus": bonusOutputEl.value,
            "experiencePoints": 0
        };
          
        fetch(`/buildcharacter/editbase/${currentCharacter.id}`, {
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

//-************************Class******************************   

        const dndClassDiv = document.createElement("div");
        dndClassDiv.classList.add("cardDiv");

        const currentClassSection =document.createElement("section");
        currentClassSection.classList.add("dnd-class", "current-selections");
        currentClassSection.setAttribute("id", "dnd-class");  
        
        const classh2= document.createElement("h2");
        classh2.innerText= "Class";

        const classLabelEl = document.createElement("h3");
        classLabelEl.innerText = "Current Class";    
        
        const classNameEl = document.createElement("p");
        classNameEl.innerText = currentCharacter.dndClass.name;

        // const classDes = document.createElement("h3");
        // classDes.innerText = "Description";  
        
        // const classDesOutput= document.createElement("p");
        // classDesOutput.innerText = currentCharacter.dndClass.description;
        
        const classFeatures =document.createElement("h4");
        classFeatures.innerText="Class Features";

        const classFeature1=document.createElement("p");
        classFeature1.innerText=currentCharacter.dndClass.features[0].name;



        const classFeature2=document.createElement("p");
        classFeature2.innerText=currentCharacter.dndClass.features[1].name;
        

        currentClassSection.append(classh2); 
        currentClassSection.append(classLabelEl);
        currentClassSection.append(classNameEl); 
        // currentClassSection.append(classDes);
        // currentClassSection.append(classDesOutput);

        currentClassSection.append(classFeatures);
        currentClassSection.append(classFeature1);
        currentClassSection.append(classFeature2);
        dndClassDiv.append(currentClassSection);
        outputDivEl.append(dndClassDiv);

//-------------------- Edit Class----------------------------- 

        const classEditWrapper= document.createElement("div");
        classEditWrapper.classList.add("edit-div");
        classEditWrapper.setAttribute("id", "edit-class");

        const editClassSection =document.createElement("section");
        editClassSection.classList.add("dnd-class", "edits");
        
        const editClassH1 =document.createElement("h3");
        editClassH1.innerText= "Edit Class";

//---------------Edit Selector----------------------  
      
    const selectEl = document.createElement("select");
    
    
    const barbarianOptionEl = document.createElement("option");
    barbarianOptionEl.setAttribute('value', 'barbarian');
    barbarianOptionEl.innerText = "Barbarian";

    const bardOptionEl = document.createElement("option");
    bardOptionEl.setAttribute('value', 'bard');
    bardOptionEl.innerText = "Bard";

    const clericOptionEl = document.createElement("option");
    clericOptionEl.setAttribute('value', 'cleric');
    clericOptionEl.innerText = "Cleric";

    const druidOptionEl = document.createElement("option");
    druidOptionEl.setAttribute('value', 'druid');
    druidOptionEl.innerText = "Druid";
    
    const fighterOptionEl = document.createElement("option");
    fighterOptionEl.setAttribute('value', 'fighter');
    fighterOptionEl.innerText = "Fighter";

    const monkOptionEl = document.createElement("option");
    monkOptionEl.setAttribute('value', 'monk');
    monkOptionEl.innerText  = "Monk";

    const paladinOptionEl = document.createElement("option");
    paladinOptionEl.setAttribute('value', 'paladin');
    paladinOptionEl.innerText = "Paladin";

    const rangerOptionEl = document.createElement("option");
    rangerOptionEl.setAttribute('value', 'ranger');
    rangerOptionEl.innerText = "Ranger";

    const rogueOptionEl = document.createElement("option");
    rogueOptionEl.setAttribute('value', 'rogue');
    rogueOptionEl.innerText = "Rogue";

    const sorcererOptionEl = document.createElement("option");
    sorcererOptionEl.setAttribute('value', 'sorcerer');
    sorcererOptionEl.innerText = "Sorcerer";

    const warlockOptionEl = document.createElement("option");
    warlockOptionEl.setAttribute('value', 'warlock');
    warlockOptionEl.innerText = "Warlock";

    const wizardOptionEl = document.createElement("option");
    wizardOptionEl.setAttribute('value', 'wizard');
    wizardOptionEl.innerText = "Wizard";

    selectEl.append(barbarianOptionEl);
    selectEl.append(bardOptionEl);
    selectEl.append(clericOptionEl);
    selectEl.append(druidOptionEl);
    selectEl.append(fighterOptionEl);
    selectEl.append(monkOptionEl);
    selectEl.append(paladinOptionEl);
    selectEl.append(rangerOptionEl);
    selectEl.append(rogueOptionEl);
    selectEl.append(sorcererOptionEl);
    selectEl.append(warlockOptionEl);
    selectEl.append(wizardOptionEl);
    
    editClassSection.append(editClassH1);
    editClassSection.append(selectEl);
    classEditWrapper.append(editClassSection);
    dndClassDiv.append(classEditWrapper);
    
            
    //------------- Class Buttons-----------

    // const classEditBtnDiv= document.createElement("div");
    // classEditBtnDiv.classList.add("edit-btn-div");

    // const classEditBtn= document.createElement("button");
    // classEditBtn.classList.add("edit-button", "output-button");
    // classEditBtn.setAttribute("id", "class-edit-button");
    // classEditBtn.innerText="Edit";
    

    const classCancSubmitDiv= document.createElement("div");
    classCancSubmitDiv.classList.add("cancel-submit", "output-button");

    // const classCancEdit= document.createElement("button");
    // classCancEdit.classList.add("edit", "cancel", "output-button");
    // classCancEdit.setAttribute("id", "class-cancel-edit");
    // classCancEdit.innerText="Cancel Edit";
    
    const classSubmitBtn= document.createElement("button");
    classSubmitBtn.classList.add("edit", "submit", "output-button");
    classSubmitBtn.setAttribute("id", "class-submit");
    classSubmitBtn.innerText="Submit Edit";

    // classEditBtnDiv.append(classEditBtn);    
    // classCancSubmitDiv.append(classCancEdit);
    classCancSubmitDiv.append(classSubmitBtn);
    // dndClassDiv.append(classEditBtnDiv);
    dndClassDiv.append(classCancSubmitDiv);

//  Event Listeners 

// !!!!!!!!!!!!!!!!!!Submit FIXED!!!!!!!!!!!!!!!!!!!!!!
    classSubmitBtn.addEventListener("click", () => {
        const classJson = {
        "name": selectEl.value,
        "description": "warlock boi",
        "features": [
            {
            "name" : "something unique",
            "description" :"unique things"
            },
            {
            "name" : "watch shows faster",
            "description" :" more shows in less time"
            }
        
        ]
        };
        fetch(`/buildcharacter/editclass/${currentCharacter.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(classJson)
        })
        .then(res => res.json())
        .then(character => {
            clearChildren(mainContainerEl);
            currentCharacter = character;
            displayOutputView(mainContainerEl, currentCharacter);
            
        })
        .catch(err => console.error(err));


        
    })


//**************************Background*******************************
        const bgDiv = document.createElement("div");
        bgDiv.classList.add("cardDiv");

        const bgSection= document.createElement("section");       
        bgSection.classList.add("bg-class", "current-selections");
        bgSection.setAttribute("id", "bg");

        const backgroundLabelEl = document.createElement("h2");
        backgroundLabelEl.innerText = "Background";

        const currentBGh2=document.createElement("h3");
        currentBGh2.innerText="Current Background";

        const backgroundOutputEl = document.createElement("p");
        backgroundOutputEl.innerText = currentCharacter.background.name;

        // const bgDes=document.createElement("H3");
        // bgDes.innerText="Description";
        
        // const desOutput=document.createElement("p");
        // desOutput.innerText=currentCharacter.background.description;

        const bgFeatures =document.createElement("h4");
        bgFeatures.innerText="Background Features";

        const bgFeature1=document.createElement("p");
        bgFeature1.innerText=currentCharacter.background.features[0].name;

        

        bgSection.append(backgroundLabelEl);
        bgSection.append(currentBGh2);
        bgSection.append(backgroundOutputEl);
        // bgSection.append(bgDes);
        // bgSection.append(desOutput);
        bgSection.append(bgFeatures);
        bgSection.append(bgFeature1);
       
        bgDiv.append(bgSection);
        outputDivEl.append(bgDiv);

// ---------------------Edit Background
        const bgEditWrapper= document.createElement("div");
        bgEditWrapper.classList.add("edit-div");
        bgEditWrapper.setAttribute("id", "edit-bg");

        const editBgSection =document.createElement("section");
        editBgSection.classList.add("bg", "edits");

        const editBgH1 =document.createElement("h3");
        editBgH1.innerText= "Edit Background";


//----------------Background Selector--------------------- 

    const backgroundSelectEl = document.createElement("select");

    const acolyteOptionEl = document.createElement("option");
    acolyteOptionEl.setAttribute('value', 'acolyte');
    acolyteOptionEl.innerText = "Acolyte";

    const charlatanOptionEl = document.createElement("option");
    charlatanOptionEl.setAttribute('value', 'charlatan');
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
        
        editBgSection.append(editBgH1);
        editBgSection.append(backgroundSelectEl);        
        bgEditWrapper.append(editBgSection);
        bgDiv.append(bgEditWrapper);

//------------- Background Buttons-----------

    // const bgEditBtnDiv= document.createElement("div");
    // bgEditBtnDiv.classList.add("edit-btn-div");

    // const bgEditBtn= document.createElement("button");
    // bgEditBtn.classList.add("edit-button", "output-button");
    // bgEditBtn.setAttribute("id", "bg-edit-button");
    // bgEditBtn.innerText="Edit";
    

    const bgCancSubDiv= document.createElement("div");
    bgCancSubDiv.classList.add("cancel-submit", "output-button");

    // const bgCancEdit= document.createElement("button");
    // bgCancEdit.classList.add("edit", "cancel", "output-button");
    // bgCancEdit.setAttribute("id", "bg-cancel-edit");
    // bgCancEdit.innerText="Cancel Edit";
    
    const bgSubmit= document.createElement("button");
    bgSubmit.classList.add("edit", "submit", "output-button");
    bgSubmit.setAttribute("id", "bg-submit");
    bgSubmit.innerText="Submit Edit";

    // bgEditBtnDiv.append(bgEditBtn);    
    // bgCancSubDiv.append(bgCancEdit);
    bgCancSubDiv.append(bgSubmit);
    // bgDiv.append(bgEditBtnDiv);
    bgDiv.append(bgCancSubDiv);

//--------------------  Event Listener------------------- 

 bgSubmit.addEventListener("click", ()=> {
      const backgroundJson = {
        "name": backgroundSelectEl.value,
        "description": "because what else",
        "features" : [
          {
            "name" : "code fast",
            "description" :"super sonic typing"
          },
          {
            "name" : "Speed reading",
            "description" : "get 'er don"
          }
        ]
      };
    
      fetch(`/buildcharacter/editbackground/${currentCharacter.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(backgroundJson)
      })
      .then(res => res.json())
      .then(character => {
        clearChildren(mainContainerEl);
        displayOutputView(mainContainerEl, character);
        currentCharacter = character;
      })
      .catch(err => console.error(err));
  })

//**************************Race *************************************
        const raceDiv = document.createElement("div");
        raceDiv.classList.add("cardDiv");

        const raceSection =document.createElement("section");
        raceSection.classList.add("race-class", "current-selections");
        raceSection.setAttribute("id", "race-class");  
        
        const raceH2= document.createElement("h2");
        raceH2.innerText= "Race";

        const raceEl = document.createElement("h3");
        raceEl.innerText = "Current Race";              

        const raceOutputEl = document.createElement("p");
        raceOutputEl.innerText = currentCharacter.race.name;

        // const raceDes = document.createElement("h3");
        // raceDes.innerText = "Description";  
        
        // const raceDesOutput= document.createElement("p");
        // raceDesOutput.innerText = currentCharacter.race.description;
        
        const raceFeatures =document.createElement("h4");
        raceFeatures.innerText="Race Features";

        const raceFeature1=document.createElement("p");
        raceFeature1.innerText=currentCharacter.race.features[0].name;

        const raceFeature2=document.createElement("p");
        raceFeature2.innerText=currentCharacter.race.features[1].name;

        const asDiv=document.createElement("div");
        asDiv.classList.add("as");

        const aScoreImprovment=document.createElement("h4");
        aScoreImprovment.innerText="Ability Score Improvements"

        const aScoreOne =document.createElement("p");
        aScoreOne.innerText= "Name: " + currentCharacter.race.abilityScoreImprovementName1;
        
        const aScoreBonusOne =document.createElement("p");
        aScoreBonusOne.innerText=" Bonus: + " + currentCharacter.race.abilityScoreImprovement1;

        const aScoreTwo =document.createElement("p");
        aScoreTwo.innerText= "Name: " + currentCharacter.race.abilityScoreImprovementName2;

        const aScoreBonusTwo =document.createElement("p");
        aScoreBonusTwo.innerText=" Bonus: + " + currentCharacter.race.abilityScoreImprovement2;

        raceSection.append(raceH2);       
        raceSection.append(raceEl);
        raceSection.append(raceOutputEl);
        // raceSection.append(raceDes);
        // raceSection.append(raceDesOutput);
        raceSection.append(raceFeatures);
        raceSection.append(raceFeature1);
        raceSection.append(raceFeature2);
        asDiv.append(aScoreImprovment);
        asDiv.append(aScoreOne);
        asDiv.append(aScoreBonusOne);
        asDiv.append(aScoreTwo);
        asDiv.append(aScoreBonusTwo);
        raceSection.append(asDiv);        
        raceDiv.append(raceSection);
        outputDivEl.append(raceDiv);

// -------------------Edit Race-------------------------------- 
        const raceEditWrapper= document.createElement("div");
        raceEditWrapper.classList.add("edit-div");
        raceEditWrapper.setAttribute("id", "edit-race");

        const editRaceSection =document.createElement("section");
        editRaceSection.classList.add("dnd-class", "edits");
        
        const editRaceH1 =document.createElement("h3");
        editRaceH1.innerText= "Edit Race";

    //------------Race Selector--------------------------  
    const raceSelectEl = document.createElement("select");
  
    const dragonbornOptionEl = document.createElement("option");
    dragonbornOptionEl.setAttribute('value', 'dragonborn');
    dragonbornOptionEl.innerText = "Dragonborn";
  
    const dwarfOptionEl = document.createElement("option");
    dwarfOptionEl.setAttribute('value', 'dwarf');
    dwarfOptionEl.innerText = "Dwarf";
  
    const elfOptionEl = document.createElement("option");
    elfOptionEl.setAttribute('value', 'elf');
    elfOptionEl.innerText = "Elf";
  
    const gnomeOptionEl = document.createElement("option");
    gnomeOptionEl.setAttribute('value', 'gnome');
    gnomeOptionEl.innerText = "Gnome";
  
    const halfElfOptionEl = document.createElement("option");
    halfElfOptionEl.setAttribute('value', 'halfElf');
    halfElfOptionEl.innerText = "Half-Elf";
  
    const halfOrcOptionEl = document.createElement("option");
    halfOrcOptionEl.setAttribute('value', 'halfOrc');
    halfOrcOptionEl.innerText = "Half-Orc";
  
    const halflingOptionEl = document.createElement("option");
    halflingOptionEl.setAttribute('value', 'halfling');
    halflingOptionEl.innerText = "Halfling";
  
    const humanOptionEl = document.createElement("option");
    humanOptionEl.setAttribute('value', 'human');
    humanOptionEl.innerText = "Human";
  
    const tieflingOptionEl = document.createElement("option");
    tieflingOptionEl.setAttribute('value', 'tiefling');
    tieflingOptionEl.innerText = "Tiefling";

    raceSelectEl.append(dragonbornOptionEl);
    raceSelectEl.append(dwarfOptionEl);
    raceSelectEl.append(elfOptionEl);
    raceSelectEl.append(gnomeOptionEl);
    raceSelectEl.append(halfElfOptionEl);
    raceSelectEl.append(halfOrcOptionEl);
    raceSelectEl.append(halflingOptionEl);
    raceSelectEl.append(humanOptionEl);
    raceSelectEl.append(tieflingOptionEl);

    editRaceSection.append(editRaceH1);
    editRaceSection.append(raceSelectEl);
    raceEditWrapper.append(editRaceSection);
    raceDiv.append(raceEditWrapper);

 //------------- Race Buttons-----------

    // const raceEditBtnDiv= document.createElement("div");
    // raceEditBtnDiv.classList.add("edit-btn-div");

    // const raceEditBtn= document.createElement("button");
    // raceEditBtn.classList.add("edit-button", "output-button");
    // raceEditBtn.setAttribute("id", "race-edit-button");
    // raceEditBtn.innerText="Edit";    

    const raceCancSubmitDiv= document.createElement("div");
    raceCancSubmitDiv.classList.add("cancel-submit", "output-button");

    // const raceCancEdit= document.createElement("button");
    // raceCancEdit.classList.add("edit", "cancel", "output-button");
    // raceCancEdit.setAttribute("id", "race-cancel-edit");
    // raceCancEdit.innerText="Cancel Edit";
    
    const raceSubmitBtn= document.createElement("button");
    raceSubmitBtn.classList.add("edit", "submit", "output-button");
    raceSubmitBtn.setAttribute("id", "race-submit");
    raceSubmitBtn.innerText="Submit Edit";

    // raceEditBtnDiv.append(raceEditBtn);    
    // raceCancSubmitDiv.append(raceCancEdit);
    raceCancSubmitDiv.append(raceSubmitBtn);
    // raceDiv.append(raceEditBtnDiv);
    raceDiv.append(raceCancSubmitDiv);

//-------------Event Listeners---------------

    //----------------Submit------------- 
    raceSubmitBtn.addEventListener("click", () => {
        const raceJson = {
          "name" : raceSelectEl.value,
          "description": "warlock boi",
          "abilityScoreImprovement1": 2,
          "abilityScoreImprovement2": 1,
          "abilityScoreImprovementName1": "strength",
          "abilityScoreImprovementName2": "charisma",
          "features": [
            {
              "name" : "run fast",
              "description" :"super sonic speed",
              "class" : null,
              "race" : null,
              "background" : null
            },
    
            {
              "name" : "CARSON FEATURES HERE",
              "description" :"???????",
              "class" : null,
              "race" : null,
              "background" : null
            }
          ]
        };
          fetch(`/buildcharacter/editrace/${currentCharacter.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(raceJson)
          })
        .then(res => res.json())
        .then(character => {
            clearChildren(mainContainerEl);
            displayOutputView(mainContainerEl, character);
            currentCharacter = character;
        })
        .catch(err => console.error(err));
      })
          

//******************ABILITY SCORE ************************
        const abilitiesDivEl = document.createElement("div");
        abilitiesDivEl.classList.add("asDiv");

    // !!!!!!!!!!!!! Appending H1 to OUTPUT DIV!!!!!!!!!!!!!!
        const abilitiesTitleEl = document.createElement("h1");
        abilitiesTitleEl.classList.add("Title");
        abilitiesTitleEl.innerText = "Ability Scores";

        const asH1Div =document.createElement("div");
        asH1Div.classList.add("asH1");

        asH1Div.append(abilitiesTitleEl);
        outputDivEl.append(asH1Div);
    //--------------------- Strength--------------------
        const strDivEl = document.createElement("div");
        strDivEl.classList.add("indASDiv");

        const strTitleEl = document.createElement("h4");
        strTitleEl.classList.add("Title");
        strTitleEl.innerText = "Strength";

        const strOutputEl = document.createElement("h3");
        strOutputEl.innerText = currentCharacter.abilityScores.strength;

        strDivEl.append(strTitleEl);
        strDivEl.append(strOutputEl);

    // ---------------------  Dexterity---------------
        const dexDivEl = document.createElement("div");
        dexDivEl.classList.add("indASDiv");

        const dexTitleEl = document.createElement("h4");
        dexTitleEl.classList.add("Title");
        dexTitleEl.innerText = "Dexterity";

        const dexOutputEl = document.createElement("h3");
        dexOutputEl.innerText = currentCharacter.abilityScores.dexterity;

        dexDivEl.append(dexTitleEl);
        dexDivEl.append(dexOutputEl);

    //   ------------------- Constitution----------------------
        const conDivEl = document.createElement("div");
        conDivEl.classList.add("indASDiv");

        const conTitleEl = document.createElement("h4");
        conTitleEl.classList.add("Title");
        conTitleEl.innerText = "Constitution";

        const conOutputEl = document.createElement("h3");
        conOutputEl.innerText = currentCharacter.abilityScores.constitution;

        conDivEl.append(conTitleEl);
        conDivEl.append(conOutputEl);

    // -------------------Intelligence----------------------------  
        const intDivEl = document.createElement("div");
        intDivEl.classList.add("indASDiv");

        const intTitleEl = document.createElement("h4");
        intTitleEl.classList.add("Title");
        intTitleEl.innerText = "Intelligence";

        const intOutputEl = document.createElement("h3");
        intOutputEl.innerText = currentCharacter.abilityScores.intelligence;

        intDivEl.append(intTitleEl);
        intDivEl.append(intOutputEl);

    //   ----------------Wisdom---------------------------
        const wisDivEl = document.createElement("div");
        wisDivEl.classList.add("indASDiv");

        const wisTitleEl = document.createElement("h4");
        wisTitleEl.classList.add("Title");
        wisTitleEl.innerText = "Wisdom";

        const wisOutputEl = document.createElement("h3");
        wisOutputEl.innerText = currentCharacter.abilityScores.wisdom;

        wisDivEl.append(wisTitleEl);
        wisDivEl.append(wisOutputEl);

    //   ----------------Charisma---------------------
        const chaDivEl = document.createElement("div");
        chaDivEl.classList.add("indASDiv");

        const chaTitleEl = document.createElement("h4");
        chaTitleEl.classList.add("Title");
        chaTitleEl.innerText = "Charisma";

        const chaOutputEl = document.createElement("h3");
        chaOutputEl.innerText = currentCharacter.abilityScores.charisma;

        chaDivEl.append(chaTitleEl);
        chaDivEl.append(chaOutputEl);

        //------ AS Div appends------------
       
        abilitiesDivEl.append(strDivEl);
        abilitiesDivEl.append(dexDivEl);
        abilitiesDivEl.append(conDivEl);
        abilitiesDivEl.append(intDivEl);
        abilitiesDivEl.append(wisDivEl);
        abilitiesDivEl.append(chaDivEl);


        // append these to the top 
        outputDivEl.append(abilitiesDivEl);
        
        mainContentDivEl.append(outputDivEl);
        mainContainerEl.append(mainContentDivEl);


        // const proficiencyBonusEl = document.createElement("h3");
        // proficiencyBonusEl.innerText = "Proficiency Bonus";

        // const strengthEl = document.createElement("h3");
        // strengthEl.innerText = "Strength";

        // const dexterityEl = document.createElement("h3");
        // dexterityEl.innerText = "Dexterity";

        // const constitutionEl = document.createElement("h3");
        // constitutionEl.innerText = "Constitution";

        // const intelligenceEl = document.createElement("h3");
        // intelligenceEl.innerText = "Intelligence";

        // const wisdomEl = document.createElement("h3");
        // wisdomEl.innerText = "Wisdom";
        
        // const charismaEl = document.createElement("h3");
        // charismaEl.innerText = "Charisma";

        displayFooter(mainContainerEl);
}
export {displayOutputView}
