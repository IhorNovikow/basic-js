const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  //throw new NotImplementedError('Not implemented');
  if(!(Array.isArray(arr))){
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }else{
      let arr2=[]
  for(let i=0;i<arr.length;i++){
    arr2.push(arr[i])
  }
 

for(let i=0; i<arr2.length; i++){
  if(arr2[i]=='--double-next'){
    if (arr2[i+1]==undefined ){
      arr2.splice(i,1) 
    }else{
    arr2.splice((i+1),0,arr2[i+1])
    arr2.splice(i,1) 
    }       
    }
  if(arr2[i]=='--discard-next'){
    if(arr2[i+2]=='--discard-prev'|| arr2[i+2]=='--double-prev'){
      arr2.splice((i+2),1)
      arr2.splice((i+1),1)
      arr2.splice(i,1)
    }else{
    arr2.splice((i+1),1)
    arr2.splice(i,1)
    }
    }
  if(arr2[i]=='--discard-prev'){
    if(arr2[i-1]==undefined){
    arr2.splice(i,1)
    }else{
    arr2.splice((i-1),1) 
    arr2.splice(i-1,1)
    }}
  if(arr2[i]=='--double-prev'){
    if(arr2[i-1]==undefined){
      arr2.splice(i,1)
    }else{
      arr2.splice((i-1),0,arr2[i-1]) 
    arr2.splice(i+1,1)
    }    
    }
}
  return(arr2)
  }
}

module.exports = {
  transform
};
