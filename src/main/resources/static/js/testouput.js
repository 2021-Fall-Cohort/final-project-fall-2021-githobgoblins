//Event listener to toggle edit div and edit buttons, 
// event listener for cancel edit to hide agin
// Event listener for submit to push changes, refresh screen and hide 

const baseEditButton = document.getElementsById("base-edit-button");
const baseCancelEditButton =document.getElementById("base-cancel-edit");
const baseSubmitEdit =document.getElementById("base-submit");
const baseEditButtonsDiv =document.getElementById("base-edit-btn-div"); 
const baseEditHolder =document.getElementById("base-cancel-submit");




// function showEdit(){
//     editHolder.style.display= "block";
//     editButtonsDiv.style.display= "block";
// }

// function hideEdit(){
//     editHolder.style.display= "none";
//     editButtonsDiv.style.display= "none";

// }

// function refreshChanges(){

// }

// Event Listeners
baseEditButton.addEventListener("click", () =>{
    baseEditHolder.style.display="block";       
});

baseCancelEditButton.addEventListener("click", () =>{
    baseEditHolder.style.display="none";
});

// Custom Functions for each edit to pass controller or very long conditional statement 
