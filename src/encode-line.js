const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = '';
  let count = 0;
  let iter = 0;
  const arr = str.split('');


  for (i = 0; i < str.length; i++) {
    if (arr[i] === arr[iter]) {
      count += 1;
    }
    if (arr[i] !== arr[iter]) {
      count === 1 ? newStr += arr[i - 1]: newStr += count + arr[i - 1];
      iter += count;
      count = 0;
      i--;
    }
    if (i === str.length - 1) {
      count === 1 ? newStr += arr[i]: newStr += count + arr[i - 1];
    }
  }
  return newStr;
}

module.exports = {
  encodeLine
};
