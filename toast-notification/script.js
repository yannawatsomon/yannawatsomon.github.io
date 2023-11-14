const successButton = document.getElementById("success-btn");
const errorButton = document.getElementById("error-btn");
const invalidButton = document.getElementById("invalid-btn");
const toastBox = document.getElementById("toast-box");

const successImg = '<i class="fa-solid fa-circle-check"></i>';
const errorImg = '<i class="fa-solid fa-circle-xmark"></i>';
const invalidImg = '<i class="fa-solid fa-circle-exclamation"></i>';

successButton.addEventListener("click", () => {
  showToast("Successfully submitted", successImg, "success");
});

errorButton.addEventListener("click", () => {
  showToast("Please fix the error!", errorImg, "error");
});

invalidButton.addEventListener("click", () => {
  showToast("Invalid input, check again", invalidImg, "invalid");
});

function showToast(text, image, tag) {
  let toast = document.createElement("div");
  toast.classList.add(tag);
  toast.classList.add("toast");
  toast.innerHTML = image + text;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 4000);
}
