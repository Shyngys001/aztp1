let language_kz = document.querySelector(".language-kz");
let language_en = document.querySelector(".language-en");
let language_ru = document.querySelector(".language-ru");


// history
let his1 = document.getElementById("his1");
let his2 = document.getElementById("his2");
let y2016_1 = document.getElementById("y2016_1");
let y2016_2 = document.getElementById("y2016_2");
let y2018_1 = document.getElementById("y2018_1");
let y2018_2 = document.getElementById("y2018_2");
let y2020_1 = document.getElementById("y2020_1");
let y2020_2 = document.getElementById("y2020_2");
let y2017_1 = document.getElementById("y2017_1");
let y2017_2 = document.getElementById("y2017_2");
let y2019_1 = document.getElementById("y2019_1");
let y2019_2 = document.getElementById("y2019_2");
let y2021_1 = document.getElementById("y2021_1");
let y2021_2 = document.getElementById("y2021_2");


// certificate
let certificatt1 = document.querySelector("#certificates_patents");
let certificatt2 = document.querySelector("#stkz");
let certificatt3 = document.querySelector("#stkz2");
let certificatt4 = document.querySelector("#patent");
let certificatt5 = document.querySelector("#patent2");


// main
let main_t1 = document.querySelector(".main_txt1");
let main_t2 = document.querySelector(".main_txt2");
let main_t3 = document.querySelector(".main_txt3");
let main_t4 = document.querySelector(".main_txt4");
let main_t5 = document.querySelector(".main_txt5");
let main_t6 = document.querySelector(".main_txt6");
let main_t7 = document.querySelector(".main_txt7");
let main_t8 = document.querySelector(".main_txt8");
let main_t9 = document.querySelector(".main_txt9");
let main_t10 = document.querySelector(".main_txt10");
let main_t11 = document.querySelector(".main_txt11");
let main_t12 = document.querySelector(".main_txt12");
let main_t13 = document.querySelector(".main_txt13");
let main_t14 = document.querySelector(".main_txt14");
let main_t15 = document.querySelector(".main_txt15");
let main_t16 = document.querySelector(".main_txt16");


// products
let p1 = document.querySelector(".our_txt1");
let p2 = document.querySelector(".our_txt2");
let p3 = document.querySelector(".our_txt3");
let p4 = document.querySelector(".our_txt4");
let p5 = document.querySelector(".our_txt5");
let p6 = document.querySelector(".our_txt6");
let p7 = document.querySelector(".our_txt7");
let p8 = document.querySelector(".our_txt8");
let p9 = document.querySelector(".our_txt9");
let p10 = document.querySelector(".our_txt10");
let p11 = document.querySelector(".our_txt11");
let p12 = document.querySelector(".our_txt12");
let p13 = document.querySelector(".our_txt13");
let p14 = document.querySelector(".our_txt14");
let p15 = document.querySelector(".our_txt15");
let p16 = document.querySelector(".our_txt16");
let p17 = document.querySelector(".our_txt17");
let p18 = document.querySelector(".our_txt18");
let p19 = document.querySelector(".our_txt19");
let p20 = document.querySelector(".our_txt20");
let p21 = document.querySelector(".our_txt21");


// contacts
let contact1 = document.querySelector(".contact_txt1");
let contact2 = document.querySelector(".contact_txt2");


// footer
let foott = document.querySelector(".footer_txt");


