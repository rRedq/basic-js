const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
    chain: [],
    getLength() {
        return this.chain.length;
    },
    addLink(value) {
        this.chain.push(value);
        return this;
    },
    removeLink(position) {
        if (typeof position === 'number' 
            && this.chain.length >= position
            && position > 0) {
                this.chain.splice(position -1, 1);
        }
        else {
            this.chain = [];
            throw Error ('You can\'t remove incorrect link!');
        }
        return this;
        
    },
    reverseChain() {
        this.chain.reverse();
        return this;
    },
    finishChain() {
        let chain = '';
        for (let i = 0; i < this.chain.length; i++) {
            this.chain[i] ='( ' + this.chain[i] + ' )';
        }
        for (let i = 0; i < this.chain.length - 1; i++) {
            this.chain[i] +='~~';
        }
        chain = this.chain.join('');
        this.chain = [];
        return chain;
    }
};

module.exports = {
  chainMaker
};
