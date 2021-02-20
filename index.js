// inquirer module
const inquirer = require("inquirer");
// module for files
const fs = require("fs");
// validate email
var validateEmail = require("email-validator");

// BASICS - capture user input by calling inquirer
inquirer.prompt([
    // {
    //     type: 'confirm',
    //     message: 'Do you want to create a README for your project?',
    //     default: true,
    //     name: 'begin'

    // },
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Provide your project Description:',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What Installations are needed to run this program?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Provide examples of Usage:',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Provide Test Instructions:',
        name: 'test'
    },
    {
        type: 'list',
        message: 'Which license do you want to use?',
        choices: ["IBM", "MIT"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Provide Contributors:',
        name: 'contributors'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
]).then(response => {
    // display user input
    console.log(response);

    // push data to README-GEN file
    fs.writeFile(
        // file name
        "README-GEN.md",
        // data
        `# ${response.project} \n` + 
        `## Table of Contents \n * Description \n * Installation \n * Usage \n * Testing \n * License \n * Contributors \n * Questions \n` +
        `## Description \n ${response.description} \n` +
        `## Installation Instructions \n ${response.installation} \n` +
        `## Usage \n ${response.usage} \n` +
        `## Testing Instructions \n ${response.test} \n` +
        `## License \n ${response.license} \n` +
        `## Contributors \n ${response.contributors} \n` +
        `## Questions \n * GitHub username: ${response.username} \n * GitHub email: ${ response.email } \n`,
        // callback
        (err) =>
        err ? console.error(err) : console.log("Boom! Created README")
    );

});

