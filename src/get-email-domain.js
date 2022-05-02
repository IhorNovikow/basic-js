const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  //throw new NotImplementedError('Not implemented');
  while (email.indexOf('@') != -1) {
    let ind = email.indexOf('@')
    email = email[ind + 1] != '.' ? email.slice(ind + 1, email.length) : email.slice(ind + 2, email.length)
  }
  return (email)
}

module.exports = {
  getEmailDomain
};
