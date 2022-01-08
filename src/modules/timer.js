"use strict";

const timer = (deadline) => {
  console.log(deadline);
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;

    // let days = Math.floor(timeRemaining / 60 / 60 / 24);
    // let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      // hours: hours,
      // minutes: minutes,
      // seconds: seconds,
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
    // console.log(days);
  };

  const updateClock = () => {
    let getTime = getTimeRemaining();

    console.log(getTime);

    if (getTime.hours < 10) {
      timerHours.textContent = "0" + getTime.hours;
    } else {
      timerHours.textContent = getTime.hours;
    }

    if (getTime.minutes < 10) {
      timerMinutes.minutes = "0" + getTime.minutes;
    } else {
      timerMinutes.textContent = getTime.minutes;
    }

    if (getTime.seconds < 10) {
      timerSeconds.textContent = "0" + getTime.seconds;
    } else {
      timerSeconds.textContent = getTime.seconds;
    }

    // if (getTime.timeRemaining > 0) {
    //   setTimeout(updateClock, 1000);
    // }

    if (getTime.timeRemaining < 0) {
      clearInterval(idInterval);

      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
    }
  };

  let idInterval = setInterval(updateClock, 1000);
  // clearInterval(idInterval);

  //NOTE

  // let count = 0;

  // const logger = (str) => {
  //   console.log(`Hello, I'm ${str}.`);
  // };

  // let idInterval = setInterval(() => {
  //   count++;
  //   logger("setInterval");
  //   if (count === 10) clearInterval(idInterval);
  // }, 500);

  //Переписать таймер с помощью setInterval. Будьте внимательны, чтобы setInterval не вызывал сам себя, не превращался в рекурсивный вызов!
  //Проверить себя легко. Выведите что-нибудь в консоль внутри функции updateClock. Вывод в консоль должен происходить 1 раз за 1000ms.

  // updateClock();
  // countTimer("08 January 2022");
  // setInterval(countTimer, 1000, "08 January 2022");
};

export default timer;
