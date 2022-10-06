// jshint esversion: 6
console.log("I'm working :)")



function rainEffect(){
  var tl = new TimelineLite();
  var rainingPhrase = "#raining-text";


  tl.add(TweenLite.set(rainingPhrase, {bottom: 350}));
  tl.add(TweenLite.to(rainingPhrase, 2, {bottom:5, ease:"bounce".easeOut}));


}

function changeStyle(){
  document.getElementById("col").style.color = "white";
  document.getElementById("col1").style.color = "white";
  document.getElementById("dif").style.color = "red";
  document.getElementById("dif").style.fontSize = "20px";
  document.getElementById("dif").style.fontWeight = "bold";
}
window.onload = function(){
  document.addEventListener("keydown", rainEffect);
  document.addEventListener("keydown", changeStyle);
  // const col = document.getElementById('col');
  // col.style.color = 'white';
};
