const passwordBox = document.getElementById("password");
const lenght = 12;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()_+~|{}[]<>/-=";
const allCharactors = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";
  while (password.length < lenght) {
    password += allCharactors[Math.floor(Math.random() * allCharactors.length)];
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}
