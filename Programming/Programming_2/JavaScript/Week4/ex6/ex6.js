const width = 30;
const height = 50;
const gridDiv = document.getElementById("grid");
let model = [];

init();

function init() {
    createBoard();
    fillBoard();
}

function createBoard() {
    let grid = "";
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            grid += "<input type='checkbox'>";
        }
        grid += "</br>";
    }
    gridDiv.innerHTML = grid;
}

function fillBoard() {
    for (let y = 0; y < height; y++) {
        model[y] = [];
        for (let x = 0; x < width; x++) {
            model[y][x] = Math.random() < (1.0 / 3);
        }
    }
}