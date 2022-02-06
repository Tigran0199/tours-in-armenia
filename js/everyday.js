let languageSelector=document.querySelector('#selectorLanguage');
let moneySelector=document.querySelector('#selectorMoney');
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
    allUSD()
    moneySelector.value="USD"
}else if(myStorage.getItem("money")==="RUB"){
    allRUB()
    moneySelector.value="RUB"
}else{
    allAMD()
    moneySelector.value="AMD"
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
        allAMD()
        myStorage.removeItem("money")
        myStorage.setItem("money","AMD")
    }
})
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
function allArmenian(){
    document.querySelector("#everydayTour").innerHTML = "Ամենօրյա տուրեր"
    document.querySelector("#multiDayTour").innerHTML = "Արշավներ"
    document.querySelector("#hotel").innerHTML = "Հյուրանոցներ"
    document.querySelector("#aboutUs").innerHTML = "Մեր մասին" 
    document.querySelector(".slogan").innerHTML = "<b>Բացահայտենք<br>Հայաստանը<br>Միասին</b> "
    document.querySelector("#everyDayTours").innerHTML="ԱՄԵՆՕՐՅԱ ՏՈՒՐԵՐ ԵՐԵՎԱՆԻՑ"
    document.querySelector("#everyDayTours1").innerHTML="  Մենք կազմակերպում ենք ամենօրյա տուրեր Երևանի և Հայաստանի ամբողջ տարածքում: Անգամ ամենախստապահանջ զբոսաշրջիկը մեր առաջարկած տուրերից կարող է ընտրել իր նախասիրությունները ընդգրկող մեկօրյա տուրեր Հայաստանում և ոչ միայն: Մեր ամենօրյա տուրերը մեկնարկում են Երևան քաղաքից և ներառում այցելություններ Հայաստանի, Արցախի և Վրաստանի բազմաթիվ տեսարժան վայրեր:"
    document.querySelector("#tc1 h2").innerHTML="ՏԱԹԵՎ, ՀԱՐՍՆԱՁՈՐԻ ԴԻՏԱԿԵՏ, ՆՈՐԱՎԱՆՔ, ԱՐԵՆԻ"
    document.querySelector("#tc1p1").innerHTML="Սկիզբ 08:00"
    document.querySelector("#tc1p3").innerHTML="Տևողություն 1 օր"
    document.querySelector("#tc1b").innerHTML="Ավելին"
    document.querySelector("#tc2 h2").innerHTML="ՔԱՅԼԱՐՇԱՎ ԴԵՊԻ ՍՄԲԱՏԱԲԵՐԴ, ՀՈՐԲԱՏԵՂ"
    document.querySelector("#tc2p1").innerHTML="Սկիզբ 09:00"
    document.querySelector("#tc2p2").innerHTML="Տևողություն 1 օր"
    document.querySelector("#tc2b").innerHTML="Ավելին"
    document.querySelector("#tc3 h2").innerHTML="ՈւԽՏԱԳՆԱՑՈՒԹՅՈՒՆ ԴԵՊԻ ՀԱՐԹԱԳՅՈՒՂ՝ ՍՈՒՐԲ ՀՈՎՀԱՆՆԵՍ ՄԱՏՈՒՌ"
    document.querySelector("#tc3p1").innerHTML="Սկիզբ 09:00"
    document.querySelector("#tc3p2").innerHTML="Տևողություն 1 օր"
    document.querySelector("#tc3b").innerHTML="Ավելին"
    document.querySelector("#tc4 h2").innerHTML="ԳՈՇԱՎԱՆՔԻՑ ԳՈՇԻ ԼԻՃ, ՀԻՆ ԴԻԼԻՋԱՆ ՀԱՄԱԼԻՐ"
    document.querySelector("#tc4p1").innerHTML="Սկիզբ 09:30"
    document.querySelector("#tc4p2").innerHTML="Տևողություն 1 օր"
    document.querySelector("#tc4b").innerHTML="Ավելին"
    document.querySelector("#tc5 h2").innerHTML="ԾԱՂԿԱՁՈՐ, ՄԵՂՐԱՁՈՐ"
    document.querySelector("#tc5p1").innerHTML="Սկիզբ 10:00"
    document.querySelector("#tc5p2").innerHTML="Տևողություն 1 օր"
    document.querySelector("#tc5b").innerHTML="Ավելին"
    document.querySelector("#tc6 h2").innerHTML="ՀԱՌԻՃԱՎԱՆՔ, ԳՅՈՒՄՐԻ, ՔԱՂԱՔԱՅԻՆ ՏՈՒՐ"
    document.querySelector("#tc6p1").innerHTML="Սկիզբ 10:00"
    document.querySelector("#tc6p2").innerHTML="Տևողություն 1 օր"
    document.querySelector("#tc6b").innerHTML="Ավելին"
    document.querySelector("#fau").innerHTML="Մեր մասին"
    document.querySelector("#ftt").innerHTML="Թոփ տուրեր"
    document.querySelector("#fc").innerHTML="Հետադարձ կապ"
    document.querySelector("#fh").innerHTML="Հյուրանոցներ"
    document.querySelector("#fcr").innerHTML="Մեքենաների վարձույթ (շուտով)"
}
function allRussian(){
    document.querySelector("#everydayTour").innerHTML = "Ежедневные туры"
    document.querySelector("#multiDayTour").innerHTML = "Кампании"
    document.querySelector("#hotel").innerHTML = "Отели"
    document.querySelector("#aboutUs").innerHTML = "О нас" 
    document.querySelector(".slogan").innerHTML = "<b>Откройте<br>для себя<br>Армению</b> "
    document.querySelector("#everyDayTours").innerHTML = "ЕЖЕДНЕВНЫЕ ТУРЫ ИЗ ЕРЕВАНА"
    document.querySelector("#everyDayTours1").innerHTML = "Мы организуем ежедневные туры по всей Армении и столице Ереван. Даже самый требовательный турист может выбрать однодневный тур по своим предпочтениям и купить его. Наряду с индивидуальными экскурсиями мы так же предлагаем ежедневные экскурсии. У нас можно купить однодневный туры, которые начинаются из города Ереван и включают в себя посещение достопримечательностей Армении, Арцаха и Грузии."
    document.querySelector("#tc1 h2").innerHTML = "    ТАТЕВ, НОРАВАНК, СМОТРОВАЯ ПЛОЩАДКА АРСНАДЗОР, АРЕНИ"
    document.querySelector("#tc1p1").innerHTML = "Начало: 08:00"
    document.querySelector("#tc1p3").innerHTML = "ДЛИТЕЛЬНОСТЬ:  1 день"
    document.querySelector("#tc1b").innerHTML = "Больше"
    document.querySelector("#tc2 h2").innerHTML = "ПАЛОМНИЧЕСКИЙ ТУР К ЧАСОВНЕ СВЯТОГО ОВАНЕСА В ГАЛТАХЧИ"
    document.querySelector("#tc2p1").innerHTML = "Начало: 09:00"
    document.querySelector("#tc2p2").innerHTML = "ДЛИТЕЛЬНОСТЬ:  1 день"
    document.querySelector("#tc2b").innerHTML = "Больше"
    document.querySelector("#tc3 h2").innerHTML = "МАРШ НА СМБАТАБЕРД, ГОРБЕДЕ"
    document.querySelector("#tc3p1").innerHTML = "Начало: 09:30"
    document.querySelector("#tc3p2").innerHTML = "ДЛИТЕЛЬНОСТЬ:  1 день"
    document.querySelector("#tc3b").innerHTML = "Больше"
    document.querySelector("#tc4 h2").innerHTML = "ОЗЕРО ГОШ ИЗ ГОШАВАНКА, СТАРЫЙ ДИЛИЖАНСКИЙ КОМПЛЕКС"
    document.querySelector("#tc4p1").innerHTML = "Начало: 09:30"
    document.querySelector("#tc4p2").innerHTML = "ДЛИТЕЛЬНОСТЬ:  1 день"
    document.querySelector("#tc4b").innerHTML = "Больше"
    document.querySelector("#tc5 h2").innerHTML = "ЦАХКАДЗОР, МЕГРАДЗОР"
    document.querySelector("#tc5p1").innerHTML = "Начало: 10:00"
    document.querySelector("#tc5p2").innerHTML = "ДЛИТЕЛЬНОСТЬ:  1 день"
    document.querySelector("#tc5b").innerHTML = "Больше"
    document.querySelector("#tc6 h2").innerHTML = "АРИЧАВАНК, ГЮМРИ, ЭКСКУРСИЯ ПО СИТИ"
    document.querySelector("#tc6p1").innerHTML = "Начало: 10:00"
    document.querySelector("#tc6p2").innerHTML = "ДЛИТЕЛЬНОСТЬ:  1 день"
    document.querySelector("#tc6b").innerHTML = "Больше"
    document.querySelector("#fau").innerHTML="О нас"
    document.querySelector("#ftt").innerHTML="Лучшие туры"
    document.querySelector("#fc").innerHTML="Обратная связь:"
    document.querySelector("#fh").innerHTML="Гостиницы"
    document.querySelector("#fcr").innerHTML="Прокат автомобилей (скоро)"
}
function allEnglish(){
    document.querySelector("#everydayTour").innerHTML = "Daily Tours"
    document.querySelector("#multiDayTour").innerHTML = "Multi-Day Tours"
    document.querySelector("#hotel").innerHTML = "Hotels"
    document.querySelector("#aboutUs").innerHTML = "About Us" 
    document.querySelector(".slogan").innerHTML = "<b>Let's <br> Discover Armenia <br>Together</b> "
    document.querySelector("#everyDayTours").innerHTML = "DAILY TOURS FROM YEREVAN"
    document.querySelector("#everyDayTours1").innerHTML = "We organize daily trips in Yerevan and throughout Armenia. Even the most demanding tourist can choose a suitable option from the list of our 1-day tours. Our daily tours start in Yerevan and include visits to numerous sightseeing places of Armenia, Nagorno Karabakh and Georgia. Don’t hesitate to choose one of these unique tours and enjoy Armenia with us."
    document.querySelector("#tc1 h2").innerHTML = "TATEV, HARSNADZOR PERSPECTIVE, NORAVANK, ARENI"
    document.querySelector("#tc1p1").innerHTML = "Start at: 08:00"
    document.querySelector("#tc1p3").innerHTML = "Duration:  1 day"
    document.querySelector("#tc1b").innerHTML = "More"
    document.querySelector("#tc2 h2").innerHTML = "    MARCH TO SMBATABERD, HORBEDE"
    document.querySelector("#tc2p1").innerHTML = "Start at: 09:00"
    document.querySelector("#tc2p2").innerHTML = "Duration:  1 day"
    document.querySelector("#tc2b").innerHTML = "More"
    document.querySelector("#tc3 h2").innerHTML = "    PILGRIMAGE TO PLATO - SAINT HOVHANNES CHURCH"
    document.querySelector("#tc3p1").innerHTML = "Start at: 09:00"
    document.querySelector("#tc3p2").innerHTML = "Duration:  1 day"
    document.querySelector("#tc4 h2").innerHTML = "    GOSH LAKE FROM GOSHAVANK, OLD DILIJAN COMPLEX"
    document.querySelector("#tc4p1").innerHTML = "Start at: 09:30"
    document.querySelector("#tc4p2").innerHTML = "Duration:  1 day"
    document.querySelector("#tc4b").innerHTML = "More"
    document.querySelector("#tc5 h2").innerHTML = "TSAKHADZOR, MEGRADZOR"
    document.querySelector("#tc5p1").innerHTML = "Start at: 10:00"
    document.querySelector("#tc5p2").innerHTML = "Duration:  1 day"
    document.querySelector("#tc5b").innerHTML = "More"
    document.querySelector("#tc6 h2").innerHTML = "ARICHAVAN, GYUMRI, EXCURSION TO CITY"
    document.querySelector("#tc6p1").innerHTML = "Start at: 10:00"
    document.querySelector("#tc6p2").innerHTML = "Duration:  1 day"
    document.querySelector("#fau").innerHTML="About Us"
    document.querySelector("#ftt").innerHTML="Top Tours"
    document.querySelector("#fc").innerHTML="Contacts"
    document.querySelector("#fh").innerHTML="Hotels"
    document.querySelector("#fcr").innerHTML="Car Rentals(soon)"
}

