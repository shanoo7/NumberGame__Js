let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)

const guessField = document.querySelector("#GuessField")
const submitBtn = document.querySelector("#submit")
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector("#startOver")

const p = document.createElement("p")

let prevGuess = []
let numGuess = 1
let playGame = true;

if (playGame) {
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        const guess = parseInt(guessField.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("plz enter a valid num")
    } else if (guess < 1) {
        alert("plz enter a num grater then 1")
    } else if (guess > 100) {
        alert("plz enter a num less then 100")
    }
    prevGuess.push(guess)
    if (numGuess === 10) {
        displayGuess(guess)
        displayMess(`game over   random no was : ${randomNumber}`)
        endGame()
    } else {
        displayGuess(guess)
        checkGuess(guess)
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMess("guess mached")
        endGame()
    } else if (guess < randomNumber) {
        displayMess("num is TO low")
    } else if (guess > randomNumber) {
        displayMess("num is TO high")
    }
}

function displayGuess(guess) {
    guessField.value = ""

    guesses.innerHTML += `${guess} `
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`
}

function displayMess(mess) {
    lowOrHi.innerHTML = `<h2>${mess}</h2>`
}

function endGame() {
    guessField.value = ""
    guessField.setAttribute("disabled", "");
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame"> start new game </h2>`
    p.style.color = "green"
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame() {
    let newGameButton = document.querySelector("#newGame")
    newGameButton.addEventListener("click", (e) => {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guesses.innerHTML = ""
        lastResult.innerHTML = `${11 - numGuess}`
        guessField.removeAttribute("disabled")
        startOver.removeChild(p);
        playGame = true

    })
}


