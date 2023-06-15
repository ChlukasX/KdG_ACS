
let button = document.getElementById("btnHide");
let isPressed = false;
button.addEventListener("click", buttonFunction);
button.value = "press to hide the text";


function buttonFunction(){
    let text = document.getElementById("text");
    if (isPressed === false){
        text.style.display = "none";
        button.value = "press to unhide the text";
        isPressed = true;
    } else {
        text.style.display = "block";
        button.value = "press to hide the text";
        isPressed = false;
    }
}

