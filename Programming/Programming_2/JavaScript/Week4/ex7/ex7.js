let divBox = document.getElementById('view');
let area = null;
divBox.addEventListener('click', toTexBox);
divBox.innerHTML = localStorage.getItem("setItem");

function toTexBox(event) {
    area = document.createElement('textarea');
    area.className = 'edit';
    area.value = view.innerHTML;

    area.onkeydown = function (event) {
        if (event.key == 'Enter') {
            this.blur();
        }
    };

    area.onblur = function () {
        toDiv();
    };
    divBox.replaceWith(area);
    area.focus();
    event.preventDefault();
}
function toDiv() {
    divBox.className = 'view';
    const txt = area.value;
    localStorage.setItem("setItem", txt);
    divBox.innerHTML = area.value;
    area.replaceWith(divBox);
}


// let view = document.getElementById('view');

// view.onclick = function () {
//     editStart();
// };

// function editStart() {
//     area = document.createElement('textarea');
//     area.className = 'edit';
//     area.value = view.innerHTML;

//     area.onkeydown = function (event) {
//         if (event.key == 'Enter') {
//             this.blur();
//         }
//     };

//     area.onblur = function () {
//         editEnd();
//     };

//     view.replaceWith(area);
//     area.focus();
// }

// function editEnd() {
//     view.innerHTML = area.value;
//     area.replaceWith(view);
// }