let language_kz = document.querySelector(".language-kz");
let language_en = document.querySelector(".language-en");
let language_ru = document.querySelector(".language-ru");


//history
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


// russian language
language_ru.addEventListener("click", () => {
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

    his1.textContent = "Актауский завод по производству труб";
    his2.textContent = "Актауский завод по производству труб специализируется при производстве и ремонте труб мы предлагаем экономически эффективные решения, которые сводят к минимуму время простоя и защищают трубопроводы от коррозии и износа.";
    y2016_1.textContent = "2016 год";
    y2016_2.textContent = "Создание компании по поставке трубной продукции производителям нефти в Казахстане. Начало поставок насосно-компрессорных и бурильных труб в промышленных масштабах.";
    y2018_1.textContent = "2018 год";
    y2018_2.textContent = 'Принято решение о строительстве завода в Актау, Мангистауская область Республики Казахстан, по производству труб с футеровкой из полиэтилена EXPE. Подписаны партнерские соглашения с ООО "МС-Групп" (Российская Федерация) и ООО "Феникс-М" (Российская Федерация).';
    y2020_1.textContent = "2020 год";
    y2020_2.textContent = "Начало производства труб в Актау, Республика Казахстан. Получение сертификата происхождения товара «CT-KZ». Успешное завершение ежегодных полевых испытаний отремонтированных насосно-компрессорных труб с футеровкой в АО 'Каражанбасмунай'. Межремонтный период был увеличен в 3,7 раза без единого выхода из строя скважинного насосного оборудования.";
    y2017_1.textContent = "2017 год";
    y2017_2.textContent = "Были подписаны соглашения о сотрудничестве с Исследовательским центром нефтегазовых труб и Исследовательским центром химической промышленности (Китай). Запуск проекта по поиску новых инновационных решений для снижения абразивного износа насосно-компрессорных труб при добыче нефти.";
    y2019_1.textContent = "2019 год";
    y2019_2.textContent = "Получение патента на футеровку трубопровода в РГП «Национальный институт интеллектуальной собственности». Ежегодные полевые испытания труб с полиэтиленовой футеровкой EXPE в АО 'Озенмунайгаз' с положительными результатами.";
    y2021_1.textContent = "2021 год";
    y2021_2.textContent = "Объем работ, выполненных на бурильной трубе, составляет более 1000 тонн, а длина насосно-компрессорных труб - более 200 000 тысяч метров. По данным ООО 'Самарский научно-производственный центр', лабораторные исследования и испытания труб с полиэтиленовой футеровкой EXPE соответствуют стандартам ТУ 471010000. В том же году AZTP приняла участие в выставке ADIPEC в Абу-Даби.";

    second_1.textContent = "Актауский завод по производству труб";
    second_2.textContent = "Актауский завод по производству труб специализируется при производстве и ремонте труб мы предлагаем экономически эффективные решения, которые сводят к минимуму время простоя и защищают трубопроводы от коррозии и износа.";
    about_mission.textContent = "Миссия нашей компании";
    about_protect.textContent = "Заключается в защите труда человека, оборудования, на котором он работает, при одновременной защите природы и окружающей среды";
    about_realize.textContent = "Мы осознаем";
    about_there.textContent = "Что за каждой каплей добытой нефти стоит человек";
    about_assist.textContent = "Мы помогаем";
    about_customers.textContent = "Заказчикам в повышении эффективности оборудования, экономии ресурсов и минимизации потерь при добыче нефти";
    about_appreciate.textContent = "Мы ценим";
    about_each.textContent = "Каждых наших клиентов и их оборудование";
});


// english language
language_en.addEventListener("click", () => {
    link_product.textContent = "Our products and services";
    link_history.textContent = "Our history";
    link_certificate.textContent = "Certificates";
    link_contact.textContent = "Contacts";
    link_about.textContent = "About Us";

    his1.textContent = "Aktau Pipe Production Plant";
    his2.textContent = "Aktau Pipe Manufacturing Plant specializes in the production and repair of pipes, we offer cost-effective solutions that minimize downtime and protect pipelines from corrosion and wear.";
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
    y2021_2.textContent = "The volume of work performed on the drill pipe is more than 1,000 tons, and the length of the tubing is more than 200,000 thousand meters. According to Samara Research and Production Center LLC, laboratory studies and tests of pipes with polyethylene lining EXPE comply with TU 471010000 standards. In the same year, AZTP took part in the ADIPEC exhibition in Abu Dhabi.";

    menu_link_product.textContent = "Our products and services";
    menu_link_history.textContent = "Our history";
    menu_link_certificate.textContent = "Certificates";
    menu_link_contact.textContent = "Contacts";
    menu_link_about.textContent = "About Us";

    second_1.textContent = "Aktau pipe production plant";
    second_2.textContent = "Aktau Pipe Production Plant specializes in tubing production and repair, offering cost-effective solutions that minimize downtime and protect pipelines from corrosion and wear.";
    about_mission.textContent = "The mission of our company";
    about_protect.textContent = "Is to protect the work of a Person, the equipment on which he works while protecting the nature and the environment";
    about_realize.textContent = "We realize";
    about_there.textContent = "That there is a Person behind every drop of the oil produced";
    about_assist.textContent = "We assist";
    about_customers.textContent = "Customers in improving equipment efficiency, saving resources and minimizing losses in oil production";
    about_appreciate.textContent = "We appreciate";
    about_each.textContent = "Each and every one of our customers and their equipment";
});


// kazakh language
language_kz.addEventListener("click", () => {
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

    second_1.textContent = "Ақтау құбыр өндіру зауыты";
    second_2.textContent = "Ақтау құбыр зауыты сорғы-компрессорлық құбырларды өндіруге және жөндеуге маманданған, тоқтап қалу уақытын азайтатын және құбырларды коррозиядан және тозудан қорғайтын үнемді шешімдерді ұсынады.";
    about_mission.textContent = "Біздің компанияның миссиясы";
    about_protect.textContent = "Табиғат пен қоршаған ортаны қорғаумен қатар адамның, ол жұмыс істейтін жабдықтың еңбегін қорғаудан тұрады";
    about_realize.textContent = "Біз білеміз";
    about_there.textContent = "Өндірілген  әр тамшы мұнайдың артында бір адам тұрғанын ";
    about_assist.textContent = "Біз көмектесеміз";
    about_customers.textContent = "Клиенттер жабдығының тиімділігін арттыруға, ресурстарды үнемдеуге және мұнай өндірудегі шығындарды азайтуға";
    about_appreciate.textContent = "Біз бағалаймыз";
    about_each.textContent = "Біздің клиенттеріміздің әрқайсысын және олардың жабдықтарын";
});