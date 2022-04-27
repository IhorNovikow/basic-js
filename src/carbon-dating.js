const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  //throw new NotImplementedError('Not implemented');
  const HALF_LIFE_PERIOD = 5730;
  if( +sampleActivity<0 || +sampleActivity>15 || sampleActivity=='0' || sampleActivity=='' || sampleActivity==' ' || sampleActivity==' \n\t\r' || typeof(sampleActivity)=="object"){
    return(false)
  }
  if (typeof(+sampleActivity) =="number" && !isNaN(+sampleActivity) && typeof(sampleActivity) != "number"){
    let a=Math.log(15/sampleActivity)
    let b=0.693;
    let c=Math.ceil(Math.log((15/sampleActivity))/(0.693/HALF_LIFE_PERIOD))
    console.log(isFinite(c))
    if(!isNaN(c) && isFinite(c)){
      return(c) 
    }else{
      return(false)
    }        
  }else{
    return(false)
  } 
}

module.exports = {
  dateSample
};
