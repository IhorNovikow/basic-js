const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  //throw new NotImplementedError('Not implemented');
  let arrArr=[
    [0,0,0],
    [0,0,0],
  ]
let arrArr3=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
  ]
if(matrix.length==2){
  if(matrix[0][0]==true){
    arrArr[0][1]++
    arrArr[1][0]++
    arrArr[1][1]++
  }
  if(matrix[0][1]==true){
    arrArr[0][0]++
    arrArr[0][2]++
    arrArr[1][1]++
    arrArr[1][0]++
    arrArr[1][2]++
  }
  if(matrix[0][2]==true){
    arrArr[0][1]++
    arrArr[1][2]++
    arrArr[1][1]++
  }
  if(matrix[1][0]==true){
    arrArr[0][0]++
    arrArr[1][1]++
    arrArr[0][1]++
  }
  if(matrix[1][1]==true){
    arrArr[1][0]++
    arrArr[0][1]++
    arrArr[1][2]++
    arrArr[0][0]++
    arrArr[0][2]++
  }
  if(matrix[1][2]==true){
    arrArr[0][2]++
    arrArr[1][1]++
    arrArr[0][1]++
  }
  if(matrix[0][0]==true){arrArr[0][0]=1}
  if(matrix[0][1]==true){arrArr[0][1]=1}
  if(matrix[0][2]==true){arrArr[0][2]=1}
  if(matrix[1][0]==true){arrArr[1][0]=1}
  if(matrix[1][1]==true){arrArr[1][1]=1}
  if(matrix[1][2]==true){arrArr[1][2]=1}
  
  return arrArr
  
}else if(matrix.length==3){
  if(matrix[0][0]==true){
    arrArr3[0][0]=1
    arrArr3[0][1]++
    arrArr3[1][0]++
    arrArr3[1][1]++
  }
  if(matrix[0][1]==true){
    arrArr3[0][1]=1
    arrArr3[0][0]++
    arrArr3[0][2]++
    arrArr3[1][1]++
    arrArr3[1][0]++
    arrArr3[1][2]++
  }
  if(matrix[0][2]==true){
    arrArr3[0][2]=1
    arrArr3[0][1]++
    arrArr3[1][2]++
    arrArr3[1][1]++
  }
  if(matrix[1][0]==true){
    arrArr3[1][0]=1
    arrArr3[0][0]++
    arrArr3[1][1]++
    arrArr3[0][1]++
    arrArr3[2][0]++
    arrArr3[2][1]++
  }
  if(matrix[1][1]==true){
    arrArr3[1][1]=1
    arrArr3[1][0]++
    arrArr3[0][1]++
    arrArr3[1][2]++
    arrArr3[0][0]++
    arrArr3[0][2]++
    arrArr3[2][0]++
    arrArr3[2][1]++
    arrArr3[2][2]++
  }
  if(matrix[1][2]==true){
    arrArr3[1][2]=1
    arrArr3[0][2]++
    arrArr3[1][1]++
    arrArr3[0][1]++      
    arrArr3[2][1]++
    arrArr3[2][2]++
  }
  if(matrix[2][0]==true){      
    arrArr3[1][0]++
    arrArr3[1][1]++
    arrArr3[2][1]++
  }
  if(matrix[2][1]==true){      
    arrArr3[2][0]++
    arrArr3[1][0]++
    arrArr3[1][1]++      
    arrArr3[1][2]++
    arrArr3[2][2]++
  }
  if(matrix[2][2]==true){      
    arrArr3[1][2]++
    arrArr3[1][1]++
    arrArr3[2][1]++
  }
  
  if(matrix[0][0]==true){arrArr3[0][0]=1}
  if(matrix[0][1]==true){arrArr3[0][1]=1}
  if(matrix[0][2]==true){arrArr3[0][2]=1}
  if(matrix[1][0]==true){arrArr3[1][0]=1}
  if(matrix[1][1]==true){arrArr3[1][1]=1}
  if(matrix[1][2]==true){arrArr3[1][2]=1}
  if(matrix[2][0]==true){arrArr3[2][0]=1}
  if(matrix[2][1]==true){arrArr3[2][1]=1}
  if(matrix[2][2]==true){arrArr3[2][2]=1}    
  
  return arrArr3 
}
  
}

module.exports = {
  minesweeper
};
