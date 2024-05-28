# Pre Request to run tests locally

## 1 - Have Docker installed
## 2 - Pull the image: docker pull public.ecr.aws/l4q9w4c5/loanpro-calculator-cli:latest
*Note: The Calculator app should work OK in macOS (Apple Silicon and Intel) and Linux (x8664 and arm64). Windows is not supported.*

# Run Tests

## Run individual test files: inside calculatorTests folder 
* cd calculatorTests *
* node test_add.js *

## Run all test files
* cd calculatorTests *
* node run_all.js *
