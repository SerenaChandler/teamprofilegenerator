const Employee = require('./Employee')

class Manager extends Employee {
    constructor(officeNumber) {
        const name = "serena"
        const id = 5
        const email = "serena.com"
        super(name, id, email)
        this.officeNumber = officeNumber
    }
    getRole() {
        return Manager
    }


}

module.exports = Manager;