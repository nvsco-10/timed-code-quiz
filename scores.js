const storedScores = JSON.parse(localStorage.getItem('scores'));
const scoreList = document.querySelector(".scores")

const restartBtn = document.querySelector(".restart"); // restart quiz
const resetBtn = document.querySelector(".reset") // reset scores

window.addEventListener("DOMContentLoaded", displayScores(storedScores))

function displayScores(storedScores) {

    storedScores.forEach(data => {
        const scoreEntry = document.createElement("li");
        scoreEntry.textContent = `${data.name} - ${data.score}`;
        scoreList.appendChild(scoreEntry);
    })

}

restartBtn.addEventListener("click", restartQuiz)
resetBtn.addEventListener("click", resetScores)

function restartQuiz() {
    location.href = "index.html";
}

function resetScores() {
    localStorage.clear();
    scoreList.innerHTML = "";
}