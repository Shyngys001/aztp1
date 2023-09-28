let language_kz = document.querySelector(".language-kz");
let language_en = document.querySelector(".language-en");
let language_ru = document.querySelector(".language-ru");



let second_1 = document.querySelector("#second_1");
let second_2 = document.querySelector("#second_2");
let about_mission = document.querySelector("#about_mission");
let about_protect = document.querySelector("#about_protect");
let about_realize = document.querySelector("#about_realize");
let about_there = document.querySelector("#about_there");
let about_assist = document.querySelector("#about_assist");
let about_customers = document.querySelector("#about_customers");
let about_appreciate = document.querySelector("#about_appreciate");
let about_each = document.querySelector("#about_each");

language_ru.addEventListener("click", () => {
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
