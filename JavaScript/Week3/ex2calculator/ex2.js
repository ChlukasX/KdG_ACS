let currentSign;
let result;
let add = document.getElementById("btnAdd");
let subtract = document.getElementById("btnSubtract");
let multiply = document.getElementById("btnMultiply");
let divide = document.getElementById("btnDivide");

add.addEventListener("click", function () {
    getValue(1);
});

subtract.addEventListener("click", function () {
    getValue(2);
});

multiply.addEventListener("click", function () {
    getValue(3);
});

divide.addEventListener("click", function () {
    getValue(4);
});

function getValue(buttonNumber) {
    let number1 = document.getElementById("txtVal1").value;
    let number2 = document.getElementById("txtVal2").value;
    number1 = parseInt(number1);
    number2 = parseInt(number2);
    switch (buttonNumber) {
        case 1:
            currentSign = add.value;
            result = number1 + number2;
            break;
        case 2:
            currentSign = subtract.value;
            result = number1 - number2;
            break;
        case 3:
            currentSign = multiply.value;
            result = number1 * number2;
            break;
        case 4:
            currentSign = divide.value;
            result = number1 / number2;
            break;
        default:
            console.log("no button pressed");
    }
    let resultField = document.getElementById("result");
    resultField.textContent = result;
}