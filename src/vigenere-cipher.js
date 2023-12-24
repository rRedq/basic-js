const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 
 
class VigenereCipheringMachine {
  constructor(isDirect = true) {
  this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  this.isDirect = isDirect;

  }
  encrypt(value, key) {
    if (typeof value !=='string' || typeof key !== 'string') {
        throw Error ('Incorrect arguments!');
    }
    value = value.toUpperCase();
    key = key.toUpperCase();
    let result = [];
    let iter = [];
    let index = 0;

    for (let i = 0; i < key.length; i++) {
        iter.push(this.alphabet.indexOf(key[i]));
    }

    while (iter.length < value.length) {
        iter = [...iter, ...iter];
    }
    for (let i = 0; i < value.length; i++) {
      if (this.alphabet.includes(value[i])) {
        const valOf = this.alphabet.indexOf(value[i]);

        if (valOf + iter[index] >= this.alphabet.length) {
          result.push(this.alphabet[valOf + iter[index] - this.alphabet.length]);
          index++;
        }
        else {
          result.push(this.alphabet[valOf + iter[index]]);
          index++;
        }
      }
      else {
        result.push(value[i]);
      }
    }
    if (this.isDirect) {
      return result.join('');
    }
    else {
      return result.reverse().join('')
    }
  }
  decrypt(value, key) {
    if (typeof value !=='string' || typeof key !== 'string') {
      throw Error ('Incorrect arguments!');
    }
    key = key.toUpperCase();
    let result = [];
    let iter = [];
    let index = 0;

    for (let i = 0; i < key.length; i++) {
      iter.push(this.alphabet.indexOf(key[i]));
    }

    while (iter.length < value.length) {
      iter = [...iter, ...iter];
    }

    for (let i = 0; i < value.length; i++) {
      if (this.alphabet.includes(value[i])) {
        const valOf = this.alphabet.indexOf(value[i]);

        if (valOf - iter[index] < 0) {
          result.push(this.alphabet[valOf - iter[index] + this.alphabet.length]);
          index++;
        }
        else {
          result.push(this.alphabet[valOf - iter[index]]);
          index++;
        }
      }
      else {
          result.push(value[i]);
      }
    }
    if (this.isDirect) {
      return result.join('');
    }
    else {
      return result.reverse().join('')
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
