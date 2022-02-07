document.querySelector("body").onscroll = () => {
    setTimeout(modifyHeader, 1000);
    if (window.pageYOffset >= 250) {
      document.querySelector(".logo").classList.add("goingHidden");
      document.querySelector(".slogan").classList.add("goingHidden");
    } else {
      document.querySelector(".logo").classList.remove("goingHidden");
      document.querySelector(".slogan").classList.remove("goingHidden");
    }
  };
  function modifyHeader() {
    if (window.pageYOffset >= 250) {
      document.querySelector(".menuChooser").style.display = "none";
      document.querySelector(".logo").style.display = "none";
      document.querySelector(".slogan").style.display = "none";
      document.querySelector(".menubar").style.height = "80px";
      document.querySelector(".navigationBar").style.alignItems = "flex-start";
    } else {
      document.querySelector(".menuChooser").style.display = "flex";
      document.querySelector(".logo").style.display = "flex";
      document.querySelector(".slogan").style.display = "flex";
      document.querySelector(".menubar").style.height = "170px";
      document.querySelector(".navigationBar").style.alignItems = "flex-end";
    }
  }