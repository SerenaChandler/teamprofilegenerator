const Manager = require('../lib/Manager')

describe('Manager class', () => {
    it('takes in input and returns a new Manager object', () => {
    const manager = new Manager(1137)
  
    expect(manager.officeNumber).toBe(1137)
    });
});