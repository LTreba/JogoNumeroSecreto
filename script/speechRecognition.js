const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const guessedNumber = document.querySelector('#number');
const getMainDiv = document.querySelector('#chute');
const error = document.querySelector('#error');
error.style.display = "none";

let gameIsOver = false;

recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', updateNumber);

function updateNumber(event) {
    const number = event.results[0][0].transcript;
    if (isNumber(number) && validateRange(number)) {
        guessedNumber.innerText = number;
        error.style.display = "none";
        verificateRange(number);
    } else {
        error.style.display = "block";
    }
}

recognition.addEventListener('end',() => {
    if(!gameIsOver){
        recognition.start();
    }else{
        playAgainButton()
        buttonPlayAgain.addEventListener('click', ()=>{
            window.location.reload(true);
        })
    }
})