const e = document.getElementById("text");
const button = document.getElementById("button");

document.getElementById("form").addEventListener("submit", formSubmit);

function checkForm(number) {
    return /^[-+]?(\.?\d+|\d+\.\d*)?(E[-+]?\d+)?$/i.test(number);
}

function formSubmit(event){
    console.log(checkForm(e.value));
    event.preventDefault();
}

// // Test the valid values
// console.log(checkForm("1"));        // Output: true
// console.log(checkForm("-1"));       // Output: true
// console.log(checkForm("+15"));      // Output: true
// console.log(checkForm("1.55"));     // Output: true
// console.log(checkForm(".5"));       // Output: true
// console.log(checkForm("5."));       // Output: true
// console.log(checkForm("1.3e2"));    // Output: true
// console.log(checkForm("1E-4"));     // Output: true
// console.log(checkForm("1e+12"));    // Output: true

// console.log(" ");

// // Test the invalid values
// console.log(checkForm("1a"));       // Output: false
// console.log(checkForm("+-1"));      // Output: false
// console.log(checkForm("1.2.3"));    // Output: false
// console.log(checkForm("1+1"));      // Output: false
// console.log(checkForm("1e4.5"));    // Output: false
// console.log(checkForm(".5."));      // Output: false
// console.log(checkForm("1f5"));      // Output: false
// console.log(checkForm("."));        // Output: false