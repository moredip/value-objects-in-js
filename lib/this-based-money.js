'use strict';

module.exports = class Money {
  constructor(amount,currency){
    this._amount = amount;
    this._currency = currency;
  }

  currency(){
    return this._currency;
  }

  amount(){
    return this._amount;
  }

  equals(other){
    return this._amount === other._amount
      && this._currency === other._currency;
  }
}
