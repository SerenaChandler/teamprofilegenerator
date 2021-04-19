class Employee {
    constructor(name, id, email) {
    this.name = name
    this.id = id
    this.email = email
}
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return Employee
    }

    quit() {
        console.log("\nGoodbye!");
        process.exit(0);
      }

}

module.exports = Employee;