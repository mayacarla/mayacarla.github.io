

// target elements with the "draggable" class
window.onload = addListeners();


function addListeners(){
    document.getElementById('name').addEventListener('mousedown', mouseDown, false);
    window.addEventListener('mouseup', mouseUp, false);

    // moves title only
    document.getElementById('title').addEventListener('mousedown', mouseDownTitle, false);
    window.addEventListener('mouseup', mouseUpTitle, false);
}

function mouseUp()
{
    window.removeEventListener('mousemove', divMove, true);
}

function mouseDown(e){
  window.addEventListener('mousemove', divMove, true);
}

function divMove(e){
  var div = document.getElementById('name');

  div.style.position = 'absolute';
  div.style.width = "20px";
  div.style.marginTop= "0";
  div.style.left = e.clientX + 'px';
  div.style.top = e.clientY + 'px';
}

// MOVES TITLE

function mouseUpTitle()
{
    window.removeEventListener('mousemove', titleDivMove, true);
}

function mouseDownTitle(e){
  window.addEventListener('mousemove', titleDivMove, true);
}

function titleDivMove(e){
  var title = document.getElementById('title');

    title.style.position = 'absolute';
    title.style.marginTop= "0";
    title.style.width = "285px";
    title.style.left = e.clientX + 'px';
    title.style.top = e.clientY + 'px';
}

// pervent arrow from scrolling
// source: https://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
