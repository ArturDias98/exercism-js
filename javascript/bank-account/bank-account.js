//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.isOpen = false;
    this._balance = 0;
  }

  validate(value) {
    if (!this.isOpen) {
      throw new ValueError();
    }
    if (value < 0) {
      throw new ValueError();
    }
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = true;
    this._balance = 0;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
    this.isOpen = false;
  }

  deposit(value) {
    this.validate(value);
    this._balance += value;
  }

  withdraw(value) {
    this.validate(value);
    if (value > this._balance) {
      throw new ValueError();
    }
    this._balance -= value;
  }

  get balance() {
    this.validate(0);
    return this._balance;
  }
  set balance(value) {
    throw new Error();
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
