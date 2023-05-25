const inquirer = require('inquirer');
const { Triangle, Circle, Square, } = require('./lib/shapes');
const Logo = require('./lib/logo');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'Please enter up to three characters',
      name: 'writtenText',
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
      name: 'textColor'
    },
    {
      type: 'list',
      message: "Please pick one of the following shapes",
      name: 'shapes',
      choices: ["Triangle", "Circle", "Square"]
    },
    {
      type: 'input',
      messsage: 'Please pick a color for the shape',
      name: 'shapeColor'
    }
  ])

  .then((answers) => {
    const { writtenText, textColor, shapes, shapeColor } = answers;
    const logo = new Logo();

    let pickedShape;
    if (shapes === "Triangle") {
        pickedShape = new Triangle();
    }
    else if (shapes === "Circle") {
        pickedShape = new Circle();
    }
    else if (shapes === "Square") {
        pickedShape = new Square();
    }

    pickedShape.setColor(shapeColor);
    logo.setShapes(pickedShape);
    logo.setText(writtenText, textColor);
    

    const madeLogo = logo.render();

    return fs.writeFile("./examples/logo.svg", madeLogo, (err) => err && console.error(err));
  })
  .then(() => console.log("Congratulations! Your new Logo has been created!"))
  .catch((err) => console.log(err.message));