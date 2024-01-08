// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the project title",
      },
      {
        type: "input",
        name: "description",
        message: "Provide a short description explaining your project",
      },
      {
        type: "input",
        name: "installation",
        message: "Provide a step-by-step description of how to get the development environment running.",
      },
      {
        type: "input",
        name: "usage",
        message: "Provide instructions and examples for use.",
      },
      {
        type: "input",
        name: "credits",
        message: "List your collaborators, if any, with links to their GitHub profiles.",
      },
      {
        type: "list",
        name: "license",
        message: "Select a license.",
        choices: ["MIT", "Boost", "MPL", "None"],
      },
      {
        type: "input",
        name: "test",
        message: "Explain how to test/run your project",
      },
      {
        type: "input",
        name: "github",
        message: "Enter Your Github UserName: ",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Your E-mail Id: ",
      },
        
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const outputPath = path.join(__dirname, 'output', fileName);
  
  fs.writeFile(outputPath, data, err => {
      if (err) {
          throw err;
      }
      console.log(`Your README.md file (${outputPath}) has been successfully created!`);
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(data => {
        writeToFile('README.md', generateMarkdown(data));
        console.log(data)
    })
}

// Function call to initialize app
init();
