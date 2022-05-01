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
    let i = email.indexOf('@')
    email = email[i + 1] != '.' ? email.slice(i + 1, email.length) : email.slice(i + 2, email.length)
  }
  return email
}

module.exports = {
  getEmailDomain
};
