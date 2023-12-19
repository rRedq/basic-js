const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let result = {}

  domains.map((i) => {
    let str = i.split('');
    let subStr = '';

    while (str.length) {

      let index = str.lastIndexOf('.');
      subStr += `.` + str.splice(index + 1, str.length - index).join('');
      str.splice(index, 1);

      if (result[subStr]) {
        result[subStr] += 1;
      }
      else {
        result[subStr] = 1;
      }
    }
  });

  return result;
}

module.exports = {
  getDNSStats
};
