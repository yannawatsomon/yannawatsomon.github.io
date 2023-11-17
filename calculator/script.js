const equal = document.getElementById("equal");
const display = document.getElementById("result");
const num0 = document.getElementById("0");
const num00 = document.getElementById("00");

function calculate() {}

display.addEventListener("click", () => {
  console.log(display.value);
});

equal.addEventListener("click", () => {
  display.value = eval(display.value);
});

num0.addEventListener("click", () => {
  if (display.value !== "") {
    display.value += "0";
  }
});
num00.addEventListener("click", () => {
  if (display.value !== "") {
    display.value += "00";
  }
});
