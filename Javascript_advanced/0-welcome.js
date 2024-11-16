// Welcome function creation
function welcome(firstName, lastName) {
    // Variable fullName combines firstName and lastName with space in between.
    // fullName is scoped to welcome function (lexical scoping), so it cannot be accessed outside this function.
    const fullName = firstName + " " + lastName;

    // function displayFullName - displays alert message Welcome + fullName + !
    function displayFullName() {
        alert("Welcome " + fullName + "!");
    }

    // At end of welcome func, call displayFullName to execute alert when welcome is invoked.
    displayFullName();
}