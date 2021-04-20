const Engineer = require("../lib/Engineer")


    describe('Engineer class', () => {
        it('takes in input and returns a new Engineer object', () => {
        const engineer = new Engineer("serena",27,"serena.com", "https://github.com/SerenaChandler")

        expect(engineer.github).toBe("https://github.com/SerenaChandler")
        expect(engineer.id).toBe(27)
        expect(engineer.name).toBe("serena")
        expect(engineer.email).toBe("serena.com")
        });
    });
