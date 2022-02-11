let languageSelector=document.querySelector('#selectorLanguage');
let moneySelector = document.querySelector('#selectorMoney');
let myStorage = window.localStorage;

if(myStorage.getItem("language")==="english"){
    allEnglish()
    languageSelector.value="english"
}else if(myStorage.getItem("language")==="russian"){
    allRussian()
    languageSelector.value="russian"
}else{
    allArmenian()
    languageSelector.value="armenian"
}


if(myStorage.getItem("money")==="USD"){
    moneySelector.value="USD"
}else if(myStorage.getItem("money")==="RUB"){
    moneySelector.value="RUB"
}else{
    moneySelector.value="ARM"
}

languageSelector.addEventListener('change',function (){
    if(languageSelector.value==="armenian"){
        allArmenian()
        myStorage.removeItem("language")
        myStorage.setItem("language","armenian")
    }else if(languageSelector.value==="russian"){
        allRussian()
        myStorage.removeItem("language")
        myStorage.setItem("language","russian")
    }else {
        allEnglish()
        myStorage.removeItem("language")
        myStorage.setItem("language","english")
    }
})

moneySelector.addEventListener('change',function (){
    if(moneySelector.value==="USD"){
        allUSD()
        myStorage.removeItem("money")
        myStorage.setItem("money","USD")
    }else if(moneySelector.value==="RUB"){
        allRUB()
        myStorage.removeItem("money")
        myStorage.setItem("money","RUB")
    }else {
        allARM()
        myStorage.removeItem("money")
        myStorage.setItem("money","AMD")
    }
})
function allEnglish(){
    fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["hotels"]["english"]) {
        document.querySelector(`${key}`).innerHTML = data["hotels"]["english"][key];
      }
    });
}
function allRussian(){
    fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["hotels"]["russian"]) {
        document.querySelector(`${key}`).innerHTML = data["hotels"]["russian"][key];
      }
    });
}
function allArmenian(){
    fetch("../data/data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      for (let key in data["hotels"]["armenian"]) {
        document.querySelector(`${key}`).innerHTML = data["hotels"]["armenian"][key];
      }
    });
}