let history = document.getElementById("history")
// russian language
language_ru.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        about_us.style.height = "200vh";
    }
    if (window.matchMedia("(max-height: 400px)").matches) {
        about_us.style.height = "330vh";
    }

    if (window.matchMedia("(max-width: 900px)").matches) {
        history.style.height = "180vh";
    }
    if (window.matchMedia("(max-height: 400px)").matches) {
        history.style.height = "270vh";
    }
    

    link_product.textContent = "Наши продукты и услуги";
    link_history.textContent = "Наша история";
    link_certificate.textContent = "Сертификаты";
    link_contact.textContent = "Контакты";
    link_about.textContent = "О нас";

    menu_link_product.textContent = "Наши продукты и услуги";
    menu_link_history.textContent = "Наша история";
    menu_link_certificate.textContent = "Сертификаты";
    menu_link_contact.textContent = "Контакты";
    menu_link_about.textContent = "О нас";

    his1.textContent = "Актауский завод трубной продукции";
    his2.textContent = "специализируется на производстве и ремонте труб, предлагая экономичные решения, позволяющие минимизировать время простоя и защитить трубопроводы от коррозии и износа.";
    y2016_1.textContent = "2016 год";
    y2016_2.textContent = "Создание компании по поставке трубной продукции производителям нефти в Казахстане. Начало поставок насосно-компрессорных и бурильных труб в промышленных масштабах.";
    y2018_1.textContent = "2018 год";
    y2018_2.textContent = 'Принято решение о строительстве завода в Актау, Мангистауская область Республики Казахстан, по производству труб с футеровкой из полиэтилена EXPE. Подписаны партнерские соглашения с ООО "МС-Групп" (Российская Федерация) и ООО "Феникс-М" (Российская Федерация).';
    y2020_1.textContent = "2020 год";
    y2020_2.textContent = "Начало производства труб в Актау, Республика Казахстан. Получение сертификата происхождения товара «CT-KZ». Успешное завершение годовых полевых испытаний отремонтированных насосно-компрессорных труб с футеровкой в АО 'Каражанбасмунай'. Межремонтный период был увеличен в 3,7 раза.";
    y2017_1.textContent = "2017 год";
    y2017_2.textContent = "Были подписаны соглашения о сотрудничестве с Исследовательским центром нефтегазовых труб и Исследовательским центром химической промышленности (Китай). Запуск проекта по поиску новых инновационных решений для снижения абразивного износа насосно-компрессорных труб при добыче нефти.";
    y2019_1.textContent = "2019 год";
    y2019_2.textContent = "Получение патента на футеровку трубопровода в РГП «Национальный институт интеллектуальной собственности». Годовые полевые испытания труб с полиэтиленовой футеровкой EXPE в АО 'Озенмунайгаз' с положительными результатами.";
    y2021_1.textContent = "2021 год";
    y2021_2.textContent = "Объем работ, выполненных на бурильной трубе, составляет более 1000 тонн, а длина насосно-компрессорных труб - более 200 000 тысяч метров. По данным ООО 'Самарский научно-производственный центр', лабораторные исследования и испытания труб с полиэтиленовой футеровкой EXPE соответствуют требованиям ТУ 471010000 РК.";

    second_1.textContent = "Актауский завод трубной продукции";
    second_2.textContent = "специализируется на производстве и ремонте труб, предлагая экономичные решения, позволяющие минимизировать время простоя и защитить трубопроводы от коррозии и износа.";
    about_mission.textContent = "Миссия нашей компании";
    about_protect.textContent = "Заключается в защите труда человека, оборудования, на котором он работает, при одновременной защите природы и окружающей среды";
    about_realize.textContent = "Мы осознаем";
    about_there.textContent = "Что за каждой каплей добытой нефти стоит человек";
    about_assist.textContent = "Мы помогаем";
    about_customers.textContent = "Заказчикам в повышении эффективности работы, экономии ресурсов и минимизации потерь при добыче нефти";
    about_appreciate.textContent = "Мы ценим";
    about_each.textContent = "Каждых наших клиентов и их оборудование";

    certificatt1.textContent = "Сертификаты и патенты";
    certificatt2.textContent = "Сертификат СТ-КЗ";
    certificatt3.textContent = "Для подтверждения страны происхождения и доли местного содержания ТОО «АЗТП – Актауский трубный завод» 06 мая 2020 года получен Сертификат СТ-KZ № KZ 0 113 00131. Сертификат выдан на бурильные трубы и насосно-компрессорные трубы, футерованные полиэтиленом EXPE.";
    certificatt4.textContent = "Патент";
    certificatt5.textContent = "Патент на трубы, футерованные полиэтиленом EXPE, № 4391 получен ТОО «АЗТП – Актауский трубный завод» и зарегистрирован в Государственном реестре полезных моделей Республики Казахстан 24 октября 2019 года. Патент выдан РГП «Национальный Институт интеллектуальной собственности» и доступен на веб-портале РГП «НИИС» в разделе «Государственные реестры полезных моделей Республики Казахстан».";

    main_t1.textContent = "Актауский завод трубной продукции";
    main_t2.textContent = "специализируется на производстве и ремонте труб, предлагая экономичные решения, позволяющие минимизировать время простоя и защитить трубопроводы от коррозии и износа.";
    main_t3.textContent = "Подробнее о компании →";
    main_t4.textContent = "Услуги и преимущества компании";
    main_t5.textContent = "Актауский завод трубной продукции специализируется на производстве и ремонте труб, предлагая экономичные решения, позволяющие минимизировать время простоя и защитить трубопроводы от коррозии и износа.";
    main_t6.textContent = "Преимущества работы с нашей компанией";
    main_t7.textContent = "Сокращение затрат на ремонт труб";
    main_t8.textContent = "Увеличение производительности за счет сокращения простоев во время ремонта.";
    main_t9.textContent = "Защита трубы от коррозии, износа и других негативных факторов.";
    main_t10.textContent = "Повышаем надежность трубопроводов и экономим ваши ресурсы";
    main_t11.textContent = "Более 2000 скважин";
    main_t12.textContent = "осложненных различными видами коррозии, увеличили текущую наработку в 4 раза";
    main_t13.textContent = "Более 5000 тонн";
    main_t14.textContent = "бурильных и насосно-компрессорных труб с покрытием приносят дополнительную прибыль нефтедобывающим компаниям";
    main_t15.textContent = "Количество клиентов";
    main_t16.textContent = "увеличивается ежегодно в 5-7 раз";

    p1.textContent = "Наши продукты и услуги";
    p2.textContent = "Новые трубы с полиэтиленовой футеровкой EXPE.";
    p3.textContent = "Уникальная технология футеровки трубок EXPE обеспечивает высокую стойкость к истиранию и воздействию CO2 и H2S.";
    p4.textContent = "Ремонт труб с полиэтиленовой футеровкой EXPE";
    p5.textContent = "Идеальный вариант модернизации нефтедобывающего оборудования";
    p6.textContent = "Что такое EXPE?";
    p7.textContent = "Трубы с полиэтиленовой футеровкой EXPE (полиэтилен высокой плотности)";
    p8.textContent = "EXPE Футеровка НКТ – это процесс нанесения на внутренние поверхности трубопроводов защитного покрытия, защищающего от механического, химического и других разрушительных воздействий контактирующих с ними сред. Внутренняя футеровка представляет собой высокомолекулярный материал на основе полиэтилена высокой плотности EXPE. Материал обладает хорошей эластичностью, высокой устойчивостью к механическому износу и влиянию АСПО и сероводорода.";
    p9.textContent = "Качественная футеровка труб незаменима для повышения надежности и прочности, повышения эффективности трубопроводных систем.";
    p10.textContent = "Основные функции футеровки труб";
    p11.textContent = "По результатам испытаний межремонтный период скважин, оборудованных НКТ с футеровкой, увеличился в среднем в 3 раза.";
    p12.textContent = "Этот метод применим к новому оборудованию при его вводе в эксплуатацию, а также при ремонте поврежденных или непригодных к использованию участков труб. Внутреннее покрытие полиэтиленом EXPE защищает поверхность трубы от коррозии, агрессивных сред (кислот, растворителей и т.п.), абразивного износа и других негативных факторов.";
    p13.textContent = "защита труб от коррозии;";
    p14.textContent = "защита от механического износа труб штангами при работе штанговых насосов;";
    p15.textContent = "предотвращение разрушения внутренней поверхности, вызванного агрессивными химическими компонентами;";
    p16.textContent = "продление срока службы НКТ;";
    p17.textContent = "увеличение межремонтного периода скважин.";
    p18.textContent = "Ремонт бывших в употреблении труб с полиэтиленовой футеровкой EXPE (полиэтилен высокой плотности).";
    p19.textContent = "В целях экономии ресурсов и повышения рентабельности ремонт бывших в употреблении НКТ с футеровкой EXPE становится идеальным вариантом модернизации нефтедобывающего оборудования.";
    p20.textContent = "Технологические операции процесса: промывка и очистка труб, замеры и дефектоскопия, операции с муфтой и телом трубы, замеры, испытания и нанесение внутреннего покрытия EXPE.";
    p21.textContent = "Имеем парк высокоточных станков для комплексного ремонта труб, операции по нарезанию резьбы выполняются на станках с ЧПУ.";

    contact1.textContent = "Контакты";
    contact2.innerHTML = "Республика Казахстан, Мангистауская область,<br>Промзона 4, участок 88";

    foott.innerHTML = "Казахстан, г. Актау,<br>Промзона 4, дом 11"
});


