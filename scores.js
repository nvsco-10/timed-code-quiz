const storedScores = JSON.parse(localStorage.getItem('scores'));
const scoreList = document.querySelector(".scores")

const restartBtn = document.querySelector(".restart"); // restart quiz
const resetBtn = document.querySelector(".reset") // reset scores

// when html loads, display stored scores
window.addEventListener("DOMContentLoaded", displayScores(storedScores))

function displayScores(storedScores) {

    // for each score stored in local storage, create an li element and append it to the scores lists
    storedScores.forEach(data => {
        const scoreEntry = document.createElement("li");

        scoreEntry.textContent = `${data.name} - ${data.score}`;
        scoreList.appendChild(scoreEntry);
    })

}

restartBtn.addEventListener("click", restartQuiz)
resetBtn.addEventListener("click", resetScores)

function restartQuiz() {
    // loads index.html and restarts quiz
    location.href = "index.html";
}

function resetScores() {
    localStorage.clear();

    // removes all existing li elements that contain each score entry
    scoreList.innerHTML = "";
}