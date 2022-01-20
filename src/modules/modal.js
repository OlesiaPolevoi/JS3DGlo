"use strict";
const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");

  const modalContent = document.querySelector(".popup-content");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (screen.width < 768) {
        modal.style.display = "block";

        return;
      }

      modalContent.style.top = "-52%";
      modal.style.display = "block";

      let count = -52;
      let idInterval;

      const modalAnimate = () => {
        count++;
        idInterval = requestAnimationFrame(modalAnimate);

        if (count < 10) {
          modalContent.style.top = count + "%";
        } else {
          cancelAnimationFrame(idInterval);
        }
      };
      modalAnimate();
    });
  });

  modal.addEventListener("click", (e) => {
    if (
      !e.target.closest(".popup-content") ||
      e.target.classList.contains("popup-close")
    ) {
      modal.style.display = "none";
    }
  });
};

export default modal;
