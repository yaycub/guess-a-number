// Initializing State
import compareNumbers from './compare-numbers.js';
const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit-button');
const triesDisplay = document.getElementById('number-of-tries'); 
const highOrLowDisplay = document.getElementById('high-or-low');
let numberOfTriesDisplay = 2;
const correctNumber = Math.floor((Math.random() * 20) + 1);
triesDisplay.textContent = numberOfTriesDisplay + 1;

const isNumberHighOrLow = () => {
    const userInput = guessInput.value;
    const sanitizedUserInput = Number(userInput);
    let checkResults = compareNumbers(sanitizedUserInput, correctNumber);
    
    if (checkResults === 0){
        highOrLowDisplay.textContent = 'YOU WINNNNNNNNN YESSSSSSS';
    } else if (checkResults === 1 && numberOfTriesDisplay > 0) {
        highOrLowDisplay.textContent = 'Too High! Try a lower number';
        numberOfTriesDisplay --;
        triesDisplay.textContent = numberOfTriesDisplay + 1;
    } else if (checkResults === -1 && numberOfTriesDisplay > 0) {
        highOrLowDisplay.textContent = 'Too low! Try a higher number';
        numberOfTriesDisplay --;
        triesDisplay.textContent = numberOfTriesDisplay + 1;
    } else if (numberOfTriesDisplay === 0) {
        highOrLowDisplay.textContent = 'You lose :( Refresh and try again!';
        submitButton.disabled = true;
        triesDisplay.textContent = 0;
    }
};
// Submit button function
submitButton.addEventListener('click', isNumberHighOrLow);


