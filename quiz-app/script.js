const questions = [
  {
    question: "Which is the largest animal in the world ?",
    answers: [
      { text: "shark", correct: false },
      { text: "Blue whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    question: "1 + 1 = ?",
    answers: [
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "2 + 2 = ?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");

let currentQuestionInedex = 0;
let score = 0;

function startQuiz() {
  currentQuestionInedex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionInedex];
  let questionNo = currentQuestionInedex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("button");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionInedex++;
  if (currentQuestionInedex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerHTML = `You score ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  if (currentQuestionInedex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
