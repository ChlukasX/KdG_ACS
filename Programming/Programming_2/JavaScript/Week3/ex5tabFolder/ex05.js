const tablinks = document.querySelectorAll("#tablinks a");

init();


// hardcoded init
function init() {
    paris.style.display = "none";
    tokyo.style.display = "none";
    for (const link of tablinks) {
        link.addEventListener("click", tabClick)
    }
}


function tabClick(event) {
    // change the active tab
    let tabs = document.querySelectorAll("#tablinks a");
    for (const item of tabs) {
        item.className = "";
    }
    this.className = "active";
    let tabID = this.getAttribute("href");
    //tabID = tabID.slice(1); // dont need to slice like in teacher answer
    let tabContent = document.querySelectorAll("#tabcontents > section");
    for (const item of tabContent) {
        item.style.display = "none";
    }
    document.querySelector(tabID).style.display = "block";
    event.preventDefault(); // doesnt select text
}