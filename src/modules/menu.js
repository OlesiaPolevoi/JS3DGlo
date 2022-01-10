"use strict";

const menu = () => {
  const menuBtn = document.querySelector(".menu");
  const menu = document.querySelector("menu");
  const closeBtn = menu.querySelector(".close-btn");
  const menuItems = menu.querySelectorAll("ul>li>a");

  console.log(menuItems);

  menuBtn.addEventListener("click", () => {
    if (!menu.style.transform) {
      menu.style.transform = `translateX(0)`;
    } else {
      menu.style.transform = ``;
    }
  });

  closeBtn.addEventListener("click", () => {
    if (!menu.style.transform) {
      menu.style.transform = `translateX(0)`;
    } else {
      menu.style.transform = ``;
    }
  });
};

export default menu;
