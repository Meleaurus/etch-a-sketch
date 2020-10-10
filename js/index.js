const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");
const randomBtn = document.querySelector("#randomBtn");

addHover = (square) => {
    square.addEventListener("mouseover", function(event) {
        event.target.classList.replace("square", "hover");
    });
}

getSquare = () => {
    let square = document.getElementsByClassName('square');
    let squareArr = Array.from(square);
    squareArr.forEach(addHover);
}

randomColor = () => {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = "rgb(" + x + "," + y + "," + z + ")";
    return bgColor;
}

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square'); 
        container.appendChild(div);
    }
    getSquare();
}
createGrid();

randomBtn.addEventListener('click', function() {
    let square = document.getElementsByClassName('square');
    let squareArr = Array.from(square);
    squareArr.forEach(randomColor);
})

clearBtn.addEventListener('click', function() {
    updateGrid();
})

updateGrid = () => {
    container.innerHTML = "";
    let size = parseInt(prompt('Please enter in a value between 10 and 100: ', 16));
    if (size <= 100 && size >= 10) {
        for (let i = 0; i < size*size; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            container.appendChild(div);
        }
        container.style.setProperty(
            "grid-template-columns",
            `repeat(${size}, 1fr)`
        );
        container.style.setProperty(
            "grid-template-rows",
            `repeat(${size}, 1fr)`
        );
        getSquare();
    }
}





    



