// Javascript interview questions source: https://www.guru99.com/javascript-interview-questions-answers.html
const questions = [
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
    {
        question: "This is question 2",
        choices: ["test", "test2", "test 3", "test 4"],
        answer: "test 3"
    },
    {
        question: "This is question 3",
        choices: ["hello", "world", "console", "log"],
        answer: "world"
    },
    {
        question: "This is question 4",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
];

const startBtn = document.querySelector(".start");
const questionCountOutput = document.querySelector(".q-number");
const scoreOutput = document.querySelector(".score");
const timerOutput = document.querySelector(".timer");
const questionOutput = document.querySelector(".question");
const choicesOutput = document.querySelector(".choices-box");

const totalQuestions = questions.length;
let currentIndex = 0;
let scoreCount = 0;
let timerStart = 2; // 2 minutes
let countdownTime = timerStart * 60; // convert to minutes
let isQuizOver = false;

// click button to start quiz
startBtn.addEventListener("click", startQuiz);

// hide start button and show quiz section
function startQuiz() {

    const startSection = document.querySelector(".start-card");
    const questionSection = document.querySelector(".question-card");
    const currentQuestion = questions[currentIndex]

    startSection.classList.remove("active");
    questionSection.classList.add("active");

    showQuestion();
}



function showQuestion() {

    setInterval(startTimer, 1000);

    questionCountOutput.textContent = currentIndex + 1;
    questionOutput.textContent = questions[currentIndex].question;
    
    questions[currentIndex].choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choices")

        btn.textContent = choice;
        choicesOutput.appendChild(btn);

        btn.addEventListener("click", checkQuestion)

    })
    
}

// Javascript countdown timer: https://www.youtube.com/watch?v=x7WJEmxNlEs
function startTimer() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;

    if (seconds <= 9) {
        seconds = "0" + seconds;
      }

    timerOutput.textContent = `${minutes}:${seconds}`
    countdownTime--;

}



function checkQuestion() {

    if (this.textContent === questions[currentIndex].answer) {
        scoreCount++
        console.log("correct")
    } else {
        countdownTime -= 15;
        console.log("incorrect")
    }

    if (currentIndex < totalQuestions - 1) {
        nextQuestion();
    } else {
        window.location.href = "end-game.html"
    }
    

}

function nextQuestion() {
    currentIndex++
    const choicesBtns = document.querySelectorAll(".choices");

    scoreOutput.textContent = scoreCount;
    questionCountOutput.textContent = currentIndex + 1;
    questionOutput.textContent = questions[currentIndex].question;
    
    choicesBtns.forEach((btn, i) => {
        btn.textContent = questions[currentIndex].choices[i];
    })

}



