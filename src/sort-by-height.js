const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = arr.length;
  const newArr = [];

  for (let i = index; i > 0; i--) {
    if (arr[i - 1] !== -1) {
      newArr.unshift(Math.max(...arr));
      arr.splice(arr.indexOf(Math.max(...arr)), 1, '');
    }
    else {
      newArr.unshift(-1);
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
