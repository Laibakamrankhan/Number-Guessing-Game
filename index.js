#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log();
const answer = await inquirer.prompt([{ name: "userGuessedNumber", type: "number", message: "Please Guessed a Number Between 1-6" }]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulation! You Guessed Right Number");
}
else {
    console.log("You Guessed Wrong Number");
}
