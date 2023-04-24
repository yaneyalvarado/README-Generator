// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title'
    },
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'Description'
    },
    {
        type: 'input',
        message: 'How can you install this project?',
        name: 'Installation'
    },
    {
        type: 'input',
        message: 'How can the README GENERATOR be used?',
        name: 'Usage'
    },
    {
        type: 'input',
        message: 'Who are the contributers?',
        name: 'Contributing'
    },
    {
        type: 'input',
        message: 'Are there any tests?',
        name: 'Tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email'
    },
    {
        type: 'input',
        message: 'What license would you like to use?',
        options: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((writeToFile, data) => {
        console.log("Creating ReadMe");
    })
}

// Function call to initialize app
init();
