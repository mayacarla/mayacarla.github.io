// jshint esversion: 6

// define the onclick handlers

function btn1Handler() {
  //append new content to textarea, using the assignment operator
  document.getElementById("outBox").value = document.getElementById("outBox").value + "Ahoy! ";
}

function btn2Handler() {
  //append new content to textarea, using the shorthand assignment operator
  document.querySelector("textarea").value += "Ya lubber! ";
}

function btn3Handler() {
  document.querySelector("textarea").value += "Avast ";
}

function btn4Handler() {
  document.querySelector("textarea").value += "says I ";
}

function btn5Handler() {
  document.querySelector("textarea").value += "Matey ";
}

function btn6Handler() {
  document.querySelector("textarea").value += "Proud beauty ";
}

function btn7Handler() {
  document.querySelector("textarea").value += "Foul blaggart ";
}

function btn8Handler() {
  document.querySelector("textarea").value += "Scallywag ";
}


/* register the onclick handlers after the page loads
   and the DOM is complete
 */
window.onload = function() {
  //select the button and register the handler
  document.getElementById("b1").addEventListener("click", btn1Handler);
  document.getElementById("b2").addEventListener("click", btn2Handler);
  document.getElementById("b3").addEventListener("click", btn3Handler);
  document.getElementById("b4").addEventListener("click", btn4Handler);
  document.getElementById("b5").addEventListener("click", btn5Handler);
  document.getElementById("b6").addEventListener("click", btn6Handler);
  document.getElementById("b7").addEventListener("click", btn7Handler);
  document.getElementById("b8").addEventListener("click", btn8Handler);

};
