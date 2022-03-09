// Javascript interview questions sources: 
// https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm
// https://www.interviewbit.com/javascript-mcq/
const questions = [
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "NaN"
    },
    {
        question: "How can a datatype be declared to be a constant type?",
        choices: ["const", "var", "let", "constant"],
        answer: "const"
    },
    {
        question: "What keyword is used to check whether a given property is valid or not?",
        choices: ["in", "is in", "exists", "lies"],
        answer: "in"
    },
    {
        question: "Which of the following function of String object returns a string representing the specified object?",
        choices: ["toLocaleUpperCase()", "toUpperCase()", "toString()", "substring()"],
        answer: "toString()"
    },
    {
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        choices: ["stringify()", "parse()", "convert()", "None of the above"],
        answer: "stringify()"
    },
    {
        question: "Which of the following function of Array object reverses the order of the elements of an array?",
        choices: ["reverse()", "push()", "reduce()", "reduceRight()"],
        answer: "reverse()"
    },
    {
        question: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?",
        choices: ["pop()", "push()", "join()", "map()"],
        answer: "push()"
    },
    {
        question: "Which of the following is NOT a Javascript framework?",
        choices: ["Node", "Vue", "React", "Cassandra"],
        answer: "Cassandra"
    },
    {
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        choices: ["async", "await", "setTimeout", "None of the above"],
        answer: "async"
    },
    {
        question: "How to stop an interval timer in Javascript?",
        choices: ["clearInterval", "clearTimer", "intervalOver", "None of the above"],
        answer: "clearInterval"
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
const saveSection = document.querySelector(".save-user");

const totalQuestions = questions.length;
let currentIndex = 0;
let scoreCount = 0;
let timerStart = 2; // 2 minutes
let countdownTime = timerStart * 60; // convert to seconds

// when window starts, start loading the questions
window.addEventListener("DOMContentLoaded", showQuestion)

// click button to start quiz
startBtn.addEventListener("click", startQuiz);

// hide start button and show quiz section
function startQuiz() {
    let timer = setInterval(startTimer, 1000);

    startSection.classList.remove("active");
    questionSection.classList.add("active");

}

function showQuestion() {

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
        countdownTime -= 25;
        console.log("incorrect");

        if (countdownTime <= 0) {
            isGameOver = true;
            // hide questions and ask user to enter name and display score in scoreboard.
            askUserName();
        }
    }

    // page redirect: https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript

    if (currentIndex < totalQuestions - 1) {
        nextQuestion();
    } else if (currentIndex === totalQuestions - 1) { 
        isGameOver = true;
        // hide questions and ask user to enter name and display score in scoreboard.
        askUserName();
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

function askUserName() {
    questionSection.classList.remove("active");
    saveSection.classList.add("active");
}

// SAVE/RESET SCORES and RESTART QUIZ

const userInput = document.querySelector("#name");
const saveScoreBtn = document.querySelector(".save");


// if user input is empty, prevent user from saving.
userInput.addEventListener("input", toggleDisable)

function toggleDisable() {
    if (this.value.length > 0) {
        saveScoreBtn.disabled = false;
    } else {
        saveScoreBtn.disabled = true;
    }
}

saveScoreBtn.addEventListener("click", function () {
    const user = userInput.value;
    const finalScore = scoreCount;

    console.log(user);

    saveScore(user, finalScore);

    location.href = "end-game.html"

})

function saveScore(name, score) {
 
    // store scores in local storage - https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68

    const scoresString = localStorage.getItem('scores');

    // if there are no scores in storage, set value to empty array
    const scores = JSON.parse(scoresString) ?? [];

    const newScore = { score, name };

    scores.push(newScore);

    scores.sort((a, b) => b.score - a.score);

    localStorage.setItem('scores', JSON.stringify(scores));

}










