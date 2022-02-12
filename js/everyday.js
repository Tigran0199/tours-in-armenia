let languageSelector = document.querySelector("#selectorLanguage");
let moneySelector = document.querySelector("#selectorMoney");
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
if (myStorage.getItem("money") === "USD") {
  allUSD();
  moneySelector.value = "USD";
} else if (myStorage.getItem("money") === "RUB") {
  allRUB();
  moneySelector.value = "RUB";
} else {
  allAMD();
  moneySelector.value = "AMD";
}

languageSelector.addEventListener("change", function () {
  if (languageSelector.value === "armenian") {
    allArmenian();
    myStorage.removeItem("language");
    myStorage.setItem("language", "armenian");
  } else if (languageSelector.value === "russian") {
    allRussian();
    myStorage.removeItem("language");
    myStorage.setItem("language", "russian");
  } else {
    allEnglish();
    myStorage.removeItem("language");
    myStorage.setItem("language", "english");
  }
});

moneySelector.addEventListener("change", function () {
  if (moneySelector.value === "USD") {
    allUSD();
    myStorage.removeItem("money");
    myStorage.setItem("money", "USD");
  } else if (moneySelector.value === "RUB") {
    allRUB();
    myStorage.removeItem("money");
    myStorage.setItem("money", "RUB");
  } else {
    allAMD();
    myStorage.removeItem("money");
    myStorage.setItem("money", "AMD");
  }
});
function allArmenian() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["everyday_tours"]["armenian"]) {
        document.querySelector(`${key}`).innerHTML =
          data["everyday_tours"]["armenian"][key];
      }
    });
}
function allRussian() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["everyday_tours"]["russian"]) {
        document.querySelector(`${key}`).innerHTML =
          data["everyday_tours"]["russian"][key];
      }
    });
}
function allEnglish() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["everyday_tours"]["english"]) {
        document.querySelector(`${key}`).innerHTML =
          data["everyday_tours"]["english"][key];
      }
    });
}

function allUSD() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["everyday_tours"]["USD"]) {
        document.querySelector(`${key}`).innerHTML =
          data["everyday_tours"]["USD"][key];
      }
    });
}
function allRUB() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["everyday_tours"]["RUB"]) {
        document.querySelector(`${key}`).innerHTML =
          data["everyday_tours"]["RUB"][key];
      }
    });
}
function allAMD() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["everyday_tours"]["AMD"]) {
        document.querySelector(`${key}`).innerHTML =
          data["everyday_tours"]["AMD"][key];
      }
    });
}
