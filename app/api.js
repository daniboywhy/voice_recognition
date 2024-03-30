const pageGuess = document.getElementById('guess');
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(e) {
    guess = e.results[0][0].transcript;
    console.log(guess)
    showGuess(guess);
    verifies(guess);
}

function showGuess(guess) {
    pageGuess.innerHTML = `
    <div>You guessed:</div>
    <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end', () => {
    recognition.start()
})