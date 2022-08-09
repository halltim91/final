// set up hiding menu when on small screen
const smallwidth = 768;

var cb = document.getElementById("cbtoggle");
var btns = document.querySelectorAll(".navlink");

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(event){
    if (screen.width < smallwidth){
      if(event.button == 0){
        cb.checked = false;
      }
    } 
  });
}
var hamburger = document.getElementById("hamburger")
var menu = document.getElementById("menu")

hamburger.addEventListener('mouseup', function(event){
  console.log("hamburger:" + cb.checked);
  if(cb.checked === true) {
    cb.checked = false;
    console.log("hamburger changed: " + cb.checked)
  }
});

//if we are in small screen mode, and the drop down menu is open
//close it if user clicks outside of menu
window.addEventListener('mouseup', function(event){
  console.log("window: " + cb.checked);
  if (screen.width < smallwidth){
    if(event.button == 0){
      if (cb.checked === true){
        if (!event.target.matches('.navlink') || !event.target.matches('.menu')){
          cb.checked = false;
        }
      }
    }
  }
})