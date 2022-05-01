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
  let rename = [names[0]]
  let rename2 = [rename[0]]
  let a = []
  let b =[]
  if (names.length == 0){
    return names
  } else {
    for (let i = 1; i < names.length; i++){
      a.push(names.slice(0, i).filter(item => item === names[i]))
      if (a[i-1].length == 0) {
        rename.push(names[i])
      } else {
        rename.push(`${names[i]}(${a[i-1].length})`)
      }
    }
    for (let i = 1; i < rename.length; i++){
      b.push(rename.slice(0, i).filter(item => item === rename[i]))
      if (b[i-1].length == 0) {
        rename2.push(rename[i])
      } else {
        rename2.push(`${rename[i]}(${b[i-1].length})`)
      }
    }
    return rename2
  }
}

module.exports = {
  renameFiles
};
