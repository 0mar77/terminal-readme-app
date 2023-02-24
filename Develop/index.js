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
        choices:['None', 'Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Common Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.0', 'Mozilla Public License', 'The Unlicense'],
        default: 'None'
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
