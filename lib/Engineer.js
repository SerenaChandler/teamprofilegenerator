const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(github) {
        const name = "serena"
        const id = 5
        const email = "serena.com"
        super(name, id, email)
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