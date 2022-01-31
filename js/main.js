'use strict'
let languageSelector = document.querySelector('.selectorLanguage')
let moneySelector = document.querySelector("#selectorMoney")
let myStorage = window.localStorage;

if(myStorage.getItem("language")==="english"){
    allEnglish()
}else if(myStorage.getItem("language")==="russian"){
    allRussian()
}else{
    allArmenian()
}
if(myStorage.getItem("money")==="USD"){
    allUSD()
}else if(myStorage.getItem("money")==="RUB"){
    allRUB()
}else{
    allARM()
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
    document.getElementById("topTours").innerHTML = "🔥Top Tours🔥"
    document.querySelector("#tc1 h2").innerHTML = "TREKKING TOUR IN ARMENIAN MOUNTAINS"
    document.querySelector("#tc1 p").innerHTML = "The best way to travel in the Armenian Highlands by us"
    document.querySelector("#tc1 button").innerHTML = "Read More"
    document.querySelector("#tc2 h2").innerHTML = "TSAGHKADZOR, MEGHRADZOR"
    document.querySelector("#tc2 p").innerHTML = "We are heading to Kotayk region to admire the unique winter beauty of nature."
    document.querySelector("#tc2 button").innerHTML = "Read More"    
    document.querySelector("#tc3 h2").innerHTML = "KHOR VIRAP, NORAVANK, JERMUK, ARENI, ARCH OF DREAMS"
    document.querySelector("#tc3 p").innerHTML = "Let's discover the beauty of the sights of Ararat region together"
    document.querySelector("#tc3 button").innerHTML = "Read More"
    document.querySelector("#tc4 h2").innerHTML = "SEVAN, DILIJAN, HAGHARTSIN, GOSHAVANK"
    document.querySelector("#tc4 p").innerHTML = "One of the most popular destinations for both local and foreign tourists"
    document.querySelector("#tc4 button").innerHTML = "Read More"
    document.querySelector("#aboutArmeniah1").innerHTML=" About Armenia"
    document.querySelector("#aAp1").innerHTML="Armenia – acknowledged as one of the cradles of civilization – is a beautiful country with a long and cultured history. It is an intriguing tourist destination and is recognised as one of the most safe countries in the world. Numerous monuments and masterpieces of the Ancient Era and Middle Ages can be found throughout the country!"
    document.querySelector("#aAp2").innerHTML="Miracles, wonders and adventures can be found on the land where Noah landed and traces of centuries are hidden everywhere. Gain the memories which will never leave you through our tours!"
    document.querySelector("#aAbutton1").innerHTML="Read More"
    document.querySelector("#wwus").innerHTML="WHY WITH US?"
    document.querySelector("#wwusli1").innerHTML="We provide top quality tours"
    document.querySelector("#wwusli1p1").innerHTML="We provide our clients with unforgettable and enjoyable travelling, with guaranteed services that exceed their expectations."
    document.querySelector("#wwusli2").innerHTML="We care for our customers"
    document.querySelector("#wwusli2p1").innerHTML="Our tours are completely based on your interests and schedule."
    document.querySelector("#wwusli3").innerHTML="We are Simply The Best"
    document.querySelector("#wwusli3p1").innerHTML="We pride ourselves in offering excellent, speedy and expert service to ensure you will enjoy a very rewarding travel in Armenia"
    document.querySelector("#fbTitle").innerHTML="WHAT THEY SAY ABOUT US"
    document.querySelector("#fbs1").innerHTML="Tours In Armenia Agency is the best tour company in YEREVAN without any doubt."
    document.querySelector("#fbs2").innerHTML="I have just completed 5 days of tour with them, it was an international tour to Georgia."
    document.querySelector("#fbs3").innerHTML="Fellow travelers and the guide services were awesome, really loved the hospitality provided by them."
    document.querySelector("#fbs4").innerHTML="It was my 1st tour with them but yes definitely not the last one. "
    document.querySelector("#fbs5").innerHTML="<br>- Prabhjot Singh -"
    document.querySelector("#fbs6").innerHTML="So many Thanks to TIA agency for making our time incredible and "
    document.querySelector("#fbs7").innerHTML="giving us a chance to explore the sights of interest in our amazing country,,, "
    document.querySelector("#fbs8").innerHTML=" Special Thanks to our guide energised Gayane Badalyan who did her best to "
    document.querySelector("#fbs9").innerHTML="introduce the Armenian history and made the tour unforgettable!!!"
    document.querySelector("#fbs10").innerHTML="<br>- Lee Lit -"
    document.querySelector("#fau").innerHTML="About Us"
    document.querySelector("#ftt").innerHTML="Top tours"
    document.querySelector("#fcu").innerHTML="Contact Us"
    document.querySelector("#fh").innerHTML="Hotels"
    document.querySelector("#fcr").innerHTML="Car Rentals (coming soon)"
}
function allArmenian(){
    document.getElementById("everyDayTours").innerHTML = "Ամենօրյա տուրեր"
    document.getElementById("multiDayTours").innerHTML = "Արշավներ"
    document.getElementById("hotels").innerHTML = "Հյուրանոցներ"
    document.getElementById("aboutUs").innerHTML = "Մեր մասին"
    document.querySelector(".slogan").innerHTML = "<b>Բացահայտենք<br>Հայաստանը<br>Միասին</b>"
    document.getElementById("topTours").innerHTML = "🔥Թոփ տուրեր🔥"
    document.querySelector("#tc1 h2").innerHTML = "ԱՐՇԱՎԱՅԻՆ ՏՈՒՐ ՀԱՅԱՍՏԱՆԻ ԼԵՌՆԵՐՈՒՄ"
    document.querySelector("#tc1 p").innerHTML = "Հայկական լեռնաշխարհում ճամփորդելու ամենալավ տարբերակը մեր կողմից"
    document.querySelector("#tc1 button").innerHTML = "Ավելին"
    document.querySelector("#tc2 h2").innerHTML = "ԾԱՂԿԱՁՈՐ, ՄԵՂՐԱՁՈՐ"
    document.querySelector("#tc2 p").innerHTML = "Ուղևորվում ենք Կոտայքի մարզ , հիանալու բնության ձմեռային գեղեցկությամբ յուրօրինակ նմուշներով:"
    document.querySelector("#tc2 button").innerHTML = "Ավելին"    
    document.querySelector("#tc3 h2").innerHTML = "ԽՈՐ ՎԻՐԱՊ, ՆՈՐԱՎԱՆՔ, ՋԵՐՄՈՒԿ, ԱՐԵՆԻ, ԵՐԱԶԱՆՔՆԵՐԻ ԿԱՄԱՐ"
    document.querySelector("#tc3 p").innerHTML = "Միասին բացահայտենք Արարատի մարզի տեսարժան վայրերի գեղեցկությունը"
    document.querySelector("#tc3 button").innerHTML = "Ավելին"
    document.querySelector("#tc4 h2").innerHTML = "ՍԵՎԱՆ, ԴԻԼԻՋԱՆ, ՀԱՂԱՐԾԻՆ, ԳՈՇԱՎԱՆՔ"
    document.querySelector("#tc4 p").innerHTML = "Ամենապահանջված ուղղություններից մեկը թե՛ տեղացի, թե՛ օտարերկրացի զբոսաշրջիկների շրջանում"
    document.querySelector("#tc4 button").innerHTML = "Ավելին"
    document.querySelector("#aboutArmeniah1").innerHTML=" ՀԱՅԱՍՏԱՆԻ ՄԱՍԻՆ"
    document.querySelector("#aAp1").innerHTML="Հայաստանն աշխարհին հայտնի է որպես քաղաքակրթության օրրան: Սա մի գեղեցիկ երկիր է, որն ունի հարուստ պատմություն եւ մշակույթ: Բազմաթիվ ճարտարապետական գոհարներ կարելի է գտնել Հայաստանի յուրաքանչյուր անկյունում: Այդ իսկ պատճառով այն հիանալի վայր է զբոսաշրջիկների համար:"
    document.querySelector("#aAp2").innerHTML="Կախարդական և հրաշքներով ու արկածներով լի մի աշխարհ է թաքնված այն երկրում, որի ամեն մի անկյունում կարելի է գտնել դարավոր պատմության անջնջելի հետքեր։ Մասնակցելով տուրերի այստեղ, ձեռք կբերեք  անմոռանալի հիշողություններ։"
    document.querySelector("#aAbutton1").innerHTML="Ավելին․․․"
    document.querySelector("#wwus").innerHTML="ԻՆՉՈՒ՞ ՄԵԶ ՀԵՏ"
    document.querySelector("#wwusli1").innerHTML="Մենք մատուցում ենք բարձրակարգ ծառայություններ"
    document.querySelector("#wwusli1p1").innerHTML="Մեր նպատակն է ապահովել մեր հաճախորդների անմոռանալի ճամփորդությունը, որը կգերազանցի իրենց սպասելիքները: Կազմակերպում ենք հանգիստ Հայաստանում և Հայաստանից դուրս:"
    document.querySelector("#wwusli2").innerHTML="Մենք հոգ ենք տանում մեր յուրաքանչյուր հյուրի մասին"
    document.querySelector("#wwusli2p1").innerHTML="Մեր տուրերի հիմքում ընկած են ձեր ցանկությունները։"
    document.querySelector("#wwusli3").innerHTML="Մենք լավագույններից մեկն ենք մեր գործում"
    document.querySelector("#wwusli3p1").innerHTML="Մենք հպարտ ենք, որ կարողանում ենք մատուցել անթերի, արագ և բարձրորակ ծառայություններ, որպեսզի դուք լիակատար վայելեք ձեր հանգիստը։"
    document.querySelector("#fbTitle").innerHTML="Կարծիքներ մեր մասին"
    document.querySelector("#fbs1").innerHTML="Երբևէ մասնակցածս ամենահետաքրքիր և ուրախ տուրն էր, իր մասնակիցներով,"
    document.querySelector("#fbs2").innerHTML="անակնկալ զագսի արարողությամբ, Սիղնաղիի հրապարակներից մեկում"
    document.querySelector("#fbs3").innerHTML="քոչարիով, երգերով, Տըրնդեզի կրակով, ջերմ մթնոլորտով և ամենակարևորը"
    document.querySelector("#fbs4").innerHTML="հիանալի Գիդով: Շնորհակալություն TIA տուրիստական գործակալությանը "
    document.querySelector("#fbs5").innerHTML="<br>- Վիկա Առաքելյան -"
    document.querySelector("#fbs6").innerHTML="Գերազանց է գնահատականս: 2012 թվականից մասնակցում եմ այս "
    document.querySelector("#fbs7").innerHTML="տուրիստական գործակալության  արշավներին և միշտ գոհ, հագեցած ու տպավորված եմ վերադառնում: Գեղեցիկ է միշտ կազմակերպված ու հաշվի է առնված ամեն մի  "
    document.querySelector("#fbs8").innerHTML=" մանրուք: Իսկ գիդերը ոչ միայն գրագետ ու բանիմաց են, այլ նաև երիտասարդ "
    document.querySelector("#fbs9").innerHTML="ավյունով ու եռանդով լի հումորի վարպետներ: ՇՆՈՐՀԱԿԱԼ ԵՄ:"
    document.querySelector("#fbs10").innerHTML="<br>- Սվետա Թորոսյան -"
    document.querySelector("#fau").innerHTML="Մեր մասին"
    document.querySelector("#ftt").innerHTML="Թոփ տուրեր"
    document.querySelector("#fcu").innerHTML="Հետադարձ կապ"
    document.querySelector("#fh").innerHTML="Հյուրանոցներ"
    document.querySelector("#fcr").innerHTML="Մեքենաների վարձույթ (շուտով)"
}
function allRussian(){
    document.getElementById("everyDayTours").innerHTML = "Ежедневные туры"
    document.getElementById("multiDayTours").innerHTML = "Кампании"
    document.getElementById("hotels").innerHTML = "Отели"
    document.getElementById("aboutUs").innerHTML = "О нас"
    document.querySelector(".slogan").innerHTML = "<b>Откройте <br>для себя <br>Армению</b>"
    document.getElementById("topTours").innerHTML = "🔥Топ Туры🔥"
    document.querySelector("#tc1 h2").innerHTML = "ПОХОД В ГОРАХ АРМЕНИИ"
    document.querySelector("#tc1 p").innerHTML = "Лучший способ путешествовать по Армянскому нагорью от нас"
    document.querySelector("#tc1 button").innerHTML = "Читать далее"
    document.querySelector("#tc2 h2").innerHTML = "ЦАХКАДЗОР, МЕГРАДЗОР"
    document.querySelector("#tc2 p").innerHTML = "Отправляемся в Котайкскую область, чтобы полюбоваться неповторимой зимней красотой природы."
    document.querySelector("#tc2 button").innerHTML = "Читать далее"    
    document.querySelector("#tc3 h2").innerHTML = "ХОР ВИРАП, НОРАВАНК, ДЖЕРМУК, АРЕНИ, АРКА МЕЧТЫ"
    document.querySelector("#tc3 p").innerHTML = "Откроем вместе красоту достопримечательностей Араратского края"
    document.querySelector("#tc3 button").innerHTML = "Читать далее"
    document.querySelector("#tc4 h2").innerHTML = "СЕВАН, ДИЛИЖАН, АГАРЦИН, ГОШАВАНК"
    document.querySelector("#tc4 p").innerHTML = "Одно из самых популярных направлений как для местных, так и для иностранных туристов"
    document.querySelector("#tc4 button").innerHTML = "Читать далее"
    document.querySelector("#aboutArmeniah1").innerHTML=" ОБ АРМЕНИИ"
    document.querySelector("#aAp1").innerHTML="Армения известна миру как колыбель цивилизации. Это красивая страна с богатой историей и культурой. Многие из древних и средневековых архитектурных шедевров можно найти в каждом уголке Армении. И все это делает Армению туристическим направлением с огромным потенциалом.  Ежегодно увеличивается число туристов из Москвы, из СПБ, из Испании, Франции, США и других стран и городов мира. Туристические компании в свою очередь предлагают широкий спектр туров в Армении: индивидуальные туры, религиозные туры, гастрономические туры, активный туризм и приключенческие туры, комбинированные туры по Кавказу (Грузия, Армения), развлекательные туры."
    document.querySelector("#aAp2").innerHTML="Чудесный и сказочный мир, полный приключений скрыт на земле, на которую вступил Ной и которая покрыта следами многовековой истории. Приезжайте за воспоминаниями, которые останутся с вами на всю жизнь."
    document.querySelector("#aAbutton1").innerHTML="Читать далее"
    document.querySelector("#wwus").innerHTML="ПОЧЕМУ С НАМИ?"
    document.querySelector("#wwusli1").innerHTML="Мы предоставляем услуги наивысшего качества"
    document.querySelector("#wwusli1p1").innerHTML="Наша цель – гарантируя сервис лучшего качества, предоставить нашим клиентам незабываемые путешествия, которые превысят их ожидания. Доказательством тому является факт, что  ежегодно увеличивается число туристов из Москвы, из СПБ, из Испании, Франции, США и других стран и городов мира. "
    document.querySelector("#wwusli2").innerHTML="Мы заботимся о каждом нашем клиенте"
    document.querySelector("#wwusli2p1").innerHTML="В основе наших туров лежат ваши пожелания. Мы предлагаем широкий спектр туров в Армении: индивидуальные туры, религиозные туры, гастрономические туры, активный туризм и приключенческие туры, комбинированные туры по Кавказу (Грузия, Армения), развлекательные туры."
    document.querySelector("#wwusli3").innerHTML="Мы лучшие в своем деле"
    document.querySelector("#wwusli3p1").innerHTML="Мы гордимся тем, что предлагаем отличный, быстрый и высоко профессиональный сервис, чтобы вы насладились вашим заслуженным отдыхом в полной мере."
    document.querySelector("#fbTitle").innerHTML="ОТЗЫВЫ О НАС"
    document.querySelector("#fbs1").innerHTML="Большое спасибо туристическому агенству"
    document.querySelector("#fbs2").innerHTML="TIA за прекрасно организованный тур."
    document.querySelector("#fbs3").innerHTML="Поездка прошла отлично все остались довольны."
    document.querySelector("#fbs4").innerHTML="Сервис замечательный. Всем вас рекомендую! "
    document.querySelector("#fbs5").innerHTML="<br>- Наталья Каменецкая -"
    document.querySelector("#fbs6").innerHTML="Туроператор TIA "
    document.querySelector("#fbs7").innerHTML=" очень хорошо организовывает свои туры. "
    document.querySelector("#fbs8").innerHTML=" Мы ездили с ними уже 3 раза, остались очень довольны. "
    document.querySelector("#fbs9").innerHTML="Все хорошо организовано, мы посетили много интересных мест, услышали много увлекательной и любопытной информации. "
    document.querySelector("#fbs10").innerHTML="<br>- Катерина Уткина -"
    document.querySelector("#fau").innerHTML="О нас"
    document.querySelector("#ftt").innerHTML="Топ туров"
    document.querySelector("#fcu").innerHTML="Контакты"
    document.querySelector("#fh").innerHTML="Отели"
    document.querySelector("#fcr").innerHTML="Аренда авто(скоро)"
}


function allARM(){
    document.querySelector("#price1").innerHTML="60 000 AMD" 
    document.querySelector("#price2").innerHTML="4000-6000 AMD"
    document.querySelector("#price3").innerHTML=" 6500 - 8000 AMD"
    document.querySelector("#price4").innerHTML=" 7500 - 9000 AMD"
}
function allRUB(){
    document.querySelector("#price1").innerHTML="9800 RUB" 
    document.querySelector("#price2").innerHTML="700-1000 RUB"
    document.querySelector("#price3").innerHTML=" 700 - 1200 RUB"
    document.querySelector("#price4").innerHTML=" 1000 - 2000 RUB"
}
function allUSD(){
    document.querySelector("#price1").innerHTML="350USD" 
    document.querySelector("#price2").innerHTML="7 - 11 USD"
    document.querySelector("#price3").innerHTML=" 12 - 17 USD"
    document.querySelector("#price4").innerHTML=" 11 - 16 USD"
}

