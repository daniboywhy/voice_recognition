function verifies(guess) {
    const num = +guess

    if (guess.toLowerCase() == 'game over.') {
        document.body.innerHTML = `
        <h2>Game Over!</h2>
        <h3>thanks for playing.</h3>

        <button id="play-again" class="btn-play">Retry.</button>
        `
        document.body.classList.add("game-over");
        return;
    }

    if (numberValidation(num)) {
        pageGuess.innerHTML += `
        <div>invalid entry: you should say a number</div>
        `
        return
    }
    if (numberInBetweenValidation(num)) {
        pageGuess.innerHTML += `
        <div>invalid entry: the secret number is between ${smallerValue} and ${biggerValue}</div>
        `
        return
    }
    if (num === secretNumber) {
        document.body.innerHTML = `
        <h2>You guessed right!</h2>
        <h3>The secret number was ${secretNumber}.</h3>
        <button id="play-again" class="btn-play">Retry.</button>
        `
    } else if (num < secretNumber) {
        pageGuess.innerHTML += `<div>The secret number is BIGGER! <i class="fa-solid fa-angles-up"></i></div>`

    } else {
        pageGuess.innerHTML += `<div>The secret number is smaller! <i class="fa-solid fa-angles-down"></i></div>`
    }
}

function numberInBetweenValidation(num) {
    return num > biggerValue || num < smallerValue
}

function numberValidation(num) {
    return Number.isNaN(num)
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload();
    }
})