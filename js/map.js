let text = document.querySelector(".map_text");
let head = document.querySelector(".about_head");
let main = document.querySelector(".about_main");
let mainInfo = {
  armavir: {
    head: "Արմավիրի մարզ",
    info: "Հայաստանի քարտեզը նման է կնոջ դեմքի։ Արմավիրի մարզը գտնվում է դեմքի կզակի մասում։ Արմավիրը կարելի է անվանել Հայաստանի Վատիկան, քանի որ Էջմիածինը ՝ սուրբ քաղաքը, որտեղ գտնվում է Մայր Տաճարը, այս մարզում է։ Արմավիրն ունի նաև շատ կարևոր ռազմական նշանակություն։ Սարդարապատում է գտնվում հուշահամալիրը, թանգարանը, որն իր այցելուներին ներկայացնում է Հայաստանի պատմության կարևոր ճակատամարտը։ Տուրփաթեթները դեպի Էջմիածին, Զվարթնոցի տաճար ու Սարդարապատը շատ պահանջված են ամբողջ աշխարհի զբոսաշրջիկների շրջանում։ Հյուրեր Վորոնեժից, Ռոստովից, Սամարայից, եվրոպական եւ ասիական քաղաքներից գալիս են այստեղ տարվա բոլոր եղանակներին:",
  },
  yerevan: {
    head: "Երևան",
    info: "Հայաստանի սիրտը և մայրաքաղաքը՝ Երևանը, որի հատակագիծը մշակել է ճարտարապետ Ալեքսանդր Թամանյանը, աշխարհի ամենաանվտանգ քաղաքներից մեկն է։ Նրա քույր քաղաքներն են Լոս Անջելեսը, Ռիգան, Սան Պաուլոն, Սպահան, Վոլգոգրադը, Օդեսան և այլն: Տուրիստական ընկերությունները, ինչպես նաև քաղաքապետարանը, առաջարկում են տուրեր Երևանում՝ կարմիր մեծ ավտոբուսով, ոտքով, խմբակային կամ անհատական: Երևանում հանգիստը լի է նոր տեղեկատվությամբ / չէ որ բոլոր փողոցները, հուշարձանները, շենքերն ունեն իրենց պատմությունը, որով պատրաստ են կիսվել/, իսկ այգիների կանաչապատ տարածքներն ու մաքուր օդը կօգնեն առանց քաղաքից դուրս գալու վայելել բնությունը:",
  },
  lori: {
    head: "Լոռու մարզ",
    info: "Լոռին Հայաստանի ամենականաչ մարզերից մեկն է։ Լոռի հայերն առաջին հերթին կապում են հայտնի հայ բանաստեղծ Հովհաննես Թումանյանի և դերասան Սոս Սարգսյանի հետ։ Այստեղ ցանկացած այցելու կարող է հետաքրքիր առանձնահատկություն գտնել. ՅՈՒՆԵՍԿՕ-ի պահպանության ներքո գտնվող Սանահինի և Հաղպատի վանքերը, Ախթալայի վանքը, որ եզակի է իր որմնանկարներով, Օձունի վանքը, Դսեղ գյուղը, որտեղ գտնվում է Թումանյանի տուն-թանգարանը, Միկոյան եղբայրների տուն-թանգարանը, որը մեծ ճանաչում ունի Սանկտ Պետերբուրգից, Մոսկվայից, Եկատերինբուրգից ժամանող հյուրերի շրջանակում, Դենդրոպարկիը, որն այցելում են ողջ տարի և հատկապես փոշոտման սեզոնին, Լոռի Բերդը և այլն:",
  },
  artsax: {
    head: "Արցախի Հանրապետություն",
    info: "Արցախի Հանրապետություն (Լեռնային Ղարաբաղի Հանրապետություն), կարելի է Հայաստանից հասնել Սյունիքի մարզով և/կամ Գեղարքունիքի մարզով: Արցախի մայրաքաղաքը Ստեփանակերտն է։ Ստեփանակերտի ճարտարապետը նույն մեծն Ալեքսանդր Թամանյանն է, ով գծել է Հայաստանի մայրաքաղաք Երևանի հատակագիծը։ Տուրերը դեպի Արցախ հասանելի են գրեթե ողջ տարին: Մոսկվայից, Սանկտ Պետերբուրգից, Ռոստովից, Վորոնեժից և այլ վայրերից հեշտությամբ կարող եք գնել տուրեր հետևյալ ուղղություններով՝ Ստեփանակերտ, Շուշի, Դադիվանք, Գանձասար, Տիգրանակերտ, Ասկերան, Ջդրդուզ, Հունոտի կիրճ /Հովանոցներ/:",
  },
  gexarquniq: {
    head: "Գեղարքունիքի մարզ",
    info: "Հայաստանի քարտեզը նման է կնոջ դեմի՝ գանգուր մազերով, որոնց մեջ կա բրոշ՝ Սևանա լիճը, որ գտնվում Գեղարքունիքի մարզում։ Լճի ջուրը քաղցրահամ է: Իսկ Սևանի կարմրախայտը շատ հայտնի է տեղացի և զբոսաշրջիկների շրջանում։ Տեսարժան վայրերի ցանկը, որ Գեղարքունիքի մարզն առաջարկում է այցելել իր հյուրերին Սամարայից, Կրասնոդարից, Նիժնի Նովգորոդից, Մոսկվայից և շատ այլ քաղաքներից իրենց հանգստի ընթացքում ներառում է Սևանավանքը, Հայրավանք վանական համալիրը, Նորատոուսը, ինչպես նաև քայլարշավների սիրահարները կարող են գնել տուրեր դեպի Աժդահակ լեռ, Արտանիշ լեռ, Արմագան լեռ ։",
  },
  ararat: {
    head: "Արարատի մարզ",
    info: "Արարատը Հայաստանի 11 մարզերից մեկն է։ Հայաստանի երեք սուրբ վայրերից մեկը ՝ Խոր Վիրապը, գտնվում է Արարատի մարզում։ Այստեղից բացվում է աննկարագրելի գեղեցիկ տեսարան դեպի Արարատ լեռը /ներկայումս լեռը գտնվում է Թուրքիայի տարածքում/: Նրանց համար, ովքեր սիրում են արշավներ, կարելի է տուրիստական փաթեթ վերցնել դեպի Ուրցասար, որը նաև կարող է ուխտագնացություն դառնալ, քանի որ Հայաստանում ուխտագնացության վայրերից մեկը՝ Սուրբ Կարապետ վանք, գտնվում է Ուրցաձորում: Կարող եք գնել ինչպես խմբակային, այնպես էլ անհատական տուր դեպի Խոր Վիրապ: Ինչ վերաբերում է Ուրցասարին, ապա այս ուղղությամբ տուրերը հիմնականում անհատական են:",
  },
  tavush: {
    head: "Տավուշի մարզ",
    info: "Հայաստանի ամենականաչ մարզում՝ Տավուշում է գտնվում հայաստան- Վրաստանի անցակետերից մեկը՝ Բագրատաշենը։ Գոշավանք, Հաղարծին, Գոշի լիճ, Պարց լիճ, Մաթոսավանք, Մակարավանք, Իջևանի դենդրոպարկ, Դիլիջան հին քաղաք, Yell Park, Լաստիվեր և այլ տեսարժան վայրեր ներառող տուրեր դեպի Տավուշ կարող են լինել դասական, արշավային, էքստրեմալ և այլն: Այս տարածաշրջանում հանգիստը խոստանում է լինել շատ հետաքրքիր և անպայման հիշարժան:",
  },
  kotayq: {
    head: "Կոտայքի մարզ",
    info: "Կոտայքը Հայաստանի այսպես կոչված ներքին մարզն է։ Եթե մյուս ինը մարզերը հարևան երկրների հետ սահմաններ ունեն, ապա Կոտայքը սահմաններ ունի միայն այլ մարզերի հետ։ Տուրերը դեպի Կոտայքի մարզ ընդգրկում են բազմաթիվ տեսարժան վայրեր՝ Գառնի, Գեղարդ, Ծաղկաձոր, ինչպես նաև այնպիսի առողջարանային քաղաքներ, ինչպիսիք են Բջնին, Արզնին, Հանքավանը: Վորոնեժից, Սամարայից, Մոսկվայից, Եկատերինբուրգից, Կրասնոդարից, ինչպես նաև Ռուսաստանի այլ քաղաքներից /և ոչ միայն/ զբոսաշրջիկները դեպի Հայաստան հանգստի փաթեթներ գնելիս միշտ ներառում են տուրեր դեպի Կոտայքի մարզի այդ վայրեր, քանի որ Գառնին միակ հեթանոսական տաճարն է, որ պահպանվել է Հայաստանում, Գեղարդի վանքը և Քարերի Սիմֆոնիան ՅՈՒՆԵՍԿՕ-ի ժառանգության ցանկում են ընդգրկված, Ծաղկաձորում կարելի է գնել տոմսն ու օգտվել ճոպանուղուց և այլն:",
  },
  aragatsotn: {
    head: "Արագածոտնի մարզ",
    info: "Արագածոտնի մարզը կարելի է անվանել գիտության, կրոնի և բնության խառնուրդ. Բյուրականի աստղադիտարանը, որը հայտնի է ամբողջ աշխարհում, մի շարք եկեղեցիներ և վանքեր, և, իհարկե, Հայաստանի ամենաբարձր գագաթը՝ Արագածը (4090մ)։ Վերջինս ունի չորս գագաթ՝ Հյուսիսային, Հարավային, Արևելյան և Արևմտյան: Տուրերը դեպի գագաթներից յուրաքանչյուրն ունեն իրենց սեզոնայնությունը: Անպայման հաշվի առեք այդ փաստը դեպի Արագած տուր գնելիս: Արագածոտնի մարզը հետաքրքիր է ինչպես տեղացիների, այնպես էլ Ռոստովից, Մոսկվայից, Նիժնի Նովգորոդից, Սանկտ Պետերբուրգից և Ռուսաստանի մի շարք այլ քաղաքներից հյուրերի համար: Եթե ունեք մտադրություն բարձրանալ Արագած լեռը, խորհուրդ է տրվում Հայաստանում հանգիստը կազմակերպել ամռան երկրորդ կեսին:",
  },
  shirak: {
    head: "Շիրակի մարզ",
    info: "Շիրակը Հայաստանի ամենաքիչ կանաչապատ և ամենացուրտ / ձմռանը / կամ զով / ամռանը / մարզերից մեկն է, բայց միևնույն ժամանակ ոչ պակաս հետաքրքիր է, քան Հայաստանի ցանկացած այլ մարզ։ Գյումրին՝ մարզի գլխավոր քաղաքը, Հայաստանի մշակութային կենտրոնն է։ Երբ այցելեք Գյումրի, անպայման մուշուրբա կամ կլակլան գնեք։ Գյումրին հարուստ է թանգարաններով, հուշարձաններով և պատմականորեն կարևոր այլ տեսարժան վայրերով։ Դեպի Շիրակ տուրփաթեթները կարող են ներառել այցելություն Հառիճավանք, Մարմաշեն, Անի Պեմզա, Երերույք, Գյումրի, Թռչկան ջրվեժ և այլ տեսարժան վայրեր: Վրաստանի հետ անցակետը Բավրան է:",
  },
  syuniq: {
    head: "Սյունիքի մարզ",
    info: "Հայաստանի հարավային հատվածի ամենամեծ մարզը Սյունիքն է: Տուրեր դեպի Սյունիք իրականացվում են բազմաթիվ տեսարժան վայրերով, ինչպիսիք են՝ Քարահունջ կամ Զորաց Քարեր հին աստղադիտարանը, Շաքիի ջրվեժը, Տաթևի վանքը, Տաթևի ճոպանուղին (ներառված է Գինեսի գրքում), Հալիձորը, Խնձորեսկ քարանձավային քաղաքը: Սյունիքում է գտնվում Իրանի հետ սահմանային անցակետը։ Սյունիքում գիշերակացով տուրփաթեթները շատ հարմար են բազմաթիվ հարմարավետ հյուրանոցների և հյուրատների առկայության շնորհիվ: Սամարայից, Վորոնեժից, Եկատերինբուրգից, Ռոստովից, Նիժնի Նովգորոդից և այլ քաղաքներից զբոշաշրջիկները, ովքեր նախընտրությունը տալիս են մոտ հեռավորությունների ուղևորափոխադրում, միանշանակ կնախընտրեն տուրեր դեպի Սյունիք գիշերակացով:",
  },
  vayocDzor: {
    head: "Վայոց Ձորի մարզ",
    info: "Վայոց Ձորը հանդիսանում է Հայաստանում գինեգործության սկզբնաղբյուրը: Այն հետաքրքիր է հյուրերին Սանկտ Պետերբուրգից, Մոսկվայից, Եկատերինբուրգից, Կրասնոդարից, Ռոստովից, Նիժնի Նովգորոդից և այլ քաղաքներից: Այստեղ կարելի է մասնակցել խաղողի բերքահավաքին, գինու փառատոնին, այցելել Հայաստանի ամենահին գինեգործարանը, ինչպես կազմակերպել հանգիստը Ջերմուկ առողջարանային քաղաքում, գնել տուր փաթեթներ դեպի յուրահատուկ և յուրօրինակ Նորավանք, այցելել Եղեգիս, հրենաերի գերեզմանատուն և այլն: Ջերմուկը հայտնի է հանքային ջրի, գեղեցիկ ջրվեժի և առողջարանների շնորհիվ:",
  },
  artsvashen: {
    head: "Արծվաշեն",
    info: "Արծվաշեն (ադրբ.՝ Başkənd), Հայաստանի Գեղարքունիքի մարզի էքսկլավը Ադրբեջանի Հանրապետության տարածքում[1]։ 1992 թվականի օգոստոսի 8-ից մինչ օրս բռնազավթված է Ադրբեջանի զինված ուժերի կողմից։Համաձայն Ադբեջանի վարչատարածքային բաժանման՝ այն գտնվում է Գետաբեկի շրջանի շրջանում, համաձայն Հայաստանի վարչատարածքային բաժանման՝ այն գտնվում է Գեղարքունիքի մարզում։",
  },
};
let elements = document.querySelectorAll("path");
function getMainInfo(name) {
  head.innerHTML = ` ${mainInfo[name]["head"]}`;
  main.innerHTML = `${mainInfo[name]["info"]}`;
  for (let elem of elements) {
    if (elem.style.fill == "white") {
      elem.style.fill = "#007dc4";
      elem.style.stroke = "white";
    }
    if (elem.id == name) {
      elem.style.fill = "white";
      elem.style.stroke = "#007dc4";
    }
  }
}

map_svg.addEventListener("click", function (event) {
  let name = event.target.id;
  for (let elem of elements) {
    if (elem.id == name) {
      getMainInfo(name);
    }
  }
});