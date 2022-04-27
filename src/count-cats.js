const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(a) {
  //throw new NotImplementedError('Not implemented');
  let number = 0 
 for(let i=0; i<a.length;i++){
   for(let j=0; j<a[i].length; j++){
     if(a[i][j]=='^^'){
       number++
     }
   }
 }
return(number)  
}

module.exports = {
  countCats
};
