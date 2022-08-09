// set up hiding menu when on small screen
const smallWidth = 768;
var showMenu = false;

var hamburger = document.getElementById("hamburger");
var btns = document.querySelectorAll(".navlink");
var menu = document.getElementById("menu");
var navlis = document.querySelectorAll(".navli");

/*Sets the display mode for all of the nav bar list items */
function setLIdisplay(display) {
  for (var i = 0; i < navlis.length; i++) {
    navlis[i].style.display = display;
  }
}

/* Toggles displaying the menu. */
function toggleMenu() {
  if (showMenu) {
    showMenu = false;
    menu.style.display = "none";
    setLIdisplay("none");
  } else {
    showMenu = true;
    menu.style.display = "block";
    setLIdisplay("block");
  }
}

/* Opens/closes menu when hamburger button is clicked */
hamburger.addEventListener("click", function (event) {
  if (event.button === 0) {
    toggleMenu();
  }
});

/* Closes menu when user clicks a link*/
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function (event) {
    if (screen.width < smallWidth) {
      if (event.button == 0) {
        toggleMenu();
      }
    }
  });
}

/*if we are in small screen mode, and the drop down menu is open
close it if user clicks outside of menu */
window.addEventListener("mouseup", function (event) {
  if (screen.width < smallWidth) {
    if (event.button == 0) {
      if (
        !event.target.matches(".navlink") &&
        !event.target.matches(".hamburger")
      ) {
        if (showMenu) {
          toggleMenu();
        }
      }
    }
  }
});

var last = window.innerWidth;

/* restore menu style when screen resized back up or down*/
window.addEventListener("resize", function (event) {
  if (last <= smallWidth && this.innerWidth > smallWidth) {
    menu.style.display = "flex";
    for (var i = 0; i < navlis.length; i++) {
      navlis[i].style.display = "inline-block";
    }
    showMenu = false;
  }
  if (last >= smallWidth && this.innerWidth < smallWidth) {
    menu.style.display = "none";
  }
  last = this.innerWidth;
});
