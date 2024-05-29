/**
 * operations is an array of arrays containing the operation, operand1, operand2, and expected result
 * example: ['divide', 1, 2, 3]
 */
 const operations = [
    
  // Basic Arithmetic: positive, negative, mix
  ['divide', 40, 10, 4.0],
  ['divide', 10, 40, 0.25],
  ['divide', -2, -1, 2.0],
  ['divide', -2, 1, -2.0],
  
  // Decimal Arithmetic: positive, negative, mix 
  ['divide', 2.5, 0.1, 25.0 ],
  ['divide', -2.1, -0.1, 21.0 ],
  ['divide', 2.1, -0.1, -21.0 ],
  
  // Zero Values
  ['divide', 2, 0, 0 ],
  ['divide', 0, 2, 0 ],

];

module.exports = operations;