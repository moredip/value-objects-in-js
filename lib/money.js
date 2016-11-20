module.exports = function Money(_amount,_currency){
  function currency(){
    return _currency;
  }

  function amount(){
    return _amount;
  }

  return {
    currency,
    amount
  };
}
