"use strict";

/// get current date
let date = new Date();

const currentDay = () => {
  //Get current time of day
  const timeOfDay = document.getElementById("timeOfDay");
  let currentHour = date.getHours();

  if (currentHour >= 6 && currentHour < 12) {
    timeOfDay.textContent = "Доброе утро";
  }
  if (currentHour >= 12 && currentHour < 17) {
    timeOfDay.textContent = "Добрый день";
  }
  if (currentHour >= 17 && currentHour < 21) {
    timeOfDay.textContent = "Добрый вечер";
  }
  if (currentHour >= 21 || currentHour < 6) {
    timeOfDay.textContent = "Добрая ночь";
  }

  //Get current weekday
  const weekDay = document.getElementById("weekDay");
  let currentWeekday = date.getDay();

  if (currentWeekday == 1) {
    weekDay.textContent = "Сегодня: Понедельник";
  }
  if (currentWeekday == 2) {
    weekDay.textContent = "Сегодня: Вторник";
  }
  if (currentWeekday == 3) {
    weekDay.textContent = "Сегодня: Среда";
  }
  if (currentWeekday == 4) {
    weekDay.textContent = "Сегодня: Четверг";
  }
  if (currentWeekday == 5) {
    weekDay.textContent = "Сегодня: Пятница";
  }
  if (currentWeekday == 6) {
    weekDay.textContent = "Сегодня: Суббота";
  }
  if (currentWeekday == 7) {
    weekDay.textContent = "Сегодня: Воскресенье";
  }

  //Get current time
  const timerHours = document.getElementById("timer-hours");
  const timerMinutes = document.getElementById("timer-minutes");
  const timerSeconds = document.getElementById("timer-seconds");
  const amOrPm = document.getElementById("am-or-pm");

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours >= 12) {
    timerHours.textContent = hours - 12;
    amOrPm.textContent = "PM";
  }
  if (hours < 12) {
    timerHours.textContent = hours;
    amOrPm.textContent = "AM";
  }

  timerMinutes.textContent = minutes;
  timerSeconds.textContent = seconds;

  ///Get days till New Year
  let newYear = new Date(date.getFullYear(), 11, 31);

  if (date.getMonth() == 11 && date.getDate() > 31) {
    newYear.setFullYear(newYear.getFullYear() + 1);
  }
  let day = 1000 * 60 * 60 * 24;

  let daysTillNewYear = document.getElementById("daysTillNewYear");
  daysTillNewYear.textContent =
    "До нового года осталось " +
    Math.ceil((newYear.getTime() - date.getTime()) / day) +
    " дней";
};

currentDay();
