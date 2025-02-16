export function headerMenu() {
  document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".header__burger");
    const closeButton = document.querySelector(".header__burger__close");
    const menu = document.querySelector(".header__nav__menu");

    burger.addEventListener("click", () => {
      menu.classList.add("active");
      burger.classList.add("hidden");
      closeButton.classList.add("active");
    });

    closeButton.addEventListener("click", () => {
      menu.classList.remove("active");
      burger.classList.remove("hidden");
      closeButton.classList.remove("active");
    });
  });
  console.log("Меню загружено!");
}
