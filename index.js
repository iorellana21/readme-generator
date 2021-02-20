// inquirer module
const inquirer = require("inquirer");
// module for files
const fs = require("fs");



// BASICS - capture user input by calling inquirer
inquirer.prompt([
    {
        type: 'confirm',
        message: 'Do you want to work on your README?',
        default: true,
        name: 'begin'

    },
    {
        type: 'input',
        message: 'what is your name?',
        name: 'username'
    },
    {
        type: 'list',
        message: `hi how are you?`,
        choices: ["Im good thanks", "Im great thanks", "thanks"],
        name: 'feeling'
    }

]).then(response => {
    // display user input
    console.log(response);
    console.log(response.begin);
    console.log(response.username);
    console.log(response.feeling);

    // append data to README file using fs module
    fs.appendFile("README.md", response.username, (err) =>
        err ? console.error(err) : console.log("pushed to README")
    );


});

