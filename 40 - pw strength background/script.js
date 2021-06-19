const pw = document.querySelector('#password');
const bgImg = document.querySelector('#background');

pw.addEventListener('input', (e) => {
    const input = e.target.value;
    const length = input.length;
    const blurValue = 20 - length * 2

    background.style.filter = `blur(${blurValue}px)`;
});