const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  //throw new NotImplementedError('Not implemented');
  if (n.toString().length == 1){
    return (n)
  }
  else if (n.toString().length > 1) {
    do{
      n = n.toString().split('')
      n = n.reduce(function(sum, elem) {
      return (sum + (+elem));
      }, 0);
    } while (n.toString().length > 1)
    return (n)
  }
}

module.exports = {
  getSumOfDigits
};
