// Initializing State
import compareNumbers from './compare-numbers.js';
const guess = document.getElementById('guess');
const submitButton = document.getElementById('submit-button');
const triesDisplay = document.getElementById('number-of-tries'); 
const highOrLow = document.getElementById('high-or-low');
let numberOfTries = 2;
const correctNumber = Math.floor((Math.random() * 20) + 1);
triesDisplay.textContent = numberOfTries + 1;

submitButton.addEventListener('click', () => {
    const userInput = guess.value;
    const sanitizedUserInput = Number(userInput);
    console.log(correctNumber);
    let upOrDown = compareNumbers(sanitizedUserInput, correctNumber);
    
    if (upOrDown === 0){
        highOrLow.textContent = 'YOU WINNNNNNNNN YESSSSSSS';
    } else if (upOrDown === 1 && numberOfTries > 0) {
        highOrLow.textContent = 'Too High! Try a lower number';
        numberOfTries --;
        triesDisplay.textContent = numberOfTries + 1;
    } else if (upOrDown === -1 && numberOfTries > 0) {
        highOrLow.textContent = 'Too low! Try a higher number';
        numberOfTries --;
        triesDisplay.textContent = numberOfTries + 1;
    } else if (numberOfTries === 0) {
        highOrLow.textContent = 'You lose :( Refresh and try again!';
        submitButton.disabled = true;
        triesDisplay.textContent = 0;
    }
});



