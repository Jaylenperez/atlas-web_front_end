console.log("Start of the execution queue");

// Schedule the final message
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);

// Loop to log numbers 1 to 100
for (let i = 1; i <= 100; i++) {
  console.log(i);
}

// Log after the loop finishes
console.log("End of the loop printing");