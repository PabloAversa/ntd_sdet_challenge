const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const scriptsDir = path.join(__dirname, 'calculatorTests');

// Read the directory 'calculatorTests' and get all files inside it
fs.readdir(scriptsDir, (err, files) => {
    if (err) {
        console.error(`Error reading directory: ${err}`);
        return;
    }

    // Filter JavaScript files
    const jsFiles = files.filter(file => file.endsWith('.js'));

    jsFiles.forEach(file => {
        const filePath = path.join(scriptsDir, file);

        // Execute each file
        exec(`node ${filePath}`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing file ${file}: ${error}`);
                return;
            }

            if (stderr) {
                console.error(`Error output from file ${file}: ${stderr}`);
                return;
            }

            console.log(`Output from file ${file}:\n${stdout}`);
        });
    });
});