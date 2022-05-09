const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor (name, email, id, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;