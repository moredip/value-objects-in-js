const Money = require('../lib/money');

describe('a money value object', function () {
  it('has a dollar value', function () {
    const tenDollars = Money(10,'USD');
    expect(tenDollars).to.exist;

    expect(tenDollars.currency()).to.equal('USD');
    expect(tenDollars.amount()).to.equal(10);
  });
});
