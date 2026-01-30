// Array of quiz questions
const quizData = [
  {
    question: "Which language is used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    answer: "JavaScript"
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Creative Style System", "Computer Styled Sections", "Colorful Style Syntax"],
    answer: "Cascading Style Sheets"
  },
  {
    question: "HTML is used to?",
    options: ["Structure a webpage", "Style a webpage", "Add interactivity", "Compile code"],
    answer: "Structure a webpage"
  },
  {
    question:"who set web standars?",
    options:["Mozilla","Microsoft","Apple","The world wide web Consortium"],
    answer:"The world wide web Consortium"
  },
  {
    question: "which company developed the javascript?",
    options: [ "Netscape", "Microsoft", "Sun Microsystems", "IBM"],
    answer: "Netscape"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [ "//", "/* */", "#", "<!-- -->"],
    answer: "//"
  },
  {
    question: "Which method is used to add an element at the end of an array in JavaScript?",
    options: [ "push()", "pop()", "shift()", "unshift()"],
    answer: "push()"
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: [ "React", "Django", "Laravel", "Ruby on Rails"],
    answer: "React"
  },
  {
    question: "What is the correct syntax to create a function in JavaScript?",
    options: [ "function myFunction()", "def myFunction()", "create myFunction()", "func myFunction()"],
    answer: "function myFunction()"
  },
  {
    question: "Which operator is used to assign a value to a variable in JavaScript?",
    options: [ "=", "+=", "-=", "*="],
    answer: "="
  },
  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: [ "String", "Number", "Boolean", "Character"],
    answer: "Character"
  },
];



let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");

// Function to load a question
function loadQuestion() {
  // Clear previous options
  optionsElement.innerHTML = "";

  // Get current question
  let currentQuestion = quizData[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  // Loop through options
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.addEventListener("click", () => checkAnswer(option));
    optionsElement.appendChild(button);
  });
}

// Function to check answer
function checkAnswer(selectedOption) {
  let currentQuestion = quizData[currentQuestionIndex];
  
  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  // Disable buttons after selection
  Array.from(optionsElement.children).forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === currentQuestion.answer) {
      btn.style.backgroundColor = "#28a745"; // correct answer
    } else if (btn.textContent === selectedOption) {
      btn.style.backgroundColor = "#dc3545"; // wrong answer
    }
  });
}

// Event listener for Next button
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
  } else {
    showScore();
  }
});

// Function to show final score
function showScore() {
  questionElement.textContent = "Quiz Completed!";
  optionsElement.innerHTML = "";
  nextButton.style.display = "none";
  scoreElement.textContent = `Your Score: ${score} / ${quizData.length}`;
}

// Load first question
loadQuestion();