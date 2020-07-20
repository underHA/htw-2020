const brain = require('brain.js');
const assert = require('assert');
const fs = require('fs')

var json = JSON.parse(fs.readFileSync('model.json', 'utf8'));
const net = new brain.NeuralNetwork();
net.fromJSON(json)

function integer(character) {
    if (character === '#') return 1;
    return 0;
}

function character(string) {
    return string.trim().split('').map(integer);
}

/**
 * Predict the letter A, even with a pixel off.
 */
const result = brain.likely(
  character(
    '######.' +
   '#.....#' +
   '#.....#' +
   '######.' +
   '#.....#' +
   '#.....#' +
   '######.'
  ),
  net
);


console.log(result); // 'a'