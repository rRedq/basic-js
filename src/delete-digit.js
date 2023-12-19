const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
    let number = n.toString()

    for (let i = 0; i < number.length; i++) {
        let arr = number.split('');
        arr.splice(i, 1);
        arr.join('') > maxNumber ? maxNumber = arr.join('') : false;
    }
    return Number(maxNumber);
}

module.exports = {
  deleteDigit
};
