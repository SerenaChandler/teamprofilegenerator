const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

team = []

const makeHTML = (team) =>
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

    
    
</body>
</html>`



    function addManager() {
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

        ])
        .then(function (data) {
            const name = data.managerName
            const id = data.managerID
            const email = data.managerEmail
            const officeNumber = data.officeNumberconst 
            const manager = new Manager(name, id, email, officeNumber)
            team.push(manager)
            addEmployee()
        })};

    function addEmployee() {
        inquirer
        .prompt ([{
            type: "list",
            message: "Which employee would you like to add?",
            name: "addEmployee",
            choices: ["Engineer", "Intern", "None"]
        }])
        .then(function(data) {

            switch (data.addEmployee) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                case "None":
                    makeHTML();
                    break;

            }
        })}

    function addEngineer() {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "Please enter their name?",
                name: "name"
            },
            {
                type: "input",
                message: "what is the engineers's ID?",
                name: "Id"
            },
            {
                type: "input",
                message: "Please enter their email adress",
                name: "email"
            },
            {
                type: "input",
                message: "Please enter their GitHub",
                name: "GitHub"
            }
        ])
        .then(function(data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const github = data.github
            const engineer = new Engineer(name, id, email, github)
            team.push(engineer)
            addEmployee()
        });
    };

    function addIntern() {
        inquirer
        .prompt ([
            {
                type: "input",
                message: "Please enter their name?",
                name: "name"
            },
            {
                type: "input",
                message: "what is the Intern's ID?",
                name: "Id"
            },
            {
                type: "input",
                message: "Please enter their email adress",
                name: "email"
            },
            {
                type: "input",
                message: "Please enter their school",
                name: "school"
            }
        ])
        .then(function(data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const school = data.school
            const intern = new Intern(name, id, email, github)
            team.push(intern)
            addEmployee()
        });
    }

addManager()
        
    


