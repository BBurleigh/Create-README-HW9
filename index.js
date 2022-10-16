// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Write a description about your project. This can include what your project is, why you created it (beyond it was a HW assignment), or how it works.',
        name: 'description'
    },
    {
        type: 'checkbox',
        message: 'Do you need a table of contents? If so, select what you would like to include in it. If not, select the last option, "None".',
        name: 'table-of-contents',
        choices: ['Installation', 'Usage', 'Credits', 'Tests', 'Questions', 'None']
    },
    {
        type: 'input',
        message: 'Does the user need to perform any actions/steps to install this project? If there are steps, walk through each step. If not, then say "No installation is required".',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'For this project, provide the instructions for how someone can use it. Providing examples of its usage as well as screenshots will also be helpful.',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who contributed to this project? Did you borrow or use code from other sources? List which sources and people assisted you in creating this project.',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Provide test instructions for how someone could test your project.',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Select the license that you are using for your project. If there is no license, select "Unlicensed".',
        name: 'license',
        choices: ['Apache', 'MIT', 'GPLv3', 'Unlicensed']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();