const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  //throw new NotImplementedError('Not implemented');
  let a = []
  for (let i = 0; i < str.length; i++){
  let k = 1
    for(let j = i + 1; j <= str.length; j++){
      if(str[i] != str[j]){  
        if (k == 1){
          a.push(str[i])
        } else {
          a.push(k, str[i])
        }
        i = j - 1
        break
      }
      k = k + 1
    }   
  }
  return a.join('')
}

module.exports = {
  encodeLine
};
