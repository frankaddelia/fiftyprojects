const boxContainer = document.querySelector('#boxes');
const boxes = document.querySelectorAll('.box');
const magicBtn = document.querySelector('.magic');
const offset = 125;

let x = 0;
let y = 0;

createBoxes();

magicBtn.addEventListener('click', () => {
    boxContainer.classList.toggle('big');
});

function createBoxes() {
    for(let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * offset}px ${-i * offset}px`;
            boxContainer.append(box);
        }
    }

    // boxes.forEach(box => {
    //     box.style.backgroundPosition = `-${offset * x}px -${offset * y}px`;
    //     y = (x + 1 === 4) ? y + 1 : y;
    //     x = (x + 1 < 4) ? x + 1 : 0;
    // });
}