const notShoe = document.querySelector('p');

document.addEventListener('keydown', function(event){
    event.preventDefault();
    const currentFontSize = parseInt(window.getComputedStyle(notShoe).fontSize)
    const fontSizeChange = 10;
    if (event.key === 'ArrowUp'){
        notShoe.style.fontSize = (currentFontSize + fontSizeChange) + 'px';
        console.log("balloon inflated");
    }
    else if (event.key === 'ArrowDown'){
        notShoe.style.fontSize = (currentFontSize - fontSizeChange) + 'px';
        console.log("balloon deflated");
    }
})