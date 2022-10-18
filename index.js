
const inquirer = require('inquirer');

const fs = require('fs');

const generateMarkdown = require('./Utilities/generateMarkdown');

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
        name: 'tableofcontents',
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
        message: 'Select the license that you are using for your project. If there is no license, select "None".',
        name: 'license',
        choices: ['Apache 2.0', 'MIT', 'GPL 3.0', 'BSD 3', 'None']
    }
];

function init() {
    inquirer.prompt(questions)
    .then((responses) => {
    const readmeInfo = generateMarkdown(responses);

    fs.writeFile('README.md', readmeInfo, (err) => err ? console.log(err) : console.log('The README.md has been successfully generated.'))
    })
}

init();