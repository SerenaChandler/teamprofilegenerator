const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github) {
        super("serena", 4, "serena.com")
        this.github = github
    }
    getGitHub() {
        return this.github
    }
    getRole() {
        return Engineer
    }
}

module.exports = Engineer;