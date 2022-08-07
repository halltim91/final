// set up hiding menu when on small screen
document.addeventlis
let cb = document.getElementById("cbtoggle");
var btns = document.querySelectorAll(".navlink");
console.log(btns);

for(var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    if (screen.width < 768){
      cb.checked = false;
    } 
  });
}