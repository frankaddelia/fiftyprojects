const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const undoEl = document.getElementById('undo');

let paths = [];
let path = [];

let redo = [];

const ctx = canvas.getContext('2d');
let size = 10;
let isPressed = false;
let color = 'black';
let x, y;

let startX, startY;
let endX, endY;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;

    startX = e.offsetX;
    startY = e.offsetY;
});

canvas.addEventListener('mouseup', (e) => {
    isPressed = false;

    endX = e.offsetX;
    endY = e.offsetY;

    paths[paths.length] = {
        x: startX,
        y: startY,
        x2: endX,
        y2: endY,
        path: path
    };

    x = undefined; 
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX; 
        const y2 = e.offsetY;

        path[path.length] = {
            x: x,
            y: y,
            x2: x2,
            y2: y2
        };

        drawShape();

        x = x2;
        y = y2;
    }

});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.closePath();
    ctx.stroke();
}

function drawShape() {
    drawCircle(path[path.length - 1].x2, path[path.length - 1].y2);
    drawLine(path[path.length - 1].x, path[path.length - 1].y, path[path.length - 1].x2, path.y2);
}

function redrawShapes() {
    clearEl.click();

    for(let i = 0; i < paths.length; i++) {
        for (let j = 0; j < paths[i].path.length; j++) {
            drawCircle(paths[i].path[j].x2, paths[i].path[j].y2);
            drawLine(paths[i].path[j].x, paths[i].path[j].y, paths[i].path[j].x2, paths[i].path[j].y2);
        }
    }
}

function updateSizeOnScreen() {
    sizeEl.innerText = size;
}

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
});

increaseBtn.addEventListener('click', () =>  {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () =>  {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

clearEl.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

undoEl.addEventListener('click', () => {
    // redo[redo.length] = paths.pop();
    paths.pop();

    redrawShapes();
});