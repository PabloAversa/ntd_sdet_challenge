//import { exec } from 'child_process';
const { exec } = require('child_process');


const operations = [
    
    // Basic Arithmetic: positive, negative, mix
    ['multiply', 40, 10, 400.0],
    ['multiply', 10, 40, 400.0],
    ['multiply', -2, -1, 2.0],
    ['multiply', -2, 1, -2.0],
    
    // Decimal Arithmetic: positive, negative, mix 
    ['multiply', 2.1, 0.1, 0.21 ], // 0.21000000000000002
    ['multiply', -2.1, -0.1, 0.21 ], // 0.21000000000000002
    ['multiply', 2.1, -0.1, -0.21 ], // -0.21000000000000002
    
    // Zero Values
    ['multiply', 2, 0, 0.0 ],
    ['multiply', 0, -2, 0.0 ],

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
