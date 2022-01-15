"use strict";
const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const closeBtn = modal.querySelector(".popup-close");

  const modalContent = document.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      modalContent.style.top = "-52%";
      modal.style.display = "block";

      let count = -52;
      const modalAnimate = () => {
        count++;

        modalContent.style.top = count + "%";
        if (count < 10) setTimeout(modalAnimate, 3);
      };
      modalAnimate();
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
};

export default modal;
