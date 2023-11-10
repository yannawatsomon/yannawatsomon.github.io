const noteContainer = document.querySelector(".note-container");
const createBtn = document.querySelector(".btn");
let note = document.querySelectorAll(".input-box");

function showNotes() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = "https://cdn-icons-png.flaticon.com/128/565/565491.png";
  noteContainer.appendChild(inputBox).appendChild(img);
  console.log("create Note");
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    note = document.querySelectorAll(".input-box");
    note.forEach((nt) => {
      nt.onkeyup = function () {
        updateStorage();
      };
    });
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document.execCommand("insertLineBreak");
      event.preventDefault();
    }
  });
});
