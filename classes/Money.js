class Money {
  constructor(amount) {
    this.amount = amount;
  };

  equals(money) {
    return this.amount === money.amount && money.constructor.name === this.constructor.name;
  };

  static dollar(amount) {
    return new Dollar(amount)
  }

  static franc(amount) {
    return new Franc(amount)
  }

}

class Dollar extends Money {
  times(multiplier) {
    return new Dollar(this.amount * multiplier);
  }
}

class Franc extends Money {
  times(multiplier) {
    return new Franc(this.amount * multiplier);
  }
}

module.exports = Money;