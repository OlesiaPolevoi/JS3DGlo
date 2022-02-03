"use strict";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка...";
  const successText = "Спасибо! Мы скоро с вами свяжемся";

  const validate = (list) => {
    let success = true;

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    someElem.forEach((elem) => {
      const element = document.getElementById(elem.id);

      if (elem.type === "block") {
        formBody[elem.id] = element.textContent;
      } else if (elem.type === "input") {
        formBody[elem.id] = element.value;
      }
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          if (statusBlock.textContent === successText) {
            setTimeout(() => {
              statusBlock.style.display = "none";
            }, 3000);
          }

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Ввод данных не валидный");
    }
  };

  try {
    if (!form) {
      throw new Error("Верните форму пожалуйста");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const elemName = form.querySelector(`input[name="user_name"]`);
      const elemPhone = form.querySelector(".form-phone");
      const elemEmail = form.querySelector(".form-email");
      const elemMessage = form.querySelector(".mess");

      if (elemName) {
        if (elemName.value.length < 3) {
          alert("Имя должно быть больше 2 букв");
          return;
        }

        elemName.value = elemName.value.replace(/[^а-яА-я\-\s]/g, "");
      }

      if (elemEmail.value.length < 1) {
        alert("Email не должен быть пустым");
        return;
      }

      if (elemPhone) {
        if (elemPhone.value.length < 5 || elemPhone.value.length > 11) {
          alert("Телефон должен быть от 5 до 11 цифр");

          return;
        }

        elemPhone.value = elemPhone.value.replace(/[^\d\-\(\)\+]/g, "");
      }

      if (elemMessage) {
        elemMessage.value = elemMessage.value.replace(/[^а-яА-я\-\s]/g, "");
      }

      submitForm();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForm;
