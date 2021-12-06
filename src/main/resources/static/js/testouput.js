//Event listener to toggle edit div and edit buttons, 
// event listener for cancel edit to hide agin
// Event listener for submit to push changes, refresh screen and hide 

const editButton = document.getElementsByClassName("edit");
const cancelEditButton =document.getElementsByClassName("cancel");
const submitEdit =document.getElementsByClassName("submit");
const editSection = document.getElementsByClassName("edits");



function showEdit(){
    // editSection.style.display
}

function hideEdit(){

}

function refreshChanges(){

}

// Event Listeners
editButton.addEventListener("click",()=>{
    showEdit();  
});

cancelEditButton.addEventListener("click", ()=>{
    hideEdit();
});

// Custom Functions for each edit to pass controller or very long conditional statement 
function submitEdit(){

}