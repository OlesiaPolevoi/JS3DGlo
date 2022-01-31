"use strict";

const sendForm = ({ formId, someElem = [] }) => {
  const form = document.getElementById(formId);
  const statusBlock = document.createElement("div");
  const loadText = "Loading...";
  const errorText = "Error...";
  const successText = "Thank you! We will be in touch soon";

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

          formElements.forEach((input) => {
            input.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      alert("Input is not valid");
    }
  };

  try {
    if (!form) {
      throw new Error("Bring the form back please");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const elemName = form.querySelector(`input[name="user_name"]`);
      const elemPhone = form.querySelector(".form-phone");
      const elemMessage = form.querySelector(".mess");

      if (elemName) {
        elemName.value = elemName.value.replace(/[^а-яА-я\-\s]/g, "");
      }
      if (elemPhone) {
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
