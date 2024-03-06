const eyeicon = document.getElementById("eyeicon");
const password = document.getElementById("password");

function togglePassword() {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "https://cdn-icons-png.flaticon.com/128/159/159604.png";
  } else {
    password.type = "password";
    eyeicon.src = "https://cdn-icons-png.flaticon.com/128/2767/2767146.png";
  }
}

eyeicon.addEventListener("click", () => {
  togglePassword();
});
