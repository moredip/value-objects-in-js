const ThisLessMoney = require('../lib/money');
const ClassBasedMoney = require('../lib/this-based-money');

describe('a class-based money value object', function () {
  function createMoney(amount,currency){ 
    return new ClassBasedMoney(amount,currency); 
  }
  describeMoney(createMoney);
});

describe('a this-less money value object', function () {
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
