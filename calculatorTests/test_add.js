//import { exec } from 'child_process';
const { exec } = require('child_process');


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

operations.forEach(([operation, operand1, operand2, expected]) => {
    const command = `docker run --rm public.ecr.aws/l4q9w4c5/loanpro-calculator-cli ${operation} ${operand1} ${operand2}`;
    
    exec(command,(error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${command}`);
            console.error(`Error: ${stderr}`);
            return;
        }
     
        let output = stdout.replace('Result:','').trim();
        let status;

        if (output == expected) status = 'Pass';
        else status = 'Fail';
        
        console.log(`Test ${operation} ${operand1} ${operand2} -> Expected: ${expected}, Actual: ${output}, Status: ${status}`);
    });
});
