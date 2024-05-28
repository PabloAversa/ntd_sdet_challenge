//import { exec } from 'child_process';
const { exec } = require('child_process');


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
