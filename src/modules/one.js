"use strict";

const oneJS = () => {
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");

  const getTimeRemaining = (deadline) => {
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
      hours,
      minutes,
      seconds,
    };
    // console.log(days);
  };

  const updateClock = () => {
    let getTime = getTimeRemaining("08 January 2022");
    console.log(getTime);
    // timerHours.textContent = hours;
    // timerMinutes.textContent = minutes;
    // timerSeconds.textContent = seconds;
  };

  updateClock();
  // countTimer("08 January 2022");
  // setInterval(countTimer, 1000, "08 January 2022");

  // getTimeRemaining("08 January 2022");
};
export default oneJS;
