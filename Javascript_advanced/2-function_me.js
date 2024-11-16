// Define outer function
function welcomeMessage(fullName) {
    // Return a function (closure) that alerts the welcome message
    return function () {
        alert(`Welcome ${fullName}`);
    };
}

// Create variables by calling welcomeMessage with different names
const guillaume = welcomeMessage('Guillaume');
const alex = welcomeMessage('Alex')
const fred = welcomeMessage('Fred');

// Call closures
guillaume();
alex();
fred();