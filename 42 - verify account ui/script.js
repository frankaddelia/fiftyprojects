const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            codes[idx].value = '';

            setTimeout(() => {
                if (idx + 1 < codes.length) {
                    codes[idx + 1].focus();
                } else {
                    // prevent the user staying in the last box and typing other values
                    codes[idx].blur();
                }
            }, 10);
        } else if (e.key === 'Backspace') {
            setTimeout(() => {
                codes[idx - 1].focus();
            }, 10);
        }
    });
});