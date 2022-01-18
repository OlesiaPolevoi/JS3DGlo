"use strict";
const inputForms = () => {
  const calcSquare = document.querySelector(".calc-square");
  const calcCount = document.querySelector(".calc-count");
  const calcDay = document.querySelector(".calc-day");

  calcSquare.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });
  calcCount.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });
  calcDay.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/\D+/, "");
  });

  const formTwoMessage = document.getElementById("form2-message");
  const formOneName = document.getElementById("form1-name");
  const formTwoName = document.getElementById("form2-name");
  const formThreeName = document.getElementById("form3-name");

  formTwoMessage.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/g, "");
  });

  formOneName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/g, "");
  });

  formTwoName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/g, "");
  });

  formThreeName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-я\-\s]/g, "");
  });

  const formOneEmail = document.getElementById("form1-email");
  const formTwoEmail = document.getElementById("form2-email");
  const formThreeEmail = document.getElementById("form3-email");

  formOneEmail.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\-\_\@\.\!\~\*\']/gi, "");
  });
  formTwoEmail.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\-\_\@\.\!\~\*\']/gi, "");
  });
  formThreeEmail.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^a-zA-Z\-\_\@\.\!\~\*\']/gi, "");
  });

  const formOnePhone = document.getElementById("form1-phone");
  const formTwoPhone = document.getElementById("form2-phone");
  const formThreePhone = document.getElementById("form3-phone");

  formOnePhone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\-\(\)]/g, "");
  });

  formTwoPhone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\-\(\)]/g, "");
  });

  formThreePhone.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d\-\(\)]/g, "");
  });
};

export default inputForms;
