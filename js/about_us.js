let languageSelector = document.querySelector("#selectorLanguage")
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
languageSelector.addEventListener("change", function () {
    if(languageSelector.value==="armenian"){
        allArmenian()
        myStorage.clear()
        myStorage.setItem("language","armenian")
    }else if(languageSelector.value === "russian"){
        allRussian()
        myStorage.clear()
        myStorage.setItem("language","russian")
    }else{
        allEnglish()
        myStorage.clear()
        myStorage.setItem("language","english")
    }})
    console.log(myStorage)

    function allArmenian(){
        document.querySelector("#everydayTour").innerHTML = "Ամենօրյա տուրեր"
        document.querySelector("#multiDayTour").innerHTML = "Արշավներ"
        document.querySelector("#hotel").innerHTML = "Հյուրանոցներ"
        document.querySelector("#aboutUs").innerHTML = "Մեր մասին" 
        document.querySelector(".slogan").innerHTML = "<b>Բացահայտենք<br>Հայաստանը<br>Միասին</b> "
        document.querySelector("#aupopTour").innerHTML="Մեր մասին"
        document.querySelector("#au_cardp1").innerHTML="TIA-ն հաջողությամբ գործում է հայկական զբոսաշրջության շուկայում 2011 թ․-ից: Ընկերությունը կազմակերպում է ներքին, ներգնա և արտագնա տուրեր: Մեր գործակալությունը մասնագիտացած է Հայաստանում, Լեռնային Ղարաբաղում և Վրաստանում շրջագայություններ և էքսկուրսիաներ կազմակերպելու  մեջ:"
        document.querySelector("#au_cardp2").innerHTML="Մենք խանդավառ մասնագետների մի թիմ ենք, ովքեր հավատում են այն գործի հաջողությանը, որն արվում է սիրով, իսկ մենք սիրում ենք այն գործը, որն անում ենք։"
        document.querySelector("#au_cardp3").innerHTML="2019 թվականին ճանաչվեցինք տարվա լավագույն տուրիստական ընկերությունը՝ ըստ «Արմենիա տուրիստիչեսկայա» մրցանակաբաշխության:"
        document.querySelector("#au_cards1").innerHTML="Մեր նպատակը"
        document.querySelector("#au_cardp4").innerHTML="Մեր նպատակն է Հայաստանը դարձնել գրավիչ զբոսաշրջային կենտրոն աշխարհում:"
        document.querySelector("#au_cards2").innerHTML="Մեր արժեքները"
        document.querySelector("#au_cardp5").innerHTML="Ուղղակի և բաց հաղորդակցություն Արագ արձագանքում Թիմային աշխատանք Ճկունություն և փոփոխությունները ընդունելու պատրաստակամությունՌիսկի ճիշտ հաշվարկումՈրակի ապահովում"
        document.querySelector("#au_cards3").innerHTML="Մեր տեսլականը"
        document.querySelector("#au_cardp6").innerHTML="Մենք ձգտում ենք լինել նորարար, առաջնորդող տուր օպերատոր և ստեղծագործական մոտեցում ցուցաբերել ճանապարհորդության ամեն մի փուլում, գրավել մեր դիրքը շուկայում լավագույն տուրիստական գործակալությունների շարքում և ճանաչվել մեր պրոֆեսիոնալիզմի և բարձր որակի շնորհիվ:"
        document.querySelector("#au_cards4").innerHTML="Մեր տուրերի հիմքում ընկած են Ձեր ցանկությունները։ Մեր հաճախորդներին մենք տրամադրում ենք ծառայությունների լայն ընտրանի, ինչպիսիք են `"
        document.querySelector("#au_cardp7").innerHTML="Կրթական տուրեր և էքսկուրսիաներ դեպի Հայաստանի պատմական վայրեր<br> Անհատական տուրեր<br>  Կրոնական տուրեր<br> Խոհանոցային տուրեր<br> Ակտիվ տուրիզմ և արկածային տուրեր<br> Ժամանցային տուրեր<br>  Գործարար հանդիպումների և կոնֆերանսների կազմակերպում<br>  Մասնագիտացված թարգմանչի/զբոսավարի ծառայություններ<br> Բարձր որակի տրանսպորտային ծառայություններ և այլն:"
        document.querySelector("#au_contacth2").innerHTML="ՀԱՅԱՍՏԱՆ, 0002 ԵՐԵՎԱՆ, ՓԱՐՊԵՑԻ Փ. 16"
        document.querySelector("#au_contactp1").innerHTML="Աշխատանքային ժամեր"
        document.querySelector("#au_contactp2").innerHTML="Երկ — Շբթ՝ 10:00-19:00"
        document.querySelector("#au_contactp3").innerHTML="Ամենօրյա տուրերի և ընդհանուր հարցումների համար"
        document.querySelector("#au_contactp4").innerHTML=" Ներգնա տուր փաթեթների համար"
        document.querySelector("#au_contactp5").innerHTML="Արտագնա տուր փաթեթների համար"
        document.querySelector("#fau").innerHTML="Մեր մասին"
        document.querySelector("#ftt").innerHTML="Թոփ տուրեր"
        document.querySelector("#fc").innerHTML="Հետադարձ կապ"
        document.querySelector("#fh").innerHTML="Հյուրանոցներ"
        document.querySelector("#fcr").innerHTML="Մեքենաների վարձույթ (շուտով)"
    }
    function allEnglish(){
        document.querySelector("#everydayTour").innerHTML = "Daily Tours"
        document.querySelector("#multiDayTour").innerHTML = "Multi-Day Tours"
        document.querySelector("#hotel").innerHTML = "Hotels"
        document.querySelector("#aboutUs").innerHTML = "About Us" 
        document.querySelector(".slogan").innerHTML = "<b>Let's <br> Discover Armenia <br>Together</b> "
        document.querySelector("#aupopTour").innerHTML="About Us"
        document.querySelector("#au_cardp1").innerHTML="TIA has been operating successfully in the Armenian tourism market since 2011. The company organizes internal, inbound and outbound tours. Our agency specializes in organizing tours and excursions in Armenia, Nagorno-Karabakh, Georgia and Georgia"
        document.querySelector("#au_cardp2").innerHTML="We are a team of enthusiastic professionals who believe in the success of a job done with love, and we love the work we do"
        document.querySelector("#au_cardp3").innerHTML="In 2019, we were recognized as the best travel company of the year, according to the Armenia Touristicheskaya Awards"
        document.querySelector("#au_cards1").innerHTML="Our Goal"
        document.querySelector("#au_cardp4").innerHTML="Our goal is to make Armenia an attractive tourist center in the world:"
        document.querySelector("#au_cards2").innerHTML="Our values"
        document.querySelector("#au_cardp5").innerHTML="Direct  Open Communication Rapid Response Teamwork Flexibility  Willingness to Accept Changes Proper Risk Calculation Quality Assurance"
        document.querySelector("#au_cards3").innerHTML="Our vision"
        document.querySelector("#au_cardp6").innerHTML="We strive to be an innovative, guiding tour operator, to show a creative approach at every stage of the journey, to occupy our position in the market among the best travel agencies, and to be recognized due to our professionalism and high quality"
        document.querySelector("#au_cards4").innerHTML="At the heart of our tours are your desires. We provide our customers with a wide range of services, such as:"
        document.querySelector("#au_cardp7").innerHTML="Educational tours  excursions to historic places in Armenia <br> Individual tours <br> Kitchen tours <br> Kitchen tours  Active tourism  adventure tours <br> Entertainment tours <br> Business meetings  conferences organization <br> High quality transport services, etc"
        document.querySelector("#au_contacth2").innerHTML="Armenia,0002,Parpetsi str. 16"
        document.querySelector("#au_contactp1").innerHTML="Working hours"
        document.querySelector("#au_contactp2").innerHTML="Mon - Fri՝ 10:00-19:00"
        document.querySelector("#au_contactp3").innerHTML="For daily tours and general surveys"
        document.querySelector("#au_contactp4").innerHTML=" Enter for packages"
        document.querySelector("#au_contactp5").innerHTML="Outgoing tour for packages"
        document.querySelector("#fau").innerHTML="About Us"
        document.querySelector("#ftt").innerHTML="Top Tours"
        document.querySelector("#fc").innerHTML="Contacts"
        document.querySelector("#fh").innerHTML="Hotels"
        document.querySelector("#fcr").innerHTML="Car Rentals(soon)"
    }
    function allRussian(){
        document.querySelector("#everydayTour").innerHTML = "Ежедневные туры"
        document.querySelector("#multiDayTour").innerHTML = "Кампании"
        document.querySelector("#hotel").innerHTML = "Отели"
        document.querySelector("#aboutUs").innerHTML = "О нас" 
        document.querySelector(".slogan").innerHTML = "<b>Откройте<br>для себя<br>Армению</b> "
        document.querySelector("#aupopTour").innerHTML="О нас"
        document.querySelector("#au_cardp1").innerHTML="TIA успешно работает на армянском туристическом рынке с 2011 года. Компания организует внутренние, входящие и исходящие туры. Наше агентство специализируется на организации туров и экскурсий в Армении, Нагорном Карабахе, Грузии и Грузии"
        document.querySelector("#au_cardp2").innerHTML="Мы команда энтузиастов-профессионалов, которые верят в успех работы, выполненной с любовью, и нам нравится работа, которую мы делаем"
        document.querySelector("#au_cardp3").innerHTML="В 2019 году мы были признаны лучшей туристической компанией года, согласно Armenian Awards"
        document.querySelector("#au_cards1").innerHTML="Наша цель"
        document.querySelector("#au_cardp4").innerHTML="Наша цель - сделать Армению привлекательным туристическим центром в мире"
        document.querySelector("#au_cards2").innerHTML="Наши ценности"
        document.querySelector("#au_cardp5").innerHTML="Прямая открытая связь Быстрая реакция Командная работа Гибкость  Готовность принимать изменения Правильный расчет риска Обеспечение качества"
        document.querySelector("#au_cards3").innerHTML="Наше видение"
        document.querySelector("#au_cardp6").innerHTML="Мы стремимся быть инновационным, руководящим туроператором, демонстрировать творческий подход на каждом этапе пути, занимать наши позиции на рынке среди лучших туристических агентств и быть признанными благодаря нашему профессионализму и высокому качеству"
        document.querySelector("#au_cards4").innerHTML="В основе наших туров лежат ваши желания. Мы предоставляем нашим клиентам широкий спектр услуг, таких как:"
        document.querySelector("#au_cardp7").innerHTML="Образовательные туры и экскурсии по историческим местам в Армении <br> Индивидуальные туры <br> Кухонные туры <br> Кухонные туры и Активный туризм <br> Развлекательные туры <br> Деловые встречи и конференция организация <br> Высококачественные транспортные услуги, так далее"
        document.querySelector("#au_contacth2").innerHTML="Армения, 0002 Ереван, ул. Парпеци 16"
        document.querySelector("#au_contactp1").innerHTML="Рабочее время"
        document.querySelector("#au_contactp2").innerHTML="Пон — Пят՝ 10:00-19:00"
        document.querySelector("#au_contactp3").innerHTML="Для ежедневных туров и общих опросов"
        document.querySelector("#au_contactp4").innerHTML=" Введите для пакетов"
        document.querySelector("#au_contactp5").innerHTML="Исходящий тур для пакетов"
        document.querySelector("#fau").innerHTML="О нас"
        document.querySelector("#ftt").innerHTML="Лучшие туры"
        document.querySelector("#fc").innerHTML="Обратная связь:"
        document.querySelector("#fh").innerHTML="Гостиницы"
        document.querySelector("#fcr").innerHTML="Прокат автомобилей (скоро)"
    }