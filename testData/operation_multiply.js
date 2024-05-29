
/**
 * operations is an array of arrays containing the operation, operand1, operand2, and expected result
 * example: ['multiply', 1, 2, 3]
 */

const operations = [
  // Basic Arithmetic: positive, negative, mix
  ['multiply', 40, 10, 400.0],
  ['multiply', 10, 40, 400.0],
  ['multiply', -2, -1, 2.0],
  ['multiply', -2, 1, -2.0],

  // Decimal Arithmetic: positive, negative, mix 
  ['multiply', 2.1, 0.1, 0.21],
  ['multiply', -2.1, -0.1, 0.21],
  ['multiply', 2.1, -0.1, -0.21],

  // Zero Values
  ['multiply', 2, 0, 0.0],
  ['multiply', 0, -2, 0.0],
];

module.exports = operations;