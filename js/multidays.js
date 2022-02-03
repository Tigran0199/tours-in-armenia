let languageSelector=document.querySelector("#selectorLanguage")
let moneySelector=document.querySelector("#selectorMoney")
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
function allArmenian(){
    document.querySelector("#dailyTours").innerHTML="Ամենօրյա տուրեր"
    document.querySelector("#multidayTours").innerHTML="Արշավներ"
    document.querySelector("#hotels").innerHTML="Հյուրանոցներ"
    document.querySelector("#aboutUs").innerHTML="Մեր մասին"
    document.querySelector(".slogan").innerHTML="<b>Բացահայտենք<br>Հայաստանը<br>Միասին</b>"
    document.querySelector("#titlep1").innerHTML="ԱՐԿԱԾԱՅԻՆ ՏՈՒՐԵՐ ՀԱՅԱՍՏԱՆՈՒՄ"
    document.querySelector("#titlep2").innerHTML="  Արկածախնդիր, համարձակ և էքստրիմի սիրահար մարդկանց համար մենք առաջարկում ենք տուրիստական փաթեթներ, որոնք ներառում են արկածային տուրեր Հայաստանում և Երևանում: Հայաստանը ունի նպաստավոր պայմաններ արկածային տուրեր կազմակերպելու համար: Ձեռք բերելով մեր տուրիստական փաթեթները՝ հնարավորություն կունենաք մասնակիցը լինելու հետաքրքրիր և անմոռանալի արկածային տուրերի, որոնք ներառում են քայլարշավներ, լեռնագնացություններ, այցելություններ քարանձավներ, ջիպ տուրեր և այլն: Սա հիանալի հնարավորություն է Ձեր այցելությունն առավել հիշարժան դարձնելու:"
    document.querySelector("#tc1 h2").innerHTML="ԱՐՇԱՎԱՅԻՆ ՏՈՒՐ ՀԱՅԱՍՏԱՆԻ ԼԵՌՆԵՐՈՒՄ"
    document.querySelector("#tc1p1").innerHTML="Սկիզբ 08:00"
    document.querySelector("#tc1p2").innerHTML="Տևողություն 7 օր / 7 գիշեր"
    document.querySelector("#tc1price").innerHTML="Գինը՝ սկսած"
    document.querySelector("#tc1b").innerHTML="Ավելին"
    document.querySelector("#tc2 h2").innerHTML="ՁԻԱՐՇԱՎ ՀԱՅԱՍՏԱՆՈՒՄ"
    document.querySelector("#tc2p1").innerHTML="Սկիզբ 09:00"
    document.querySelector("#tc2p2").innerHTML="Տևողություն 9 օր / 8 գիշեր"
    document.querySelector("#tc2price").innerHTML="Գինը՝ սկսած "
    document.querySelector("#tc2b").innerHTML="Ավելին"
    document.querySelector("#tc3 h2").innerHTML="ԱՐՇԱՎԱՅԻՆ ԵՎ ՄՇԱԿՈՒԹԱՅԻՆ ՏՈՒՐ ՀԱՅԱՍՏԱՆՈՒՄ"
    document.querySelector("#tc3p1").innerHTML="Սկիզբ 09:00"
    document.querySelector("#tc3p2").innerHTML="Տևողություն 12 օր / 11 գիշեր"
    document.querySelector("#tc3price").innerHTML="Գինը՝ սկսած "
    document.querySelector("#tc3b").innerHTML="Ավելին"
    document.querySelector("#tc4 h2").innerHTML="ՀՆԱԳԻՏԱԿԱՆ ՏՈՒՐ ՀԱՅԱՍՏԱՆՈՒՄ"
    document.querySelector("#tc4p1").innerHTML="Սկիզբ 09:30"
    document.querySelector("#tc4p2").innerHTML="Տևողություն 6 օր / 7 գիշեր"
    document.querySelector("#tc4p3").innerHTML="Գինը՝ սկսած "
    document.querySelector("#tc4b").innerHTML="Ավելին"
    document.querySelector("#tc5 h2").innerHTML="ՋԻՊ-ՏՈՒՐ ՀԱՅԱՍՏԱՆՈՒ"
    document.querySelector("#tc5p1").innerHTML="Սկիզբ 10:00"
    document.querySelector("#tc5p2").innerHTML="Տևողություն 8 օր / 7 գիշեր"
    document.querySelector("#tc5p3").innerHTML="Գինը՝ սկսած "
    document.querySelector("#tc5b").innerHTML="Ավելին"
    document.querySelector("#tc6 h2").innerHTML="ՀԱՅԱՍՏԱՆԻ ԹԱՔՆՎԱԾ ԱՐԱՀԵՏՆԵՐԸ"
    document.querySelector("#tc6p1").innerHTML="Սկիզբ 10:00"
    document.querySelector("#tc6p2").innerHTML="Տևողություն 7 օր / 6 գիշեր"
    document.querySelector("#tc6p3").innerHTML="Գինը՝ սկսած "
    document.querySelector("#tc6b").innerHTML="Ավելին"
    document.querySelector("#fau").innerHTML="Մեր մասի"
    document.querySelector("#ftt").innerHTML="Թոփ տուրեր"
    document.querySelector("#fc").innerHTML="Հետադարձ կապ"
    document.querySelector("#fh").innerHTML="Հյուրանոցներ"
    document.querySelector("#fcr").innerHTML="Մեքենաների վարձույթ (շուտով)"
}
function allRussian(){
    document.querySelector("#dailyTours").innerHTML="Ежедневные туры"
    document.querySelector("#multidayTours").innerHTML="Кампании"
    document.querySelector("#hotels").innerHTML="Отели"
    document.querySelector("#aboutUs").innerHTML="О нас"
    document.querySelector(".slogan").innerHTML="<b>Откройте<br>для себя<br>Армению</b> "
    document.querySelector("#titlep1").innerHTML="Приключенческие туры по Армении"
    document.querySelector("#titlep2").innerHTML="  Приключение, Для людей, которые смелы и заинтересованы в экстремальных условиях, мы предлагаем туристические пакеты, которые включают приключенческие туры в Армению и Ереван. В Армении есть благоприятные условия для организации приключенческих туров. Приобретая наши туристические пакеты, вы сможете заинтересоваться участником и незабываемыми приключенческими турами, которые включают марши, альпинисты, посещение пещер, джипы и т. д. Это отличная возможность сделать ваш визит более запоминающимся"
    document.querySelector("#tc1 h2").innerHTML="Экскурсия по горам Армении"
    document.querySelector("#tc1p1").innerHTML="Начало в 08:00"
    document.querySelector("#tc1p2").innerHTML="Длительность  7 дней / 7 ночей"
    document.querySelector("#tc1price").innerHTML="Цена: от "
    document.querySelector("#tc1b").innerHTML="Больше"
    document.querySelector("#tc2 h2").innerHTML="Верховая езда в Армении"
    document.querySelector("#tc2p1").innerHTML="Начало в 09:00"
    document.querySelector("#tc2p2").innerHTML="Длительность  9 дней / 8 ночей"
    document.querySelector("#tc2price").innerHTML="Цена от "
    document.querySelector("#tc2b").innerHTML="Больше"
    document.querySelector("#tc3 h2").innerHTML="Кемпинг и культурный тур в Армении"
    document.querySelector("#tc3p1").innerHTML="Начало 09:00"
    document.querySelector("#tc3p2").innerHTML="Длительность 12 дней / 11 ночей"
    document.querySelector("#tc3price").innerHTML="Цена: от "
    document.querySelector("#tc3b").innerHTML="Больше"
    document.querySelector("#tc4 h2").innerHTML="Археологический тур по Армении"
    document.querySelector("#tc4p1").innerHTML="Начало 09:30"
    document.querySelector("#tc4p2").innerHTML="Длительность 6 дней / 7 ночей"
    document.querySelector("#tc4p3").innerHTML="Цена: от "
    document.querySelector("#tc4b").innerHTML="Больше"
    document.querySelector("#tc5 h2").innerHTML="Джип-тур по Армении"
    document.querySelector("#tc5p1").innerHTML="Начало 10:00"
    document.querySelector("#tc5p2").innerHTML="Длительность 8 дней / 7 ночей"
    document.querySelector("#tc5p3").innerHTML="Цена: от "
    document.querySelector("#tc5b").innerHTML="Больше"
    document.querySelector("#tc6 h2").innerHTML="Скрытые пути Армении"
    document.querySelector("#tc6p1").innerHTML="Начало 10:00"
    document.querySelector("#tc6p2").innerHTML="Длительность 7 дней / 6 ночей"
    document.querySelector("#tc6p3").innerHTML="Цена от "
    document.querySelector("#tc6b").innerHTML="Больше"
    document.querySelector("#fau").innerHTML="О нас"
    document.querySelector("#ftt").innerHTML="Топ туры"
    document.querySelector("#fc").innerHTML="Обратная Связь"
    document.querySelector("#fh").innerHTML="Отели"
    document.querySelector("#fcr").innerHTML="Аренда авто (скоро)"
}
function allEnglish(){
    document.querySelector("#dailyTours").innerHTML="Daily tours"
    document.querySelector("#multidayTours").innerHTML="Multi-Day Tours"
    document.querySelector("#hotels").innerHTML="Hotels"
    document.querySelector("#aboutUs").innerHTML="About Us"
    document.querySelector(".slogan").innerHTML="<b>Let's <br> Discover Armenia <br>Together</b>"
    document.querySelector("#titlep1").innerHTML="Adventure tours in Armenia"
    document.querySelector("#titlep2").innerHTML="Adventure, For people who are brave and interested in extreme conditions, we offer tourist packages that include adventure tours to Armenia and Yerevan. Armenia has favorable conditions for organizing adventure tours. By purchasing our travel packages, you will be able to become interested in participating and unforgettable adventure tours, which include marches, climbers, visiting caves, jeeps, etc. d. This is a great opportunity to make your visit more memorable"
    document.querySelector("#tc1 h2").innerHTML="Tour of the mountains of Armenia"
    document.querySelector("#tc1p1").innerHTML="Start at 08:00"
    document.querySelector("#tc1p2").innerHTML="Duration 7 days / 7 nights"
    document.querySelector("#tc1price").innerHTML="Price: from "
    document.querySelector("#tc1b").innerHTML="More"
    document.querySelector("#tc2 h2").innerHTML="Horse riding in Armenia"
    document.querySelector("#tc2p1").innerHTML="Start at 09:00"
    document.querySelector("#tc2p2").innerHTML="Duration 9 days / 8 nights"
    document.querySelector("#tc2price").innerHTML="Price from "
    document.querySelector("#tc2b").innerHTML="More"
    document.querySelector("#tc3 h2").innerHTML="Camping and cultural tour in Armenia"
    document.querySelector("#tc3p1").innerHTML="Start at 09:00"
    document.querySelector("#tc3p2").innerHTML="Duration 12 days / 11 nights"
    document.querySelector("#tc3price").innerHTML="Price: from "
    document.querySelector("#tc3b").innerHTML="More"
    document.querySelector("#tc4 h2").innerHTML="Archaeological tour in Armenia"
    document.querySelector("#tc4p1").innerHTML="Start at  09:30"
    document.querySelector("#tc4p2").innerHTML="Duration 6 days / 7 nights"
    document.querySelector("#tc4p3").innerHTML="Price: from "
    document.querySelector("#tc4b").innerHTML="More"
    document.querySelector("#tc5 h2").innerHTML="Jeep tour in Armenia"
    document.querySelector("#tc5p1").innerHTML="Start at 10:00"
    document.querySelector("#tc5p2").innerHTML="Duration 8 days / 7 nights"
    document.querySelector("#tc5p3").innerHTML="Price: from "
    document.querySelector("#tc5b").innerHTML="More"
    document.querySelector("#tc6 h2").innerHTML="Hidden paths of Armenia"
    document.querySelector("#tc6p1").innerHTML="Start at 10:00"
    document.querySelector("#tc6p2").innerHTML="Duration 7 days / 6 nights"
    document.querySelector("#tc6p3").innerHTML="Price from "
    document.querySelector("#tc6b").innerHTML="More"
    document.querySelector("#fau").innerHTML="About Us"
    document.querySelector("#ftt").innerHTML="Top Tours"
    document.querySelector("#fc").innerHTML="Contacts"
    document.querySelector("#fh").innerHTML="Hotels"
    document.querySelector("#fcr").innerHTML="Car rental (soon)"
}

