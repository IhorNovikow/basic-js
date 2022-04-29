const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
 /* try {
    if(typeof(date)=='function'){
      return(false)
    }else if(date==''){
      return ('Unable to determine the time of year!')
    }
    if(date=='winter'){return ('winter')}
    if(date=='spring'){return ('spring')}
    if(date=='summer'){return ('summer')}
    if(date=='autumn'){return ('autumn')}
    let c=date.getMonth()
   console.log(c)
    if(0 <= c  && c < 2 || c==11){return('winter')
    }else if(2 <= c && c < 5){return('spring')
    }else if(5 <= c && c < 8){return('summer')
    }else if(8 <= c && c < 10){return('autumn')}     
    } catch {
    return('Invalid date!')
    }*/

}

module.exports = {
  getSeason
};
