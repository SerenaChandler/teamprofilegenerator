const Engineer = require("../lib/Engineer")


    describe('Engineer class', () => {
        it('takes in input and returns a new Engineer object', () => {
        const engineer = new Engineer("https://github.com/SerenaChandler")

        expect(engineer.github).toBe("https://github.com/SerenaChandler")
        });
    });
