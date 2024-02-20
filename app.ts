// import promptSync from 'prompt-sync';

// // Random number from 1 - 10
// const randInt = Math.floor(Math.random() * 10) + 1;
// // This variable is used to determine if the app should continue prompting the user for input
// let userGuess = false;

// while (!userGuess) {
//     // Get user input
//     let guess = promptSync('Guess a number between 1 to 10');
//     // Convert the string input to a number
//     let userNum: number = Number(guess);

//     // Compare the guess to the secret answer and let the user know.
//     if (userNum === randInt) {
//         console.log('Congrats, you got it!');
//         userGuess = true;
//     } else {
//         console.log('Sorry, guess again!');
//     }
// }
// ABOVE code was written but it keeps giving error on line 10, I Use Google's AI to conver it
// from promt-sync to readline and it worked fine.

import * as readline from 'readline';

// Random number from 1 - 10
const randInt = Math.floor(Math.random() * 10) + 1;
// This variable is used to determine if the app should continue prompting the user for input
let userGuess = false;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Asynchronous function to handle user input and guessing
const askAndGuess = () => {
    rl.question('Guess a number between 1 and 10: ', (guess) => {
        // Convert the string input to a number
        const userNum: number = Number(guess);

        // Compare the guess to the secret answer and let the user know.
        if (userNum === randInt) {
            console.log('Congrats, you got it!');
            userGuess = true;
            rl.close(); // Close the readline interface if correct
        } else {
            console.log('Sorry, guess again!');
            // Continue asking for guesses as long as userGuess is false
            if (!userGuess) {
                askAndGuess();
            }
        }
    });
};

askAndGuess(); 