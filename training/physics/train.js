const brain = require('brain.js');
const fs = require('fs')

// create configuration for training
const config = {
  iterations: 1500,
  log: true,
  logPeriod: 50,
  layers: [10],
};

/**
* Determine properties of a physics question
*/
const net = new brain.recurrent.LSTM();
net.train(
 [
   { input: "A car must be driven a distance of 120km in 2.5h. During the first 1.5h the average speed was 70 kmh-1. Calculate the average speed for the remainder of the journey.", output: ['120km', '2.5h', '1.5h', '70 kmh-1'] },
   { input: "The initial velocity of a car moving on a straight road is 2.0 ms−1. It becomes 8.0 ms−1 after travelling for 2.0s under constant acceleration. Find the acceleration.", output: ["2.0 ms-1", "8.0 ms-1", "2.0s", "constant acceleration"]},
   { input: "A particle has an initial velocity of 12ms−1 and is brought to rest over a distance of 45m. Find the acceleration of the particle.", output: ["12ms-1", "45m", "rest"]},
   { input: "A particle at the origin has an initial velocity of −6.0ms−1 and moves with an acceleration of 2.0 ms−2. Determine when its position will become 16m.", output: ["-6.0ms-1", "2.0 ms-2", "16m"]},
   { input: "A plane starting from rest takes 15.0s to take off after speeding over a distance of 450m on the runway with constant acceleration. Find the take-off velocity.", output: ["rest", "15.0s", "450m", "constant acceleration"]},
   { input: "Two balls are dropped from rest from the same height. One of the balls is dropped 1.00s after the other. Find the distance that separates the two balls 2.00s after the second ball is dropped.", output: ["rest", "1.00s", "2.00s"]},
   { input: "A stone is thrown vertically up from the edge of a cliff 35.0m from the sea. The initial velocity of the stone is 8.00ms−1.", output: ["35.0m", "8.00ms-1"]}
 ],
  config
);

const model = net.toJSON();
fs.writeFile('model.json', JSON.stringify(model), 'utf8', () => console.log('model has been written'));