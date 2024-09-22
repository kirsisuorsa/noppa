'use strict'

const dice = document.querySelector('#dice')

const getRandomIntNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

dice.addEventListener('click', () => {
    const randomizedNumber = getRandomIntNumberInRange(1, 6)
    const diceResult = document.querySelector('#dice');
    diceResult.innerHTML = '<img src="./images/' + randomizedNumber + '.png">'
})