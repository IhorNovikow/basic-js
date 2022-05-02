const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  let arr = []
  let i = 0
  if (s1.length == 0 || s2.length == 0) {
    return (0)
  } else {
    while (i < s1.length) {
      if (s2.indexOf(s1[i]) != -1){
        s2 = s2.replace(s1[i], '')
        arr.push(s1[i])
      }
      i++
    }
    return arr.length
  }
}

module.exports = {
  getCommonCharacterCount
};
