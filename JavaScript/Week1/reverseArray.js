
function reverseArray(array) {
    const result = [];
    for (let i = array.length - 1; i >= 0; i--) {
        result.push(array[i]);
    }
    return result;
}

function reverseArrayInPlace(array) {
    let middle = array.length / 2
    for (let i = 0; i < middle; i++) {
        let tmp = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = tmp;
    }
    return array;
}

console.log(reverseArray(["A", "B", "C"]))
console.log(reverseArrayInPlace(array = [1, 2, 3]))


// unit testing (not school requirement)
function testPerformance() {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Test reverseArray
    const startReverseArray = performance.now();
    reverseArray(inputArray);
    const endReverseArray = performance.now();
    const executionTimeReverseArray = endReverseArray - startReverseArray;

    // Test reverseArrayInPlace
    const startReverseArrayInPlace = performance.now();
    reverseArrayInPlace(inputArray);
    const endReverseArrayInPlace = performance.now();
    const executionTimeReverseArrayInPlace = endReverseArrayInPlace - startReverseArrayInPlace;

    console.log("Execution time for reverseArray:", executionTimeReverseArray, "milliseconds");
    console.log("Execution time for reverseArrayInPlace:", executionTimeReverseArrayInPlace, "milliseconds");

    if (executionTimeReverseArray < executionTimeReverseArrayInPlace) {
        console.log("reverseArray is faster.");
    } else if (executionTimeReverseArray > executionTimeReverseArrayInPlace) {
        console.log("reverseArrayInPlace is faster.");
    } else {
        console.log("Both functions have similar execution time.");
    }
}

testPerformance();