// english language
language_en.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        about_us.style.height = "140vh";
    }
    if (window.matchMedia("(max-height: 400px)").matches) {
        about_us.style.height = "240vh";
    }
    if (window.matchMedia("(max-width: 900px)").matches) {
        history.style.height = "140vh";
    }
    if (window.matchMedia("(max-height: 400px)").matches) {
        history.style.height = "240vh";
    }

    link_product.textContent = "Our products and services";
    link_history.textContent = "Our history";
    link_certificate.textContent = "Certificates";
    link_contact.textContent = "Contacts";
    link_about.textContent = "About Us";

    his1.textContent = "Aktau Pipe Production Plant";
    his2.textContent = "specializes in the production and repair of pipes, we offer cost-effective solutions that minimize downtime and protect pipelines from corrosion and wear.";
    y2016_1.textContent = "2016";
    y2016_2.textContent = "Creation of a company for the supply of pipe products to oil producers in Kazakhstan. The beginning of the supply of pump-compressor and drill pipes on an industrial scale.";
    y2018_1.textContent = "2018";
    y2018_2.textContent = 'It was decided to build a plant in Aktau, Mangystau region of the Republic of Kazakhstan, for the production of pipes with polyethylene lining EXPE. Partnership agreements have been signed with MS-Group LLC (Russian Federation) and Phoenix-M LLC (Russian Federation).';
    y2020_1.textContent = "2020";
    y2020_2.textContent = "Start of pipe production in Aktau, Republic of Kazakhstan. Obtaining the certificate of origin of the goods 'CT-KZ'. Successful completion of annual field tests of repaired tubing with lining in JSC 'Karazhanbasmunai'. The inter-repair period was increased by 3.7 times without a single failure of the downhole pumping equipment.";
    y2017_1.textContent = "2017";
    y2017_2.textContent = "Cooperation agreements were signed with the Oil and Gas Pipe Research Center and the Chemical Industry Research Center (China). Launch of a project to find new innovative solutions to reduce the abrasive wear of pumping and compressor pipes during oil production.";
    y2019_1.textContent = "2019";
    y2019_2.textContent = "Obtaining a patent for pipeline lining in the RSE 'National Institute of Intellectual Property'. Annual field tests of pipes with polyethylene lining EXPE in JSC Ozenmunaigas with positive results.";
    y2021_1.textContent = "2021";
    y2021_2.textContent = "The volume of work performed on the drill pipe is more than 1,000 tons, and the length of the tubing is more than 200,000 thousand meters. According to Samara Research and Production Center LLC, laboratory studies and tests of pipes with polyethylene lining EXPE comply with TU 471010000 standards.";

    menu_link_product.textContent = "Our products and services";
    menu_link_history.textContent = "Our history";
    menu_link_certificate.textContent = "Certificates";
    menu_link_contact.textContent = "Contacts";
    menu_link_about.textContent = "About Us";

    second_1.textContent = "Aktau pipe production plant";
    second_2.textContent = "specializes in tubing production and repair, offering cost-effective solutions that minimize downtime and protect pipelines from corrosion and wear.";
    about_mission.textContent = "The mission of our company";
    about_protect.textContent = "Is to protect the work of a Person, the equipment on which he works while protecting the nature and the environment";
    about_realize.textContent = "We realize";
    about_there.textContent = "That there is a Person behind every drop of the oil produced";
    about_assist.textContent = "We assist";
    about_customers.textContent = "Customers in improving equipment efficiency, saving resources and minimizing losses in oil production";
    about_appreciate.textContent = "We appreciate";
    about_each.textContent = "Each and every one of our customers and their equipment";

    certificatt1.textContent = "Certificates and Patentes";
    certificatt2.textContent = "ST-KZ certificate";
    certificatt3.textContent = "To confirm the country of origin and the share of local content, AZTP - Aktau Pipe Production Plant LLP obtained Certificate ST-KZ No. KZ 0 113 00131 on May 06, 2020. The certificate was issued for drill pipe and tubing lined with polyethylene EXPE.";
    certificatt4.textContent = "Patent";
    certificatt5.textContent = "Patent for tubing lined with EXPE polyethylene, No. 4391 was obtained by AZTP - Aktau Pipe Production Plant LLP and registered in the State Register of Utility Models of the Republic of Kazakhstan on October 24, 2019. The patent was issued by the RSE «National Institute of Intellectual Property» and is available on the web portal of the RSE «NIIP» in the section «State Registers of Utility Models of the Republic of Kazakhstan";

    main_t1.innerHTML = "Aktau pipe<br>production plant";
    main_t2.textContent = "specializes in tubing production and repair, offering cost-effective solutions that minimize downtime and protect pipelines from corrosion and wear.";
    main_t3.textContent = "More about company →";
    main_t4.textContent = "Company's services and benefits";
    main_t5.textContent = "Aktau Pipe Production Plant specializes in tubing production and repair, offering cost-effective solutions that minimize downtime and protect pipelines from corrosion and wear.";
    main_t6.textContent = "Advantages of working with our company";
    main_t7.textContent = "Reduction of pipe repair costs";
    main_t8.textContent = "Increased productivity by reducing downtime during repairs";
    main_t9.textContent = "Protection of the pipe from corrosion, wear and other negative factors";
    main_t10.textContent = "We improve pipelines reliability and save your resources";
    main_t11.textContent = "More than 2000 wells";
    main_t12.textContent = "complicated by various types of corrosion, increased the current operating time by 4 times";
    main_t13.textContent = "Over 5000 tons";
    main_t14.textContent = "of coated drill pipe and tubing bring additional revenue to oil producers";
    main_t15.textContent = "Number of clients";
    main_t16.textContent = "increases annually 5-7 times";
    
    p1.textContent = "Our products";
    p2.textContent = "New EXPE polyethylene lined tubing";
    p3.textContent = "Unique tubing EXPE lining technology provides high resistance to abrasion and the effects of CO2 and H2S";
    p4.textContent = "Repair of used tubing with polyethylene EXPE lining";
    p5.textContent = "An ideal option upgrading oil production equipment";
    p6.textContent = "What is the EXPE?";
    p7.textContent = "Tubing with polyethylene EXPE (high density polyethylene) lining";
    p8.textContent = "EXPE Lining of tubing is the process of applying a protective coating to the inner surfaces of pipelines, which protects against mechanical, chemical and other destructive effects of the media in contact with them. The inner lining is a high molecular weight material based on high density polyethylene EXPE. The material has good elasticity, high resistance to mechanical wear and hydrogen sulfide.";
    p9.textContent = "High-quality pipe lining is indispensable for improving reliability and strength, increasing the efficiency of pipeline systems.";
    p10.textContent = "Main functions of pipe lining";
    p11.textContent = "According to the test results, the time between overhauls of wells equipped with lined tubing increased by an average of 3 times";
    p12.textContent = "This method is applicable to new equipment during its commissioning, as well as during the repair of damaged or unusable pipe sections. The inner coating with polyethylene EXPE protects the pipe surface from corrosion, aggressive media (acids, solvents, etc.), abrasive wear and other negative factors.";
    p13.textContent = "pipe corrosion protection;";
    p14.textContent = "protection against mechanical wear of pipes by pumping rods during operation of rod pumps;";
    p15.textContent = "prevention of internal surface deterioration caused by aggressive chemical components;";
    p16.textContent = "extension of the service life of the tubing;";
    p17.textContent = "increasing the overhaul period of wells.";
    p18.textContent = "Repair of used tubing with polyethylene EXPE (high density polyethylene) lining";
    p19.textContent = "In order to save resources and increase profitability, the repair of used EXPE lined tubing is becoming the ideal option for upgrading oil production equipment.";
    p20.textContent = "Technological operations of the process: washing and cleaning of pipes, gauging and flaw detection, operations with the coupling and pipe body, measurements, testing and application of the EXPE inner coating.";
    p21.textContent = "We have a fleet of high-precision machines for complete pipe repair, threading operations are carried out on CNC machines";

    contact1.textContent = "Contacts";
    contact2.innerHTML = "Republic of Kazakhstan, Mangistau region,<br>Industrial zone 4, plot 88";

    foott.innerHTML = "Kazakhstan, Aktau city,<br>Industrial Zone 4, Building 11";
});


