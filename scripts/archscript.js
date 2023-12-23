let link_certificate = document.querySelector(".link-certificate");
let link_product = document.querySelector(".link-product");
let link_history = document.querySelector(".link-history");
let link_contact = document.querySelector(".link-contact");
let link_about = document.querySelector(".link-about");
let link_aztp = document.querySelector(".link-aztp");

let menu_link_certificate = document.querySelector(".m-link-certificate");
let menu_link_product = document.querySelector(".m-link-product");
let menu_link_history = document.querySelector(".m-link-history");
let menu_link_contact = document.querySelector(".m-link-contact");
let menu_link_about = document.querySelector(".m-link-about");
let menu_link_aztp = document.querySelector(".m-link-aztp");

let videodiv = document.querySelector(".video");
let close = document.querySelector(".close");
let more = document.querySelector(".main_txt3");

more.addEventListener("click", () => {
  videodiv.style.display = "block";
  video.play();

})

close.addEventListener("click", () => {
  videodiv.style.display = "none";
  video.load();
})

link_aztp.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
  document.querySelector("#main_page").style.display = "block";
});
menu_link_aztp.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
  document.querySelector("#main_page").style.display = "block";
});
link_product.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "block";
});
link_history.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "block";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
});
link_certificate.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "block";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
});
link_contact.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "block";
  document.querySelector("#our_products").style.display = "none";
});
link_about.addEventListener("click", () => {
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

menu_link_product.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "block";
  document.querySelector(".header-menu").style.top = "-310px";
});
menu_link_history.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "block";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
  document.querySelector(".header-menu").style.top = "-310px";
});
menu_link_certificate.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "block";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
  document.querySelector(".header-menu").style.top = "-310px";
});
menu_link_contact.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "block";
  document.querySelector("#our_products").style.display = "none";
  document.querySelector(".header-menu").style.top = "-310px";
});
menu_link_about.addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "none";
  document.querySelector("#about_us").style.display = "block";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
  document.querySelector(".header-menu").style.top = "-310px";
});
document.querySelector(".header-logo img").addEventListener("click", () => {
  document.querySelector("#main_page").style.display = "block";
  document.querySelector("#about_us").style.display = "none";
  document.querySelector("#history").style.display = "none";
  document.querySelector("#certificates").style.display = "none";
  document.querySelector("#contacts").style.display = "none";
  document.querySelector("#our_products").style.display = "none";
  document.querySelector(".header-menu").style.top = "-310px";
});


document.querySelector(".header-language-btn").addEventListener("click", () => {
  document.querySelector(".chevron").classList.toggle("chevron-rotate");
  document.querySelector(".header-language-select").classList.toggle("header-language-list");
  document.querySelector(".language-kz").classList.toggle("header-language-option-list");
  document.querySelector(".language-en").classList.toggle("header-language-option-list");
  document.querySelector(".language-ru").classList.toggle("header-language-option-list");
});

document.querySelector(".language-kz").addEventListener("click", () => {
  document.querySelector(".header-language-btn img").src = "images/icons/kz.svg";
  document.querySelector(".chevron").classList.remove("chevron-rotate");
  document.querySelector(".header-language-select").classList.remove("header-language-list");
  document.querySelector(".language-kz").classList.remove("header-language-option-list");
  document.querySelector(".language-en").classList.remove("header-language-option-list");
  document.querySelector(".language-ru").classList.remove("header-language-option-list");
});
document.querySelector(".language-en").addEventListener("click", () => {
  document.querySelector(".header-language-btn img").src = "images/icons/en.svg";
  document.querySelector(".chevron").classList.remove("chevron-rotate");
  document.querySelector(".header-language-select").classList.remove("header-language-list");
  document.querySelector(".language-kz").classList.remove("header-language-option-list");
  document.querySelector(".language-en").classList.remove("header-language-option-list");
  document.querySelector(".language-ru").classList.remove("header-language-option-list");
});
document.querySelector(".language-ru").addEventListener("click", () => {
  document.querySelector(".header-language-btn img").src = "images/icons/ru.svg";
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
