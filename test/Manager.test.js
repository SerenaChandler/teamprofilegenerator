const Manager = require('../lib/Manager')

describe('Manager class', () => {
    it('takes in input and returns a new Manager object', () => {
    const manager = new Manager("serena", 27, "serena.com", 1137)
  
    expect(manager.officeNumber).toBe(1137)
    expect(manager.email).toBe("serena.com")
    expect(manager.id).toBe(27)
    expect(manager.name).toBe("serena")
    });
});