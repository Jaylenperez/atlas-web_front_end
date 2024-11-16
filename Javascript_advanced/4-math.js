// Function to divide the second number by the first number
function divideBy(firstNumber) {
    return function(secondNumber) {
        return secondNumber / firstNumber;
    };
}

// Function to add the first number to the second number
function addBy(firstNumber) {
    return function(secondNumber) {
        return firstNumber + secondNumber;
    };
}

// Creating closures
const addBy100 = addBy(100);   // Adds 100
const addBy1000 = addBy(1000); // Adds 1000
const divideBy10 = divideBy(10);   // Divides by 10
const divideBy100 = divideBy(100); // Divides by 100

// Test cases
console.log(addBy100(20));   // 120
console.log(divideBy10(20)); // 2
console.log(divideBy100(200)); // 2
console.log(addBy1000(20));  // 1020
