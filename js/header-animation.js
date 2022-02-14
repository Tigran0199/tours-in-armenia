const MENUBAR = document.querySelector(".menubar");
const LOGO = document.querySelector(".logo");
const SLOGAN = document.querySelector(".slogan");
const BOUNCY_BUTTONS = document.querySelectorAll(".bouncy");

// code for body scroll event
// depending on the scroll position, the header will change its size
document.querySelector("body").onscroll = () => {
  setTimeout(modifyHeader, 400);
  if (window.pageYOffset >= 250) {
    if (MENUBAR.classList.contains("goingBig")) {
      MENUBAR.classList.remove("goingBig");
    }
    setTimeout(() => {
      LOGO.classList.add("goingHidden");
      SLOGAN.classList.add("goingHidden");
      MENUBAR.classList.add("goingSmall");
      document.querySelector(".navigationBar").style.alignItems = "flex-start";
    }, 0);
  } else {
    LOGO.classList.remove("goingHidden");
    SLOGAN.classList.remove("goingHidden");
    MENUBAR.classList.remove("goingSmall");
    document.querySelector(".navigationBar").style.alignItems = "flex-end";
  }
};
function modifyHeader() {
  if (window.pageYOffset >= 250) {
    document.querySelector(".menuChooser").style.display = "none";
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".slogan").style.display = "none";
    document.querySelector(".menubar").style.height = "80px";
  } else {
    MENUBAR.classList.add("goingBig");
    setTimeout(() => {
      document.querySelector(".menuChooser").style.display = "flex";
      document.querySelector(".logo").style.display = "flex";
      document.querySelector(".slogan").style.display = "flex";
      document.querySelector(".menubar").style.height = "170px";
    }, 400);
  }
}
