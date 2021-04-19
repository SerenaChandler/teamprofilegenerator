const Intern = require('../lib/Intern')

    describe('Intern class', () => {
        it('takes in input and returns a new Intern object', () => {
        const intern = new Intern("UCLA")
      

        expect(intern.school).toBe("UCLA")
        });
    });