function allUSD(){
    document.querySelector("#tc1sp").innerHTML="35-60 USD" 
    document.querySelector("#tc2sp").innerHTML="25 USD"
    document.querySelector("#tc3sp").innerHTML="15-45 USD"
    document.querySelector("#tc4sp").innerHTML="12-25 USD"
    document.querySelector("#tc5sp").innerHTML="10-22 USD"
    document.querySelector("#tc6sp").innerHTML="25-35 USD"
}
function allRUB(){
    document.querySelector("#tc1sp").innerHTML="1000-1500 RUB" 
    document.querySelector("#tc2sp").innerHTML="1300 RUB"
    document.querySelector("#tc3sp").innerHTML="700-2500 RUB"
    document.querySelector("#tc4sp").innerHTML="600-1100 RUB"
    document.querySelector("#tc5sp").innerHTML="650-1500 RUB"
    document.querySelector("#tc6sp").innerHTML="1000-2500 RUB"
}
function allAMD(){
    document.querySelector("#tc1sp").innerHTML="7.500 / 9.500 AMD" 
    document.querySelector("#tc2sp").innerHTML="6.500 AMD"
    document.querySelector("#tc3sp").innerHTML="4.500 / 6.500 AMD"
    document.querySelector("#tc4sp").innerHTML="6.000 / 8.000 AMD"
    document.querySelector("#tc5sp").innerHTML="3.500 / 5.500 AMD "
    document.querySelector("#tc6sp").innerHTML="5.500 / 7.500 AMD"
}