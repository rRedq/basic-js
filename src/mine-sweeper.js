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
  const arr = matrix.map(index => index.map(i => 0));

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === true) {
        if (arr[i - 1]) {
          arr[i - 1][j] !== undefined ? arr[i - 1][j - 1] += 1 : false;
          arr[i - 1][j] !== undefined ? arr[i - 1][j] += 1 : false;
          arr[i - 1][j] !== undefined ? arr[i - 1][j + 1] += 1 : false;
        }
        if (arr[i]) {
          arr[i][j - 1] !== undefined ? arr[i][j - 1] += 1 : false;
          arr[i][j + 1] !== undefined ? arr[i][j + 1] += 1 : false;
        }
        if (arr[i + 1]) {
          arr[i + 1][j - 1] !== undefined ? arr[i + 1][j - 1] += 1 : false;
          arr[i + 1][j] !== undefined ? arr[i + 1][j] += 1 : false;
          arr[i + 1][j + 1] !== undefined ? arr[i + 1][j + 1] += 1 : false;
      }
      }
    }
  }
  return arr;
}

module.exports = {
  minesweeper
};
