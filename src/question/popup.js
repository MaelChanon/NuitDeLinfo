import config from "../back/config"

let questions = config.questions;

let popup = document.getElementById("popup");
let response = document.getElementById("reponse");
let oui = document.getElementById("oui");
let non = document.getElementById("non");
let intituleQuestion = document.getElementById("question");
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
  intituleQuestion.innerText = questions[index].intitule;
  popup.style.display="flex";
  response.style.display="flex";
}

function undisplayPopup() {
  popup.style.display = "none";
  timerEvent(); 
}

function handleResponse(event) {
  let reponse = event.target.id;

  if(reponse==questions[index].reponse) {
    intituleQuestion.innerText = "Bonne Réponse !";
  }
  else if(reponse!=questions[index].reponse) {
    intituleQuestion.innerText = "Mauvaise Réponse !";
  }
  questions.splice(index, 1);

  response.style.display="none";
  setTimeout(undisplayPopup, 1000);
}