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
    document.getElementById("everyDayTours").innerHTML = "Daily Tours"
    document.getElementById("multiDayTours").innerHTML = "Multi-Day Tours"
    document.getElementById("hotels").innerHTML = "Hotels"
    document.getElementById("aboutUs").innerHTML = "About Us"
    document.querySelector(".slogan").innerHTML = "<b>Let's <br> Discover Armenia <br>Together</b>"
    document.querySelector("#title1").innerHTML = "HOTELS IN YEREVAN, ARMENIA"
    document.querySelector("#title2").innerHTML = "The choice of the hotel is one of the important points, when planning a holiday in any country. If you decided to spend your vacation ..."
    document.querySelector("#hc1 h2").innerHTML = "IMPERIAL PALACE HOTEL"
    document.querySelector("#hc1p1").innerHTML="LOCATION 'Imperial Palace Hotel' which is situated in the center of Yerevan city and has an imperial style offers its services  ..."
    document.querySelector("#hc1b").innerHTML="Read More"
    document.querySelector("#hc2 h2").innerHTML = "TUFENKIAN HISTORIC YEREVAN HOTEL "
    document.querySelector("#hc2p1").innerHTML="The new Tufenkian city center hotel is located on the crossroads of Hanrapetutyan and Buzand streets. Tufenkian Historic Yerevan ..."
    document.querySelector("#hc2b").innerHTML="Read More"
    document.querySelector("#hc3 h2").innerHTML = "SHIRAK HOTEL "
    document.querySelector("#hc3p1").innerHTML="Shirak Hotel lies in the centre of Yerevan. Its elegant rooms feature balconies ..."
    document.querySelector("#hc3b").innerHTML="Read More"
    document.querySelector("#hc4 h2").innerHTML = "ROYAL TULIP GRAND HOTEL"
    document.querySelector("#hc4p1").innerHTML="This 5-star hotel in Yerevan offers a stylish spa with outdoor pool,  ..."
    document.querySelector("#hc4b").innerHTML="Read More"
    document.querySelector("#hc5 h2").innerHTML = "PARIS HOTEL YEREVAN"
    document.querySelector("#hc5p1").innerHTML="The Paris Hotel Yerevan is located in downtown Yerevan, 2 minutes’ walk ..."
    document.querySelector("#hc5b").innerHTML="Read More"
    document.querySelector("#fau").innerHTML="About Us"
    document.querySelector("#ftt").innerHTML="Top tours"
    document.querySelector("#fcu").innerHTML="Contact Us"
    document.querySelector("#fh").innerHTML="Hotels"
    document.querySelector("#fcr").innerHTML="Car Rentals (coming soon)"
}
function allRussian(){
    document.getElementById("everyDayTours").innerHTML = "Ежедневные туры"
    document.getElementById("multiDayTours").innerHTML = "Кампании"
    document.getElementById("hotels").innerHTML = "Отели"
    document.getElementById("aboutUs").innerHTML = "О нас"
    document.querySelector(".slogan").innerHTML = "<b>Откройте <br>для себя <br>Армению</b>"
    document.querySelector("#title1").innerHTML = "ГОСТИНИЦЫ ЕРЕВАНА, АРМЕНИЯ"
    document.querySelector("#title2").innerHTML = "Во время отдыха очень важную роль играет выбор гостиницы. Если решили в этот раз организовать Ваш отдых в Армении, то мы поможем найти удобные и лучшие отели в центре Еревана и в регионах, цены и качество которых будут соответствовать Вашим пожеланиям. Здесь сможете ознакомиться с лучшими отелями, расположенные в Армении, в частности в центре Еревана, которые предлагают приемлемые цены и высококачественный сервис."
    document.querySelector("#hc1 h2").innerHTML = "ГОСТИНИЦА ИМПЕРИАЛ ПАЛАС"
    document.querySelector("#hc1p1").innerHTML="МЕСТОНАХОЖДЕНИЯ Гостиница «Империал Палас» находится в самом центре Еревана. Имеет императорский стиль, ..."
    document.querySelector("#hc1b").innerHTML="Подробнее"
    document.querySelector("#hc2 h2").innerHTML = "ГОСТИНИЦА ТУФЕНКЯН ИСТОРИЧЕСКИЙ ЕРЕВАН"
    document.querySelector("#hc2p1").innerHTML="Новая гостиница в Ереване Туфенкян расположена в нескольких шагах от сердца столицы – Площади Республики на..."
    document.querySelector("#hc2b").innerHTML=" Подробнее"
    document.querySelector("#hc3 h2").innerHTML = "ГОСТИНИЦА ШИРАК"
    document.querySelector("#hc3p1").innerHTML="Отель Ширак расположен в центре Еревана. В элегантных номерах имеются балконы с панорамным видом на гору Ара..."
    document.querySelector("#hc3b").innerHTML="Подробнее"
    document.querySelector("#hc4 h2").innerHTML = "ГРАНД-ОТЕЛЬ ROYAL TULIP"
    document.querySelector("#hc4p1").innerHTML="Пятизвездочный отель расположен в Ереване к услугам гостей стильный спа-салон с открытым бассейном, итальян..."
    document.querySelector("#hc4b").innerHTML="Подробнее"
    document.querySelector("#hc5 h2").innerHTML = "ГОСТИНИЦУ ПАРИЖ"
    document.querySelector("#hc5p1").innerHTML="Отель Париж Ереван расположен в центре Еревана, в 2 минутах ходьбы от Площади Республики, в окружении рестора..."
    document.querySelector("#hc5b").innerHTML="Подробнее"
    document.querySelector("#fau").innerHTML="О нас"
    document.querySelector("#ftt").innerHTML="Топ туры"
    document.querySelector("#fcu").innerHTML="Контакты"
    document.querySelector("#fh").innerHTML="Отели"
    document.querySelector("#fcr").innerHTML="Аренда авто(скоро)"
}
function allArmenian(){
    document.getElementById("everyDayTours").innerHTML = "Ամենօրյա տուրեր"
    document.getElementById("multiDayTours").innerHTML = "Արշավներ"
    document.getElementById("hotels").innerHTML = "Հյուրանոցներ"
    document.getElementById("aboutUs").innerHTML = "Մեր մասին"
    document.querySelector(".slogan").innerHTML = "<b>Բացահայտենք<br>Հայաստանը<br>Միասին</b>"
    document.querySelector("#title1").innerHTML = "ՀՅՈՒՐԱՆՈՑՆԵՐ ՀԱՅԱՍՏԱՆՈՒՄ"
    document.querySelector("#title2").innerHTML = "Ցանկացած երկրում հանգիստն անցկացնելիս կարևոր է ուշադրություն դարձնել հյուրանոցի ընտրությանը: Եթե որոշել եք այս անգամ ձեր հանգիստն անցկացնել Հայաստանում, ապա մենք ձեզ կօգնենք գտնել ձեր պահանջները բավարարող, հարմարավետ և մատչելի հյուրանոց: Այստեղ կարող եք ծանոթանալ Երևանում և Հայաստանում գործող լավագույն հյուրանոցներին, որոնք առաջարկում են մատչելի գին և բարձր որակ:"
    document.querySelector("#hc1 h2").innerHTML = "ԻՄՊԵՐԻԱԼ ՊԱԼԱՍ ՀՈԹԵԼ"
    document.querySelector("#hc1p1").innerHTML="ԴԻՐՔ Երևան քաղաքի հենց սրտում գտնվող, կայսերական ոճով կառուցված բարձրակարգ “Իմպերիալ Պալաս Հոթել”-ը արդեն ..."
    document.querySelector("#hc1b").innerHTML="Ավելին"
    document.querySelector("#hc2 h2").innerHTML = "ԹՈՒՖԵՆԿՅԱՆ ԱՎԱՆԴԱԿԱՆ ԵՐԵՎԱՆ ՀՅՈՒՐԱՆՈՑ"
    document.querySelector("#hc2p1").innerHTML="Թուֆենկյան ավանդական Երևան հյուրանոցը գտնվումէ Հնարապետության և Բյուզանդ փողոցների խաչմերուկում: Հյուրանո..."
    document.querySelector("#hc2b").innerHTML="Ավելին"
    document.querySelector("#hc3 h2").innerHTML = "ՇԻՐԱԿ ՀՅՈՒՐԱՆՈՑ"
    document.querySelector("#hc3p1").innerHTML="Շիրակ հյուրանոցը գտնվում է Երևանի կենտրոնում: Նրա նրբաոճ սենյակներից տեսարան է բացվում դեպի Արարատ լեռը: Բակ..."
    document.querySelector("#hc3b").innerHTML="Ավելին"
    document.querySelector("#hc4 h2").innerHTML = "ՌՈՅԱԼ ԹՈՒԼԻՓ ԳՐԱՆԴ ՀՈԹԵԼ"
    document.querySelector("#hc4p1").innerHTML="Այս 5-աստղանի հյուրանոցը առաջարկում է նորաձև սպա կենտրոն բաց լողավազանով, իտալական ռեստորան, որից տեսարան է բ..."
    document.querySelector("#hc4b").innerHTML="Ավելին"
    document.querySelector("#hc5 h2").innerHTML = "ՓԱՐԻԶ ՀՅՈՒՐԱՆՈՑ"
    document.querySelector("#hc5p1").innerHTML="«Փարիզ» հյուրանոցը գտնվում է Երևանի կենտրոնում՝ Հանրապետության հրապարակից մի քանի քայլ հեռավորության վրա: Մ..."
    document.querySelector("#hc5b").innerHTML="Ավելին"
    document.querySelector("#fau").innerHTML="Մեր մասին"
    document.querySelector("#ftt").innerHTML="Թոփ տուրեր"
    document.querySelector("#fcu").innerHTML="Հետադարձ կապ"
    document.querySelector("#fh").innerHTML="Հյուրանոցներ"
    document.querySelector("#fcr").innerHTML="Մեքենաների վարձույթ (շուտով)"
}
