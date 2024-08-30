let button = document.getElementById("button")
let text = document.getElementById("text")

function changeColor() {
    let colorCode = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    text.style.color = colorCode
}

button.addEventListener("click", function() {
    changeColor()
})