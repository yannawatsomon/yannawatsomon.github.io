const speech = new SpeechSynthesisUtterance();
let voiceList = [];
const voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voiceList = window.speechSynthesis.getVoices();
  speech.voice = voiceList[0];

  voiceList.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voiceList[voiceSelect.value];
});

document.querySelector("button").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});
