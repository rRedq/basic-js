const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeat = 'repeatTimes' in options ? options.repeatTimes : 1;
  const separator = 'separator' in options ? options.separator : '+';
  let subResult = '';
  let result = str;
  
  if('addition' in options) {
    const subString = options.addition;
    const subRepeat =  'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;
    const subSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';
    subResult = subString;

    for (let i = 1; i < subRepeat; i++) {
      subResult += subSeparator + subString;
    }
  }

  result += subResult;
  subResult === '' ? subResult = str : subResult = str + subResult;

  for (let i = 1; i < repeat; i++) {
    result += separator + subResult;
  }

  return result;
}

module.exports = {
  repeater
};
