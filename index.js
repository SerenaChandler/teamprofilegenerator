const inquirer = require('inquirer');
const fs = require('fs');
const Choice = require('inquirer/lib/objects/choice');

const makeHTML = (input) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="./dist/style.css">
    <title>Document</title>
</head>
<body>
    <header>
        <h1 class="header">My Team</h1>
    </header>

    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="employeeBox">
                    <div class="employeeTitle">
                        <h1 class="text">${input.managerName}</h1>
                        <h2 class="text">Manager</h2>
                    </div>
                    <div class="employeeInfo">
                        <ul>
                            <p class="list">ID: 2</p>
                            <p class="list">Email: serena.com</p>
                            <p class="list">Office Number: 3</p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</body>
</html>`









inquirer
    .prompt([
        {
            type: "input",
            message: "what is the manager's name?",
            name: "managerName"
        },
        {
            type: "input",
            message: "what is the manager's ID?",
            name: "managerID"
        },
        {
            type: "input",
            message: "what is the manager's email address?",
            name: "managerEmail"
        },
        {
            type: "input",
            message: "what is the manager's Office Number?",
            name: "managerOffice"
        },
        {
            type: "list",
            message: "would you like to add a new Employee?",
            name: "addEmployee",
            choices: ["Engineer", "Intern", "Finish"]
        },

    ])












    .then((input) => {
        const employeeList = makeHTML(input);

        fs.writeFile("Team.html", employeeList, (err) =>
        err ? console.log(err) : console.log("creating team")
        );
    });