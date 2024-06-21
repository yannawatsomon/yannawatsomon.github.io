const themeicon = document.getElementById("themeicon");

function themeToggle() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeicon.src = "https://cdn-icons-png.flaticon.com/128/581/581601.png";
  } else {
    themeicon.src = "https://cdn-icons-png.flaticon.com/128/439/439842.png";
  }
}

themeicon.addEventListener("click", () => {
  themeToggle();
});
