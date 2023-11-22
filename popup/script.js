const submitBtn = document.getElementById("submit");
const popup = document.getElementById("popup");
const closePopupBtn = document.getElementById("close-popup");

submitBtn.addEventListener("click", () => {
  openPopup();
});

closePopupBtn.addEventListener("click", () => {
  closePopup();
});

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}