function allUSD(){
    document.querySelector("#tc1sp").innerHTML="902 USD" 
    document.querySelector("#tc2sp").innerHTML="831 USD"
    document.querySelector("#tc3sp").innerHTML="785 USD"
    document.querySelector("#tc4sp").innerHTML="524 USD"
    document.querySelector("#tc5sp").innerHTML="743 USD"
    document.querySelector("#tc6sp").innerHTML="453 USD"
}
function allRUB(){
    document.querySelector("#tc1sp").innerHTML="12000 RUB" 
    document.querySelector("#tc2sp").innerHTML="11000 RUB"
    document.querySelector("#tc3sp").innerHTML="10000 RUB"
    document.querySelector("#tc4sp").innerHTML="5000 RUB"
    document.querySelector("#tc5sp").innerHTML="7000 RUB"
    document.querySelector("#tc6sp").innerHTML="4000 RUB"
}
function allAMD(){
    document.querySelector("#tc1sp").innerHTML="435.000 AMD" 
    document.querySelector("#tc2sp").innerHTML="401.000 AMD"
    document.querySelector("#tc3sp").innerHTML="378.000 AMD"
    document.querySelector("#tc4sp").innerHTML="252.000 AMD"
    document.querySelector("#tc5sp").innerHTML="358.000 AMD "
    document.querySelector("#tc6sp").innerHTML="218.000 AMD"
}