let color = 'black'
let click = true;
function makeCanvas(size) {
    let canvas = document.querySelector('.canvas')
    let squares = canvas.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    canvas.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    canvas.style.gridTemplateRows = `repeat(${size}, 1fr)`
    
    let amount = size * size;
    for(let i = 0; i<amount; i++) {
        let square = document.createElement('div');
        square.addEventListener('mouseover', colorSquare);
        square.style.backgroundColor = 'white';
        canvas.insertAdjacentElement('beforeend', square);
    }
}

makeCanvas(32);

function changeSize(input) {
    if(input >= 2 && input <= 64) {
        makeCanvas(input);
    } else {
        alert('The value is too big');
    }
}

function colorSquare() {
    if (click) {
        if ((color === 'random')) {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        } else
        this.style.backgroundColor = color;
    }
    }

function changeColor(choice) {
    color = choice;
}

function resetCanvas() {
    let canvas = document.querySelector('.canvas')
    let squares = canvas.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor='white');
}

document.querySelector('.canvas').addEventListener('click', () => {
    click = !click;
})