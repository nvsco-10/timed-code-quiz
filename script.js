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
        answer: "NaN"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
];

const startBtn = document.querySelector(".start");
const questionCountOutput = document.querySelector(".q-number");
const scoreOutputs = document.querySelectorAll(".score");
const timerOutput = document.querySelector(".timer");
const questionOutput = document.querySelector(".question");
const choicesOutput = document.querySelector(".choices-box");

const startSection = document.querySelector(".start-card");
const questionSection = document.querySelector(".question-card");
const saveScore = document.querySelector(".save-score");

const totalQuestions = questions.length;
let currentIndex = 0;
let scoreCount = 0;
let timerStart = 2; // 2 minutes
let countdownTime = timerStart * 60; // convert to seconds

// click button to start quiz
startBtn.addEventListener("click", startQuiz);

// hide start button and show quiz section
function startQuiz() {

    startSection.classList.remove("active");
    questionSection.classList.add("active");

    showQuestion();
}



function showQuestion() {

    startTimer();

    // loads first question
    questionCountOutput.textContent = currentIndex + 1;
    questionOutput.textContent = questions[currentIndex].question;
    
    // creates buttons for each choice in questions array and append to choicesOutput.
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

    let timer = setInterval(function() {
        
        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;

        if (seconds <= 9) {
            seconds = "0" + seconds;
        }

        timerOutput.textContent = `${minutes}:${seconds}`
        countdownTime--;

    }, 1000)

    
}

function checkQuestion() {

    if (this.textContent === questions[currentIndex].answer) {
        scoreCount++
        console.log("correct")
    } else {
        countdownTime -= 25;
        console.log("incorrect");

        if (countdownTime <= 0) {
            // hide questions and ask user to enter name and display score in scoreboard.
            questionSection.classList.remove("active");
            saveScore.classList.add("active")
        }
    }

    // page redirect: https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript

    if (currentIndex < totalQuestions - 1) {
        nextQuestion();
    } else if (currentIndex === totalQuestions - 1) {
        // hide questions and ask user to enter name and display score in scoreboard.
        questionSection.classList.remove("active");
        saveScore.classList.add("active")
    }

}

function nextQuestion() {
    currentIndex++
    const choicesBtns = document.querySelectorAll(".choices");

    scoreOutputs.forEach(output => {
        output.textContent = scoreCount;
    })

    questionCountOutput.textContent = currentIndex + 1;
    questionOutput.textContent = questions[currentIndex].question;
    
    choicesBtns.forEach((btn, i) => {
        btn.textContent = questions[currentIndex].choices[i];
    })

}

// SAVE SCORE

const saveScoreBtn = document.querySelector(".save");
const userInput = document.querySelector("#name");
const showScores = document.querySelector(".score-board");
const scoreList = document.querySelector(".scores")
const storedScores = localStorage;

saveScoreBtn.addEventListener("click", function () {
    const user = userInput.value;
    const finalScore = scoreCount;

    console.log(user);

    // store object in local storage - https://blog.logrocket.com/storing-retrieving-javascript-objects-localstorage/

    localStorage.setItem(`{user: ${user}, score: ${finalScore}}`, JSON.stringify(`{user: ${user}, score: ${finalScore}}`))
    console.log(localStorage);

    // looping over local storage using for in loop - https://attacomsian.com/blog/javascript-iterate-over-local-storage-keys
    for (const key in localStorage) {
        console.log(`${key}: ${localStorage.getItem(key)}`);
    }

    saveScore.classList.remove("active");
    showScores.classList.add("active");



})






