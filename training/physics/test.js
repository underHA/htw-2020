const brain = require('brain.js');
const fs = require('fs')

var json = JSON.parse(fs.readFileSync('model.json', 'utf8'));
const net = new brain.recurrent.LSTM();
net.fromJSON(json)

/**
 * Predict
 */
const result = net.run("A car must be driven a distance of 150km. During the first 1.5h the average speed was 70 kmh-1. Calculate the average speed for the remainder of the journey.");


console.log(result); // 'a'