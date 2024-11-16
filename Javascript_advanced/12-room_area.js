const roomDimensions = {
    width: 50,
    length: 100,
    getArea: function () {
        return this.width * this.length;
    }
};

const boundGetArea = roomDimensions.getArea.bind(roomDimensions);

// Example usage:
console.log(boundGetArea()); // Output: 5000
