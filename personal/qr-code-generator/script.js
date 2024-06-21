const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const imgBox = document.getElementById("img-box");
const qrImg = document.getElementById("qr-img");
const input = document.getElementById("input");
const genQrBtn = document.getElementById("gen-qr");

function generateQR() {
  if (input.value.length > 0) {
    qrImg.src = url + input.value;
    imgBox.classList.add("show-img");
  } else {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
  }
}

genQrBtn.addEventListener("click", () => {
  generateQR();
});
