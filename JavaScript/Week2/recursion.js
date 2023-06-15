function isEven(number) {
    if (number == 1) {
        return false;
    }
    else if (number == 0) {
        return true;
    }
    else if (number < 0) {
        return isEven(-number);
    }
    else {
        return isEven(number - 2);
    }
}

function isEvenModulo(number) {
    if (number % 2 === 0) {
        return true;
    }
    else if (number % 2 === 1) {
        return false;
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(-1));