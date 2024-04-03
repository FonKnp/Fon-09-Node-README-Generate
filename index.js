// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your project title?",
    default: "title",
  },
  {
    type: "input",
    name: "description",
    message: "What is your project description?",
    default: "description",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
    default: "installation",
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage instructions?",
    default: "usage",
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: [
      "MIT License",
      "Mozilla Public License 2.0",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
    default: "license",
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the contribution guidelines?",
    default: "contributing",
  },
  {
    type: "input",
    name: "tests",
    message: "What are the test instructions?",
    default: "tests",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
    default: "username",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    default: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((data) =>
      writeToFile("./utils/README-test.md", generateMarkdown(data))
    )
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
