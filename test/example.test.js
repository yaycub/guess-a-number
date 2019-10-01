// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compareNumbers from '../compare-numbers.js';
const test = QUnit.test;

test('should return -1 if guess is less than correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let guess = 1;
    let correctNumber = 2;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, '-1');
});

test('should return 1 if guess is more than correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let guess = 2;
    let correctNumber = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, '1');
});

test('should return 0 if guess is equal than correctNumber', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    let guess = 1;
    let correctNumber = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compareNumbers(guess, correctNumber);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, '0');
});
