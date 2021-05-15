const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
    'message one',
    'message two',
    'message three',
    'message four',
];

button.addEventListener('click', () => createNotification());

function createNotification(message = null) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
 
    toast.innerText = (message) ? message : getRandomMessage();

    toasts.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}