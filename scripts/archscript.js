document.querySelector(".link-product").addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "block";
});
document.querySelector(".link-history").addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "block";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
});
document.querySelector(".link-certificate").addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "block";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
});
document.querySelector(".link-contact").addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "block";
  document.querySelector("#our_products").style.display = "none";
});
document.querySelector(".link-about").addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "block";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
});
document.querySelector(".header-logo img").addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "block";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
});


document.querySelector(".header-language-btn").addEventListener("click", () => {
  document.querySelector(".chevron").classList.toggle("chevron-rotate");
  document.querySelector(".header-language-select").classList.toggle("header-language-list");
  document.querySelector(".language-kz").classList.toggle("header-language-option-list");
  document.querySelector(".language-en").classList.toggle("header-language-option-list");
  document.querySelector(".language-ru").classList.toggle("header-language-option-list");
});

document.querySelector(".language-kz").addEventListener("click", () => {
  document.querySelector(".header-language-btn img").src = "image/icons/kz.svg";
  document.querySelector(".chevron").classList.remove("chevron-rotate");
  document.querySelector(".header-language-select").classList.remove("header-language-list");
  document.querySelector(".language-kz").classList.remove("header-language-option-list");
  document.querySelector(".language-en").classList.remove("header-language-option-list");
  document.querySelector(".language-ru").classList.remove("header-language-option-list");
});
document.querySelector(".language-en").addEventListener("click", () => {
  document.querySelector(".header-language-btn img").src = "image/icons/en.svg";
  document.querySelector(".chevron").classList.remove("chevron-rotate");
  document.querySelector(".header-language-select").classList.remove("header-language-list");
  document.querySelector(".language-kz").classList.remove("header-language-option-list");
  document.querySelector(".language-en").classList.remove("header-language-option-list");
  document.querySelector(".language-ru").classList.remove("header-language-option-list");
});
document.querySelector(".language-ru").addEventListener("click", () => {
  document.querySelector(".header-language-btn img").src = "image/icons/ru.svg";
  document.querySelector(".chevron").classList.remove("chevron-rotate");
  document.querySelector(".header-language-select").classList.remove("header-language-list");
  document.querySelector(".language-kz").classList.remove("header-language-option-list");
  document.querySelector(".language-en").classList.remove("header-language-option-list");
  document.querySelector(".language-ru").classList.remove("header-language-option-list");
});

document.querySelector(".header-menu-btn").addEventListener("click", () => {
  document.querySelector(".header-menu").style.top = "0px";
});

document.querySelector(".header-menu-close").addEventListener("click", () => {
  document.querySelector(".header-menu").style.top = "-310px";
});
