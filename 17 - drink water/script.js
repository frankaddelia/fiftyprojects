const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

updateBigCup();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    if (smallCups[idx].classList.contains('fill')
        && !smallCups[idx].nextElementSibling.classList.contains('fill')) {
        idx--;
    }

    smallCups.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('fill');
        } else {
            cup.classList.remove('fill');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const filledCups = document.querySelectorAll('.cup-small.fill').length;
    const totalCups = smallCups.length;

    if (filledCups === 0) {
        percentage.style.visibility = 'hidden';
        percentage.style.height = 0;
    } else {
        percentage.style.visibility = 'visible';
        percentage.style.height = `${filledCups / totalCups * 330}px`;
        percentage.innerText = `${filledCups / totalCups * 100}%`;
    }

    if (filledCups === totalCups) {
        remained.style.visibility = 'hidden';
        remained.style.height = 0;
    } else {
        remained.style.visibility = 'visible';
        liters.innerText = `${2 - (250 * filledCups / 1000)}L`;
    }
}