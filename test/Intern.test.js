const Intern = require('../lib/Intern')

    describe('Intern class', () => {
        it('takes in input and returns a new Intern object', () => {
        const intern = new Intern("serena",27, "serena.com","UCLA")
      

        expect(intern.school).toBe("UCLA")
        expect(intern.id).toBe(27)
        expect(intern.email).toBe("serena.com")
        expect(intern.name).toBe("serena")
        });
    });
