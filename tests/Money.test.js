const Dollar = require('../classes/Dollar');
const Franc = require('../classes/Franc');

describe('Monies', () => {
  let dollar, franc;

  beforeEach(() => {
    dollar = new Dollar(5);
    franc = new Franc(3);
  })

  it('should have a numerical value', () => {
    expect(dollar.amount).toBe(5);
    expect(franc.amount).toBe(3);
  })

  describe('it should be able to handle multiplication', () => {
    it('should return a new dollar', () => {
      expect(dollar.times(1)).toEqual(new Dollar(5));
      expect(franc.times(1)).toEqual(new Franc(3));
    });

    it('should accurately multiply more than once', () => {
      expect(dollar.times(3)).toEqual(new Dollar(15));
      expect(dollar.times(5)).toEqual(new Dollar(25));
      expect(franc.times(5)).toEqual(new Dollar(15));
      expect(franc.times(7)).toEqual(new Dollar(21));

    });  
  });

  it(`should test equality`, () => {
    expect(dollar.equals(new Dollar(5))).toBe(true);
    expect(dollar.equals(new Dollar(7))).toBe(false);
    expect(franc.equals(new Franc(3))).toBe(true);
    expect(franc.equals(new Franc(7))).toBe(false);

    
  });
})
