let progress = document.getElementById("progress");
let audio = document.getElementById("audio");
let ctrlIcon = document.getElementById("ctrl-icon");
let currentVolume = document.getElementById("volume");

audio.volume = currentVolume.value / 100;

ctrlIcon.addEventListener("click", () => {
  playPause();
});

audio.onloadedmetadata = () => {
  progress.max = audio.duration;
  progress.value = audio.currentTime;
};

function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    audio.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    audio.play();
    ctrlIcon.classList.remove("fa-play");
    ctrlIcon.classList.add("fa-pause");
  }
}

if (audio.play()) {
  setInterval(() => {
    progress.value = audio.currentTime;
  }, 500);
}

progress.onchange = () => {
  audio.play();
  audio.currentTime = progress.value;
  playPause();
};

currentVolume.onchange = () => {
  audio.volume = currentVolume.value / 100;
};
