const options = document.querySelector(".options");
const btn = document.createElement('button');
btn.textContent = "Clear"
options.appendChild(btn);
btn.addEventListener('click', function() {
    createGrid(enterSize());
})

const container = document.querySelector(".container");

const numBoxes = 256;
createGrid = function(number) {
    for (let i = 0; i < number; i++) {
        const div = document.createElement('div');
        div.classList.add('grid'); 
        container.appendChild(div);
        div.addEventListener('mouseover', function() {
            div.classList.add('hover');
        }) 
    }
}

enterSize = function() {
    do {
        let size = parseInt(prompt('Please enter in a value for the grid side length: ', 16));
    }
    while (size < 20 && size > 10);
    return size*size
}
