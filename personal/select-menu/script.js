const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const socialList = document.getElementById("list");
const options = document.getElementsByClassName("options");

for (choice of options) {
  choice.onclick = function () {
    selectText.innerHTML = this.textContent;
  };
}

selectField.addEventListener("click", () => {
  socialList.classList.toggle("hide");
});
