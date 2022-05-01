const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  //throw new NotImplementedError('Not implemented');
 
    let a = []
    n = n.toString()
    for (let i = 0; i < n.length; i++){
      a.push(n.replace(n[i], ''))
    }
    return +a.sort((a, b) => b - a)[0]
  
}

module.exports = {
  deleteDigit
};
