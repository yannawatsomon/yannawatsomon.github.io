let progressNumber = document.getElementById("number");
let counter = 0;

setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    progressNumber.innerHTML = counter + "%";
  }
}, 27);
