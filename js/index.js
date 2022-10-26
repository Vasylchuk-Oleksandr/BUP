window.onload = function () {
  document.body.classList.add("loaded_hiding");
  window.setTimeout(function () {
    document.body.classList.add("loaded");
    document.body.classList.remove("loaded_hiding");
  }, 500);
};

function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector(".burger-menu_button");
  let links = menu.querySelector(".burger-menu_link");
  let body = document.querySelector("body");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.addEventListener("click", () => toggleMenu());

  function toggleMenu() {
    if (menu.classList.contains("burger-menu_active")) {
      menu.classList.remove("burger-menu_active");
      body.style.overflow = "visible";
    } else {
      menu.classList.add("burger-menu_active");
      body.style.overflow = "hidden";
    }
  }
}

function languageMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector(".language__menu-button");
  let body = document.querySelector("body");

  button.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  function toggleMenu() {
    if (menu.classList.contains("language__menu_active")) {
      menu.classList.remove("language__menu_active");
    } else {
      menu.classList.add("language__menu_active");
    }
  }
}

languageMenu("#language__menu");

burgerMenu(".nav__burger-menu");

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
  showSlides((slideIndex += 1));
}

function minusSlide() {
  showSlides((slideIndex -= 1));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

  let number = document.querySelector("#number");
  number.innerHTML = slideIndex;
  console.log(slideIndex);
}
