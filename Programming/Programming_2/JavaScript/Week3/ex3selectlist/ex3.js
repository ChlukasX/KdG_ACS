let list = document.getElementById("marineMammals");


list.addEventListener("click", selectItem)

function selectItem() {
    const allItems = list.querySelectorAll('li');
    if (event.ctrlKey) {
        if (event.target.tagName === "LI" && event.target.selected == false) {
            event.target.selected = true;
            event.target.classList.add(selected);
            console.log(event.target);
        } else {
            event.target.selected = false;
            event.target.style.background = "";
        }
    } else {
        if (event.target.tagName === "LI" && event.target.selected == false){
            event.allItems.classList.remove(selected);
            event.target.selected = true;
        } else {
            event.target.selected = false;
            event.target.classList.remove(selected);
        }
    }
}