# Pre Request to run tests locally

* Have Docker installed
* Pull the image: docker pull public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest
**Note: The Calculator app should work OK in macOS (Apple Silicon and Intel) and Linux (x8664 and arm64). Windows is not supported.**

# Run Tests

## Run individual test files: inside calculatorTests folder 
* cd calculatorTests
* node test_add.js

## Run all test files
* At root folder
* node run_all.js
