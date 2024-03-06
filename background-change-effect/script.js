let imgBox = document.querySelector(".img-box");
let imgWarp = document.querySelector(".img-warp");
let originalImg = document.getElementById("original-img");
let line = document.getElementById("line");
let leftSpace = imgBox.offsetLeft;

originalImg.style.width = imgBox.offsetWidth + "px";

imgBox.onmousemove = function (e) {
  let boxWidth = e.pageX - leftSpace + "px";
  imgWarp.style.width = boxWidth;
  line.style.left = boxWidth;
};
