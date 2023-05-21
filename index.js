const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter up to three characters',
      name: 'text',
      validate: function (textInput) {
        if (textInput.length > 3) {
            return "Please only enter 3 characters or less."
        }
        return true;
      }
    },
    {
      type: 'input',
      message: 'Please pick a color for the text',
      name: 'textColor',
    },
    {
      type: 'list',
      message: "Please pick one of the following shapes",
      name: 'shape',
    },
    {
      type: 'input',
      messsage: 'Please pick a color for the shape',
      name: 'shapeColor',
    },
  ])
  .then((answers) => {
    const 
  })