const Money = require('../lib/money');

describe('a money value object', function () {
  describe('10 USD', function () {
    const tenDollars = Money(10,'USD');

    it('has a dollar value', function () {
      expect(tenDollars).to.exist;
      expect(tenDollars.currency()).to.equal('USD');
      expect(tenDollars.amount()).to.equal(10);
    });

    it('equals another 10 USD value', function () {
      const anotherTenDollars = Money(10,'USD');
      expect(tenDollars.equals(anotherTenDollars)).to.be.true;
    });

    it('does not equals an 11 USD value', function () {
      const elevenDollars = Money(11,'USD');
      expect(tenDollars.equals(elevenDollars)).to.be.false;
    });

    it('does not equals a 10 GBP value', function () {
      const tenPounds = Money(10,'GBP');
      expect(tenDollars.equals(tenPounds)).to.be.false;
    });
    
  });
});
