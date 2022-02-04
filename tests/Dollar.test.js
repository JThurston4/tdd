const Dollar = require('../classes/Dollar');

describe('The Dollar', () => {
  // let dollar = new Dollar

  it('should have a numerical value', () => {
    let dollar = new Dollar(5);
    expect(dollar.amount).toBe(5)
  })
})
