const result = document.querySelector('#result');
const score = document.querySelector('#score-counter');
const title = document.querySelector('h1');
const tip = document.querySelectorAll('#tip')
result.style.display = 'none';

let scoreCounter = 0;
var randomNumber = getRandomNumber()
console.log(randomNumber);


function isNumber(number) {
    return(!isNaN(parseFloat(number)) && isFinite(number));
}

function validateRange(number){
    if(number<=biggerValue && number>=leastValue){
        return(true);
    }
    return(false);
}

function verificateRange(number){
    if(number<randomNumber){
        result.style.display = 'block';
        result.innerHTML = 'O número é maior! <i class="fa-solid fa-circle-up"></i>';
        updateScore();
    }else if(number>randomNumber){
        result.style.display = 'block';
        result.innerHTML = 'O número é menor! <i class="fa-solid fa-circle-down"></i>';
        updateScore();
    }else{
        result.style.display = 'block';
        result.style.color = 'green';
        result.innerHTML = 'Voce acertou!!! <i class="fa-solid fa-check"></i>';
        title.innerHTML = 'Parabéns 🙂'
        tip[0].style.display = 'none';
        tip[1].style.display = 'none';
        updateScore();
        gameIsOver = true;
    }
}

function playAgainButton(){
    buttonPlayAgain = document.createElement('button');
    buttonPlayAgain.innerText = 'Jogar Novamente';
    buttonPlayAgain.classList.add('playAgain');
    getMainDiv.appendChild(buttonPlayAgain)
}

function updateScore(){
    scoreCounter++;
    score.innerText=scoreCounter;
    if(scoreCounter==10){
        gameIsOver=true;
    }
}