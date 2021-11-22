//modal
var modal = document.getElementById("classModal");
var btn = document.getElementById("openClassModal");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function learnClassFunction(){
    var x = document.getElementById("moreInfoDiv");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

const moreInfoButton = document.getElementById("moreInfoButton");
moreInfoButton.addEventListener("click", ()=> {
    learnClassFunction();
})
