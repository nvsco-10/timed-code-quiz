const saveScoreBtn = document.querySelector(".save");
const userInput = document.querySelector("#name");

saveScoreBtn.addEventListener("click", function () {
    const user = userInput.value;

    console.log(`${user}`)
})

