const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
//throw new NotImplementedError('Not implemented');
function renameFiles(names) {
  let reName = [names[0]]
  let reName2 = [reName[0]]
  let a = []
  let b =[]
  if (names.length == 0){
    return (names)
  } else {
    for (let i = 1; i < names.length; i++){
      a.push(names.slice(0, i).filter(item => item === names[i]))
      if (a[i-1].length == 0) {
        reName.push(names[i])
      } else {
        reName.push(`${names[i]}(${a[i-1].length})`)
      }
    }
    for (let i = 1; i < reName.length; i++){
      b.push(reName.slice(0, i).filter(item => item === reName[i]))
      if (b[i-1].length == 0) {
        reName2.push(reName[i])
      } else {
        reName2.push(`${reName[i]}(${b[i-1].length})`)
      }
    }
    return (reName2)
  }
}

module.exports = {
  renameFiles
};
