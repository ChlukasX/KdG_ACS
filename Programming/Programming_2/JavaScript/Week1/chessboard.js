let width = prompt("Choose the width: ", 0);
let height = prompt("Choose the height: ", 0); 

for (let y = 0; y < height; y++) {
    let row = '';
    for (let x = 0; x < width; x++) {
        if ((x + y ) % 2 === 0) {
            row += ' ';
        }
        else {
            row += '#';
        }
    }
    document.getElementById("Chessboard").innerText += `${row} \n`;
    // console.log(row);
}
console.log("Chessboard updated");