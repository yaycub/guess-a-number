// Initializing State
import compareNumbers from './compare-numbers.js';
const guess = document.getElementById('guess');

const submitButton = document.getElementById('submit-button');
const numberOfTries = 3;
const correctNumber = 12;

submitButton.addEventListener('click', () => {
    const userInput = guess.value;
    let upOrDown = compareNumbers(userInput, correctNumber);
    
    if (upOrDown === 0){
        alert('You did it');
    } else if (upOrDown === 1) {
        alert('Too High');
    } else if (upOrDown === -1) {
        alert('Too low');
    }
});