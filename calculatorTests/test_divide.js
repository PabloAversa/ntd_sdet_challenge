const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);
const operations = require('../testData/operation_divide.js')

const docker_image = 'docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli';
let countPositives = 0;
let countNegatives = 0;
let countErrors = 0;
let status;

console.log('Starting tests..."DIVIDE"');

const runCalTests = async () => {
  
    for (const [operation, operand1, operand2, expected] of operations) {
      
      const command = `${docker_image} ${operation} ${operand1} ${operand2}`;
      
      try {
        const { stdout } = await execPromise(command);
  
        let output = parseFloat(stdout.replace('Result:', '').trim());
        
        if (output === expected) {
          countPositives++;
        } else {
          status = 'Fail';
          countNegatives++;
          console.log(`Test Failed Details--> ${operation} ${operand1} ${operand2} -> Expected: ${expected}, Actual: ${output}, Status: ${status}`);
        }
      } catch (error) {
        console.error(`Error executing command: ${command}`);
        console.error(`Error: ${error}`);
        countErrors++;
      }
    }
  
    console.log(`\nTest Summary:`);
    console.log(`Total Tests: ${operations.length}`);
    console.log(`Passed: ${countPositives}`);
    console.log(`Failed: ${countNegatives}`);
    console.log(`Errors: ${countErrors}`);
  };
  
  runCalTests();