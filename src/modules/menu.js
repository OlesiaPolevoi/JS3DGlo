"use strict";

const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  menuBtn.addEventListener("click", handleMenu);

  menu.addEventListener("click", (event) => {
    if (event.target.matches(".close-btn")) {
      event.preventDefault();

      handleMenu();
    }
    if (event.target.matches("ul>li>a")) {
      handleMenu();
    }
  });
};

export default menu;
