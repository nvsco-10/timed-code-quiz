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

// click button to start quiz
startBtn.addEventListener("click", startQuiz);

function startQuiz() {

    // hide start button, show quiz section and start timer
    loadQuestion();
    startTimer();
    showQuestions();

}

function loadQuestion() {

    // display first question
    displayQuestion();
    
    // creates buttons for each choice in questions array and append to choicesOutput.
    // if number of choices is unknown or changed, code will adapt
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
    
    let timer = setInterval(function(){
        countdownTime--;

        let minutes = Math.floor(countdownTime / 60);
        let seconds = countdownTime % 60;

        if (seconds <= 9) {
            seconds = "0" + seconds;
        }

        timerOutput.textContent = `${minutes}:${seconds}`

        if (countdownTime <= 0) {
            clearInterval(timer)
            askUserName();
        }

    }, 1000)
    
}

function checkQuestion() {

    // correct or incorrect?
    if (this.textContent === questions[currentIndex].answer) {
        scoreCount++
        showCorrect(); 
    } else {
        countdownTime -= 25;
        showIncorrect();
    }

    // if there are remaining questions, load next question.. if last question, proceed to ask user for initials
    if (currentIndex < totalQuestions - 1) {
        nextQuestion();
    } else if (currentIndex === totalQuestions - 1) { 
        // hide questions and ask user to enter name and display score in scoreboard.
        askUserName();
    }

}

function nextQuestion() {
    currentIndex++
    const choicesBtns = document.querySelectorAll(".choices");

    // update all score outputs
    scoreOutputs.forEach(output => {
        output.textContent = scoreCount;
    })

    displayQuestion();
    
    // replace content of previous question's choices with next question's choices
    choicesBtns.forEach((btn, i) => {
        btn.textContent = questions[currentIndex].choices[i];
    })

}

function showQuestions() {
    startSection.classList.remove("active");
    questionSection.classList.add("active");
}

function displayQuestion () {
    questionCountOutput.textContent = currentIndex + 1;
    questionOutput.textContent = questions[currentIndex].question;
}

function showCorrect() {
    // quiz container box shadow green to let user know answer is correct
    questionSection.classList.add("correct")

    setTimeout(function() {
        questionSection.classList.remove("correct")
    }, 400)
}

function showIncorrect() {
    // quiz container box shadow red to let user know answer is incorrect
    questionSection.classList.add("incorrect")

    setTimeout(function() {
        questionSection.classList.remove("incorrect")
    }, 400)
}

function askUserName() {

    //hide question section and show save score section
    questionSection.classList.remove("active");
    saveSection.classList.add("active");
}

// SAVE/RESET SCORES and RESTART QUIZ

const userInput = document.querySelector("#name");
const saveScoreBtn = document.querySelector(".save");

// if user input is empty, prevent user from saving.
userInput.addEventListener("input", toggleDisable)

// when user hits save, store data in localStorage and load the scoreboard
saveScoreBtn.addEventListener("click", function () {
    const user = userInput.value;
    const finalScore = scoreCount;

    saveScore(user, finalScore);

    // page redirect: https://stackoverflow.com/questions/442384/jumping-to-a-new-html-page-with-javascript
    location.href = "scoreboard.html"

})

function saveScore(name, score) {
 
    // store scores in local storage - https://michael-karen.medium.com/how-to-save-high-scores-in-local-storage-7860baca9d68

    // retrieve all scores from local storage
    const scoresString = localStorage.getItem('scores');

    // convert data from local storage - from JSON string to object
    // if there are no scores in storage, set value to empty array 
    const scores = JSON.parse(scoresString) ?? [];

    // create new object that stores that current user's score and initials
    const newScore = { score, name };

    // push newly created object into scores array
    scores.push(newScore);

    // sorts scores array from highest to lowest score
    scores.sort((a, b) => b.score - a.score);

    // convert scores into JSON and store in localstorage
    localStorage.setItem('scores', JSON.stringify(scores));

}

function toggleDisable() {
    if (this.value.length > 0) {
        saveScoreBtn.disabled = false;
    } else {
        saveScoreBtn.disabled = true;
    }
}









