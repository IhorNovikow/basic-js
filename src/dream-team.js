const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  let f=[]
  if(typeof(members)=="function" || members == undefined){
    return (false)
  }
    for(let i=0; i<members.length; i++){
      if (isNaN(+members[i])&&typeof(members[i])=="string"){
        let c= members[i].toUpperCase().split('')
       for(let j=0; j<c.length;j++){
              if (!(c[j]==' ')){
               f.push(c[j])
                j=10000
              }       
        }
      }
    }
    return (f.sort().join(''))
}

module.exports = {
  createDreamTeam
};
