const _ = require('lodash');

function reverseText(text) {
  return _.reverse(text.split('')).join('');
}

module.exports = reverseText;