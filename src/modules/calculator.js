"use strict";
const calculator = () => {
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

  //form1-email
  //form2-email
  //form3-email
  //   В поля ввода type=email позволить ввод только  латиницы в любом регистре, цифры и спецсимволы:  @  -  _  . ! ~ * '
  // (Собака , Дефис , Подчеркивание , Точка , Восклицательный знак , Тильда , Звездочка , Одинарная кавычка)
};

export default calculator;
