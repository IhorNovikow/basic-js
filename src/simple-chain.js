const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {

  array: [],

  getLength(){
    return this.array.length
  },

  addLink(value){
    if (value !== undefined) {
      this.array.push(value)
      return (this)
    }else{
      this.array.push('( )')
      return (this)
    }
  },

  removeLink(position){
    let a = position - 1
    if (a >= 0 && Number.isInteger(a) && a < this.array.length - 1) {
      this.array.splice(a, 1)
      return (this)
    }else{
      this.array = []
      throw new Error('You can\'t remove incorrect link!')
    }

  },

  reverseChain(){
    this.array.reverse()
    return (this)
  },

  finishChain(){
    let c = this.array.map(e => `( ${e} )`)
    this.array = []
    return(c.join('~~'))
  }
};

module.exports = {
  chainMaker
};
