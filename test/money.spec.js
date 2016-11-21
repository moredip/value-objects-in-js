const ThisLessMoney = require('../lib/closure-based-money');
const ThisLessMoneyWithSymbol = require('../lib/money');
const ClassBasedMoney = require('../lib/this-based-money');

describe('a class-based money value object', function () {
  function createMoney(amount,currency){ 
    return new ClassBasedMoney(amount,currency); 
  }
  describeMoney(createMoney);
});

describe('a this-less money value object using Friend State Accessor', function () {
  describeMoney(ThisLessMoneyWithSymbol);
  describe('limitations', function () {
    it('does not *perfectly* encapsulate the state accessor', function () {
      const someMoney = ThisLessMoneyWithSymbol(5,'USD');
      const privateProperties = Object.getOwnPropertySymbols(someMoney);
      expect(privateProperties).not.to.be.empty;
      const stateAccessor = privateProperties[0];
      const privateState = someMoney[stateAccessor]();
      expect(privateState).to.deep.equal({_amount:5,_currency:'USD'});
    });
  });
});

describe('a this-less money value object exposing state via regular method', function () {
  describeMoney(ThisLessMoney);
});

function describeMoney(createMoney){
  describe('10 USD', function () {
    const tenDollars = createMoney(10,'USD');

    it('has a dollar value', function () {
      expect(tenDollars).to.exist;
      expect(tenDollars.currency()).to.equal('USD');
      expect(tenDollars.amount()).to.equal(10);
    });

    it('equals another 10 USD value', function () {
      const anotherTenDollars = createMoney(10,'USD');
      expect(tenDollars.equals(anotherTenDollars)).to.be.true;
    });

    it('does not equals an 11 USD value', function () {
      const elevenDollars = createMoney(11,'USD');
      expect(tenDollars.equals(elevenDollars)).to.be.false;
    });

    it('does not equals a 10 GBP value', function () {
      const tenPounds = createMoney(10,'GBP');
      expect(tenDollars.equals(tenPounds)).to.be.false;
    });
    
  });
}
