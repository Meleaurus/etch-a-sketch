const container = document.querySelector("#container");
const btn = document.querySelector("#btn");

createGrid = () => {
    for (let i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square'); 
        container.appendChild(div);
    }
}
createGrid();

btn.addEventListener('click', function() {
    updateGrid();
})

updateGrid = () => {
    container.innerHTML = "";
    let size = parseInt(prompt('Please enter in a value for the grid side length: ', 16));
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
}

addEvent = function(square) {
    console.log('dabdab');
    square.addEventListener("mouseover", function(event) {
        event.target.classList.replace("square", "hover");
    });
}

const square = document.getElementsByTagName('div');
square.forEach(addEvent);



