function createClassRoom(numbersOfStudents) {
    // Define the studentSeat function inside createClassRoom
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    // Initialize the students array
    const students = [];

    // Loop through and create closures for each student
    for (let i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1)); // Add closures for seats (1-indexed)
    }

    // Return the array of closures
    return students;
}

// Create a classRoom with 10 students
const classRoom = createClassRoom(10);

// Test the output
console.log(classRoom[0]()); // Should return 1
console.log(classRoom[3]()); // Should return 4
console.log(classRoom[9]()); // Should return 10
