const Money = require('../classes/Money');

describe('Monies', () => {
  let dollar, franc;

  beforeEach(() => {

    dollar = Money.dollar(5)
    franc = Money.franc(3);
  })

  it('should have a numerical value', () => {
    expect(dollar.amount).toBe(5);
    expect(franc.amount).toBe(3);
  })

  describe('it should be able to handle multiplication', () => {
    it('should return a new dollar', () => {
      expect(dollar.times(1)).toEqual(Money.dollar(5));
      expect(franc.times(1)).toEqual(Money.franc(3));
    });

    it('should accurately multiply more than once', () => {
      expect(dollar.times(3)).toEqual(Money.dollar(15));
      expect(dollar.times(5)).toEqual(Money.dollar(25));
      expect(franc.times(5)).toEqual(Money.dollar(15));
      expect(franc.times(7)).toEqual(Money.dollar(21));
    });
  });

  it(`should test equality`, () => {
    expect(dollar.equals(Money.dollar(5))).toBe(true);
    expect(dollar.equals(Money.dollar(7))).toBe(false);
    expect(franc.equals(Money.franc(3))).toBe(true);
    expect(franc.equals(Money.franc(7))).toBe(false);

    franc = Money.franc(10);
    dollar = Money.dollar(10);
    expect(dollar.equals(franc)).toBe(false);
  });
})
