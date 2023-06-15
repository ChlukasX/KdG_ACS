function isEven(i) {
    if (i == 0) {
        return true;
    } else if (i == 1) {
        return false
    } else if (i < 0) {
        return isEven(-i)
    } else {
        return isEven(i - 2)
    }
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??