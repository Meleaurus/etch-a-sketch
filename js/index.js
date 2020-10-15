const container = document.querySelector("#container");
const resizeBtn = document.querySelector("#resizeBtn");
const randomBtn = document.querySelector("#randomBtn");
const darkenBtn = document.querySelector('#darkenBtn')
const resetBtn = document.querySelector("#resetBtn");
let min = 0;

addHover = (square) => {
    square.addEventListener("mouseover", function(event) {
        event.target.classList.add("hover");
    });
}

addHoverRandom = (square) => {
    square.addEventListener("mouseover", function(event) {
        square.style.backgroundColor = randomColor();
    });
}

addHoverDarken = (square) => {
    square.addEventListener("mouseover", function(event) {
        square.style.backgroundColor = "black";
        /* square.style.opacity = String(percent); */
        square.style.opacity = String((Math.floor(Math.random() * (10 - (min*10) + 1) + (min*10))/10)); 
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
    let color = "rgb(" + x + "," + y + "," + z + ")";
    return color;
}

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square'); 
        container.appendChild(div);
    }
    container.style.setProperty(
        "grid-template-columns",
        `repeat(16, 1fr)`
    );
    container.style.setProperty(
        "grid-template-rows",
        `repeat(16, 1fr)`
    );
    getSquare();
}
createGrid();

resetBtn.addEventListener('click', function() {
    min = 0;
    container.innerHTML = "";
    createGrid();
})

randomBtn.addEventListener('click', function() {
    min = 0;
    squares = document.querySelectorAll(".square");
    squares.forEach(addHoverRandom);
})

darkenBtn.addEventListener('click', function() {
    if (min < 1) {
        min += 0.1;
    }
    squares = document.querySelectorAll(".square");
    squares.forEach(addHoverDarken);
})

resizeBtn.addEventListener('click', function() {
    min = 0;
    updateGrid();
})

updateGrid = () => {
    container.innerHTML = "";
    let size = parseInt(prompt('Please enter in a value between 10 and 100: ', 16));
    try {
       if(size == "") throw "empty";
       if(isNaN(size)) throw "not a number";
       size = Number(size);
       if(size < 10) throw "too low";
       if(size > 100) throw "too high";
    }
    catch(err) {
        alert(`Input is ${err}`);
    }
    finally {
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
        else {
            createGrid();
        }
    }
}





    



