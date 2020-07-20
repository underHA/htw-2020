const brain = require('brain.js');
const fs = require('fs')

// create configuration for training
const config = {
  log: true,
  logPeriod: 50,
  layers: [10],
  hiddenLayers: 20,
  errorThresh: 0.02
};

/**
* Determine properties of a physics question
*/
const net = new brain.recurrent.LSTM();
net.train(
 [
   { input: "A car must be driven a distance of 120km in 2.5h. During the first 1.5h the average speed was 70 kmh-1. Calculate the average speed for the remainder of the journey.", output: "Uniform motion" },
   { input: "The initial velocity of a car moving on a straight road is 2.0 ms−1. It becomes 8.0 ms−1 after travelling for 2.0s under constant acceleration. Find the acceleration.", output: "Uniform motion"},
   { input: "A particle has an initial velocity of 12ms−1 and is brought to rest over a distance of 45m. Find the acceleration of the particle.", output: "Uniform motion"},
   { input: "A particle at the origin has an initial velocity of −6.0ms−1 and moves with an acceleration of 2.0 ms−2. Determine when its position will become 16m.", output: "Uniform motion"},
   { input: "A plane starting from rest takes 15.0s to take off after speeding over a distance of 450m on the runway with constant acceleration. Find the take-off velocity.", output: "Uniform motion"},
   { input: "Two balls are dropped from rest from the same height. One of the balls is dropped 1.00s after the other. Find the distance that separates the two balls 2.00s after the second ball is dropped.", output: "Uniform motion"},
   { input: "A stone is thrown vertically up from the edge of a cliff 35.0m from the sea. The initial velocity of the stone is 8.00ms−1.", output: "Uniform motion"},
   { input: "A ball rolls off a table with a horizontal speed of 2.0ms−1.The table is 1.3m high. Calculate how far from the table the ball will land.", output: "Projectile Motion"},
   { input: "Two particles are on the same vertical line.They are thrown horizontally with the same speed, 4.0ms−1, from heights of 4.0m and 8.0m.", output: "Projectile Motion"},
   { input: "Determine the maximum height reached by an object thrown with speed 24ms−1 at 40° to the horizontal.", output: "Projectile Motion"},
   { input: "A stone is thrown with a speed of 20.0ms−1 at an angle of 48° to the horizontal from the edge of a cliff 60.0m above the surface of the sea. Calculate the velocity with which the stone hits the sea.", output: "Projectile Motion"},
   { input: "A mass of 2.00kg rests on a rough horizontal table.The coefficient of static friction between the block and the table is 0.60.The block is attached to a hanging mass by a string that goes over a smooth pulley, as shown in the diagram. Determine the largest mass that can hang in this way without forcing the block to slide.", output: "Equilibrium"},
   { input: "A girl tries to lift a suitcase of weight 220N by pulling upwards on it with a force of 140N.The suitcase does not move. Calculate the reaction force from the floor on the suitcase.", output: "Equilibrium"},
   { input: "A block of mass 15.0kg rests on a horizontal table.A force of 50.0N is applied vertically downward on the block. Calculate the force that the block exerts on the table.", output: "Equilibrium"},
   { input: "A car of mass 1400 kg is on a muddy road. If the force from the engine pushing the car forward exceeds 600N, the wheels slip (i.e. they rotate without rolling). Estimate the car’s maximum acceleration on this road.", output: "Accelerated motion"},
   { input: "A mass of 3.0kg is acted upon by three forces of 4.0N, 6.0N and 9.0N and is in equilibrium. Convince yourself that these forces can indeed be in equilibrium.The 9.0N force is suddenly removed. Determine the acceleration of the mass.", output: "Accelerated motion"},
   { input: "A horizontal force of 24N pulls a body a distance of 5.0m along its direction. Calculate the work done by the force.", output: "Work, Energy, and Power"},
   { input: "A block slides along a rough table and is brought to rest after travelling a distance of 2.4m. A force of 3.2N opposes the motion. Calculate the work done by the opposing force.", output: "Work, Energy, and Power"},
   { input: "A block of mass 2.0kg and an initial speed of 5.4ms−1 slides on a rough horizontal surface and is eventually brought to rest after travelling a distance of 4.0m. Calculate the frictional force between the block and the surface.", output: "Work, Energy, and Power"},
   { input: "A spring of spring constant k=200Nm−1 is slowly extended from an extension of 3.0cm to an extension of 5.0cm. Calculate the work done by the extending force.", output: "Work, Energy, and Power"},
   { input: "The engine of a car is developing a power of 90kW when it is moving on a horizontal road at a constant speed of 100 km h−1. Estimate the total horizontal force opposing the motion of the car.", output: "Work, Energy, and Power"},
   { input: "The motor of an elevator develops power at a rate of 2500 W. Calculate the speed that a 1200 kg load is being raised at.", output: "Work, Energy, and Power"},
   { input: "The top speed of a car whose engine is delivering 250kW of power is 240kmh−1. Calculate the value of the resistance force on the car when it is travelling at its top speed on a level road.", output: "Work, Energy, and Power"},
   { input: "The momentum of a ball increased by 12.0Ns as a result of a force that acted on the ball for 2.00s. Find the average force on the ball.", output: "Momentum"},
   { input: "Two masses of 2.0kg and 4.0kg are held in place, compressing a spring between them.When they are released, the 2.0 kg moves away with a speed of 3.0ms−1.What was the energy stored in the spring?", output: "Momentum"},
   { input: "A rocket in space where gravity is negligible has a mass (including fuel) of 5000 kg. It is desired to give the rocket an average acceleration of 15.0ms−2 during the first second of firing the engine. The gases leave the rocket at a speed of 1500 m s−1 (relative to the rocket). Estimate how much fuel must be burnt in that second.", output: "Momentum"}

 ],
  config
);

const model = net.toJSON();
fs.writeFile('model.json', JSON.stringify(model), 'utf8', () => console.log('model has been written'));