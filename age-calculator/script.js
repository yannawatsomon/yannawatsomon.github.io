let dateInput = document.getElementById("date");
const calculate = document.getElementById("calc");
let result = document.getElementById("result");

dateInput.max = new Date().toISOString().split("T")[0];

calculate.addEventListener("click", () => {
  let birthDate = new Date(dateInput.value);

  let birthDay = birthDate.getDate();
  let birthMonth = birthDate.getMonth() + 1; // Month format start form 0(January) -> 11(December)
  let birthYear = birthDate.getFullYear();

  if (!isNaN(birthDate)) {
    diffDateCalc(birthDay, birthMonth, birthYear);
    console.log(birthDate);
  } else {
    result.innerHTML = "Please input a <span>valid date</span>";
  }
});

function getDayInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}

function diffDateCalc(day, month, year) {
  let today = new Date();
  let nowDay = today.getDate();
  let nowMonth = today.getMonth() + 1; // Month format start form 0(January) -> 11(December)
  let nowYear = today.getFullYear();
  let diffDay, diffMonth, diffYear;

  if (day <= nowDay) {
    diffDay = nowDay - day;
  } else {
    diffDay = nowDay + getDayInMonth(nowYear, nowMonth) - day;
    nowMonth--;
  }

  if (month <= nowMonth) {
    diffMonth = nowMonth - month;
  } else {
    diffMonth = nowMonth + 12 - month;
    nowYear--;
  }

  diffYear = nowYear - year;

  result.innerHTML = `You are <span>${diffYear}</span> years, <span>${diffMonth}</span> months and <span>${diffDay}</span> days old`;
}
