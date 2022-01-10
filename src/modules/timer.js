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

    let hours = Math.floor(timeRemaining / 60 / 60);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };

  const updateOneClockTick = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";
      return;
    }
    if (getTime.hours < 10 && getTime.hours > 0) {
      timerHours.textContent = "0" + getTime.hours;
    } else {
      timerHours.textContent = getTime.hours;
    }

    if (getTime.minutes < 10 && getTime.minutes > 0) {
      timerMinutes.minutes = "0" + getTime.minutes;
    } else {
      timerMinutes.textContent = getTime.minutes;
    }

    if (getTime.seconds < 10 && getTime.minutes > 0) {
      timerSeconds.textContent = "0" + getTime.seconds;
    } else {
      timerSeconds.textContent = getTime.seconds;
    }
  };

  updateOneClockTick();

  const updateClock = () => {
    let getTime = getTimeRemaining();

    if (getTime.timeRemaining <= 0) {
      timerHours.textContent = "00";
      timerMinutes.textContent = "00";
      timerSeconds.textContent = "00";

      clearInterval(idInterval);
      return;
    }

    if (getTime.hours < 10 && getTime.hours > 0) {
      timerHours.textContent = "0" + getTime.hours;
    } else {
      timerHours.textContent = getTime.hours;
    }

    if (getTime.minutes < 10 && getTime.minutes > 0) {
      timerMinutes.minutes = "0" + getTime.minutes;
    } else {
      timerMinutes.textContent = getTime.minutes;
    }

    if (getTime.seconds < 10 && getTime.minutes > 0) {
      timerSeconds.textContent = "0" + getTime.seconds;
    } else {
      timerSeconds.textContent = getTime.seconds;
    }
  };

  let idInterval = setInterval(updateClock, 1000);
};

export default timer;
