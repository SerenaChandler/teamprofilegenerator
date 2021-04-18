const Employee = require('../lib/Employee')

    describe("Employee class", () => {
        it("takes in arguments and returns a new employee", () => {
            const employee = new Employee("serena", 4, "serena.com")

            expect(employee.name).toBe("serena");
            expect(employee.id).toBe(4);
            expect(employee.email).toBe("serena.com")
             
        });
    });