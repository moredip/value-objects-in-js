// Friend State Accessor pattern
const stateAccessor = Symbol(['Money#getState']);
function stateFrom(other){
  return other[stateAccessor]();
}

module.exports = function Money(_amount,_currency){
  function currency(){
    return _currency;
  }

  function amount(){
    return _amount;
  }

  function equals(other){
    other = stateFrom(other);
    return _amount === other._amount
      && _currency === other._currency;
  }

  function getState(){
    return {_amount,_currency};
  }

  return {
    currency,
    amount,
    equals,
    [stateAccessor]: getState
  };
}
