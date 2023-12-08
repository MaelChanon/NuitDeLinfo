import config from "../back/config"

let questions = config.questions;

let popup = document.getElementsByClassName("containerPopup")[0];
let oui = document.getElementById("oui");
let non = document.getElementById("non");
let intitule = document.getElementById("intitule");
let index;

oui.addEventListener("click", handleResponse);
non.addEventListener("click", handleResponse);

popup.style.display="none";

window.onload = function(){
  timerEvent();    
}

function timerEvent() {
  let min = 1, max = 5;
  let rand = Math.floor(Math.random() * (max - min + 1) + min);
  console.log('Wait for ' + rand + ' seconds');

  setTimeout(displayPopup, rand * 1000);
}

function displayPopup() {
  index = Math.floor(Math.random() * (questions.length));
  console.log(index);
  intitule.innerText = questions[index].intitule;
  popup.style.display="block";
  response.style.display="block";
}

function undisplayPopup() {
  popup.style.display="none";
  timerEvent(); 
}

function handleResponse(event) {
  let reponse = event.target.id;
  /*console.log(reponse);
  console.log(index);
  console.log(questions[index].reponse)
  console.log("test " + reponse + " " + questions[index].reponse)
  console.log(reponse==questions[index].reponse)*/

  if(reponse==questions[index].reponse) {
    console.log("bravo");
  }
  else if(reponse!=questions[index].reponse) {
    console.log("Nul");
  }
  questions.splice(index, 1);

  response.style.display="none";
  setTimeout(undisplayPopup, 3000);
}