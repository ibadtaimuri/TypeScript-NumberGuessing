"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
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
        const userNum = Number(guess);
        // Compare the guess to the secret answer and let the user know.
        if (userNum === randInt) {
            console.log('Congrats, you got it!');
            userGuess = true;
            rl.close(); // Close the readline interface if correct
        }
        else {
            console.log('Sorry, guess again!');
            // Continue asking for guesses as long as userGuess is false
            if (!userGuess) {
                askAndGuess();
            }
        }
    });
};
askAndGuess();
