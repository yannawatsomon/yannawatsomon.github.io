const equal = document.getElementById("equal");
const display = document.getElementById("result");
const num0 = document.getElementById("0");
const num00 = document.getElementById("00");
const operators = document.querySelectorAll(".operator");

display.addEventListener("click", () => {
  console.log(display.value);
});

equal.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "";
    alert("Wrong number operation");
  }
});

num0.addEventListener("click", () => {
  if (display.value !== "0") {
    display.value += "0";
  }
});
num00.addEventListener("click", () => {
  if (display.value !== "") {
    display.value += "00";
  }
});

operators.forEach(function (button) {
  button.addEventListener("click", () => {
    if (display.value !== "") {
      display.value += button.value;
    }
  });
});
