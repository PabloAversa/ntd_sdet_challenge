/**
 * operations is an array of arrays containing the operation, operand1, operand2, and expected result
 * example: ['add', 1, 2, 3]
 */
 const operations = [
    
  // Basic Arithmetic: positive, negative, mix
  ['add', 40, 10, 50.0],
  ['add', 10, 40, 50.0],
  ['add', -2, -1, -3.0],
  ['add', -2, 1, -1.0],
  
  // Decimal Arithmetic: positive, negative, mix 
  ['add', 2.1, 0.1, 2.2 ],
  ['add', -2.1, -0.1, -2.2 ],
  ['add', 2.1, -0.1, 2.0 ],
  
  // Zero Values
  ['add', 2, 0, 2.0 ],

  // Large Numbers
  ['add', 999999999999, 1, 1.0E12],
  ['add', -999999999999, -1, -1.0E12],

  // Max and Min Values
  ['add', Number.MAX_SAFE_INTEGER, 1, Number.MAX_SAFE_INTEGER + 1],
  ['add', Number.MIN_SAFE_INTEGER, -1, Number.MIN_SAFE_INTEGER - 1],
];

module.exports = operations;