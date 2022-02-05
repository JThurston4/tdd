const Dollar = require("./Dollar");

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

}


module.exports = Money;