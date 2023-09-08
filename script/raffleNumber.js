const leastValue = 1
const biggerValue = 100

const screenLeast = document.querySelector('#menor-valor')
const screenBigger = document.querySelector('#maior-valor')

screenLeast.innerHTML = leastValue
screenBigger.innerHTML = biggerValue

function getRandomNumber(){
    return(parseInt((Math.random()*biggerValue)+1))
}