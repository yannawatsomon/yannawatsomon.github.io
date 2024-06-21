const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const toDay = new Date();

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuesday",
  "Friday",
  "Saturday",
];

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

date.innerHTML = (toDay.getDate() < 10 ? "0" : "") + toDay.getDate();
day.innerHTML = weekDays[toDay.getDay()];
month.innerHTML = allMonths[toDay.getMonth()];
year.innerHTML = toDay.getFullYear();
