let languageSelector = document.querySelector(".selectorLanguage");
let moneySelector = document.querySelector("#selectorMoney");
let myStorage = window.localStorage;
const CAT = document.querySelector(".isRunning");
const COPY_BUTTON = document.querySelector(".copyButton");
const CLOSE_BUTTON = document.querySelector(".closeButton");
const GIFT_MODAL =document.querySelector(".modal")
let score = 0;
let secretCode;
const catAudio1 = new Audio("../hidden/playMe.mp3");
const catAudio2 = new Audio("../hidden/simple.mp3");
const catAudio3 = new Audio("../hidden/simple1.mp3");
const catAudio4 = new Audio("../hidden/simple2.mp3");
const playlist = [catAudio1, catAudio2, catAudio3, catAudio4];

CAT.addEventListener("mouseover", function () {
  playlist[getRandomNumber(0, 3)].play();
});

CAT.addEventListener("click", () => {
  document.querySelector(".scoreShower").innerHTML = `Clicks :  ${score}`;
  if (score === 3) {
    secretCode = getSecretCode();
    document.querySelector(".scoreShower").innerHTML = `Clicks :  ${score}`;
    GIFT_MODAL.style.display = "block";
    GIFT_MODAL.style.animation = "fadeIn 0.5s linear";
    document.querySelector(
      ".modalContent"
    ).innerHTML = `You win! <br> You get 20% discount on our all tours! <br> This is your secret code : ${secretCode}
    <br> *NOTE: You can use this code only once!`;
    score = 0;
    document.querySelector(".scoreShower").innerHTML = `Clicks :  ${score}`;
  } else {
    score++;
    document.querySelector(".scoreShower").innerHTML = `Clicks :  ${score}`;
  }
});
COPY_BUTTON.addEventListener("click", () => {
  navigator.clipboard.writeText(secretCode);
});
CLOSE_BUTTON.addEventListener("click", () => {
  setTimeout(() => {
    GIFT_MODAL.style.display = "none";
  }, 1000);
    GIFT_MODAL.style.animation =
    "fadeOut 0.5s linear reverse";
});

function getSecretCode() {
  let secretCode = ["ae621T","a1e2s3","a3521sf","BABKEN","MsJlmB","VvSdvD","pHkZtu","9c0xED","Z0VvA7","A7a5R6","kPYN34","spRemu","KHZsjk","t5Ow22",
  ];
  return secretCode[getRandomNumber(0, secretCode.length - 1)];
}
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
  allARM();
  moneySelector.value = "ARM";
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
    allARM();
    myStorage.removeItem("money");
    myStorage.setItem("money", "AMD");
  }
});

function allEnglish() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["main"]["english"]) {
        document.querySelector(`${key}`).innerHTML =
          data["main"]["english"][key];
      }
    });
}

function allArmenian() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["main"]["armenian"]) {
        document.querySelector(`${key}`).innerHTML =
          data["main"]["armenian"][key];
      }
    });
}

function allRussian() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["main"]["russian"]) {
        document.querySelector(`${key}`).innerHTML =
          data["main"]["russian"][key];
      }
    });
}

function allARM() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["main"]["AMD"]) {
        document.querySelector(`${key}`).innerHTML = data["main"]["AMD"][key];
      }
    });
}
function allRUB() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["main"]["RUB"]) {
        document.querySelector(`${key}`).innerHTML = data["main"]["RUB"][key];
      }
    });
}
function allUSD() {
  fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["main"]["USD"]) {
        document.querySelector(`${key}`).innerHTML = data["main"]["USD"][key];
      }
    });
}