// kazakh language
language_kz.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        about_us.style.height = "200vh";
    }
    if (window.matchMedia("(max-height: 400px)").matches) {
        about_us.style.height = "280vh";
    }
    if (window.matchMedia("(max-width: 900px)").matches) {
        history.style.height = "150vh";
    }
    if (window.matchMedia("(max-height: 440px)").matches) {
        history.style.height = "270vh";
    }

    link_product.textContent = "Біздің өнімдер мен қызметтер";
    link_history.textContent = "Біздің тарих";
    link_certificate.textContent = "Сертификаттар";
    link_contact.textContent = "Контактілер";
    link_about.textContent = "Біз туралы";

    menu_link_product.textContent = "Біздің өнімдер мен қызметтер";
    menu_link_history.textContent = "Біздің тарих";
    menu_link_certificate.textContent = "Сертификаттар";
    menu_link_contact.textContent = "Контактілер";
    menu_link_about.textContent = "Біз туралы";

    his1.textContent = "Ақтау құбыр өндіру зауыты";
    his2.textContent = "құбырларды өндіруге және жөндеуге маманданған, біз тоқтап қалуды барынша азайтатын және құбырларды коррозия мен тозудан қорғайтын үнемді шешімдерді ұсынамыз.";
    y2016_1.textContent = "2016";
    y2016_2.textContent = "Қазақстандағы мұнай өндірушілерге құбыр өнімдерін жеткізу бойынша компания құру. Өнеркәсіптік ауқымда сорғы-компрессорлық және бұрғылау құбырларын жеткізудің басталуы.";
    y2018_1.textContent = "2018";
    y2018_2.textContent = 'Қазақстан Республикасының Маңғыстау облысы Ақтау қаласында EXPE полиэтиленді төсемі бар құбырлар шығаратын зауыт салу туралы шешім қабылданды. «MS-Group» ЖШҚ (Ресей Федерациясы) және «Феникс-М» ЖШҚ (Ресей Федерациясы) серіктестік туралы келісімдерге қол қойылды.';
    y2020_1.textContent = "2020";
    y2020_2.textContent = "Қазақстан Республикасы, Ақтау қаласында құбыр өндірісінің басталуы. «CT-KZ» тауардың шығу тегі сертификатын алу. «Қаражанбасмұнай» АҚ-да төсемі бар жөнделген құбырлардың жыл сайынғы далалық сынақтарын сәтті аяқтау. Ұңғылық сорғы қондырғыларының бір реттік істен шығуынсыз жөндеу аралық мерзімі 3,7 есеге ұлғайтылды.";
    y2017_1.textContent = "2017";
    y2017_2.textContent = "Мұнай және газ құбырларын зерттеу орталығымен және Химия өнеркәсібін зерттеу орталығымен (Қытай) ынтымақтастық туралы келісімдерге қол қойылды. Мұнай өндіру кезінде сорғы және компрессорлық құбырлардың абразивті тозуын азайту үшін жаңа инновациялық шешімдерді табу бойынша жобаны іске қосу.";
    y2019_1.textContent = "2019";
    y2019_2.textContent = "«Ұлттық зияткерлік меншік институты» РМК-да құбырды төсеуге патент алу. «Өзенмұнайгаз» АҚ EXPE полиэтиленді төсемі бар құбырларды жыл сайынғы далалық сынақтары оң нәтиже берді.";
    y2021_1.textContent = "2021";
    y2021_2.textContent = "Бұрғылау құбырында орындалған жұмыс көлемі 1000 тоннадан астам, ал құбыр ұзындығы 200 000 мың метрден астам. «Самара ғылыми-өндірістік орталығы» жауапкершілігі шектеулі серіктестігінің мәліметтері бойынша EXPE полиэтиленді төсемі бар құбырлардың зертханалық зерттеулері мен сынақтары TU 471010000 стандарттарына сәйкес келеді.";

    second_1.textContent = "Ақтау құбыр өндіру зауыты";
    second_2.textContent = "Сорғы-компрессорлық құбырларды өндіруге және жөндеуге маманданған, тоқтап қалу уақытын азайтатын және құбырларды коррозиядан және тозудан қорғайтын үнемді шешімдерді ұсынады.";
    about_mission.textContent = "Біздің компанияның миссиясы";
    about_protect.textContent = "Табиғат пен қоршаған ортаны қорғаумен қатар адамның, ол жұмыс істейтін жабдықтың еңбегін қорғаудан тұрады";
    about_realize.textContent = "Біз білеміз";
    about_there.textContent = "Өндірілген  әр тамшы мұнайдың артында бір адам тұрғанын ";
    about_assist.textContent = "Біз көмектесеміз";
    about_customers.textContent = "Клиенттер жабдығының тиімділігін арттыруға, ресурстарды үнемдеуге және мұнай өндірудегі шығындарды азайтуға";
    about_appreciate.textContent = "Біз бағалаймыз";
    about_each.textContent = "Біздің клиенттеріміздің әрқайсысын және олардың жабдықтарын";

    certificatt1.textContent = "Сертификаттар мен патенттер";
    certificatt2.textContent = "ST-KZ сертификаты";
    certificatt3.textContent = "Шығарылған елді және жергілікті қамту үлесін растау үшін «AZTP - Ақтау құбыр өндіру зауыты» ЖШС 2020 жылдың 06 мамырында СТ-KZ № KZ 0 113 00131 сертификатын алды. Сертификат EXPE полиэтиленімен қапталған бұрғылау құбырлары мен құбырларға берілді.";
    certificatt4.textContent = "Патент";
    certificatt5.textContent = "EXPE полиэтиленімен қапталған құбырларға патент, № 4391 «AZTP - «Ақтау құбыр өндіру зауыты» ЖШС алды және 2019 жылғы 24 қазанда Қазақстан Республикасының Пайдалы модельдердің мемлекеттік тізілімінде тіркелді. Патент «Ұлттық Зияткерлік меншік институты» және «ҰЗМИ» РМК веб-порталында «Қазақстан Республикасының пайдалы модельдерінің мемлекеттік тізілімдері» бөлімінде қолжетімді.";

    main_t1.textContent = "Ақтау құбыр шығаратын зауыт";
    main_t2.textContent = "Ақтау құбыр зауыты сорғы-компрессорлық құбырларды өндіруге және жөндеуге маманданған, тоқтап қалу уақытын азайтатын және құбырларды коррозиядан және тозудан қорғайтын үнемді шешімдерді ұсынады.";
    main_t3.textContent = "Компания туралы толығырақ →";
    main_t4.textContent = "Компанияның қызметтері мен артықшылықтары";
    main_t5.textContent = "Ақтау құбыр өндірісі зауыты құбырларды өндіруге және жөндеуге маманданған, тоқтап қалуды азайтатын және құбырларды коррозия мен тозудан қорғайтын үнемді шешімдерді ұсынады.";
    main_t6.textContent = "Біздің компаниямен жұмыс істеудің артықшылықтары";
    main_t7.textContent = "Құбырларды жөндеуге кететін шығындарды азайту";
    main_t8.textContent = "Жөндеу кезінде тоқтап қалуды азайту арқылы өнімділікті арттыру";
    main_t9.textContent = "Құбырды коррозиядан, тозудан және басқа жағымсыз факторлардан қорғау";
    main_t10.textContent = "Біз құбырлардың сенімділігін арттырып, ресурстарыңызды үнемдейміз";
    main_t11.textContent = "2000-нан астам ұңғыма";
    main_t12.textContent = "коррозияның әртүрлі түрлерімен күрделене отырып, ағымдағы жұмыс уақытын 4 есеге арттырды";
    main_t13.textContent = "5000 тоннадан астам";
    main_t14.textContent = "қапталған бұрғылау құбырлары мен құбырлар мұнай өндірушілерге қосымша табыс әкеледі";
    main_t15.textContent = "Клиенттер саны";
    main_t16.textContent = "жыл сайын 5-7 есе өседі";
    
    p1.textContent = "Біздің өнімдер";
    p2.textContent = "Жаңа EXPE полиэтилен төселген түтіктер";
    p3.textContent = "Бірегей түтік EXPE төсеу технологиясы тозуға және CO2 және H2S әсерлеріне жоғары төзімділікті қамтамасыз етеді.";
    p4.textContent = "Полиэтиленді EXPE төсемімен пайдаланылған құбырларды жөндеу";
    p5.textContent = "Мұнай өндіруге арналған жабдықты жаңартудың тамаша нұсқасы";
    p6.textContent = "EXPE дегеніміз не?";
    p7.textContent = "Полиэтиленді EXPE (тығыздығы жоғары полиэтилен) төсемі бар құбырлар";
    p8.textContent = "EXPE Түтік құбырларының төсемі – олармен жанасатын ортаның механикалық, химиялық және басқа да зақымдаушы әсерлерінен қорғайтын құралдарды қолдану процесі. Ішкі төсем EXPE жоғары тығыздықтағы полиэтиленге негізделген жоғары молекулалық салмақты материал болып табылады. Материал жақсы икемділікке ие, механикалық тозуға және ARPS және күкіртті сутегінің әсеріне жоғары төзімділік.";
    p9.textContent = "Құбырдың жоғары сапалы төсемі сенімділік пен беріктікті арттыру, құбыр жүйелерінің тиімділігін арттыру үшін қажет.";
    p10.textContent = "Құбырларды төсеудің негізгі функциялары";
    p11.textContent = "Сынақ нәтижелері бойынша төселген құбырлармен жабдықталған ұңғымаларды күрделі жөндеу арасындағы уақыт орта есеппен 3 есеге артты.";
    p12.textContent = "Бұл әдіс оны іске қосу кезінде жаңа жабдыққа қолданылады, EXPE полиэтиленімен ішкі жабын құбыр бетін коррозиядан, агрессивті ортадан (қышқылдар, еріткіштер және т.б.), абразивті тозудан және басқа да жағымсыз факторлардан қорғайды.";
    p13.textContent = "құбырларды коррозиядан қорғау;";
    p14.textContent = "штангалы сорғыларды пайдалану кезінде сорғы штангалары арқылы құбырларды механикалық тозудан қорғау;";
    p15.textContent = "агрессивті химиялық компоненттерден туындаған ішкі бетінің тозуын болдырмау;";
    p16.textContent = "құбырдың қызмет ету мерзімін ұзарту;";
    p17.textContent = "ұңғымаларды күрделі жөндеу мерзімін ұлғайту.";
    p18.textContent = "Полиэтиленді EXPE (тығыздығы жоғары полиэтилен) төсемімен пайдаланылған құбырларды жөндеу";
    p19.textContent = "Ресурстарды үнемдеу және табыстылықты арттыру үшін пайдаланылған EXPE төселген құбырларды жөндеу мұнай өндіру жабдықтарын жаңартудың тамаша нұсқасына айналуда.";
    p20.textContent = "Процестің технологиялық операциялары: құбырларды жуу және тазалау, өлшеу және ақауларды анықтау, муфтамен және құбыр корпусымен операциялар, өлшеулер, EXPE ішкі жабынын сынау және жағу.";
    p21.textContent = "Бізде құбырларды толық жөндеуге арналған жоғары дәлдіктегі машиналар паркі бар, бұрау операциялары CNC машиналарында жүзеге асырылады.";

    contact1.textContent = "Контактілер";
    contact2.innerHTML = "Қазақстан Республикасы, Маңғыстау облысы,<br>4-өндірістік аймақ, 88 учаскесі";

    foott.innerHTML = "Қазақстан, Ақтау қаласы,<br>4 индустриалды аймақ, 11 корпус"
});
