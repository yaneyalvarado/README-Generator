// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'README-GENERATOR'
    }
    {
        type: 'input',
        message: 'Please describe your project',
        name: 'Description'
    }
    {
        type: 'input',
        message: 'How can you install this project?',
        name: 'Installation'
    }
    {
        type: 'input',
        message: 'How can the README GENERATOR be used?',
        name: 'Usage'
    }
    {
        type: 'input',
        message: 'Who are the contributers?',
        name: 'Contributing'
    }
    {
        type: 'input',
        message: 'Are there any tests?',
        name: 'Tests'
    }
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'GitHub'
    }
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
}

// Function call to initialize app
init();