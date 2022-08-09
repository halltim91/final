// set up hiding menu when on small screen
const smallwidth = 768;

let cb = document.getElementById("cbtoggle");
var btns = document.querySelectorAll(".navlink");

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    if (screen.width < smallwidth){
      cb.checked = false;
    } 
  });
}

//if we are in small screen mode, and the drop down menu is open
//close it if user clicks outside of menu
window.addEventListener('mouseup', function(event){
  if (screen.width < smallwidth){
    if (cb.checked === true){
      if (!event.target.matches('.navlink') || !event.target.matches('.menu')){
        cb.checked = false;
      }
    }
  }
})