const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  //throw new NotImplementedError('Not implemented');
  let strSTR=str
  let a = options.repeatTimes//количество повторений str
  let b = options.separator//  разделяет повторением str
  let c = options.addition//добавляться к каждому повторению str
  let d = options.additionRepeatTimes//количество повторений addition
  let e = options.additionSeparator//разделяет повторением addition
  

  if( a == undefined){ a = 1}
  if( b == undefined){ b = '+'}
  if(typeof(c)=='object' && c== undefined){
    c='null'
  }else if( c == undefined){ c = ''}
  if( d == undefined){ d = 1}
  if(d==1){ e = ''}
  if(e==undefined){e='|'}
  
  /*console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)*/
  let k=c
  c=c+e
  c=c.repeat(d-1)+k
  str=str+c+b
  str=str.repeat(a-1)+strSTR+c
  
  
 return(str)
}

module.exports = {
  repeater
};
