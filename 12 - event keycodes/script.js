const insert = document.getElementById('insert');
const history = document.getElementById('history');

window.addEventListener('keydown', (event) => {
    const ev = `
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>
    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    `;
    
    // added keylog history as a personal idea
    insert.innerHTML = ev;

    const row = `
        <div class="row">
            ${ev}
        </div>
    `;

    history.innerHTML = row + history.innerHTML;
})