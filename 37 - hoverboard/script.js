const colorPicker = document.getElementById('color-picker');
const container = document.getElementById('container');
const SQUARES = 500;

let colors = (sessionStorage.getItem('colors')) ? JSON.parse(sessionStorage.getItem('colors')) : ['#989d34', '#4599df', '#1269aa', '#cc6922', '#1198ff', '#3322aa'];

loadColors();

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    
    square.addEventListener('mouseout', () => {
        removeColor(square);
    });

    container.appendChild(square);
}

function setColor(element) {
    const color = getRandomColor();

    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
    createRandomColor();

    console.log(colors);

    return colors[Math.floor(Math.random() * colors.length)];
}

function createRandomColor() {
    let hex = '#';

    for (let i = 0; i < 6; i++) {
        let rando = Math.floor(Math.random() * 16);

        if (rando > 9) {
            switch(rando) {
                case 10: 
                    rando = 'a';
                    break;
                case 11:
                    rando = 'b';
                    break;
                case 12:
                    rando = 'c';
                    break;
                case 13:
                    rando = 'd';
                    break;
                case 14:
                    rando = 'e';
                    break;
                case 15:
                    rando = 'f';
                    break;
            }
        }

        hex += rando;
    }

    if (colors.indexOf('hex') === -1) {
        colors[colors.length] = hex;
        storeColors();
        loadColors();
    }
}

function storeColors() {
    sessionStorage.setItem('colors', JSON.stringify(colors));
}

function loadColors() {
    colors.forEach((color) => {
        let colorOption = document.createElement('option');

        colorOption.value = color;
        colorOption.innerHTML = color;

        colorPicker.appendChild(colorOption);
    });
}