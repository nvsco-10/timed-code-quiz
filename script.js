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
    {
        question: "Which of the following is NOT a Javascript data type?",
        choices: ["String", "NaN", "Boolean", "Undefined"],
        answer: "Nan"
    },
];

const questionCountOutput = document.querySelector(".q-number")
const questionOutput = document.querySelector(".question");
const choicesOutput = document.querySelector(".choices-box");
const choicesBtns = document.querySelectorAll(".choices");


const questionNum = 1;

function showQuestion() {
    const currentQuestionIndex = questionNum - 1;
    const currentQuestion = questions[currentQuestionIndex];

    questionCountOutput.textContent = questionNum;
    questionOutput.textContent = currentQuestion.question;
    
    currentQuestion.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.classList.add("choices")

        btn.textContent = choice;
        choicesOutput.appendChild(btn);

    })
    
}

showQuestion();