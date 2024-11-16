// Define variable globalVariable with value "Welcome".
// This variable will be accessible to all functions since it's declared in the global scope.
const globalVariable = "Welcome";

// This function alerts value of globalVariable, Defines variable course with value "Holberton" & contains nested function inner.
function outer() {
    alert(globalVariable); // Access global variable
    const course = "holberton"

    // Inside outer, define function inner that:
    // Alerts concatenated value of globalVariable and course
    // Defines variable exclamation with value "!"
    // Contains another nested function inception
    function inner() {
        alert(globalVariable + " " + course); // Access variables from outer and global scopes

        const exclamation = "!"

        // Inception
        function inception() {
            alert(globalVariable + " " + course + exclamation); // Access variables from inner, outer, and global scopes
        }

        inception(); // Call inception inside inner
    }

    inner(); // Call inner inside outer
}

outer(); // Call outer from the main code