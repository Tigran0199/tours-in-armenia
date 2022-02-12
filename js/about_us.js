let languageSelector = document.querySelector("#selectorLanguage");
let myStorage = window.localStorage;

//there is duplicate codes in this file
//all information about code you can find in the file js\main.js

if (myStorage.getItem("language") === "english") {
  allEnglish();
  languageSelector.value = "english";
} else if (myStorage.getItem("language") === "russian") {
  allRussian();
  languageSelector.value = "russian";
} else {
  allArmenian();
  languageSelector.value = "armenian";
}
languageSelector.addEventListener("change", function () {
  if (languageSelector.value === "armenian") {
    allArmenian();
    myStorage.clear();
    myStorage.setItem("language", "armenian");
  } else if (languageSelector.value === "russian") {
    allRussian();
    myStorage.clear();
    myStorage.setItem("language", "russian");
  } else {
    allEnglish();
    myStorage.clear();
    myStorage.setItem("language", "english");
  }
});

function allArmenian() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["about_us"]["armenian"]) {
        document.querySelector(`${key}`).innerHTML =
          data["about_us"]["armenian"][key];
      }
    });
}
function allEnglish() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["about_us"]["english"]) {
        document.querySelector(`${key}`).innerHTML =
          data["about_us"]["english"][key];
      }
    });
}
function allRussian() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["about_us"]["russian"]) {
        document.querySelector(`${key}`).innerHTML =
          data["about_us"]["russian"][key];
      }
    });
}
