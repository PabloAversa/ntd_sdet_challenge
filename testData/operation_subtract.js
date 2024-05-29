/**
 * operations is an array of arrays containing the operation, operand1, operand2, and expected result
 * example: ['subtract', 1, 2, 3]
 */
 const operations = [
    
  // Basic Arithmetic: positive, negative, mix
  ['subtract', 40, 10, 30.0],
  ['subtract', 10, 40, -30.0],
  ['subtract', -2, -1, -1.0],
  ['subtract', -2, 1, -3.0],
  
  // Decimal Arithmetic: positive, negative, mix 
  ['subtract', 2.1, 0.1, 2.0 ],
  ['subtract', -2.1, -0.1, -2.0 ],
  ['subtract', 2.1, -0.1, 2.2 ],
  
  // Zero Values
  ['subtract', 2, 0, 2.0 ],
  ['subtract', 0, 2, -2.0 ],

  // Large Numbers
  ['subtract', 999999999999, 1, 9.99999999998E11],
  ['subtract', -999999999999, -1, -9.99999999998E11],

  // Max and Min Values
  ['subtract', Number.MAX_SAFE_INTEGER, 1, Number.MAX_SAFE_INTEGER - 1],
  ['subtract', Number.MIN_SAFE_INTEGER, -1, Number.MIN_SAFE_INTEGER + 1]
];

module.exports = operations;