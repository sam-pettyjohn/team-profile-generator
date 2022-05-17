![MIT](https://img.shields.io/badge/License-MIT-blue)
# Team Profile Generator

## Description

A Node.js command-line application that takes information about employees on a software engineering team and generates an HTML webpage that displays summarys for each person.

Please use this [video] (`TBD`) for a walkthough tutorial of the Team Profile Generator.

## Table of Contents

- [Team Profile Generator](#team-profile-generator)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Mock-up](#mock-up)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Built With](#built-with)
  - [Questions](#questions)
  - [License](#license)

## User Story

~~~
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
~~~

## Acceptance Criteria

~~~
GIVEN a command-line application that accepts user input
- [x] WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
- [x] WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
- [x] WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
- [x] WHEN I start the application
THEN I am prompted to enter the team manager's name, employee ID, email address, and office number
- [x] WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
- [x] WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
- [x] WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
- [x] WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
~~~

## Mock-up

![mockup] (`TBD`)

~~~

==========
NAVIGATION
==========

.
├── __tests__/             //jest tests
│   ├── Employee.test.js
│   ├── Engineer.test.js
│   ├── Intern.test.js
│   └── Manager.test.js
├── dist/                  // rendered output (HTML) and CSS style sheet      
├── lib/                   // classes
├── templates/             // templates to render employee types & output HTML
├── .gitignore             // indicates which folders and files Git should ignore
├── index.js               // runs the application
└── package.json           
~~~

## Installation

User will need to download or clone the repository from GitHub and use CLI (command-line interface) within VSCode (or similar text-editor).

## Usage

User will initiate the Team Profile Generator by typing "node index" within the CLI and will be requested to answer provided questions. Please do not leave any blanks. If you do not have an answer, please type "NONE" or similar verbiage.

## Contributing

For any ideas or feedback, please see my contact information [below](#questions).

## Tests

Using the CLI, type "node index" and follow questions.

## Built With
- HTML
- CSS
- Markdown
- JavaScript
- Node.js
- Jest
- Inquirer

*This README.md file rendered by my READ-ME Generator. Try it out [HERE!](https://github.com/sam-pettyjohn/read-me-generator)*

## Questions

For any questions, please reach out to me through the following resources:

Name: Samuel Pettyjohn <br>
Title: Aspiring Developer <br>
Email: <sammpj47@gmail.com> <br>
GitHub: <https://github.com/sam-pettyjohn/> <br>

## License

MIT License

Copyright (c) 2022 Samuel Pettyjohn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.