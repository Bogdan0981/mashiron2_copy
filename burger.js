const burger = document.querySelector(".header-burger");
const burgerWindow = document.querySelector(".header-burger_active");
const title = document.querySelector(".title-first");
const descr = document.getElementById("hero-descr");
const close = document.querySelector(".header-burger_active-close");

burger.onclick = () => {
  burgerWindow.style.display = "flex";
  burger.style.display = "none";
  title.style.display = "none";
  descr.style.display = "none";
};

close.onclick = () => {
  burgerWindow.style.display = "none";
  burger.style.display = "flex";
  title.style.display = "block";
  descr.style.display = "block";
};

if (window.innerWidth > 1200) {
  burger.style.display = "none";
}
