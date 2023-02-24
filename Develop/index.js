// TODO: Include packages needed for this application
const { generateMarkdown } = require('./utils/generateMarkdown.js');

const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?',
        validate: (answer) => {
            if(answer === ''){
                return 'What is the title of your project?'
            }
            return true
        }
    },

    {
        type: 'input',
        name: 'Description',
        message: 'What was your motivation for building this project? Why did you build this project? What problem does it solve?'
    },

    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps to install your project?'
    },

    {
        type: 'input',
        name: 'Usage',
        message: 'What are the instructions for using your project? Please add exapmles.'
    },

    {
        type: 'input',
        name: 'Contributing',
        message: 'How can other developers contribute to the project?'
    },

    {
        type: 'input',
        name: 'Tests',
        message: 'What are some tests you have created for your project?'
    },

    {
        type: 'list',
        name: 'License',
        message: 'What license do you want to use?',
        choices:['1', '2', '3'],
        default: '1'
    },

    {
        type: 'input',
        name: 'Github Username',
        message: 'What is your Github username?'
    },

    {
        type: 'input',
        name: 'Email',
        message: 'What is your Email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
