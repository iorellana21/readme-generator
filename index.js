// inquirer module
const inquirer = require("inquirer");
// module for files
const fs = require("fs");
// validate email
var validateEmail = require("email-validator");



// BASICS - capture user input by calling inquirer
inquirer.prompt([
    {
        type: 'confirm',
        message: 'Do you want to create a README for your project?',
        default: true,
        name: 'begin'

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
    },
    {
        type: 'input',
        message: 'what is the title of your project?',
        name: 'project'
    },
    {
        type: 'input',
        message: 'Provide your project Description: ',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What Installations are needed to run this program?',
        name: 'installation'
    },
    {
        type: 'list',
        message: 'Which license do you want to use?',
        choices: ["IBM", "MIT"],
        name: 'license'
    },
    {
        type: 'input',
        message: 'Provide Contributors: ',
        name: 'contributors'
    }
]).then(response => {
    // display user input
    console.log(response);

    // push data to README-GEN file
    fs.appendFile(
        // file name
        "README-GEN.md",
        // data
        `# ${response.project} \n ${response.description} \n` +
        `## Installation \n ${response.installation} \n` +
        `## License \n ${response.license} \n` +
        `## Contributors \n ${response.contributors} \n` +
        `Github email: ${response.email} \n \n`,
        // callback
        (err) =>
        err ? console.error(err) : console.log("Boom! Created README")
    );

});

