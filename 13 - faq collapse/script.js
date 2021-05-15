const faqToggle = document.querySelectorAll('.faq-toggle');

faqToggle.forEach((toggle, idx) => {
    // const title = toggle.parentNode.querySelector('.faq-title');
    // const text = toggle.parentNode.querySelector('.faq-text');

    // loadJoke(title, text);

    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});


/**
 * extra credit personal feature: load the jokes from https://icanhazdadjoke.com 
 * instead of hard coding them
 */

async function loadJoke(title, text) {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    };

    const response = await fetch('https://icanhazdadjoke.com', config);
    const data = await response.json();

    console.log(data);

    // this doesn't work since not all jokes and punchlines are separated by a question mark
    let qa = data.joke.split('?');

    title.innerText = qa[0];
    text.innerText = qa[1];
}