const list = document.getElementById('marineMammals');
const items = list.getElementsByTagName('li');
let lastClickedItem = null;

list.addEventListener('click', function (event) {
    const clickedItem = event.target;

    if (event.ctrlKey || event.metaKey) {
        // Toggle selection on clicked item
        clickedItem.classList.toggle('selected');
    } else {
        // Deselect all other items
        Array.from(items).forEach(item => {
            if (item !== clickedItem) {
                item.classList.remove('selected');
            }
        });

        // Select the clicked item
        clickedItem.classList.add('selected');
    }

    lastClickedItem = clickedItem;
});

list.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        // Deselect all items when the Esc key is pressed
        Array.from(items).forEach(item => {
            item.classList.remove('selected');
        });
        lastClickedItem = null;
    }
});

list.addEventListener('mousedown', function (event) {
    event.preventDefault();
});