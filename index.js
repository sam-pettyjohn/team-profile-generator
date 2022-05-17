const fs = require("fs");
const inquirer = require("inquirer");

const path = require("path");
const outputDir = path.resolve(__dirname, "dist");
const outputPath = path.join(outputDir, "index.html");

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const render = require("./lib/render-html");

const members = [];
const id = [];

function prompt() {

    function createManager() {
        console.log(
            
`
=======================
PLEASE CREATE YOUR TEAM
=======================
`
            
        );
        inquirer.prompt([
            {
                type: "input",
                name: "mgrName",
                message: "Please enter the MANAGER'S full name:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "mgrId",
                message: "Please enter the MANAGER'S id:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                    console.log("Please enter at least one character!")
                    return false;
                    }
                }
            },
            {
                type: "input",
                name: "mgrEmail",
                message: "Please enter the MANAGER'S email:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "mgrOfficeNum",
                message: "Please enter the MANAGER'S office number:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            }
        ]).then(response => {
            const manager = new Manager(response.mgrName, response.mgrEmail, response.mgrId,  response.mgrOfficeNum);
            members.push(manager);
            id.push(response.mgrId);
            createTeam();
        });
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "employeeSelect",
                message: "Please select type of employee:",
                choices: [
                    "Intern",
                    "Engineer",
                    "*EXIT*"
                ]
            }
        ]).then(userInput => {
            switch (userInput.employeeSelect) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    genTeam();
            }
        });
    }

    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engName",
                message: "Please enter the ENGINEER'S full name:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engId",
                message: "Please enter the ENGINEER'S id:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engEmail",
                message: "Please enter the ENGINEER'S email:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "engGithub",
                message: "Please enter the ENGINEER'S GitHub username:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
                 
            }
        ]).then(response => {
            const engineer = new Engineer(response.engName, response.engEmail, response.engId, response.engGithub);
            members.push(engineer);
            id.push(response.engId);
            createTeam();
        });
    };
    
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "Please enter INTERN'S full name:",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    } return "Please enter value."
                }
            },
            {
                type: "input",
                name: "internId",
                message: "Please enter INTERN'S id:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internEmail",
                message: "Please enter INTERN'S email:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "internUni",
                message: "Please enter INTERN'S university:",
                validate: response => {
                    if (response) {
                        return true;
                    } else {
                        console.log("Please enter at least one character!")
                        return false;
                    }
                }
            }
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internEmail, answers.internId,  answers.internUni);
            members.push(intern);
            id.push(answers.internId);
            createTeam();
        });
    };


    function genTeam() {
        if (!fs.existsSync(outputDir)) {
            fs.mkdirSync(outputDir)
        }
        console.log(members);
        fs.writeFileSync(outputPath, render(members), "UTF-8");
    }
    createManager();

};

prompt();