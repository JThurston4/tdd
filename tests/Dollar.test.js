const Dollar = require('../classes/Dollar');

describe('The Dollar', () => {
  let dollar;

  beforeEach(() => {
    dollar = new Dollar(5);
  })

  it('should have a numerical value', () => {
    expect(dollar.amount).toBe(5);
  })

  describe('it should be able to handle multiplication', () => {
    it('should return a new dollar', () => {
      expect(dollar.times(1)).toEqual(new Dollar(5));
    });

    it('should accurately multiply more than once', () => {
      expect(dollar.times(3)).toEqual(new Dollar(15));
      expect(dollar.times(5)).toEqual(new Dollar(25));

    });

  it(`should test equality`, () => {
    expect(dollar.equals(new Dollar(5))).toBe(true);
    expect(dollar.equals(new Dollar(7))).toBe(false);
  })


  })
})
