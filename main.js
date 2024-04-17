#! /usr/bin/env node
import inquirer from "inquirer";
//  Declare a constant variable and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter your Sentence to count the number of words:",
    },
]);
const words = answers.sentence.trim().split(" ");
//print the array of words to the console
console.log(words);
//print the length of the array
console.log(`you sentence word count is ${words.length}`);
